import { error } from '@sveltejs/kit';
import { Client, Environment } from 'square';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').RequestHandler} */
export async function GET({}) {
	const client = new Client({
		accessToken: env.SQUARE_ACCESS_TOKEN
	});

	const { catalogApi } = client;

	const {
		result: { objects }
	} = await catalogApi.listCatalog(undefined, 'ITEM');

	const objectIds = objects.map((object) => object.id);

	const {
		result: { relatedObjects }
	} = await catalogApi.batchRetrieveCatalogObjects({
		objectIds,
		includeRelatedObjects: true
	});

	console.log(relatedObjects);

	const imageURLs = new Object();

	relatedObjects.forEach((object) => {
		if (object.type === 'IMAGE') {
			Object.assign(imageURLs, {
				[object.id]: object.imageData.url
			});
		}
	});

	const results = objects.map((item) => {
		const {
			id,
			updatedAt,
			itemData: {
				name: title,
				description,
				imageIds: [image_id]
			}
		} = item;

		const last_update = new Date(updatedAt).getTime();
		const image_url = imageURLs[image_id];

		return {
			id,
			title,
			description,
			image_url,
			last_update,
			blob: {
				title,
				description,
				image_url
			}
		};
	});

	const data = {
		results_size: objects.length,
		results
	};

	const string = JSON.stringify(data);

	return new Response(string);
}
