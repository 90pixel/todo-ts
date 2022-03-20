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

interface DndComponentProps {
  name?: string;
}

const DndComponent: FC<DndComponentProps> = ({ name }) => {
  const [items, setItems] = useState(['1', '2', '3']);
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

    if (active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
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
        {items.map((id) => (
          <SortableItem key={id} id={id}>
            {id}
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default DndComponent;
