import {
    AddElementQuest,
} from "./createrQuest/index.mjs";

import {
    AddStatusSelectAllQuerys
} from "./statusComplet/addRemoveAll/index.mjs";

import {
    renderListQuest
} from './renderListQuest/index.mjs'

import {
    removeElemetsQuest
} from "./removeQuest/index.mjs";
import {
    filterQuest
} from "./filterQuest/index.mjs";

const element_select_all = document.getElementById('btn_select_all');
const filter_elements = document.querySelectorAll('[name="filter-container"]>li');

window.addEventListener('load', renderListQuest())

document.getElementById('btn_submit').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    AddElementQuest();

    if (element_select_all.hasChildNodes())
        AddStatusSelectAllQuerys('', element_select_all)
});

element_select_all.addEventListener('click', () => {
    AddStatusSelectAllQuerys('toggleAll', element_select_all)
})

window.addEventListener('load', removeElemetsQuest())

filter_elements.forEach(filter => {
    filter.addEventListener('click', () => {
        filterQuest(filter)
    })
})