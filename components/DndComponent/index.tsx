import { FC, useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  TouchSensor,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import SortableItem from './SortableItem';

interface SortableDataProps {
  id: string;
  item: React.ReactNode;
}

interface DndComponentProps {
  data: SortableDataProps[];
  onDragEnd?: (updatedData: SortableDataProps[]) => void;
  customDragIcon?: React.ReactNode;
}

const DndComponent: FC<DndComponentProps> = ({
  data,
  onDragEnd,
  customDragIcon,
}) => {
  const [items, setItems] = useState(data);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: { y: 15 },
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(TouchSensor, {
      // Press delay of 250ms, with tolerance of 5px of movement
      activationConstraint: {
        distance: { y: 15 },
      },
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
      if (onDragEnd) {
        onDragEnd(updatedData);
      }
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      //axis={Axis.Vertical}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableItem
            key={item.id}
            id={item.id}
            customDragIcon={customDragIcon}
          >
            {item.item}
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default DndComponent;
