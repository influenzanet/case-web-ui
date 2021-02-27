import React from "react";
import AvatarSelector from '../AvatarSelector';

import 'localStyles';

export default {
  title: "Inputs/Avatar Selector"
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

export const DefaultSelected = () => <div className="bg-secondary p-2" style={{ maxWidth: 400 }}>
  <AvatarSelector
    title={'Avatar selector'}
    selectedAvatarId='default'
    onSelectAvatar={(id) => console.log(id)}
    avatars={avatarList}
  />
</div>

export const Wider = () => <div className="bg-secondary p-2" style={{ maxWidth: 500 }}>
  <AvatarSelector
    title={'Avatar selector'}
    selectedAvatarId='eule'
    onSelectAvatar={(id) => console.log(id)}
    avatars={avatarList}
  />
</div>
