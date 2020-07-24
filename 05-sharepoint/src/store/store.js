import { writable } from 'svelte/store';

const store = writable([
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
]);

export default store;