
export const url = "http://localhost:8082/engine-rest";

export async function getEngine(fetch) {
    const res = await fetch(`${url}/engine`);
    const [item, ] = await res.json();
    return item;
}

export async function getProcessDefinitions(fetch) {
    const res = await fetch(`${url}/engine/default/process-definition?latestVersion=true`);
    const processes = await res.json();
    return processes;
}

export async function complete(fetch, taskId: string | null) {
    if (!taskId) {
        console.log("no task id");
        return;
    }

    const response = await fetch(`${url}/task/${taskId}/complete`, {
        method: 'POST',
        body: JSON.stringify({ variables: { amount: { "value": 29.99 }, reviewer: {"value": "john"} } }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const text = response.text();
    return text;
}


export async function getReviews(fetch) {
    const res = await fetch(`${url}/engine/default/task?processDefinitionKeyIn=ReviewInvoice`);
    const processes = await res.json();
    return processes;
}

export async function createInstance(fetch, processDefinitionKey: string) {
    const resp = await fetch(`${url}/engine/default/process-definition/key/${processDefinitionKey}/start`, {
        method: 'POST',
        //body: JSON.stringify({ create: j.create }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const text = resp.text();
    return text;
}
