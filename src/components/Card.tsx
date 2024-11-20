import { cardData } from "../constants/images";

interface CardItemProps {
  image: string;
  description: string;
}

const CardItem = ({ image, description }: CardItemProps) => (
  <div className="w-full sm:w-[360px] h-[140px] bg-gradient-to-r from-cardgradentleft to-cardgradentright shadow-md rounded-md flex justify-center items-center flex-wrap flex-col">
    <img src={image} alt={description} className="" />
    <p className="text-center mt-2 font-medium text-color3 text-sm flex w-[270px] h-[40px]">
      {description}
    </p>
  </div>
);

const Card = () => {
  const topRowCards = cardData.slice(0, 3);
  const bottomRowCards = cardData.slice(3);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Top row - 3 cards */}
      <div className="flex flex-wrap justify-center gap-7">
        {topRowCards.map((card, index) => (
          <CardItem
            key={index}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>

      {/* Bottom row - 2 cards */}
      <div className="flex flex-wrap justify-center gap-7">
        {bottomRowCards.map((card, index) => (
          <CardItem
            key={index}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
