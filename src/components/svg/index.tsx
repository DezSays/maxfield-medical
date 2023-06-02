import { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";

// JSX
import Logo from './icons/logo';

// Types
import { SVGImageProps } from '../../types/interface';

// Styles
import './style.scss';

export const LOGO: string  = 'logo';

const SVGImage: FunctionComponent<SVGImageProps> = (
  {
    className,
    href,
    type
  }: SVGImageProps): JSX.Element => {
  const IconMap = {
    [LOGO] : (<Logo />)
  };

  return (
    <>
      <NavLink
        className={className}
        to={href}
      >
        {IconMap[type]}
      </NavLink>
    </>
  )
};

export default SVGImage;
