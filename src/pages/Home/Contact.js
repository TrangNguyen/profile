import React from 'react';
import convert from 'htmr';
import styled from 'styled-components';
import { spacing } from '../../theme/variables';

import { Section, SectionInner } from '../../elements';

const Block = styled.div`
  p {
    margin: ${spacing.small} 0;
  }
`;

const Contact = ({ data }) => (
  <Section>
    <SectionInner>
      <Block>
        { convert(data.contents) }
      </Block>
    </SectionInner>
  </Section>
);

export default Contact;