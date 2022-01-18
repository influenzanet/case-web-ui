
import React from "react";
import ReportCard from '../ReportCard';

import 'localStyles';

export default {
  title: "Cards/Report Card"
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
    <ReportCard {...args} />
  </div>
);


export const WithoutStudyName = Template.bind({});
WithoutStudyName.args = {
  cardInfos: {
    reportName: 'TestReport',
    subtitle: '20.12.2021 11:11',
  },
  avatars: avatarList,
  onClick: (studyKey: string, surveyKey: string, profileId: string) => { },
}

export const Withimage = Template.bind({});
Withimage.args = {
  cardInfos: {
    reportName: 'TestReport',
    studyName: 'TestStudy',
    cardIcon: 'static-content/images/placeholder_image.png',
    subtitle: '20.12.2021 11:11',
    summary: 'Lorem **ipsum** dolor sit amet, consectetur adipiscing elit. Vel enim id justo, tempor amet rhoncus facilisi. Semper turpis nulla egestas diam non sed.'
  },
  avatars: avatarList,
  onClick: (studyKey: string, surveyKey: string, profileId: string) => { },
}

export const WithBgClassName = Template.bind({});
WithBgClassName.args = {
  bgClassNameOverride: 'bg-grey-2',
  cardInfos: {
    reportName: 'TestReport',
    studyName: 'TestStudy',
    subtitle: '20.12.2021 11:11',
    summary: '*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel enim id justo, tempor amet rhoncus facilisi. Semper turpis nulla egestas diam non sed.*'
  }
}
