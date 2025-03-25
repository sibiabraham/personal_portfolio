import { ContainerProps } from '@/common/types/common';
import { cn } from '@/common/utils/cn';

const Section = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <section className={cn('relative w-full pb-20 pt-14', className)} {...rest}>
      {children}
    </section>
  );
};

export default Section;
