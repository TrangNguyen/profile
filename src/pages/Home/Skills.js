import React from 'react';
import convert from 'htmr';
import styled from 'styled-components';
import font from '../../theme/font';
import color from '../../theme/color';
import { spacing } from '../../theme/variables';

import { Section, SectionInner, RoundImage } from '../../elements';

const Current = styled.div`
  margin: ${spacing.small} 0;
`;

const Past = styled.div`
  p {
    margin: ${spacing.small} 0;
    font-weight: ${font.regular};
    color: ${color.gray}
  }
`;

const Skills = ({ data }) => (
  <Section>
    <SectionInner>
      <Current>
        <RoundImage src={data.icon.src} />
      </Current>
      <Current>
        { data.current }
      </Current>
      <Past>
        { convert(data.contents) }
      </Past>
    </SectionInner>
  </Section>
)

export default Skills;