const width = 1200;
const height = 628;

export function openGraph(heading: string) {
  if (heading === 'Title') {
    return '/social.png';
  }

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="#13151a"/>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(136, 58, 234);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(224, 204, 250);stop-opacity:1" />
    </linearGradient>
    <text
      x="50%"
      y="50%"
      font-family="system-ui, sans-serif"
      font-size="64"
      font-weight="bold"
      fill="url(#gradient)"
      text-anchor="middle"
      dominant-baseline="middle"
    >${heading}</text>
  </svg>
  `;

  const base64Svg = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64Svg}`;
}
