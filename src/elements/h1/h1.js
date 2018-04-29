import styled from 'styled-components';

import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';
import { spacing } from '../../theme/variables';

const StyledH1 = styled.h1`
  font-size: 24px
  font-weight: ${font.bold}
  margin-bottom: ${spacing.medium}
  ${breakpoint('tablet', `
    font-size: 36px;
  `)}
  ${breakpoint('desktop', `
    font-size: 38px;
  `)}
`;

export default StyledH1;