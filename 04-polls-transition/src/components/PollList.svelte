<script>
    // There is a more transition
    import { fade, slide, scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    // import { onMount, onDestroy } from 'svelte';
    import store from '../store/store.js';
    import PollDetails from './PollDetails.svelte';
    // First Method
    // export let polls = [];

    // const unsub = store.subscribe((data)=> {
    //     polls = data;
    // });

    // // More LIFECYCLE HOOKS from documentation
    // onMount(()=> {
    //     // Maybe get data from a db
    //     console.log('component mounted');
    // });

    // onDestroy(()=> {
    //     // unsub from store
    //     console.log('component destroyed');
    //     unsub();
    // });

    // Second method is just using $ sign
</script>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
</style>
<!-- We only use transition on HTML elements, not custom element -->
<div class="poll-list">
    {#each $store as poll (poll.id)}
    <!-- pipe local says just transition in current svelte file, if it goes outside don't transition -->
        <div in:fade out:scale|local animate:flip={{duration: 500}}>
            <PollDetails {poll} />
        </div>

        <!-- <div transition:fade>
            <PollDetails {poll} />
        </div> -->
    {:else}
        <p>Poll list is empty, please add new poll here</p>
    {/each}
</div>