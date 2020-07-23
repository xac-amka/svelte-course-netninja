<script>
    import { createEventDispatcher } from 'svelte';

    let dispatch = createEventDispatcher();

    let name;
    let favColor;
    let age;

    // let motivating = false;
    // let leadership = false;
    // let analysing = false;

    let skills = [];

    const handleSubmit = () => {
        const person = {
            name,
            favColor,
            age,
            skills,
            id: Math.random() // Just in case
        }
        dispatch('addPerson', person);
        // console.log(name, favColor, age, skills);
    }
</script>

<style>

</style>
    
<!-- FORM submitting -->
<form on:submit|preventDefault={handleSubmit}>
    <!-- INPUT:TEXT binding -->
    <input type="text" placeholder="name" bind:value={name}>
    <!-- <input type="text" placeholder="favourite color" bind:value={favColor}> -->
    <!-- INPUT:NUMBER binding -->
    <input type="number" placeholder="age" bind:value={age}>
    <label>Skills:</label>
    <!-- <input type="checkbox" bind:checked={motivating}>Motivating<br>
    <input type="checkbox" bind:checked={leadership}>Leadership<br>
    <input type="checkbox" bind:checked={analysing}>Analysing<br> -->
    
    <!-- INPUT:CHECKBOX binding -->
    <input type="checkbox" bind:group={skills} value="motivating">Motivating<br>
    <input type="checkbox" bind:group={skills} value="leadership">Leadership<br>
    <input type="checkbox" bind:group={skills} value="analysing">Analysing<br>
    <label>Favorite Color:</label>
    <!-- INPUT:SELECT binding -->
    <select bind:value={favColor}>
        <option value="black">black</option>
        <option value="purple">purple</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
    </select>
    <button>Add person</button>
</form>