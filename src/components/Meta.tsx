import React from 'react';

// eslint-disable-next-line react/function-component-definition
const Meta: React.FC = () => {
  return (
    <>
      <title>Danamit</title>
      <meta charSet="utf-8" />
      <meta name="author" content="Mohsen" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* KEYWORDS */}
      <meta name="title" content="Danamit" />
      <meta name="description" content="A Gamification" />
      <meta name="keywords" content="Next.js, pwa, React, HTML, CSS, JavaScript, TypeScript" />
      {/* THEMES */}
      <meta name="color-scheme" content="dark light" />
      <meta name="theme-color" content="#F3EFE0" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#18181b" media="(prefers-color-scheme: dark)" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Danamit" />
      <meta name="application-name" content="Danamit" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      {/* ICONS */}
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      {/* OG TAGS */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nextjs-pwa-template-repo.vercel.app" />
      <meta property="og:title" content="Danamit" />
      <meta property="og:description" content="My APP" />
      <meta
        property="og:image"
        content="https://nextjs-pwa-template-repo.vercel.app/icons/og-image.png"
      />
      {/* TWITTER */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@Danamit" />
      <meta property="twitter:url" content="https://nextjs-pwa-template-repo.vercel.app" />
      <meta property="twitter:title" content="The Next.js Progressive Web App Template" />
      <meta
        property="twitter:description"
        content="A Solid Foundation for Building Scalable and Efficient Progressive Web Application!"
      />
      <meta
        property="twitter:image"
        content="https://nextjs-pwa-template-repo.vercel.app/icons/og-image.png"
      />
    </>
  );
};

export default Meta;
