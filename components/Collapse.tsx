import { FC, ReactNode, useState, useEffect } from 'react';
import { Collapse as RCollapse } from 'react-collapse';
import { styled } from 'stitches.config';

interface CollapseProps {
  header: ReactNode;
  open?: boolean;
}

const Collapse: FC<CollapseProps> = ({ open = false, children, header }) => {
  const [active, setActive] = useState<boolean>(open);

  // ? If we want this component to be controlled by prop
  useEffect(() => {
    setActive(open);
  }, [open]);

  return (
    <Wrapper>
      <Header onClick={() => setActive((p) => !p)}>{header}</Header>
      <RCollapse isOpened={active}>{children}</RCollapse>
    </Wrapper>
  );
};
export default Collapse;

const Wrapper = styled('div', {
  '.ReactCollapse--collapse': {
    transition: 'height 0.5s',
  },
});

const Header = styled('span', {
  cursor: 'pointer',
  userSelect: 'none',
});
