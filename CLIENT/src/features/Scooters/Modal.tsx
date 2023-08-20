import { Dialog, IconButton, Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useScooterFailures } from 'hooks/useScooterFailures';
import React, { useState } from 'react';
import { useScooterFailureHistory } from 'hooks/useScooterFailureHistory';
import { isEmpty } from 'lodash';
import { format } from 'date-fns';

const FailuresModal = ({ scooterId }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: failuresData, refetch } = useScooterFailures(scooterId);
  const { data: historyData, refetch: refethHistory } =
    useScooterFailureHistory(scooterId);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    refetch(scooterId);
    refethHistory(scooterId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: '20px', gap: '10px' }}>
      <Button variant='outlined' onClick={handleOpenModal}>
        Show Failures
      </Button>
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <div style={{ padding: '20px', gap: '20px' }}>
          <h2>Failures</h2>
          {!isEmpty(failuresData) ? (
            <ul>
              {failuresData?.map((failuresData: any) => (
                <React.Fragment key={failuresData?.openingTime}>
                  <li>Type: {failuresData?.type}</li>
                  <li>Status: {failuresData?.status}</li>
                  <li>Opening Time: {failuresData?.openingTime}</li>
                  <li>Closing Time: {failuresData?.closingTime}</li>
                </React.Fragment>
              ))}
            </ul>
          ) : (
            <h3>No failures</h3>
          )}
          <h2>Failure History</h2>
          {!isEmpty(historyData) ? (
            <ul>
              {historyData?.map((history: any, idx) => (
                <React.Fragment key={history?.openingTime}>
                  <h3>{idx + 1}</h3>
                  <li>Type: {history?.type}</li>
                  <li>Status: {history?.status}</li>
                  <li>Opening Time: {history?.openingTime}</li>
                  <li>Closing Time: {history?.closingTime}</li>
                  </React.Fragment>
              ))}
            </ul>
          ) : (
            <h3>No Failure History</h3>
          )}
        </div>
        <IconButton
          aria-label='close'
          onClick={handleCloseModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      </Dialog>
    </div>
  );
};

export default FailuresModal;
