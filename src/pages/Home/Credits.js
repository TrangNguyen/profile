import React from 'react';
import convert from 'htmr';
import styled from 'styled-components';
import { spacing } from '../../theme/variables';

import { Section, SectionInner } from '../../elements';

const Block = styled.div`
  margin-top: ${spacing.small};
  font-size: 12px;
  dt {
    margin-top: ${spacing.medium}
  }
  dd {
    margin-top: ${spacing.small};
    margin-left: 0;
  }
`;


const Credits = ({ data }) => (
  <Section>
    <SectionInner>
      <Block>{convert(data.contents)}</Block>
      <Block>&copy; Trang Nguyen 2018</Block>
    </SectionInner>
  </Section>
)

export default Credits;