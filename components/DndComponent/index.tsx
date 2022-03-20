import { FC, useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import SortableItem from './SortableItem';

interface SortableDataProps {
  id: string;
  item: React.ReactNode;
}

interface DndComponentProps {
  data: SortableDataProps[];
}

const DndComponent: FC<DndComponentProps> = ({ data }) => {
  const [items, setItems] = useState(data);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    // active sürüklenen element, over sürüklenen elementin bırakıldığı nokta
    // eğer bırakılan nokta, dnd context dışarısında ise hata vermesini engellemek adına
    if (!over) return null;
    // eğer aynı yere bırakmamışsak yer değiştirme işlenmini yapıyoruz.
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      const updatedData = arrayMove(items, oldIndex, newIndex);
      setItems(updatedData);
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableItem key={item.id} id={item.id}>
            {item.item}
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default DndComponent;
