<script>
import { enhance } from '$app/forms';
export let data;

</script>

<h1 class='text-center'>Reviews</h1>

<div class="card" style="width: 90%;margin: 1rem;padding: 1rem">

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Assignee</th>
                <th scope="col">Task Definition Key</th>
                <th scope="col">Form Key</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        {#each data.reviews as review (review.processInstanceId) }
        <tbody>
            <tr>
                <td>{review.id}</td>
                <td>{review.name}</td>
                <td>{review.assignee}</td>
                <td>{review.taskDefinitionKey}</td>
                <td>{review.formKey}</td>
                <td>
                    <form action="?/completeTask" method="POST"  use:enhance>
                        <input type="hidden" name="task-id" value="{review.id}">
                    <button type="submit" class="btn btn-primary btn-sm">
                        Complete
                    </button>
                    </form>
                </td>
            </tr>
        </tbody>
      {/each}
</table>
</div>
