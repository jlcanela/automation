import { redirect } from "@sveltejs/kit";
import { getEngine, getProcessDefinitions, createInstance } from "$lib/task-service";

export const actions = {
    createStep: async ({ request }) => {
        const formData = await request.formData();
        const definitionId = formData.get('definition-id');
        const resp = await createInstance(fetch, definitionId);
        throw redirect(303, '/reviews');
    },
};
  
export async function load({ fetch }) {
    return {
        engine: await getEngine(fetch),
        processes: await getProcessDefinitions(fetch),
		post: {
			title: `Title goes here`,
			content: `Content for goes here`
		}
	};
}
