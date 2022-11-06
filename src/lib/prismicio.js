import * as prismic from '@prismicio/client'

// Repository name
export const repositoryName = 'clairelittlefair'

const defaultParams = {
  fetchLinks: 'theme.color',
}

const routes = [
  {
    type: 'page',
    path: '/:uid',
  },
  {
    type: 'page',
    uid: 'homepage',
    path: '/',
  },
]

export const createClient = ({ request, fetch } = {}) => {
  const client = prismic.createClient(repositoryName, {
    fetch,
    defaultParams,
    routes,
  })

  if (request) {
    client.enableAutoPreviewsFromReq(request)
  }

  return client
}

export const htmlSerializer = {
  image: ({ node }) => {
    const linkUrl = node.linkTo ? prismicH.asLink(node.linkTo) : null
    const linkTarget =
      node.linkTo && node.linkTo.target
        ? `target="${node.linkTo.target}" rel="noopener"`
        : ''
    const img = `<img height=${node.dimensions.height} width=${
      node.dimensions.width
    } src="${node.url}" alt="${node.alt ? node.alt : ''}" copyright="${
      node.copyright ? node.copyright : ''
    }" />`

    return linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img
  },
}
