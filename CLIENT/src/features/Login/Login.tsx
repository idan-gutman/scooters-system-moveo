import FormInput from 'components/FormInput/Input';
import { InfoCircle } from 'icons/svg/index';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import * as Styled from 'features/Login/Login.style';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useOnlineStatus from '@rehooks/online-status';
import { usePostLogin } from 'services/backend-service';
import { LoginPayload } from 'assets/Types/types';
import { Navigate, useNavigate } from 'react-router-dom';
import useMediaQuery from 'hooks/useMediaQuery';
import useAuth from 'hooks/useAuth';
import { breakpoints } from 'assets/styles/theme';
import { BackgroundSpinner } from 'components/Background/Background.style';
import { useState } from 'react';
import { SocialMediaLogin } from './SocialMediaLogin';

const schema = yup.object().shape({
  username: yup
    .string()
    .required('username is a required field'),
  password: yup
    .string()
    .matches(
      /^[a-zA-Z0-9~`!@#$%^&*)(-_={}]*$/,
      'Invalid password, please try again'
    )
    .required('Password is a required field')
});

const Login = () => {
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const { setAuth, auth } = useAuth();
  const isMobile = useMediaQuery(`(${breakpoints.mobile})`);

  const { mutate, isLoading, isError } = usePostLogin();

  const methods = useForm<LoginPayload>({
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;
  const submitForm: SubmitHandler<LoginPayload> = (payload: LoginPayload) => {
    mutate(payload, {
      onSuccess: (data) => {
        setAuth?.(data);
        navigate('/home', { replace: true });
      },
    });
  };

  if (auth?.token) return <Navigate to='/home' replace />;
  return (
    <Styled.LoginWrapper>
      {isLoading && <BackgroundSpinner />}
   
      <Styled.LoginModal>
        <h1>Log in</h1>
        <FormProvider {...methods}>
          <Styled.Form onSubmit={handleSubmit(submitForm)}>
            {(!onlineStatus || isError) && (
              <Styled.MismatchInfo>
                <InfoCircle />
                {!onlineStatus && (
                  <p>
                    Connection is lost. Please check your connection device and
                    try again.
                  </p>
                )}
                {isError && onlineStatus && (
                  <p>
                    username or password are incorrect. Please check and try again.
                  </p>
                )}
              </Styled.MismatchInfo>
            )}
            <FormInput
              label='username'
              name='username'
              placeholder='username...'
            />
            <FormInput
              label='Password'
              name='password'
              type='password'
              placeholder='6 characters and digit numbers...'
            />
            <Styled.ButtonLogin type='submit'>Log in</Styled.ButtonLogin>
          </Styled.Form>
        </FormProvider>
        <Styled.Divider>
          <hr className='Line' />
          <p>Or login with</p>
          <hr />
        </Styled.Divider>
        <SocialMediaLogin />
        {!isMobile && (
          <Styled.SignUpText>
            Don’t have an account? <span> Sign up</span>
          </Styled.SignUpText>
        )}
      </Styled.LoginModal>
    </Styled.LoginWrapper>
  );
};

export default Login;
