import React from "react";
import SurveyList from '../SurveyList';


import 'localStyles';

export default {
  title: "Misc/Survey Lists"
};


const avatarList = [
  {
    "avatarId": "default",
    "url": "/avatars/Unknown_schwarz.png"
  },
  {
    "avatarId": "alpaca",
    "url": "/avatars/Alpaka_schwarz.png"
  },
  {
    "avatarId": "delfin",
    "url": "/avatars/Delfin_schwarz.png"
  },
  {
    "avatarId": "elefant",
    "url": "/avatars/Elefant_schwarz.png"
  },
  {
    "avatarId": "eule",
    "url": "/avatars/Eule_schwarz.png"
  },
  {
    "avatarId": "flamingo",
    "url": "/avatars/Flamingo_schwarz.png"
  },
  {
    "avatarId": "fuchs",
    "url": "/avatars/Fuchs_schwarz.png"
  },
  {
    "avatarId": "geko",
    "url": "/avatars/Geko_schwarz.png"
  },
  {
    "avatarId": "panda",
    "url": "/avatars/Panda_schwarz.png"
  },
  {
    "avatarId": "pinguin",
    "url": "/avatars/Pinguin_schwarz.png"
  },
  {
    "avatarId": "spinne",
    "url": "/avatars/Spinne_schwarz.png"
  },
  {
    "avatarId": "stier",
    "url": "/avatars/Stier_schwarz.png"
  }
]

export const WithStudyNames = () =>
  <SurveyList
    className={undefined}
    texts={{
      requiredSurveys: {
        title: 'Required Surveys',
        info: 'Info box for required surveys',
        successMsg: 'All surveys has been answered.',
      },
      optionalSurveys: {
        title: 'Optional Surveys',
        info: 'Info box for optional surveys',
        hideBtn: 'Hide Optional Surveys',
        showBtn: 'Show Optional Surveys',
      }
    }}
    requiredSurveys={[
      {
        studyName: [{ code: 'en', parts: [{ str: 'Study Name' }] }],
        surveyKey: 'surveyKey',
        studyKey: 'studyKey',
        category: 'prio',
        validUntil: undefined,
        profiles: [{
          id: 'test',
          avatarId: 'default',
          consentConfirmedAt: 1,
          createdAt: 1,
          mainProfile: true,
          alias: 'Test Profile'
        }],
        surveyInfos: {
          surveyKey: 'surveyKey',
          studyKey: 'studyKey',
          name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
          description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
          typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
        },
      },
      {
        studyName: [{ code: 'en', parts: [{ str: 'Study Name' }] }],
        surveyKey: 'surveyKeyImmediate',
        studyKey: 'studyKey',
        category: 'immediate',
        validUntil: undefined,
        profiles: [{
          id: 'test',
          avatarId: 'default',
          consentConfirmedAt: 1,
          createdAt: 1,
          mainProfile: true,
          alias: 'Test Profile'
        }],
        surveyInfos: {
          surveyKey: 'surveyKeyImmediate',
          studyKey: 'studyKey',
          name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
          description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
          typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
        },
      },
      {
        studyName: [{ code: 'en', parts: [{ str: 'Study Name' }] }],
        surveyKey: 'surveyKey2',
        studyKey: 'studyKey',
        category: 'normal',
        validUntil: undefined,
        profiles: [{
          id: 'test',
          avatarId: 'default',
          consentConfirmedAt: 1,
          createdAt: 1,
          mainProfile: true,
          alias: 'Test Profile'
        }],
        surveyInfos: {
          surveyKey: 'surveyKey',
          studyKey: 'studyKey',
          name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
          description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
          typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
        },
      }
    ]} // Array<SurveyCardProps>;
    optionalSurveys={[
      {
        studyName: [{ code: 'en', parts: [{ str: 'Study Name' }] }],
        surveyKey: 'surveyKey2',
        studyKey: 'studyKey',
        category: 'optional',
        validUntil: undefined,
        profiles: [{
          id: 'test',
          avatarId: 'default',
          consentConfirmedAt: 1,
          createdAt: 1,
          mainProfile: true,
          alias: 'Test Profile'
        }],
        surveyInfos: {
          surveyKey: 'surveyKey',
          studyKey: 'studyKey',
          name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
          description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
          typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
        },
      }
    ]}
    selectedLanguage="en"
    avatars={avatarList}
    openSurvey={(studyK, surveyK, pID) => { }}
  />

export const WithoutStudyNames = () => <SurveyList
  className={undefined}
  texts={{
    requiredSurveys: {
      title: 'Required Surveys',
      info: '',
      successMsg: 'All surveys has been answered.',
    },
    optionalSurveys: {
      title: 'Optional Surveys',
      info: 'Info box for optional surveys',
      hideBtn: 'Hide Optional Surveys',
      showBtn: 'Show Optional Surveys',
    }
  }}
  requiredSurveys={[
    {
      surveyKey: 'surveyKey',
      studyKey: 'studyKey',
      category: 'prio',
      validUntil: undefined,
      profiles: [{
        id: 'test',
        avatarId: 'default',
        consentConfirmedAt: 1,
        createdAt: 1,
        mainProfile: true,
        alias: 'Test Profile'
      }],
      surveyInfos: {
        surveyKey: 'surveyKey',
        studyKey: 'studyKey',
        name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
        description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
        typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
      },
    },
    {
      surveyKey: 'surveyKey2',
      studyKey: 'studyKey',
      category: 'normal',
      validUntil: undefined,
      profiles: [{
        id: 'test',
        avatarId: 'default',
        consentConfirmedAt: 1,
        createdAt: 1,
        mainProfile: true,
        alias: 'Test Profile'
      }],
      surveyInfos: {
        surveyKey: 'surveyKey',
        studyKey: 'studyKey',
        name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
        description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
        typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
      },
    }
  ]}
  optionalSurveys={[
    {
      surveyKey: 'surveyKey2',
      studyKey: 'studyKey',
      category: 'optional',
      validUntil: undefined,
      profiles: [{
        id: 'test',
        avatarId: 'default',
        consentConfirmedAt: 1,
        createdAt: 1,
        mainProfile: true,
        alias: 'Test Profile'
      }],
      surveyInfos: {
        surveyKey: 'surveyKey',
        studyKey: 'studyKey',
        name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
        description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
        typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
      },
    }
  ]}
  selectedLanguage="en"
  avatars={avatarList}
  openSurvey={(studyK, surveyK, pID) => { }}
/>

export const NoRequiredSurveys = () => <SurveyList
  className={undefined}
  texts={{
    requiredSurveys: {
      title: 'Required Surveys',
      info: 'Info box for required surveys',
      successMsg: 'All surveys has been answered.',
    },
    optionalSurveys: {
      title: 'Optional Surveys',
      info: 'Info box for optional surveys',
      hideBtn: 'Hide Optional Surveys',
      showBtn: 'Show Optional Surveys',
    }
  }}
  requiredSurveys={[
  ]} // Array<SurveyCardProps>;
  optionalSurveys={[
    {
      surveyKey: 'surveyKey2',
      studyKey: 'studyKey',
      category: 'optional',
      validUntil: undefined,
      profiles: [{
        id: 'test',
        avatarId: 'default',
        consentConfirmedAt: 1,
        createdAt: 1,
        mainProfile: true,
        alias: 'Test Profile'
      }],
      surveyInfos: {
        surveyKey: 'surveyKey',
        studyKey: 'studyKey',
        name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
        description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
        typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
      },
    }
  ]}
  selectedLanguage="en"
  avatars={avatarList}
  openSurvey={(studyK, surveyK, pID) => { }}
/>

export const NoOptionalSurveys = () => <SurveyList
  className={undefined}
  texts={{
    requiredSurveys: {
      title: 'Required Surveys',
      info: 'Info box for required surveys',
      successMsg: 'All surveys has been answered.',
    },
    optionalSurveys: {
      title: 'Optional Surveys',
      info: 'Info box for optional surveys',
      hideBtn: 'Hide Optional Surveys',
      showBtn: 'Show Optional Surveys',
    }
  }}
  requiredSurveys={[
    {
      surveyKey: 'surveyKey',
      studyKey: 'studyKey',
      category: 'prio',
      validUntil: undefined,
      profiles: [{
        id: 'test',
        avatarId: 'default',
        consentConfirmedAt: 1,
        createdAt: 1,
        mainProfile: true,
        alias: 'Test Profile'
      }],
      surveyInfos: {
        surveyKey: 'surveyKey',
        studyKey: 'studyKey',
        name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
        description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
        typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
      },
    },
    {
      surveyKey: 'surveyKey2',
      studyKey: 'studyKey',
      category: 'normal',
      validUntil: undefined,
      profiles: [{
        id: 'test',
        avatarId: 'default',
        consentConfirmedAt: 1,
        createdAt: 1,
        mainProfile: true,
        alias: 'Test Profile'
      }],
      surveyInfos: {
        surveyKey: 'surveyKey',
        studyKey: 'studyKey',
        name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
        description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
        typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
      },
    }
  ]}
  optionalSurveys={[]}
  selectedLanguage="en"
  avatars={avatarList}
  openSurvey={(studyK, surveyK, pID) => { }}
/>

