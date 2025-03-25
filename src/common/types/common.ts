import { ImageProps } from 'next/image';
import { ComponentProps, ReactNode } from 'react';

export type PageLayoutQueryProps = {
  children: ReactNode;
  className?: string;
  hasLogo?: boolean;
};

export type ContainerProps = ComponentProps<'section'>;

export type LogoProps = Omit<ImageProps, 'src'> & {
  imageUrl: string;
};
