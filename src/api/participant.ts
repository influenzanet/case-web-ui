import axios, { AxiosInstance } from 'axios';
import { AutoTokenValidationResponse, LoginMsg, LoginResponse, SignupMsg, TokenResponse } from "./types/authAPI";
import { SurveyReferenceReq, SurveyAndContextMsg, SurveyResponseReq, AssignedSurveys, Studies, SurveyInfos, StudiesForUser } from './types/studyAPI';
import { User, Profile, ContactPreferences, ContactInfo } from './types/user';
import { PasswordResetInfos } from './types/authAPI';
import { ServiceStatus } from './types/general';

const apiURLs = {
  renewToken: '/v1/auth/renew-token',
  signupWithEmail: '/v1/auth/signup-with-email',
  loginWithEmail: '/v1/auth/login-with-email',
  resendVerificationCode: '/v1/auth/resend-verification-code',
  autoValidateToken: '/v1/auth/get-verification-code-with-token',
}

class APIDef {
  authInstance: AxiosInstance;
  unauthInstance: AxiosInstance;

  private store: any;
  private setStoreApiAction: any;
  private resetStoreAction: any;

  constructor() {
    this.authInstance = axios.create({
      baseURL: ''
    });

    this.unauthInstance = axios.create({
      baseURL: ''
    });
  }

  init(baseURL: string, store: any, storeApiAction: any, resetStoreAction: any) {
    this.unauthInstance.defaults.baseURL = baseURL;
    this.authInstance.defaults.baseURL = baseURL;

    this.store = store;
    this.setStoreApiAction = storeApiAction;
    this.resetStoreAction = resetStoreAction;

    this.authInstance.interceptors.request.use(
      async (config) => {
        if (apiURLs.renewToken === config.url) {
          return config;
        }
        try {
          const newAccessToken = await this.renewTokenIfNecessary();
          if (newAccessToken && newAccessToken.length) {
            config.headers.Authorization = "Bearer " + newAccessToken;
          }
        } catch (e) {
          this.resetAuth();
          if (e.response) {
            console.error(e.response);
          } else {
            console.error(e);
          }
        }
        return config;
      },
      (error) => {
        this.resetAuth();
        console.error(error);
        return Promise.reject(error);
      }
    );
  }

  signupWithEmailRequest = (creds: SignupMsg, recaptchaToken?: string) => this.unauthInstance.post<TokenResponse>(apiURLs.signupWithEmail, creds, recaptchaToken ? {
    headers: {
      'Recaptcha-Token': recaptchaToken
    }
  } : undefined);

  loginWithEmailRequest = (creds: LoginMsg) => this.unauthInstance.post<LoginResponse>(apiURLs.loginWithEmail, creds);
  resend2FAVerificationCodeRequest = (creds: LoginMsg) => this.unauthInstance.post(apiURLs.resendVerificationCode, creds);
  autoValidateTemporaryTokenReq = (token: string, accessToken: string) => this.unauthInstance.post<AutoTokenValidationResponse>(apiURLs.autoValidateToken, { tempToken: token, accessToken });

  // Renew Token:
  renewToken = async (): Promise<string> => {
    const refreshToken = this.store.getState().api.refreshToken;
    if (!refreshToken || refreshToken.length <= 0) {
      throw new Error('no valid tokens');
    }

    const response = await this.renewTokenReq(refreshToken);
    this.store.dispatch(this.setStoreApiAction({
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
      expiresAt: new Date().getTime() + response.data.expiresIn * 60 * 1000,
    }));
    this.setDefaultAccessTokenHeader(response.data.accessToken);
    return response.data.accessToken;
  }

  setDefaultAccessTokenHeader = (token: string) => {
    this.authInstance.defaults.headers.Authorization = "Bearer " + token;
  }

  resetAuth = () => {
    this.resetStoreAction();
    this.setDefaultAccessTokenHeader('');
  }

  renewTokenIfNecessary = async (): Promise<string | undefined> => {
    const expiresAt = this.store.getState().api.expiresAt;

    if (expiresAt < new Date().getTime() + 1000) {
      const accessToken = await this.renewToken();
      return accessToken;
    }
    return;
  }

  renewTokenReq = (refreshToken: string) => this.authInstance.post<TokenResponse>(apiURLs.renewToken, { refreshToken: refreshToken });

  // Study API
  getStudiesForUserReq = () => this.authInstance.get<StudiesForUser>('/v1/studies/for-user-profiles');
  getAllAvailableStudiesReq = () => this.authInstance.get<Studies>('/v1/studies/active');
  getSurveyInfosForStudyReq = (studyKey: string) => this.authInstance.get<SurveyInfos>(`/v1/study/${studyKey}/survey-infos`);

  // Study flow
  enterStudyReq = (studyKey: string, profileId: string) => this.authInstance.post<AssignedSurveys>(`/v1/study/${studyKey}/enter`, { studyKey, profileId });
  leaveStudyRequest = (studyKey: string, profileId: string) => this.authInstance.post<AssignedSurveys>(`/v1/study/${studyKey}/leave`, { studyKey, profileId });
  getAllAssignedSurveysReq = () => this.authInstance.get<AssignedSurveys>('/v1/studies/all-assigned-surveys');
  postponeSurveyReq = (studyKey: string, surveyKey: string, delay: number, profileId: string) => this.authInstance.post<AssignedSurveys>(`/v1/study/${studyKey}/postpone-survey`, { surveyKey, delay, profileId });
  getAssignedSurveyRequest = (payload: SurveyReferenceReq) => this.authInstance.get<SurveyAndContextMsg>(`/v1/study/${payload.studyKey}/survey/${payload.surveyKey}?pid=${payload.profileId}`);
  submitSurveyResponseRequest = (payload: SurveyResponseReq) => this.authInstance.post(`/v1/study/${payload.studyKey}/submit-response`, payload);

  // Password Reset API
  initiatePasswordResetReq = (instanceId: string, accountId: string) => this.unauthInstance.post<ServiceStatus>('/v1/user/password-reset/initiate', { instanceId, accountId });
  getInfosForPasswordResetReq = (token: string) => this.unauthInstance.post<PasswordResetInfos>('/v1/user/password-reset/get-infos', { token });
  resetPasswordReq = (token: string, newPassword: string) => this.unauthInstance.post<ServiceStatus>('/v1/user/password-reset/reset-with', { token, newPassword });

  // User management API
  getUserReq = () => this.authInstance.get<User>('/v1/user');
  changePasswordReq = (oldPassword: string, newPassword: string) => this.authInstance.post<ServiceStatus>('/v1/user/change-password', { oldPassword, newPassword });
  changeAccountEmailReq = (newEmail: string, keepOldEmail: boolean, password: string) => this.authInstance.post<User>('/v1/user/change-account-email', { newEmail, keepOldEmail, password });
  setPreferredLanguageReq = (languageCode: string) => this.authInstance.post<User>('/v1/user/set-language', { languageCode });
  // Profiles:
  saveProfileReq = (profile: Profile) => this.authInstance.post<User>('/v1/user/profile/save', { profile });
  removeProfileReq = (profileId: string) => this.authInstance.post<User>('/v1/user/profile/remove', { profile: { id: profileId } });
  // Contact settings:
  resendVerificationEmailReq = (address: string) => this.authInstance.post<ServiceStatus>('/v1/user/resend-verification-message', { type: 'email', address: address });
  verifyContactReq = (token: string) => this.unauthInstance.post<User>('/v1/user/contact-verification', { token });
  unsubscribeNewsletterReq = (token: string) => this.unauthInstance.get<ServiceStatus>('/v1/user/unsubscribe-newsletter', { params: { token } });
  updateContactPreferencesReq = (contactPrefs: ContactPreferences) => this.authInstance.post<User>('/v1/user/contact-preferences', { contactPreferences: contactPrefs });
  addEmailReq = (contactInfo: ContactInfo) => this.authInstance.post<User>('/v1/user/contact/add-email', { contactInfo });
  removeEmailReq = (contactInfoID: string) => this.authInstance.post<User>('/v1/user/contact/remove-email', { contactInfo: { id: contactInfoID } });
  revokeAllRefreshTokensReq = () => this.authInstance.post<ServiceStatus>('/v1/user/revoke-refresh-tokens', {});
  deleteAccountReq = (userId: string) => this.authInstance.post<ServiceStatus>('/v1/user/delete', { userId });
}

export const ParticipantAPI = new APIDef();
