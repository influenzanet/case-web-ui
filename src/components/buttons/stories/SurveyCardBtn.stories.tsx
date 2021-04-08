import React from "react";
import SurveyCardBtn from '../SurveyCardBtn';

import 'localStyles';

export default {
  title: "Buttons/Survey Card Button"
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

export const Default = () => <SurveyCardBtn
  profile={{ id: "", alias: "", consentConfirmedAt: 0, avatarId: "", createdAt: 0, mainProfile: false }}
  onClick={undefined}
  category=""
  avatars={avatarList}
/>

export const CustomAvatar = () => <SurveyCardBtn
  profile={{ id: "", alias: "", consentConfirmedAt: 0, avatarId: "stier", createdAt: 0, mainProfile: false }}
  onClick={undefined}
  category=""
  avatars={avatarList}
/>
