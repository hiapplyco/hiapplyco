import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '@/config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  noindex = false,
  schema
}) => {
  const siteTitle = title 
    ? `${title} | ${seoConfig.siteName}` 
    : seoConfig.defaultTitle;
    
  const metaDescription = description || seoConfig.defaultDescription;
  const metaKeywords = keywords || seoConfig.keywords.primary.join(', ');
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : seoConfig.siteUrl);
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle || siteTitle} />
      <meta property="og:description" content={ogDescription || metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:image" content={ogImage || seoConfig.openGraph.images[0].url} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={seoConfig.twitter.cardType} />
      <meta name="twitter:title" content={ogTitle || siteTitle} />
      <meta name="twitter:description" content={ogDescription || metaDescription} />
      <meta name="twitter:image" content={ogImage || seoConfig.openGraph.images[0].url} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="author" content={seoConfig.siteName} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Default Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(seoConfig.schemas.organization)}
      </script>
    </Helmet>
  );
};

export default SEO;