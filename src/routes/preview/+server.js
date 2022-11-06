import { redirect } from '@sveltejs/kit'
import { createClient } from '$lib/prismicio'

export const get = async ({ request }) => {
  const client = createClient({ request })

  const url = await client.resolvePreviewURL({
    defaultURL: '/',
  })

  throw redirect(307, url)
}
