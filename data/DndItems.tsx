import { useState } from 'react';
import { TodoItem } from 'components';

interface DndItemProps {
  editable: boolean;
}

const DndItems = ({ editable }: DndItemProps) => {
  const [done, setDone] = useState<boolean>(false);

  const items = [
    {
      id: '1',
      item: (
        <TodoItem
          todo="deneme"
          done={done}
          setDone={() => setDone((p) => !p)}
          description="deneme açıklaması"
          isEditable={editable}
        />
      ),
    },
    {
      id: '2',
      item: (
        <TodoItem
          todo="deneme"
          done={true}
          setDone={(e) => {
            console.log(e);
          }}
          isEditable={editable}
        />
      ),
    },
    {
      id: '3',
      item: (
        <TodoItem
          todo="deneme"
          done={true}
          setDone={(e) => {
            console.log(e);
          }}
          isEditable={editable}
        />
      ),
    },
    {
      id: '4',
      item: (
        <TodoItem
          todo="deneme"
          done={true}
          setDone={(e) => {
            console.log(e);
          }}
          isEditable={editable}
        />
      ),
    },
    {
      id: '5',
      item: (
        <TodoItem
          todo="deneme"
          done={true}
          setDone={(e) => {
            console.log(e);
          }}
          isEditable={editable}
        />
      ),
    },
    {
      id: '6',
      item: (
        <TodoItem
          todo="deneme"
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
