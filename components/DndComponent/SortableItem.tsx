import { FC } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { styled } from 'stitches.config';

interface SortableItemProps {
  id: string;
}

const SortableItem: FC<SortableItemProps> = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: 'flex',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <DragElement {...attributes} {...listeners}>
        ::
      </DragElement>
      {children}
    </div>
  );
};

export default SortableItem;

const DragElement = styled('span', {
  cursor: 'grab',
  mr: 4,
});
