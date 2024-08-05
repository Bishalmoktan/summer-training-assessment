interface ProjectIconProps {
  height: string;
  width: string;
  color: string;
}

const ProjectIcon = ({ width, height, color }: ProjectIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4952 32.1453L33.7793 11.861L30.9509 9.03252L10.6667 29.3169V32.1453H13.4952ZM15.152 36.1453H6.66675V27.6599L29.5367 4.78988C30.3179 4.00884 31.5841 4.00884 32.3651 4.78988L38.0221 10.4467C38.8031 11.2278 38.8031 12.4941 38.0221 13.2752L15.152 36.1453ZM6.66675 40.1453H42.6667V44.1453H6.66675V40.1453Z"
        fill={color}
      />
    </svg>
  );
};
export default ProjectIcon;
