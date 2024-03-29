import Head from 'next/head'
import React from 'react'
interface SEOTypes {
  description: string;
  title: string;
  siteTitle: string;
  twitterCreator: string;
}
export function SEO({ description, title, siteTitle, twitterCreator }: SEOTypes) {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Hamza Erbay is a software engineer specializing in Typescript, Node.js, Python, and React development. Contact him today to build your next web application." />
      <meta name="google-site-verification" content="xHZco453ZZ0uKLF-ZrUJjaihjYavj8Tc47OzSXAmhVQ" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={twitterCreator} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link rel="icon" href="/favicon-2.ico" />
    </Head>
  )
}