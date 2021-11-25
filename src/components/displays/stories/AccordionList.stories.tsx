import React from "react";
import AccordionList from '../AccordionList';

import 'localStyles';

export default {
  title: "Displays/Accordion List"
};

export const Example = () => <AccordionList
  //itemKey={'test.test'}
  items={[
    {
      title: 'Item 1 title',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium quas ab libero nisi nam, reiciendis placeat enim qui eligendi dolore facilis quod illo soluta quaerat iusto adipisci reprehenderit cum.'
    },
    {
      title: 'Item 2 title with much longer description to see what happens when text does not fit into one line any more, when displaying it on typical screensizes',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium quas ab libero nisi nam, reiciendis placeat enim qui eligendi dolore facilis quod illo soluta quaerat iusto adipisci reprehenderit cum.'
    }
  ]}
  openLabel="Show more"
  closeLabel="Show less"
/>
