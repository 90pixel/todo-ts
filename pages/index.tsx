import type { NextPage } from 'next';
import { DndComponent } from 'components';
import { DndItems } from 'data';

const Home: NextPage = () => {
  const items = DndItems();
  return (
    <div>
      <DndComponent data={items} onDragEnd={(e) => console.log(e)} />
    </div>
  );
};

export default Home;
