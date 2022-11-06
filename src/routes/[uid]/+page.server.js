import { createClient } from '$lib/prismicio'

export async function load({ request, params }) {
  const client = createClient({ request })

  const document = await client.getByUID('page', params.uid)

  if (document) {
    return { document }
  }

  throw error(404, 'Not found')
}
