import { FC } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { styled } from 'stitches.config';

interface SortableItemProps {
  id: string;
  customDragIcon?: React.ReactNode;
}

const SortableItem: FC<SortableItemProps> = ({
  children,
  id,
  customDragIcon,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <DragElement {...attributes} {...listeners}>
        {customDragIcon ? customDragIcon : '::'}
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
