import {
    AddElementQuest
} from "./createrQuest/addQuest/index.mjs";
import {
    checkedQuest
} from './addRemoveStatusComplet/index.mjs';

const btnSubmit = document.getElementById('btn_submit');

// criando o evento de ativação....
btnSubmit.addEventListener('click', (e) => {
    AddElementQuest(e)
})

checkedQuest()