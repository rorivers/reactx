/**
 * Copyright
 */
/* eslint-disable react/require-default-props */
import React, { PropTypes } from 'react';
import serialize from 'serialize-javascript';

function Html({
  title, description, style, scriptVendor, scriptApp, chunk, state, lang, children }) {
  return (
    <html className="no-js" lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        {style && <style id="css" dangerouslySetInnerHTML={{ __html: style }} />}
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {state && (
          <script
            dangerouslySetInnerHTML={{ __html:
            `window.APP_STATE=${serialize(state, { isJSON: true })}` }}
          />
        )}
        {scriptVendor && <script src={scriptVendor} />}
        {scriptApp && <script src={scriptApp} />}
        {chunk && <script src={chunk} />}
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string,
  scriptVendor: PropTypes.string,
  scriptApp: PropTypes.string,
  chunk: PropTypes.string,
  state: PropTypes.object,
  lang: PropTypes.string,
  children: PropTypes.string,
};

export default Html;
