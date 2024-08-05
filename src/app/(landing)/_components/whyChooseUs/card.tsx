interface IconProps {
  height: string;
  width: string;
  color: string;
}

interface cardProps {
  id: number;
  title: string;
  description: string;
  Icon: React.FC<IconProps>;
}

const Card = ({ title, description, Icon }: cardProps) => {
  return (
    <div className="bg-secondary px-6 py-8 space-y-2 rounded-md">
      <Icon width="47" height="47" color="#3940A0" />
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="font-extralight">{description}</p>
    </div>
  );
};
export default Card;
