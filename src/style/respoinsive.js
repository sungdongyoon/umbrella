const size = {
  iphone12Pro: "392px",
  mobile: "768px",
  tablet: "1024px",
  laptop: "1400px",
}

const responsive = {
  iphone12Pro: `(max-width: ${size.iphone12Pro})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
}

export default responsive;