import React from "react";
import Slider from '../Slider';

import 'localStyles';

export default {
  title: "Inputs/Slider"
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <div className="bg-secondary p-2"><Slider {...args} /></div>;

export const WithTicks = () => <div className="p-2"><Slider
  min={-3}
  max={15}
  id={'id1'}
  step={1}
  value={10}
  onChange={(value?: number) => { }}
/></div>;

export const WithoutTicks = () => <div className="p-2"><Slider
  min={-3}
  max={15}
  id={'id1'}
  value={5}
  onChange={(value?: number) => { }}
/></div>;

export const WithWhiteTrack = () => <div className="bg-secondary p-2"><Slider
  min={-3}
  max={15}
  id={'id1'}
  step={1}
  value={10}
  onChange={(value?: number) => { }}
  trackColor="white"
  tickColor="grey-3"
/></div>;

