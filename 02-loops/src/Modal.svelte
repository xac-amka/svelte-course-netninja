<script>
    // Event Modifiers 
    // once - make sure the event can only fire once (removes handler)
    // preventDefault - prevent the default action (run e.preventDefault())
    // self - only fires the event if the clicked element is the target

    export let showModal = false;
    export let isPromo = false;
</script>

{#if showModal}
<!-- Conditionaly add class -->
<!-- Event Forwarding -->
    <div class="backdrop" class:promo={isPromo} on:click|self>
        <div class="modal">
            <!-- <slot name="title"></slot>
            <p>Hey there...</p> -->
            <slot></slot>
        </div>
    </div>
{/if}

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.8);
    }

    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: #fff;
    }
    .promo .modal{
        background: crimson;
        color: #fff;
    }
</style>