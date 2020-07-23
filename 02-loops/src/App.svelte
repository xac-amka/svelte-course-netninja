<script>
	import Modal from './Modal.svelte';
	import Form from './Form.svelte';

	let showModal = false;
	let people = [
		{ name: 'John Doe', favColor: 'green', age: 20, id: 1},
		{ name: 'Jane Doe', favColor: 'purple', age: 22, id: 2},
		{ name: 'Hela Olga', favColor: 'red', age: 23, id: 3}
	]

	const handleClick = (id) => {
		// delete the person from people
		people = people.filter((person) => person.id !== id);
	};

	const toggleModal = () => {
		showModal = !showModal;
	}

	const addPerson = (e) => {
		// console.log(e.detail);
		// people.push(e.detail);
		const person = e.detail;
		people = [person, ...people];
		// close modal
		showModal = false;
	}

	let num = 5;

</script>

<!-- EVENT forwarding -->
<Modal {showModal} on:click={toggleModal}>
	<!-- <h3>Add a New Person</h3> -->
	<Form on:addPerson={addPerson} />
	<!-- <div slot="title">
		<h3>Add a New Person</h3>
	</div> -->
</Modal>


<!-- {#if num>20}
	<p>Greater than 20</p>
{:else if num>=5}
	<p>Greater than 5</p>
{:else}
	<p>Not greater than 5</p>
{/if} -->

<main>
	<button on:click={toggleModal}>Open Modal</button>
	{#each people as person (person.id)}
		<div>
			<h4>{person.name}</h4>
			<p>{person.age} years old.</p>
			{#if person.favColor === 'purple'}
				<p><strong>MASTER COLORER</strong></p>
			{/if}
			<p>{person.name} likes <span style="color: {person.favColor};">{person.favColor}</span> color.</p>
			<button on:click={()=> handleClick(person.id)}>delete</button>
		</div>
	{:else}
		<p>There are no people to show...</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>