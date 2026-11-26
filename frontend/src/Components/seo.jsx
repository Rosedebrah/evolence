import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, path = '', noindex = false }) => {
  const url = `https://evolence.co.ke${path}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  )
}

export default SEO