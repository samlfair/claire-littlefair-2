import { createClient } from '$lib/prismicio'

export async function load({ fetch }) {
  const client = createClient({ fetch })

  const config = await client.getSingle('config')

  return {
    config,
  }
}
