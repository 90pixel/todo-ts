import { FC, ReactNode, Dispatch, SetStateAction } from 'react';
import { styled } from 'stitches.config';

import Checkbox from './Checkbox';
import { Text } from './Typography';

interface TodoItemProps {
  done: boolean;
  setDone: Dispatch<SetStateAction<boolean>>;
  todo: string;
  description?: ReactNode;
  isEditable: boolean;
}

const TodoItem: FC<TodoItemProps> = ({
  done = false,
  setDone,
  todo,
  description,
  isEditable,
}) => {
  return (
    <Todo>
      <Checkbox checked={done} onChange={setDone} />

      <CollapseHeader>
        <Text contentEditable={isEditable} as="p">
          {todo}
        </Text>
        <Description contentEditable={isEditable} as="span">
          {description}
        </Description>
      </CollapseHeader>
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
  width: '100%',
});

const CollapseHeader = styled('div', {
  margin: '0.6em 0',
});

const Description = styled(Text, {
  fontSize: '$sm',
});
