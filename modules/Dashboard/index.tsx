import { FC } from 'react';
import { DndComponent, Text, Title } from 'components';
import { DndItems } from 'data';
import { styled } from 'stitches.config';

const Dashboard: FC = () => {
  const items = DndItems();
  return (
    <>
      <Header>
        <StyledTitle>Booking Movie Tickets</StyledTitle>

        <Actions>
          <Text variant="ghost">Edit</Text>
          <Text variant="ghost">Remove</Text>
        </Actions>
      </Header>

      <Tasks>
        <Text variant="ghost">Tasks</Text>
        <DndComponent data={items} onDragEnd={(e) => console.log(e)} />
      </Tasks>
    </>
  );
};

export default Dashboard;

const Header = styled('header', {
  width: '100%',
  maxWidth: 310,
  marginInline: 'auto',
  marginBottom: '$sp32',
});

const StyledTitle = styled(Title, {
  marginBottom: '$sp4',
});

const Actions = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$sp12',
});

const Tasks = styled('div', {});
