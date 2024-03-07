import {
    createrDomElement
} from "../createrQuest/createElements/index.mjs";
import {
    removeElemetsQuest
} from "../removeQuest/index.mjs";
import {
    checkedQuest
} from "../statusComplet/addRemove/index.mjs";

import {
    AddStatusSelectAllQuerys
} from "../statusComplet/index.mjs";

import {
    ThemerStyle
} from "../styleComponents/styleComponents.mjs";

import {
    toggleListQuestElemenstThemer
} from "../themer/index.mjs";

export function renderListQuest(action, filter) {

    if (!localStorage.listQuests) return;

    const object_all_quest = JSON.parse(localStorage.listQuests);
    const url_checked_icon = './src/assets/icon-check.svg';
    const list_all_quest = document.querySelectorAll('#list_quest>li');
    const all_quest = document.getElementsByName('buttons_status');
    const element_select_all = document.getElementById('btn_select_all');
    const all_list = document.querySelectorAll('#list_quest>li>[name="buttons_status"]>img');

    if (action == 're-render') {
        list_all_quest.forEach(element => {
            element.parentNode?.removeChild(element);
        })
    }

    for (const quest of object_all_quest) {

        if (document.getElementById(quest.li.id)) continue;

        if (filter == 'Active' && quest.buttonChecked.status) continue;

        if (filter == 'Completed' && !quest.buttonChecked.status) continue;

        Object.values(quest).map((element, index) => {
            const fother = document.getElementById(element.dad);

            createrDomElement(
                element.tagName,
                fother,
                element.id,
                element.style,
                element.url,
                element.text,
                element.name,
                element.alt,
                element.title,
                element.type
            );

            if (element.status) {
                const fotherICon = document.getElementById(element.id);

                fotherICon.setAttribute('data-status', 'active')

                createrDomElement(
                    'img',
                    fotherICon,
                    `icon_checked_index-${index+1}`,
                    '',
                    url_checked_icon
                );

                if (all_quest.length == all_list.length + 1 && all_list.length > 0)
                    AddStatusSelectAllQuerys('', element_select_all);
            }
        });
    }

    if (localStorage.themer == 'dark') {
        toggleListQuestElemenstThemer(
            ThemerStyle.list_quest_elements_light,
            ThemerStyle.list_quest_elements_dark
        );
    } else {
        toggleListQuestElemenstThemer(
            ThemerStyle.list_quest_elements_dark,
            ThemerStyle.list_quest_elements_light
        );
    }

    removeElemetsQuest();
    checkedQuest();
    const count_quest = document.getElementById('list_quest').childElementCount;
    document.getElementById('countquest').innerHTML = `${count_quest} items left`;
}