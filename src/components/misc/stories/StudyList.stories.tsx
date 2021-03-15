import React from "react";
import StudyList from '../StudyList';


import 'localStyles';

export default {
  title: "Misc/Study Lists"
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

export const StudyPage = () =>
  <StudyList
    className={undefined}
    avatars={avatarList}
    selectedLanguage="en"
    texts={{
      title: "Available Studies",
      infoParagraph: "Ultricies arcu turpis purus sed risus, cursus nunc nunc. Ut eget facilisi senectus velit egestas convallis vitae viverra.",
      infoAlert: undefined,
      cardOpenAction: "Open",
      cardNotJoined: "Not Joined",
    }}
    studyCards={[
      {
        studyName: [{ code: 'en', parts: [{ str: 'Study 1' }] }],
        studyDescription: [{ code: 'en', parts: [{ str: '*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo? Inventore modi perspiciatis esse tenetur consequuntur cum, nesciunt, accusamus accusantium quis harum laboriosam alias officiis quibusdam in voluptatibus repudiandae provident.*' }] }],
        studyKey: 'studyKey',
        profiles: [{
          id: 'test',
          avatarId: 'default',
          alias: 'Test Profile',
          consentConfirmedAt: 1, createdAt: 1, mainProfile: true
        },
        {
          id: 'test2',
          avatarId: 'panda',
          alias: 'Test Profile 2',
          consentConfirmedAt: 1, createdAt: 1, mainProfile: true
        }],
      },
      {
        studyName: [{ code: 'en', parts: [{ str: 'Study 2' }] }],
        studyDescription: [{ code: 'en', parts: [{ str: '*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo? Inventore modi perspiciatis esse tenetur consequuntur cum, nesciunt, accusamus accusantium quis harum laboriosam alias officiis quibusdam in voluptatibus repudiandae provident.*' }] }],
        studyKey: 'studyKey2',
        profiles: [{
          id: 'test',
          avatarId: 'spinne',
          alias: 'Test Profile',
          consentConfirmedAt: 1, createdAt: 1, mainProfile: true
        }],
      },
      {
        studyName: [{ code: 'en', parts: [{ str: 'Study 3' }] }],
        studyDescription: [{ code: 'en', parts: [{ str: '*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo? Inventore modi perspiciatis esse tenetur consequuntur cum, nesciunt, accusamus accusantium quis harum laboriosam alias officiis quibusdam in voluptatibus repudiandae provident.*' }] }],
        studyKey: 'studyKey3',
        profiles: [],
      },
    ]}
    openStudy={(studyKey) => console.log(studyKey)}
  />

export const OnSurveyPage = () =>
  <StudyList
    className={undefined}
    avatars={avatarList}
    selectedLanguage="en"
    texts={{
      title: "No Surveys Available",
      infoParagraph: undefined,
      infoAlert: "Your surveys would be here, but you are not part of any studies. Join one of the studies below to start receiving surveys!",
      cardOpenAction: "Open",
      cardNotJoined: "Not Joined",
    }}
    studyCards={[
      {
        studyName: [{ code: 'en', parts: [{ str: 'Study 1' }] }],
        studyDescription: [{ code: 'en', parts: [{ str: '*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo? Inventore modi perspiciatis esse tenetur consequuntur cum, nesciunt, accusamus accusantium quis harum laboriosam alias officiis quibusdam in voluptatibus repudiandae provident.*' }] }],
        studyKey: 'studyKey',
        profiles: [],
      },
      {
        studyName: [{ code: 'en', parts: [{ str: 'Study 2' }] }],
        studyDescription: [{ code: 'en', parts: [{ str: '*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo? Inventore modi perspiciatis esse tenetur consequuntur cum, nesciunt, accusamus accusantium quis harum laboriosam alias officiis quibusdam in voluptatibus repudiandae provident.*' }] }],
        studyKey: 'studyKey2',
        profiles: [],
      },
      {
        studyName: [{ code: 'en', parts: [{ str: 'Study 3' }] }],
        studyDescription: [{ code: 'en', parts: [{ str: '*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo? Inventore modi perspiciatis esse tenetur consequuntur cum, nesciunt, accusamus accusantium quis harum laboriosam alias officiis quibusdam in voluptatibus repudiandae provident.*' }] }],
        studyKey: 'studyKey3',
        profiles: [],
      },
    ]}
    openStudy={(studyKey) => console.log(studyKey)}
  />
