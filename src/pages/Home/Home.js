import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouteData } from 'react-static';

import Layout from '../../components/layout/layout';

import { Intro, Past, Skills, Contact, Credits } from './';

export default withRouteData(({
  intro, trecker, magine, kiwi, skills, contact, credits
}) => (
  <Layout>
    <Helmet>
    </Helmet>
    <Intro intro={intro} />
    <Past data={[ trecker, magine, kiwi ]} />
    <Skills data={skills} />
    <Contact data={contact} />
    <Credits data={credits} />
  </Layout>
));