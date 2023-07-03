import { CardProps } from "../../../types/interface";
import './style.scss';

const Card = ({ cta, icon, text, title }: CardProps): JSX.Element => {
  return (
    <div className="cards__card card">
      <div className="card__top">
        <p>{icon}</p>
        <p>{title}</p>
        <p>{text}</p>
      </div>
      <div className="card__bottom">
        <button>{cta}</button>
      </div>
    </div>
  );
};

export default Card;
