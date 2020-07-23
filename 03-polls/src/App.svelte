<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollList from './components/PollList.svelte';

	//tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';

	const tabChange = (e) => {
		activeItem = e.detail;
	}

	// Polls
	let polls = [
		{
			id: 1,
			question: 'Sun or Moon?',
			answerA: 'Sun',
			answerB: 'Moon',
			votesA: 4,
			votesB: 2
		},
		{
			id: 2,
			question: 'Do your relatives work at XacBank?',
			answerA: 'Yes',
			answerB: 'No',
			votesA: 15,
			votesB: 9
		}
	]

	const handleAddPoll = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];
		console.log(polls);
		activeItem = 'Current Polls';
	}

	const handleVote = (e) => {
		const { option, id } = e.detail;

		let copiedPolls = [...polls];
		let upvotedPoll = copiedPolls.find((poll) => poll.id == id);

		if(option === 'a'){
			upvotedPoll.votesA++;
		}
		if(option === 'b'){
			upvotedPoll.votesB++;
		}
		polls = copiedPolls;
	}
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
		<PollList {polls} on:vote={handleVote} />
	{:else}
		<CreatePollForm on:addPoll={handleAddPoll}/>
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>