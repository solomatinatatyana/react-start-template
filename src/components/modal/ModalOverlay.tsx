import React, { ReactElement } from 'react';
import cn from 'clsx';
import './modal.css';

interface IProps {
  children?: ReactElement;
}

const ModalOverlay: React.FC<IProps> = ({ children }) => {
  return <div className={`${cn('overlay')}`}>{children}</div>;
};

export default ModalOverlay;
