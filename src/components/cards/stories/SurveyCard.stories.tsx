
import React from "react";
import SurveyCard from '../SurveyCard';

import 'localStyles';

export default {
  title: "Cards/Survey Card"
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

const Template = (args) => (
  <div style={{
    maxWidth: 500
  }}>
    <SurveyCard {...args} />
  </div>
);


export const Prio = Template.bind({});
Prio.args = {
  surveyKey: 'surveyKey',
  studyKey: 'studyKey',
  category: 'prio',
  validUntil: undefined,
  profiles: [{
    id: 'test',
    avatarId: 'default',
    alias: 'Test Profile'
  }],
  surveyInfos: {
    surveyKey: 'surveyKey',
    studyKey: 'studyKey',
    name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
    description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
    typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
  },
  selectedLanguage: 'en',
  avatars: avatarList,
  onClick: (studyKey: string, surveyKey: string, profileId: string) => { },
}

export const Normal = Template.bind({});
Normal.args = {
  surveyKey: 'surveyKey',
  studyKey: 'studyKey',
  category: 'normal',
  validUntil: undefined,
  profiles: [{
    id: 'test',
    avatarId: 'default',
    alias: 'Test Profile'
  }],
  surveyInfos: {
    surveyKey: 'surveyKey',
    studyKey: 'studyKey',
    name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
    description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
    typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
  },
  selectedLanguage: 'en',
  avatars: avatarList,
  onClick: (studyKey: string, surveyKey: string, profileId: string) => { },
}


export const Optional = Template.bind({});
Optional.args = {
  surveyKey: 'surveyKey',
  studyKey: 'studyKey',
  category: 'optional',
  validUntil: undefined,
  profiles: [{
    id: 'test',
    avatarId: 'default',
    alias: 'Test Profile'
  }],
  surveyInfos: {
    surveyKey: 'surveyKey',
    studyKey: 'studyKey',
    name: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
    description: [{ code: 'en', parts: [{ str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, ut veniam ad eaque, sint, natus error architecto eligendi nihil ex repellendus. Inventore, quasi consequatur sunt consequuntur temporibus eveniet repellendus?' }] }],
    typicalDuration: [{ code: 'en', parts: [{ str: '5-7 min.' }] }],
  },
  selectedLanguage: 'en',
  avatars: avatarList,
  onClick: (studyKey: string, surveyKey: string, profileId: string) => { },
}
