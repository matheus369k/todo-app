import {
    AddElementQuest,
    createrDomElement
} from "./createrQuest/index.mjs";

import {
    AddAllStatusComplet
} from "./statusComplet/addRemoveAll/index.mjs";

import {
    renderListQuest
} from './renderListQuest/index.mjs'

import {
    styleAllSelectbtn
} from "./styleComponents/styleComponents.mjs";

import './statusComplet/addRemove/index.mjs';

const element_select_all = document.getElementById('btn_select_all');

window.addEventListener('load', renderListQuest())

document.getElementById('btn_submit').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    AddElementQuest();

    if (element_select_all.firstChild) {

        element_select_all.firstChild.remove()

        element_select_all.attr('class', styleAllSelectbtn.all_select_off);
    }
});

element_select_all.addEventListener('click', AddStatusSelectAllQuerys);

function AddStatusSelectAllQuerys(action) {
    const url_checked_icon = './src/assets/icon-check.svg';

    if (element_select_all.hasChildNodes() || action == 'remove') {

        element_select_all.firstChild.remove();

        element_select_all.setAttribute('class', styleAllSelectbtn.all_select_off);

        AddAllStatusComplet('remove');

    } else {

        AddAllStatusComplet('add');

        element_select_all.setAttribute('class', styleAllSelectbtn.all_select_on);

        createrDomElement('img', element_select_all, 'icon_all_select', '', url_checked_icon);
    }
}