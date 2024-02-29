import createrQuest from './createrQuest/index.mjs';

const btnSubmit = document.getElementById('btn_submit');
const father = document.getElementById('list_quest')

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    createrQuest(father)
})