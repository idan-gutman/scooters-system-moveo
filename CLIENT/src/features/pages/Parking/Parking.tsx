import React from 'react';
import styled from 'styled-components';
import { Close, Delete } from '@mui/icons-material';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import { Wrapper } from 'assets/styles/common-styles/common.style';
import useParkingsQuery from 'hooks/useParkingsQuery';
import useDeleteParking from 'hooks/useDeleteParking';
import { Spinner } from 'assets/styles/common-styles/Spinner';
import AddParkingForm from './FormAddParking';

const Parking = () => {
  const { data: parkings, isLoading, isError, error } = useParkingsQuery();

  const { mutate } = useDeleteParking();
  const handleDeleteClick = async (parkingId: string) => {
    mutate(parkingId);
  };
  return (
    <>
      <Wrapper>
        <h2>Parkings</h2>
        <Grid container spacing={2}>
          {isLoading && <Spinner />}
          {isError && (
            <Typography color='red' variant='h4'>
              {error}
            </Typography>
          )}
          {parkings?.map(({ address, location, numberOfScooters, _id }) => (
            <Grid item key={address} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography>Address: {address}</Typography>
                  <Typography>
                    Location: lat: {location.lat} long: {location.long}
                  </Typography>
                  <Typography>
                    Number Of Scooters: {numberOfScooters}
                  </Typography>
                  <Typography>
                    availability:
                    {numberOfScooters === 0
                      ? 'Not availabe'
                      : `${numberOfScooters} Parking spots available`}
                  </Typography>
                  <IconButton
                    aria-label='close'
                    onClick={() => handleDeleteClick(_id as string)}
                    sx={{
                      position: '',
                      right: 15,
                      top: 23,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <Delete />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Wrapper>
      <AddParkingForm />
    </>
  );
};

export default Parking;

const ParkingContainer = styled.div.attrs({ className: 'ParkingContainer' })`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #5ebae08a;
`;
