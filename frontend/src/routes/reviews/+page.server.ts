import { getReviews, complete } from "$lib/task-service";

// /default/process - definition

export const actions = {
    completeTask: async ({ request }) => {
      const formData = await request.formData();
        const taskId = formData.get('task-id');
        await complete(fetch, taskId);
        return { success: true };
    },
};
  
export async function load({ fetch }) {
	
    const reviews = await getReviews(fetch);

    return {
        reviews,
		post: {
			title: `Title goes here`,
			content: `Content for goes here`
		}
	};
}

