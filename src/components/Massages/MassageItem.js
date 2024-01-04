import React from 'react';
import { styled } from '@mui/system';

const StyledMassageItem = styled('li')({
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: 'white',
  borderRadius: '83px',
 width:"900px",
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const MassageName = styled('h2')({
  margin: 0,
});

const MassageItem = (props) => {
  return (
    <StyledMassageItem>
      <MassageName>{props.name}</MassageName>
    </StyledMassageItem>
  );
};

export default MassageItem;