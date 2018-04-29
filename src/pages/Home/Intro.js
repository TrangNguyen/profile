import React from 'react';
import convert from 'htmr';
import styled from 'styled-components';

import { RoundImage, H1, Section, SectionInner } from '../../elements';

const Intro = ({ intro }) => (
  <Section>
    <SectionInner>
      <RoundImage src={intro.content.image.src} />
      <H1>
        { convert(intro.contents) }
      </H1>
    </SectionInner>
  </Section>
)

export default Intro;