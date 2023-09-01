import React from 'react';
import Select from 'react-select';
import './index.css';

const OptionSelect = ({
     title = true,
     options = [],
     keyname,
     placeholder = '',
     onChange,
     width = '100%',
     height = '90px',
     OptionSelectHeight = '40px',
     index = '',
     style,
     value,
     error = false,
     disable = false,
     important = false,
}) => {
     const optionSelectProps = {
          style: { ...style, width: width, height: height },
     };

     const _handleOnchange = (e) => {
          onChange(keyname, e, index);
     };

     const customStyles = {
          option: (provided, state) => ({
               ...provided,
               fontSize: '12px',
               background: state.isFocused ? '#1167b2' : '#fff',
               color: state.isFocused ? '#fff' : '#000'
          }),
     };

     return (
          <div className={'HR-option-select-container'} {...optionSelectProps}>
               
               <Select
                    options={options}
                    width={width}
                    isDisabled={disable}
                    className={'HR-option-select'}
                    placeholder={placeholder ? placeholder : 'Select'}
                    value={value}
                    style={{ height: OptionSelectHeight }}
                    onChange={_handleOnchange}
                    styles={customStyles}
                    index={index !== '' ? index : ''}
               />
          </div>
     );
};

export default OptionSelect;
