import React from "react";
import ReportDetailDialog from '../ReportDetailDialog';

import 'localStyles';

export default {
  title: "Dialogs/Report detail dialog"
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
  <ReportDetailDialog {...args} />
);


export const Example = Template.bind({});
Example.args = {
  open: true,
  dialogTexts: {
    title: 'Report Details',
    closeBtn: 'Close'
  },
  reportInfos: {
    reportName: 'TestReport',
    studyName: 'TestStudy',
    cardIcon: 'static-content/images/placeholder_image.png',
    subtitle: '20.12.2021 11:11',
    summary: 'Lorem **ipsum** dolor sit amet, consectetur adipiscing elit. Vel enim id justo, tempor amet rhoncus facilisi. Semper turpis nulla egestas diam non sed.',
    profile: {
      id: 'id',
      alias: 'Profile name',
      avatarId: 'flamingo'
    },
    data: [
      {
        label: 'Some Key',
        value: 'Value',
      },
      {
        label: 'Another Key',
        value: 'A longer value',
      },
      {
        value: 'Value',
      },
      {
        label: 'first message',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus etiam ut sit nulla turpis. Et donec etiam lectus risus eu senectus sit. Mattis sed purus tristique eu eget. Id non eu eget egestas pretium in ullamcorper. Viverra gravida in arcu felis vitae justo. Tempor scelerisque tristique lectus odio eros mi lorem. Id ultricies neque tempus nisl, tortor mattis. Volutpat, senectus pharetra facilisis imperdiet vitae. Gravida enim id quisque luctus amet, consectetur nibh.',
        useMarkdown: true
      },
      {
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus etiam ut sit nulla turpis. Et donec etiam lectus risus eu senectus sit. Mattis sed purus tristique eu eget. Id non eu eget egestas pretium in ullamcorper. Viverra gravida in arcu felis vitae justo. Tempor scelerisque tristique lectus odio eros mi lorem. Id ultricies neque tempus nisl, tortor mattis. Volutpat, senectus pharetra facilisis imperdiet vitae. Gravida enim id quisque luctus amet, consectetur nibh.',
        useMarkdown: true
      }
    ]
  },
  avatars: avatarList,
  onClose: () => { },
}


