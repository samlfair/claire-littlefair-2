import { error } from '@sveltejs/kit'
import { createClient } from '$lib/prismicio'

export async function load({ request }) {
  const client = createClient({ request })

  const document = await client.getByUID('page', 'homepage')

  if (document) {
    return { document }
  }

  throw error(404, 'Not found')
}
