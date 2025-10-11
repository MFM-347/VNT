export const useSEO = ({
  title,
  description,
  image,
  url,
  type = 'website',
  siteName = 'My Awesome Site',
}: {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
  siteName?: string
}) => {
  const fullTitle = `${title} | ${siteName}`

  useSeoMeta({
    title: () => fullTitle,
    ogTitle: () => fullTitle,
    twitterTitle: () => fullTitle,

    description: () => description,
    ogDescription: () => description,
    twitterDescription: () => description,

    ogImage: () => image,
    twitterImage: () => image,
    ogUrl: () => url,
    ogType: () => type,
    ogSiteName: () => siteName,
    twitterCard: () => 'summary',
  })
}
