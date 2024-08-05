interface DocumentIconProps {
  height: string;
  width: string;
  color: string;
}

const DocumentIcon = ({ width, height, color }: DocumentIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.4317 34.3125H16.9917C16.1637 34.3125 15.4917 33.6405 15.4917 32.8125C15.4917 31.9845 16.1637 31.3125 16.9917 31.3125H31.4317C32.2597 31.3125 32.9317 31.9845 32.9317 32.8125C32.9317 33.6405 32.2597 34.3125 31.4317 34.3125Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.4317 25.9395H16.9917C16.1637 25.9395 15.4917 25.2675 15.4917 24.4395C15.4917 23.6115 16.1637 22.9395 16.9917 22.9395H31.4317C32.2597 22.9395 32.9317 23.6115 32.9317 24.4395C32.9317 25.2675 32.2597 25.9395 31.4317 25.9395Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.5012 17.5859H16.9912C16.1632 17.5859 15.4912 16.9139 15.4912 16.0859C15.4912 15.2579 16.1632 14.5859 16.9912 14.5859H22.5012C23.3292 14.5859 24.0012 15.2579 24.0012 16.0859C24.0012 16.9139 23.3292 17.5859 22.5012 17.5859Z"
        fill={color}
      />
      <mask
        id="mask0_4_448"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="6"
        y="4"
        width="37"
        height="41"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 4.36523H42.3294V44.1848H6V4.36523Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_4_448)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.8175 7.36523L16.4395 7.37323C11.7835 7.40123 8.99951 10.2812 8.99951 15.0792V33.4712C8.99951 38.3012 11.8095 41.1852 16.5115 41.1852L31.8895 41.1792C36.5455 41.1512 39.3295 38.2672 39.3295 33.4712V15.0792C39.3295 10.2492 36.5215 7.36523 31.8175 7.36523ZM16.5135 44.1852C10.2255 44.1852 5.99951 39.8792 5.99951 33.4712V15.0792C5.99951 8.61323 10.0935 4.41123 16.4295 4.37323L31.8155 4.36523H31.8175C38.1055 4.36523 42.3295 8.67123 42.3295 15.0792V33.4712C42.3295 39.9352 38.2355 44.1392 31.8995 44.1792L16.5135 44.1852Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
export default DocumentIcon;
