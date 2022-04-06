import { FC, ReactNode, Dispatch, SetStateAction } from 'react';
import { styled } from 'stitches.config';
import Collapse from './Collapse';
import Checkbox from './Checkbox';

interface TodoItemProps {
  done: boolean;
  setDone: Dispatch<SetStateAction<boolean>>;
  todo: string;
  description?: ReactNode;
}

const TodoItem: FC<TodoItemProps> = ({
  done = false,
  setDone,
  todo,
  description,
}) => {
  return (
    <Todo>
      <Checkbox checked={done} onChange={setDone} />
      <Collapse header={<CollapseHeader>{todo}</CollapseHeader>}>
        {description}
      </Collapse>
    </Todo>
  );
};

export default TodoItem;

const Todo = styled('div', {
  display: 'flex',
  background: '$gray100',
  border: '1px solid $gray200',
  p: 1,
  borderRadius: '$3xl',
});

const CollapseHeader = styled('div', {
  margin: '0.6em 0',
});
