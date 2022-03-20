import { useState } from 'react';
import type { NextPage } from 'next';
import { styled } from 'stitches.config';
import { DndComponent } from 'components';

const Home: NextPage = () => {
  const items = [
    { id: '1', item: 'Denenme6' },
    { id: '2', item: 'Denenme5' },
    { id: '3', item: 'Denenme4' },
    { id: '4', item: 'Denenme3' },
    { id: '5', item: 'Denenme2' },
    { id: '6', item: 'Denenme1' },
  ];

  return (
    <div>
      <CustomButton>butt on</CustomButton>
      <DndComponent data={items} onDragEnd={(e) => console.log(e)} />
    </div>
  );
};

export default Home;

const CustomButton = styled('button', {
  background: '$gray800',
  radius: 4,
});
