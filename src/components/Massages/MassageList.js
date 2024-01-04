import React from 'react';
import MassageItem from './MassageItem';
import { styled } from '@mui/system';

const MassageListContainer = styled('section')({
  padding: '20px',
  width:"1000px",
  marginLeft:"100px",
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const MassageListContent = styled('ul')({
  listStyle: 'none',
  padding: 0,
});

const NoMassagesMessage = styled('p')({
  textAlign: 'center',
  color: 'gray',
});

const MassageList = (props) => {
  let content;

  if (!props.items || props.items.length === 0) {
    content = <NoMassagesMessage>Could not find any massages. Maybe create one?</NoMassagesMessage>;
  } else {
    content = (
      <MassageListContent>
        {props.items.map((massage) => (
          <MassageItem key={massage.id} name={massage.title}  />
        ))}
      </MassageListContent>
    );
  }

  return (
    <MassageListContainer>
      {content}
    </MassageListContainer>
  );
};

export default MassageList;
