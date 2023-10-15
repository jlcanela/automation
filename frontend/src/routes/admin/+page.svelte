<script>
    import { enhance } from '$app/forms';
    export let form;
    export let data;
    export let currentKey;

    /*
    let formData = { orderId: '1', productId: "1" };

    function showCreateReview(param) {
        currentKey = param;
        console.log("createReview:", param);
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
            keyboard: false
            })
        myModal.show();
    }
    */
    async function createReview() {
        const response = await fetch('/admin/review', {
            method: 'POST',
            body: JSON.stringify({ create: currentKey }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("review created");
        return response;
    }
</script>

<h1 class='text-center'>Admin</h1>

<div class="card" style="width: 90%;margin: 1rem;padding: 1rem">

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Key</th>
                <th scope="col">Name</th>
                <th scope="col">Version</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        {#each data.processes as definition }
        <tbody>
            <tr>
                <td>{definition.key}</td>
                <td>{definition.name}</td>
                <td>{definition.version}</td>
                <td>
                    <form action="?/createStep"  method="POST"  use:enhance>
                        <input type="hidden" name="definition-id" value={definition.key}>
                        <button type="submit" class="btn btn-primary btn-sm">
                            Create
                        </button>
                    </form>
                </td>
            </tr>
        </tbody>
      {/each}
</table>
</div>

<!--

    <div class="card" style="width: 18rem;margin: 1rem;padding: 1rem">
        <form action="?/createOrder" method="POST"  use:enhance>
            
            <h2>Create Order</h2>
            <p><strong>Simulate order creation when received from the customer website</strong></p>
            <div class="mb-3">
                <label for="orderId" class="form-label">order-id</label>
                <input type="text" class="form-control" name="orderId" id="orderId" bind:value={formData.orderId} required>
            </div>
            <div class="mb-3">
                <label for="productId" class="form-label">product-id</label>
                <input type="text" class="form-control" name="productId" id="productId" bind:value={formData.productId} required>
            </div>
            <button class="btn btn-primary">Create</button>
        </form>
    </div>
-->

{#if form?.success}
<div class="alert alert-success alert-dismissible fade show" role="alert">
    Successfully created the order
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{/if}

<!-- Modal -->
<!--
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Review</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {currentKey}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" on:click={() => createReview("arg1", "arg2")}>Create</button>
                </div>
            </div>
        </div>
    </div> 
-->