//import { invalidateAll } from '$app/navigation';
import { getReviews } from "$lib/task-service";

//const engineUrl = "http://localhost:8082/camunda/api/engine";
const engineUrl = "http://localhost:8082/engine-rest";
// /default/process - definition

export const actions = {
    complete: async ({ request }) => {
      const formData = await request.formData();
      const taskId = formData.get('review-id');
      await fetch(`${engineUrl}/task/${taskId}/complete`, {
            method: 'POST',
            body: JSON.stringify({ variables: {} }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return { success: true };
    },
};
  
export async function load({ fetch, params }) {
	
    const url = engineUrl; 
    const reviews = await getReviews(fetch);

    return {
        reviews,
		post: {
			title: `Title goes here`,
			content: `Content for goes here`
		}
	};
}

