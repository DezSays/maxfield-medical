import SVGImage, { LANDINGBANNER } from "../../components/svg";
import './style.scss';

const Landing = () => {
  return (
    <>
      <SVGImage className="svg-icon svg-icon__banner" type={LANDINGBANNER} />
    </>
  );
};

export default Landing;
