import React from 'react';
import { ItemGroupComponent } from 'survey-engine/data_types';

import TextViewComponent from './TextViewComponent';
import { Popover, OverlayTrigger } from 'react-bootstrap';

interface HelpGroupProps {
  componentGroup: ItemGroupComponent;
  languageCode: string;
  itemKey: string;
}

const HelpGroup: React.FC<HelpGroupProps> = (props) => {
  const renderContent = () => {
    if (props.componentGroup.items === undefined) {
      return <p className='text-danger'> 'items' is missing in the helpGroup component </p>
    }
    return <React.Fragment>
      {
        props.componentGroup.items.map((item, index) => {
          return <TextViewComponent key={index.toFixed()}
            compDef={item}
            languageCode={props.languageCode}
          />
        })
      }
    </React.Fragment>
  }

  const popover = (
    <Popover
      id={`${props.itemKey}-helpgroup-popover`}
      className='shadow border-none px-2 px-sm-2a py-2a'>
      {renderContent()}
    </Popover>
  )

  return (
    <div className="d-flex align-items-center ms-1 ms-sm-2 ms-md-2a">
      <OverlayTrigger trigger="click" placement="bottom-end" overlay={popover}>
        <button
          type="button"
          className="btn btn-link p-0 text-decoration-none" // p-0 text-center justify-content-center rounded-circle border-2 border-primary d-flex align-items-center text-decoration-none "
          aria-label={"Open Infos"}
        >
          <span className="material-icons d-flex align-items-center" style={{ fontSize: '1.5rem' }}>help_outline</span>
        </button>
      </OverlayTrigger>
    </div>
  );
};

export default HelpGroup;
