interface ImpactItemProps {
  title: string;
  info: string;
}

const ImpactItem: React.FC<ImpactItemProps> = ({ title, info }) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl md:text-3xl font-bold tracking-wider">{title}</h3>
      <p className="text-xs text-[#94A3B8]">{info}</p>
    </div>
  );
};

export default ImpactItem;
