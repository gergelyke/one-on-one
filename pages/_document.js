import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {Provider as StyletronProvider} from 'styletron-react';

import {styletron} from '../helpers/styletron';
import {GA_ID} from '../helpers/ga';

export default class MyDocument extends Document {
  static getInitialProps(props) {
    const page = props.renderPage(App => props => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ));
    const stylesheets = styletron.getStylesheets() || [];
    return {...page, stylesheets};
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `,
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{__html: sheet.css}}
              media={sheet.attrs.media || ''}
              key={i}
            />
          ))}
          <style>{`
            body {
              margin: 0;
            }
          `}</style>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <React.Fragment>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          </React.Fragment>
        </body>
      </html>
    );
  }
}