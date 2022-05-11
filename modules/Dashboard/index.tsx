import { FC } from 'react';
import { DndComponent } from 'components';
import { DndItems } from 'data';

const Dashboard: FC = () => {
  const items = DndItems();
  return (
    <div>
      <DndComponent data={items} onDragEnd={(e) => console.log(e)} />
    </div>
  );
};

export default Dashboard;
