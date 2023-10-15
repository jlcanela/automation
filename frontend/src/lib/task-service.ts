
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
        return;
    }

    const response = await fetch(`${url}/task/${taskId}/complete`, {
          method: 'POST',
          body: JSON.stringify({ variables: {} }),
          headers: {
              'Content-Type': 'application/json'
          }
      });
    return response;
}


export async function getReviews(fetch) {
    const res = await fetch(`${url}/engine/default/task?processDefinitionKeyIn=step1`);
    const processes = await res.json();
    //console.log(processes);
    return processes;
}

export async function createInstance(fetch, processDefinitionKey: string) {
    await fetch(`${url}/engine/default/process-definition/key/${processDefinitionKey}/start`, {
        method: 'POST',
        //body: JSON.stringify({ create: j.create }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //console.log(processes);
    //return processes;
}

//const response = await fetch(`${engineUrl}/process-definition/key/${j.create}/start`, {
//});