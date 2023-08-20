import React, { useState } from 'react';
import styled from 'styled-components';
import ScooterFilter from './ScooterFilter';
import ScooterList from './ScooterList';

const ScooterManagement = () => {
  const [filterOption, setFilterOption] = useState<string>('');

  const handleFilterChange = (value: string) => {
    setFilterOption(value);
  };

  return (
    <ScooterWrapper>
      <h2>Scooter Filter</h2>
      <ScooterFilter handleFilterChange={handleFilterChange} />
      <ScooterList filterOption={filterOption} />
     </ScooterWrapper>
  );
};

export default ScooterManagement;

export const ScooterWrapper = styled.div.attrs({ className: 'ScooterWrapper' })`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.navbar};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  min-height: 50dvh;
`;
