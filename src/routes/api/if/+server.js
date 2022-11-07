import { error } from '@sveltejs/kit';
import { Client, Environment } from 'square';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').RequestHandler} */
export async function GET({}) {
	const client = new Client({
		accessToken: env.SQUARE_ACCESS_TOKEN
	});

	const { catalogApi, checkoutApi } = client;

	const {
		result: { objects: catalogObjects }
	} = await catalogApi.listCatalog(undefined, 'ITEM');

	console.log(
		catalogObjects.map(
			(object) => object.itemData.variations[0].itemVariationData.locationOverrides[0]
		)
	);

	const objectIds = catalogObjects.map((object) => object.id);

	const {
		result: { relatedObjects }
	} = await catalogApi.batchRetrieveCatalogObjects({
		objectIds,
		includeRelatedObjects: true
	});

	const imageURLs = new Object();

	relatedObjects.forEach((object) => {
		if (object.type === 'IMAGE') {
			Object.assign(imageURLs, {
				[object.id]: object.imageData.url
			});
		}
	});

	const results = catalogObjects.map((item) => {
		const {
			id,
			updatedAt,
			itemData: {
				name: title,
				description,
				imageIds: [image_id],
				variations: [
					{
						itemVariationData: {
							priceMoney: { amount, currency },
							locationOverrides: [{ soldOut }]
						}
					}
				]
			}
		} = item;

		const last_update = new Date(updatedAt).getTime();
		const image_url = imageURLs[image_id];
		const price = Number(amount);

		return {
			id,
			title,
			description,
			image_url,
			last_update,
			blob: {
				title,
				description,
				image_url,
				price,
				currency,
				soldOut
			}
		};
	});

	const data = {
		results_size: catalogObjects.length,
		results
	};

	const string = JSON.stringify(data);

	return new Response(string);
}
