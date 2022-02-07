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

const Registration = (): JSX.Element => {
  const { getFormBody } = useForm();
  const { toLoginRoute } = useRouting();

  const form = getFormBody({});

  return (
    <LoginContainerStyled>
      <FormWrapperStyled>
        <FormTitleStyled variant="h5">
          {MAIN_CONSTANTS.SIGN_UP}
        </FormTitleStyled>
        {form}
        <LinkStyled onClick={toLoginRoute}>
          {MAIN_CONSTANTS.EXISTING_USER}
        </LinkStyled>
      </FormWrapperStyled>
    </LoginContainerStyled>
  );
};

export default memo(Registration);
