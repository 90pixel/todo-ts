import { useState } from 'react';
import type { NextPage } from 'next';
import { styled } from 'stitches.config';
import { DndComponent } from 'components';

const Home: NextPage = () => {
  const [items, setItems] = useState([
    { id: '1', item: <div>1231</div> },
    { id: '2', item: <div>1232</div> },
    { id: '3', item: <div>1233</div> },
    { id: '4', item: <div>1234</div> },
    { id: '5', item: <div>1235</div> },
    { id: '6', item: <div>1236</div> },
  ]);
  return (
    <div>
      <CustomButton>butt on</CustomButton>
      <DndComponent data={items} />
    </div>
  );
};

export default Home;

const CustomButton = styled('button', {
  background: '$gray800',
  radius: 4,
});
