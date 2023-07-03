import Card from './card';
import data from './data.json';

const CardGroup = () => {
    const cards = data.map(card => (
        <Card
            cta={card.cta}
            icon={card.icon}
            text={card.text}
            title={card.title}
        />
    ));
    return (
        <div className="cards">{cards}</div>
    );
}

export default CardGroup;