interface ClockIconProps {
  height: string;
  width: string;
  color: string;
}

const ClockIcon = ({ width, height, color }: ClockIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 44.3652C12.9543 44.3652 4 35.4108 4 24.3652C4 13.3195 12.9543 4.36523 24 4.36523C35.0456 4.36523 44 13.3195 44 24.3652C44 35.4108 35.0456 44.3652 24 44.3652ZM24 40.3652C32.8366 40.3652 40 33.2018 40 24.3652C40 15.5287 32.8366 8.36523 24 8.36523C15.1634 8.36523 8 15.5287 8 24.3652C8 33.2018 15.1634 40.3652 24 40.3652ZM26 24.3652H34V28.3652H22V14.3652H26V24.3652Z"
        fill={color}
      />
    </svg>
  );
};
export default ClockIcon;
