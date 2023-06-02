import { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";

// JSX
import Logo from './icons/logo';
import LandingBanner from './banners/landing';

// Types
import { SVGImageProps } from '../../types/interface';

// Styles
import './style.scss';

export const LANDINGBANNER: string = 'landingBanner';
export const LOGO: string  = 'logo';

const SVGImage: FunctionComponent<SVGImageProps> = (
  {
    className,
    href,
    type
  }: SVGImageProps): JSX.Element => {
  const IconMap = {
    [LANDINGBANNER]: (<LandingBanner />),
    [LOGO] : (<Logo />)
  };

  return (
    <>
    {href && (
      <NavLink
        className={className}
        to={href}
      >
        {IconMap[type]}
      </NavLink>
    )}
    {!href && (
      <div className={className}>
        {IconMap[type]}
      </div>
    )}
  </>
  )
};

export default SVGImage;
