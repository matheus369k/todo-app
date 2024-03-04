import {
    createrDomElement
} from "../createrQuest/createElements/index.mjs";
import {
    removeElemetsQuest
} from "../removeQuest/index.mjs";
import {
    checkedQuest
} from "../statusComplet/addRemove/index.mjs";

export function renderListQuest(action) {
    if (localStorage.listQuests) {

        const object_all_quest = JSON.parse(localStorage.listQuests);
        const list_all_quest = document.querySelectorAll('#list_quest>li');

        if (action == 're-render') {
            list_all_quest.forEach(element => {
                element.parentNode?.removeChild(element);
            })
        }

        for (const quest of object_all_quest) {

            if (document.getElementById(quest.li.id)) continue;

            Object.values(quest).map(element => {
                const fother = document.getElementById(element.dad);

                createrDomElement(
                    element.tagName,
                    fother,
                    element.id,
                    element.style,
                    element.url,
                    element.text,
                    element.name
                );
            });
        }
        document.getElementById('countquest').innerHTML = `${object_all_quest.length} items left`
        removeElemetsQuest();
        checkedQuest();
    }
}