import {
    renderListQuest
} from "../../renderListQuest/index.mjs";

import {
    switchAtribute
} from "../switchAttributes/index.mjs";

export function removeElemetsQuest() {
    const all_quest = document.getElementsByName('buttons_close');

    all_quest.forEach(element => {
        element.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            const id = element.parentNode.getAttribute('id')
            const idIndex = parseInt(id.split('-')[1]);
            const quest = document.getElementById(id);
            let object_all_quest = JSON.parse(localStorage.listQuests);

            object_all_quest = object_all_quest.filter(object_quest => id != object_quest.li.id);

            object_all_quest.forEach((element, index) => {

                if (idIndex < parseInt(element.li.id.split('-')[1])) {

                    object_all_quest = switchAtribute('id', index, element, object_all_quest);
                    object_all_quest = switchAtribute('dad', index, element, object_all_quest);

                }
            })

            localStorage.setItem('listQuests', JSON.stringify(object_all_quest))

            renderListQuest('re-render');
        })
    })
}