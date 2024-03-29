import React from 'react';
import { StyledIcon } from './Icon.styled';

interface Props {
  id?: string;
  className?: string;
  width?: string;
  height?: string;
  src?: string;
  alt?: string;
}

const Icon: React.FC<Props> = ({ ...props }) => <StyledIcon {...props} />;

export default React.memo(Icon);
