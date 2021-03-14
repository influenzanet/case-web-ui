import React from "react";
import StudyCard from '../StudyCard';

import 'localStyles';

export default {
  title: "Cards/Study Card"
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
    maxWidth: 600
  }}>
    <StudyCard {...args} />
  </div>
);


export const NotSubscribed = Template.bind({});
NotSubscribed.args = {
  studyName: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
  studyDescription: [{ code: 'en', parts: [{ str: '*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo? Inventore modi perspiciatis esse tenetur consequuntur cum, nesciunt, accusamus accusantium quis harum laboriosam alias officiis quibusdam in voluptatibus repudiandae provident.*' }] }],
  studyKey: 'studyKey',
  profiles: [],
  selectedLanguage: 'en',
  avatars: avatarList,
  actionText: 'Open',
  notJoinedText: 'Not Joined',
  onClick: (studyKey: string) => { },
}

export const Subscribed = Template.bind({});
Subscribed.args = {
  studyName: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
  studyDescription: [{ code: 'en', parts: [{ str: '*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo? Inventore modi perspiciatis esse tenetur consequuntur cum, nesciunt, accusamus accusantium quis harum laboriosam alias officiis quibusdam in voluptatibus repudiandae provident.*' }] }],
  studyKey: 'studyKey',
  profiles: [{
    id: 'test',
    avatarId: 'default',
    alias: 'Test Profile'
  }],
  selectedLanguage: 'en',
  avatars: avatarList,
  actionText: 'Open',
  notJoinedText: 'Not Joined',
  onClick: (studyKey: string) => { },
}

export const SubscribedWithTwo = Template.bind({});
SubscribedWithTwo.args = {
  studyName: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
  studyDescription: [{ code: 'en', parts: [{ str: '*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo? Inventore modi perspiciatis esse tenetur consequuntur cum, nesciunt, accusamus accusantium quis harum laboriosam alias officiis quibusdam in voluptatibus repudiandae provident.*' }] }],
  studyKey: 'studyKey',
  profiles: [{
    id: 'test',
    avatarId: 'pinguin',
    alias: 'Test Main Profile'
  },
  {
    id: 'test2',
    avatarId: 'default',
    alias: 'Test Secondary Profile'
  }],
  selectedLanguage: 'en',
  avatars: avatarList,
  actionText: 'Open',
  notJoinedText: 'Not Joined',
  onClick: (studyKey: string) => { },
}

export const SubscribedWithMultiple = Template.bind({});
SubscribedWithMultiple.args = {
  studyName: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
  studyDescription: [{ code: 'en', parts: [{ str: '*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo? Inventore modi perspiciatis esse tenetur consequuntur cum, nesciunt, accusamus accusantium quis harum laboriosam alias officiis quibusdam in voluptatibus repudiandae provident.*' }] }],
  studyKey: 'studyKey',
  profiles: [{
    id: 'test',
    avatarId: 'pinguin',
    alias: 'Test Main Profile'
  },
  {
    id: 'test2',
    avatarId: 'default',
    alias: 'Test Secondary Profile'
  },
  {
    id: 'test3',
    avatarId: 'spinne',
    alias: 'Yet an other profile'
  },
  {
    id: 'test4',
    avatarId: 'panda',
    alias: 'And the last one'
  }],
  selectedLanguage: 'en',
  avatars: avatarList,
  actionText: 'Open',
  notJoinedText: 'Not Joined',
  onClick: (studyKey: string) => { },
}

export const NotClickable = Template.bind({});
NotClickable.args = {
  studyName: [{ code: 'en', parts: [{ str: 'Survey Name' }] }],
  studyDescription: [{ code: 'en', parts: [{ str: '*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo? Inventore modi perspiciatis esse tenetur consequuntur cum, nesciunt, accusamus accusantium quis harum laboriosam alias officiis quibusdam in voluptatibus repudiandae provident.*\n\nItems:\n- item1\n- item2\n' }] }],
  studyKey: 'studyKey',
  profiles: [{
    id: 'test',
    avatarId: 'default',
    alias: 'Test Profile'
  }],
  selectedLanguage: 'en',
  avatars: avatarList,
  actionText: undefined,
  notJoinedText: 'Not Joined',
  onClick: undefined,
}
