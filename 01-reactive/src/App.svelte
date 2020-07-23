<script>
	let firstname = 'George';
	let lastname = 'Wakanda';
	let favColor = 'purple';

	$: fullname = `${firstname} ${lastname}`;
	$: {
		console.log(favColor)
		console.log(fullname)
	}

	const handleClick = () => {
		favColor = 'green';
	}

	const handleInput = (e) => {
		favColor = e.target.value;
	}

</script>

<main>
	<!-- <h1>Hello {name}!</h1> -->
	<!-- <p>Your favourite color is <span style="color: {favColor}"> {favColor} </span></p> -->
	<!-- <button on:click={ handleClick }>Change Color</button> -->
	<!-- For One Way Binding -->
	<!-- <input type="text" on:input={handleInput} value={favColor}> -->
	<!-- For Two Way Binding -->
	<p>{fullname} - favourite color is {favColor}</p>
	<input type="text" bind:value={firstname}>
	<input type="text" bind:value={lastname}>
	<input type="text" bind:value={favColor}>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>