<script>

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import store from '../store/store.js';
    import Button from '../shared/Button.svelte';

    let fields = {
        question: '',
        answerA: '',
        answerB: '',
    }

    let errors = {
        question: '',
        answerA: '',
        answerB: '',
    }

    let valid = false;

    const handleSubmit = () => {
        valid = true;

        // Validate question
        if(fields.question.trim().length < 5){
            valid = false;
            errors.question = 'Question must be at least 5 characters long';
 
        }else{
            errors.question = '';
        }
        // Validate answer a
        if(fields.answerA.trim().length < 1){
            valid = false;
            errors.answerA = 'Answer A cannot be empty';
        }else{
            errors.answerA = '';
        }
        // Validate answer b
        if(fields.answerB.trim().length < 1){
            valid = false;
            errors.answerB = 'answer B cannot be empty';
        }else{
            errors.answerB = '';
        }

        // add new Poll
        if(valid){
            // console.log('valid', fields);
            let poll = {
                ...fields,
                votesA: 0, 
                votesB: 0,
                id: Math.random()
            }
            // Save poll to store
            store.update(currentPolls => {
                return [poll, ...currentPolls];
            })
            dispatch('addPoll');
        }
    }

</script>

<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field {
        margin: 18px auto;
    }
    input {
        width: 100%;
        border-radius: 6px;
    }
    label {
        margin: 10px auto;
        text-align: left;
    }
    .error {
        font-weight: bold;
        font-size: 12px;
        color: #d91b42;
    }
</style>    

<form on:submit|preventDefault={handleSubmit}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="error"> {errors.question} </div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={fields.answerA}>
        <div class="error"> {errors.answerA} </div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" bind:value={fields.answerB}>
        <div class="error"> {errors.answerB} </div>
    </div>
    <Button type="secondary" inverse={false} flat={true} >Add Poll</Button>
</form>