import SVGImage, { LANDINGBANNER } from "../../components/svg";
import CardGroup from "../../components/cardGroup";
import './style.scss';

const Landing = () => {

  return (
    <>
      <SVGImage className="svg-icon svg-icon__banner" type={LANDINGBANNER} />
      <CardGroup />
    </>
  );
};

export default Landing;
