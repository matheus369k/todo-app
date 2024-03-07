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
    filterQuest
} from "./filterQuest/index.mjs";

import {
    deleteAllComplet,
    removeElemetsQuest
} from "./removeQuest/index.mjs";

import {
    detectedThemer,
    switchThemer
} from "./themer/index.mjs";

const element_select_all = document.getElementById('btn_select_all');
const filter_elements = document.querySelectorAll('[name="filter-container"]>li');
const remove_all_complet_element = document.getElementById('btn-remove-all-complet');
const btn_switch_themer = document.getElementById('btn-switch-themer');

window.addEventListener('load', renderListQuest())

window.addEventListener('load', () => {
    detectedThemer(btn_switch_themer.firstChild)
})

document.getElementById('btn_submit').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    filterQuest(filter_elements[0]);
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

remove_all_complet_element.addEventListener('click', () => {
    deleteAllComplet();
})

btn_switch_themer.addEventListener('click', () => {
    switchThemer(btn_switch_themer.firstChild);
})