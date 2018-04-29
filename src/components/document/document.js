import React, { Component } from 'react';
import { any, node, object } from 'prop-types';

import gtag from '../../modules/gtag';

class Document extends Component {
  render () {
    const {
      Html, Head, Body, children, renderMeta,
    } = this.props

    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Trang Nguyen</title>
          <meta property="og:site_name" content="trangnguyen" />
          <meta property="og:title" content="Trang Nguyen" />
          <meta property="og:url" content="https://trangnguyen.de"/>
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Trang Nguyen - Berlin based software developer" />

          <script dangerouslySetInnerHTML={{ __html: gtag }} />
          {renderMeta.styleTags}
        </Head>
        <Body>{children}</Body>
      </Html>
    )
  }
};

Document.propTypes = {
  Html: any.isRequired,
  Head: any.isRequired,
  Body: any.isRequired,
  children: node.isRequired,
  renderMeta: object.isRequired
};

export default Document;