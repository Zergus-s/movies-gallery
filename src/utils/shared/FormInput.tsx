import React from 'react';

import TextField from '@material-ui/core/TextField';

const FormInput = ({
  handleChange,
  text,
  handleBlur,
  values,
  errors,
  type = 'text',
} : {
  handleChange: (e: React.ChangeEvent<never>) => void,
  text: string,
  handleBlur: (e: React.FocusEvent<never, Element>) => void,
  values: string,
  errors: string | undefined,
  type?:string,
}): JSX.Element => (
  <TextField
    required
    id={text.toLocaleLowerCase()}
    label={text}
    helperText={errors}
    onBlur={handleBlur}
    value={values}
    type={type}
    variant="outlined"
    onChange={handleChange}
    name={text.toLocaleLowerCase()}
    placeholder={`Enter ${text}`}
  />
);

export default FormInput;
