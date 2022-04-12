import { TodoItem } from 'components';
import { useState } from 'react';
const DndItems = () => {
  const [done, setDone] = useState<boolean>(false);
  const items = [
    {
      id: '1',
      item: (
        <TodoItem
          todo={'deneme'}
          done={done}
          setDone={() => setDone((p) => !p)}
          description={'deneme açıklaması'}
        />
      ),
    },
    {
      id: '2',
      item: (
        <TodoItem
          todo={'deneme'}
          done={true}
          setDone={(e) => {
            console.log(e);
          }}
        />
      ),
    },
    {
      id: '3',
      item: (
        <TodoItem
          todo={'deneme'}
          done={true}
          setDone={(e) => {
            console.log(e);
          }}
        />
      ),
    },
    {
      id: '4',
      item: (
        <TodoItem
          todo={'deneme'}
          done={true}
          setDone={(e) => {
            console.log(e);
          }}
        />
      ),
    },
    {
      id: '5',
      item: (
        <TodoItem
          todo={'deneme'}
          done={true}
          setDone={(e) => {
            console.log(e);
          }}
        />
      ),
    },
    {
      id: '6',
      item: (
        <TodoItem
          todo={'deneme'}
          done={true}
          setDone={(e) => {
            console.log(e);
          }}
        />
      ),
    },
  ];
  return items;
};

export default DndItems;
