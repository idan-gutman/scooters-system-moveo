import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import useUsersQuery from 'hooks/useUsersQuery';
import { Wrapper } from 'assets/styles/common-styles/common.style';
import { Spinner } from 'assets/styles/common-styles/Spinner';

const Users = () => {
  const { data: users, isLoading, isError, error } = useUsersQuery();

  return (
    <Wrapper>
      <h2>Users</h2>
      <Grid container spacing={2}>
        {isLoading && <Spinner />}
        {isError && (
          <Typography color='red' variant='h4'>
            {error}
          </Typography>
        )}
        {users?.map(({ username, lastName, email }) => (
          <Grid item key={username} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography>User Name: {username}</Typography>
                <Typography>Last Name: {lastName}</Typography>
                <Typography>email: {email}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Users;
