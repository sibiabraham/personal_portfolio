import { ContainerProps } from '@/common/types/common';
import { cn } from '@/common/utils/cn';

const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <section
      className={cn(
        'px-gutter-mobile sm:px-gutter-desktop max-w-screen-1xl mx-auto box-content',
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Container;
