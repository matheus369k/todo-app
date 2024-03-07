import {
    renderListQuest
} from "../../renderListQuest/index.mjs";

import {
    switchAtribute
} from "../switchAttributes/index.mjs";

export function deleteAllComplet() {

    if (!localStorage.listQuests) return;

    let object_all_quest = JSON.parse(localStorage.listQuests);

    console.log(object_all_quest)

    object_all_quest = object_all_quest.filter(element => !element.buttonChecked.status);

    object_all_quest.forEach((element, index) => {
        object_all_quest = switchAtribute('id', index, element, object_all_quest, );
        object_all_quest = switchAtribute('dad', index, element, object_all_quest, );
    });

    localStorage.setItem('listQuests', JSON.stringify(object_all_quest));
    renderListQuest('re-render');
}