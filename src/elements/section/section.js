import styled from 'styled-components';

import breakpoint from '../../theme/breakpoint';
import { spacing } from '../../theme/variables';
import color from '../../theme/color';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledSectionInner = styled.div`
  max-width: 730px;
  width: 100%;
  padding: ${spacing.small} 0;
  border-bottom: 1px dotted ${color.gray};
  ${breakpoint('tablet', `
    padding: ${spacing.small} 0 ${spacing.medium};
  `)}
`;

export default StyledSection;