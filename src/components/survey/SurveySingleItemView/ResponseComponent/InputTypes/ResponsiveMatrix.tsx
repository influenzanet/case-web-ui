import React from 'react';
import { ItemGroupComponent } from 'survey-engine/data_types';
import { CommonResponseComponentProps, getStyleValueByKey } from '../../utils';

interface ResponsiveMatrixProps extends CommonResponseComponentProps {

}

const ResponsiveMatrix: React.FC<ResponsiveMatrixProps> = (props) => {

  const responseType = getStyleValueByKey(props.compDef.style, 'responseType');
  const getDropdownOptionsDef = () => (props.compDef as ItemGroupComponent).items?.find(item => item.key === 'dropdownOptions');

  const renderDropdown = () => {
    const dropdownOptions = getDropdownOptionsDef()

    return <p>dropdown not implemented yet</p>
  }

  const renderMatrixResponseCell = () => {
    switch (responseType) {
      case 'input':
        return <p>input not implemented yet</p>
      case 'numberInput':
        return <p>number input not implemented yet</p>
      case 'dropdown':
      default:
        return renderDropdown();
    }
  }


  console.log(responseType);

  return (
    <p>ResponsiveMatrix todo</p>
  );
};

export default ResponsiveMatrix;
