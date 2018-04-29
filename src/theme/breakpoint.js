const breakpoints = {
  phone: 550,
  tablet: 834,
  desktop: 1000,
};

const breakpoint = (size, css) => `
  @media (min-width: ${breakpoints[size]}px) {
    ${css}
  }
`;

export { breakpoints };

export default breakpoint;