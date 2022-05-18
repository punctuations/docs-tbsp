export default {
  github: 'https://github.com/punctuations/tablespoon',
  docsRepositoryBase: 'https://github.com/punctuations/docs-tbsp/blob/main',
  titleSuffix: ' – tbsp',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Tablespoon</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        A cli tool to generate semantic commit messages.
      </span>
    </>
  ),
  head: (
    <>
      <script async src="https://cdn.splitbee.io/sb.js" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="A cli tool to generate semantic commit messages."
      />
      <meta
        name="og:description"
        content="A cli tool to generate semantic commit messages."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://tbsp.coffee/terminal.png" />
      <meta name="twitter:site:domain" content="docs.tbsp.coffee" />
      <meta name="twitter:url" content="https://docs.tbsp.coffee" />
      <meta name="og:title" content="Tablespoon documentation" />
      <meta name="og:image" content="/og.png" />
      <meta name="apple-mobile-web-app-title" content="Tablespoon" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: (
    <>
      MIT {new Date().getFullYear()} ©{' '}
      <a href="https://dont-ping.me" className="font-normal underline">
        Matt
      </a>
      .
    </>
  ),
  unstable_faviconGlyph: '☕️',
}
