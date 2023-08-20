import React from 'react';
import { Select, MenuItem, FormControl, InputLabel,styled as MUIstyled, } from '@mui/material';

interface ScooterFilterProps {
  handleFilterChange: (value: string) => void;
}

const ScooterFilter: React.FC<ScooterFilterProps> = ({
  handleFilterChange,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<{ value: any }>) => {
    const value = event.target.value as string;
    handleFilterChange(value);
  };

  return (
    <FormControl variant='outlined' >
      <InputLabel>Scooters</InputLabel>
      <StyledSelect onChange={handleSelectChange} label='q'>
        <MenuItem value=''>All Scooters</MenuItem>
        <MenuItem value='availableForTravel'>Available for Travel</MenuItem>
        <MenuItem value='filterByPolygon'>Filter by Polygon</MenuItem>
      </StyledSelect>
    </FormControl>
  );
};

export default ScooterFilter;

const StyledSelect = MUIstyled(Select)`
  max-width: 300px;
  background:white;
`;


