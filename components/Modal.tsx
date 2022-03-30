import { FC, ReactNode, useEffect } from 'react';
import { styled } from 'stitches.config';

interface ModalProps {
  // ReactNode supports multiple JSX elements, strings, integers, fragments, and portals.
  children: ReactNode;
  isOpen?: boolean;
}

const Modal: FC<ModalProps> = ({ children, isOpen }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  if (isOpen) {
    return (
      <ModalContainer>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    );
  }

  return null;
};

export default Modal;

const ModalContainer = styled('div', {
  position: 'fixed',
  inset: 0,
  width: '100vw',
  height: '100vh',

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

const ModalContent = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  placeItems: 'center',
  gap: '1em',
  maxWidth: '23.275rem',
  bgColor: '$gray100',
  px: '0.5em',
  py: '0.75em',
  marginInline: 'auto',
  border: '1px solid $gray500',
  radius: '$2xl',
  boxShadow: '$md',
  transform: 'translate(-50%, -50%)',
});
