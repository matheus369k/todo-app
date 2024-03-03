import {
    AddElementQuest,
} from "./createrQuest/index.mjs";

import {
    AddStatusSelectAllQuerys
} from "./statusComplet/addRemoveAll/index.mjs";

import {
    renderListQuest
} from './renderListQuest/index.mjs'

import './statusComplet/addRemove/index.mjs';

const element_select_all = document.getElementById('btn_select_all');

window.addEventListener('load', renderListQuest())

document.getElementById('btn_submit').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    AddElementQuest();

    AddStatusSelectAllQuerys('', element_select_all)
});

element_select_all.addEventListener('click', () => {
    AddStatusSelectAllQuerys('toggleAll', element_select_all)
})