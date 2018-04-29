import React from 'react';
import convert from 'htmr';
import styled from 'styled-components';
import font from '../../theme/font';
import color from '../../theme/color';
import { spacing } from '../../theme/variables';

import { RoundImage, H1, Section, SectionInner } from '../../elements';

const Block = styled.div`
  margin: ${spacing.small} 0;
  dt {
    margin: ${spacing.small} 0;
  }
  dd {
    margin-top: ${spacing.small} ;
    margin-left: 0;
    font-weight: ${font.regular};
    color: ${color.gray}
  }
`;

const Past = ({ data }) => data.map((company, index) => (
  <Section key={index}>
    <SectionInner>
      <Block>
        <RoundImage src={company.icon.src} />
      </Block>
      <Block>
        { convert(company.contents) }
      </Block>
    </SectionInner>
  </Section>
));

export default Past;