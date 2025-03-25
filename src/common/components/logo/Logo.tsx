import { LogoProps } from '@/common/types/common';
import Image from 'next/image';

const Logo = ({ imageUrl, alt = '', ...props }: LogoProps) => {
  return <Image src={imageUrl} alt={alt} {...props} />;
};

export default Logo;
