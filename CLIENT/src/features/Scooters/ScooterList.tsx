import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Spinner } from 'assets/styles/common-styles/Spinner';
import useScootersQuery from 'hooks/useScootersQuery';
import FailuresModal from './Modal';

interface ScooterListProps {
  filterOption: string;
}

const ScooterList = ({ filterOption }: ScooterListProps) => {
  const { data: scooters, isLoading, isError, error } = useScootersQuery();

  const filterScooters = () => {
    switch (filterOption) {
      case 'availableForTravel':
        return scooters?.filter((scooter) => scooter.status === 'active') || [];
      case 'filterByPolygon':
        return scooters || [];
      default:
        return scooters || [];
    }
  };

  const filteredScooters = filterScooters();
  return (
    <Grid container spacing={2}>
      {isLoading && <Spinner />}
      {isError && (
        <Typography color='red' variant='h4'>
          {error}
        </Typography>
      )}
      {filteredScooters.map((scooter) => (
        <Grid item key={scooter.uniqueId} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant='h6'>{scooter.model}</Typography>
              <Typography>Status: {scooter.status}</Typography>
              <Typography>
                Year of Manufacture: {scooter.yearOfManufacture}
              </Typography>
            </CardContent>
            <FailuresModal scooterId={scooter?.uniqueId} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ScooterList;
