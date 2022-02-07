import { memo } from 'react';

import { useForm } from 'utils/hooks/useForm';
import useRouting from 'utils/hooks/useRouting';
import { MAIN_CONSTANTS } from 'utils/constants';

import {
  FormWrapperStyled,
  LoginContainerStyled,
  FormTitleStyled,
  LinkStyled,
} from 'utils/styled';

const Login = (): JSX.Element => {
  const { getFormBody } = useForm();
  const { toRegistrationRoute } = useRouting();

  const form = getFormBody({ name: false });

  return (
    <LoginContainerStyled>
      <FormWrapperStyled>
        <FormTitleStyled variant="h5">
          {MAIN_CONSTANTS.LOGIN}
        </FormTitleStyled>
        {form}
        <LinkStyled onClick={toRegistrationRoute}>
          {MAIN_CONSTANTS.NEW_USER}
        </LinkStyled>
      </FormWrapperStyled>
    </LoginContainerStyled>
  );
};

export default memo(Login);
