import React, {Component} from 'react';

 const RenderField = ({
  id,
  input,
  type,
  placeholder,
  meta: {touched, error},
}) => (
  <div>
    <input
      {...input}
      id={id}
      type={type}
      placeholder={placeholder}
      readOnly={id === 'img_field' ? true : false}
    />
    {touched && error && <span style={{color: 'red'}}>{error}</span>}
  </div>
);

export default RenderField;
