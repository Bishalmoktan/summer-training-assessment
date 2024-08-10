interface CodeIconProps {
  height: string;
  width: string;
  color: string;
}

const CodeIcon = ({ width, height, color }: CodeIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4_1648)">
        <path
          d="M28.5 14.3652L21.9003 20.965L20.2504 19.3149L25.2002 14.3652L20.2504 9.41549L21.9003 7.76558L28.5 14.3652ZM3.79983 14.3652L8.74958 19.3149L7.09966 20.965L0.5 14.3652L7.09966 7.76558L8.74958 9.41549L3.79983 14.3652ZM11.9199 24.8652H9.43677L17.0802 3.86523H19.5632L11.9199 24.8652Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_4_1648">
          <rect
            width={width}
            height={height}
            fill={color}
            transform="translate(0.5 0.365234)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CodeIcon;
