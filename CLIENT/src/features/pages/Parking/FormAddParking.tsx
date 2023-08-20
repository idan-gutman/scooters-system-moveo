import React from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as Styled from 'features/Login/Login.style';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginPayload } from 'assets/Types/types';
import { Parking } from 'Types/Parking';
import { useQueryClient } from 'react-query';
import FormInput from 'components/FormInput/Input';
import useAddNewParking from '../../../hooks/useAddNewParking';

const schema = yup.object().shape({
    address: yup.string().required('address is a required field'),
    latitude: yup.string().required('latitude is a required field'),
    longitude: yup.string().required('longitude is a required field'),
    numberOfScooters: yup
      .string()
      .required('numberOfScooters is a required field'),
});

const AddParkingForm = () => {
  const { mutate } = useAddNewParking();
  const queryClient = useQueryClient();
  const methods = useForm<Parking>({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, register, reset } = methods;
  const submitForm: SubmitHandler<Parking> = (payload: any) => {
    const formatPayload = {
      address: payload?.address,
      numberOfScooters: payload?.numberOfScooters,
      location: {
        lat: payload?.latitude,
        long: payload?.longitude,
      },
    };

     mutate(formatPayload, {
      onSuccess: (data) => {
        reset();
        queryClient.invalidateQueries();
      },
    });
  };

  return (
    <Wrapper>
      <h1>Add New Parking</h1>
      <FormProvider {...methods}>
        <Styled.Form style={{gap:'10px',marginBottom:'20px'}} onSubmit={handleSubmit(submitForm)}>
          <FormInput label='Address' name='address' placeholder='Address' />
          <FormInput label='Latitude' name='latitude' placeholder='Latitude' />
          <FormInput
            label='Longitude'
            name='longitude'
            placeholder='Longitude'
          />
          <FormInput
            label='Number Of Scooters'
            name='numberOfScooters'
            type=''
            placeholder='Number Of Scooters'
          />
          <Styled.ButtonLogin type='submit'>
            Add Parking Spot
          </Styled.ButtonLogin>
        </Styled.Form>
      </FormProvider>
    </Wrapper>
  );
};

export default AddParkingForm;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
