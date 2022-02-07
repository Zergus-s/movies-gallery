import * as yup from 'yup';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';

import {
  AuthorisationActionType,
} from 'context/AppContext';
import FormInput from 'utils/shared/FormInput';
import { MAIN_CONSTANTS } from 'utils/constants';
import { ROUTES } from 'common/components/routes/constants';
import { useAuthorisationContext } from 'context/hooks';
import { IUseForm } from 'utils/models/UseForm.interface';

import { InputsWrapperStyled } from 'utils/styled';

export const useForm = (): IUseForm => {
  const context = useAuthorisationContext();
  const navigate = useNavigate();

  const schemaTemplate = {
    email: yup.string()
      .email('Must be valid email')
      .required('Enter valid email'),
    password: yup.string()
      .matches(/[A-Z]/, 'Password must have at least one big letter')
      .matches(/[0-9]/, 'Password must have at least one number')
      .matches(/[\W]/, 'Password must have at least one special symbol')
      .min(6)
      .required('Enter password'),
    name: yup.string().required('Enter name'),
  };

  const registrationSchema = yup.object().shape({
    email: schemaTemplate.email,
    password: schemaTemplate.password,
    name: schemaTemplate.name,
  });

  const loginSchema = yup.object().shape({
    email: schemaTemplate.email,
    password: schemaTemplate.password,
  });

  const handleFormSubmit = (
    values : { email: string, password: string, name: string },
  ): void => {
    // eslint-disable-next-line no-param-reassign
    if (!values.name) values.name = 'User';

    context.dispatch({ ...values, type: AuthorisationActionType.SignUp });
    navigate(`../${ROUTES.HOME}`, { replace: true });
  };

  const getFormBody = ({ name = true }: { name?: boolean}): JSX.Element => (
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      validateOnBlur
      onSubmit={handleFormSubmit}
      validationSchema={name ? registrationSchema : loginSchema}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
      }) => (
        <InputsWrapperStyled>
          <FormInput
            handleChange={handleChange}
            text="Email"
            handleBlur={handleBlur}
            values={values.email}
            errors={errors.email}
          />
          <FormInput
            handleChange={handleChange}
            text="Password"
            handleBlur={handleBlur}
            values={values.password}
            errors={errors.password}
            type="password"
          />
          {name && (
            <FormInput
              handleChange={handleChange}
              text="Name"
              handleBlur={handleBlur}
              values={values.name}
              errors={errors.name}
            />
          )}
          <Button
            onClick={() => handleSubmit()}
            type="submit"
            variant="contained"
            color={(!isValid) ? 'default' : 'primary'}
          >
            {MAIN_CONSTANTS.SUBMIT}
          </Button>
        </InputsWrapperStyled>
      )}
    </Formik>
  );

  return { getFormBody };
};
