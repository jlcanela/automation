import { redirect } from "@sveltejs/kit";
import { getEngine, getProcessDefinitions, createInstance } from "$lib/task-service";

export const actions = {
    /*createOrder: async ({ request }) => {
        const formData = await request.formData();
        const orderId = formData.get('orderId');
        const productId = formData.get('productId');
        console.log(orderId, productId);
        return { success: true };
    },*/
    createStep: async ({ request }) => {
        const formData = await request.formData();
        const definitionId = formData.get('definition-id');
        console.log(`createReview ${definitionId}`);
        await createInstance(fetch, definitionId);
        throw redirect(303, '/reviews');
        //return { success: true };
    },
};
  
export async function load({ fetch, params }) {
    return {
        engine: await getEngine(fetch),
        processes: await getProcessDefinitions(fetch),
		post: {
			title: `Title goes here`,
			content: `Content for goes here`
		}
	};
}
