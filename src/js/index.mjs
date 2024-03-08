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

import {
    checkedQuest
} from "./statusComplet/index.mjs";

const element_select_all = document.getElementById('btn_select_all');
const filter_elements = document.querySelectorAll('[name="filter-container"]>li');
const remove_all_complet_element = document.getElementById('btn-remove-all-complet');
const btn_switch_themer = document.getElementById('btn-switch-themer');

window.addEventListener('load', () => {
    renderListQuest();
    detectedThemer(btn_switch_themer.childNodes[1]);
    removeHidderIconclosed();
    removeElemetsQuest();
    checkedQuest();
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

filter_elements.forEach(filter => {
    filter.addEventListener('click', () => {
        filterQuest(filter)
    })
})

remove_all_complet_element.addEventListener('click', () => {
    deleteAllComplet();
})

btn_switch_themer.addEventListener('click', () => {
    switchThemer(btn_switch_themer.childNodes[1]);
})

window.addEventListener('resize', () => removeHidderIconclosed())

function removeHidderIconclosed() {
    const hider_close_btn = document.querySelectorAll('#list_quest>li');

    if (window.innerWidth < 640) {

        hider_close_btn.forEach(element => {
            element.childNodes[2].classList.remove('invisible');
        });

    } else {
        const element_closed = document.getElementsByClassName('invisible');

        hider_close_btn.forEach(element => {
            element.childNodes[2].classList.add('invisible');
        });
    }
}