const index = () => (
  <svg
    role="img"
    width={"100%"}
    height={"100%"}
    aria-labelledby="loading-aria"
    viewBox="0 0 365 240"
    preserveAspectRatio="none"
  >
    <title id="loading-aria">{"Loading..."}</title>
    <rect
      x={0}
      y={0}
      width="100%"
      height="100%"
      clipPath="url(#clip-path)"
      style={{
        fill: 'url("#fill")',
      }}
    />
    <defs>
      <clipPath id="clip-path">
        <rect x={0} y={0} rx={5} ry={5} width={365} height={210} />
        <rect x={0} y={225} rx={5} ry={5} width={220} height={15} />
      </clipPath>
      <linearGradient id="fill">
        <stop offset={0.599964} stopColor="#353535" stopOpacity={1}>
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset={1.59996} stopColor="#444444" stopOpacity={1}>
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset={2.59996} stopColor="#353535" stopOpacity={1}>
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
    </defs>
  </svg>
);

export default index;