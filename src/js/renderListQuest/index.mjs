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
        const url_checked_icon = './src/assets/icon-check.svg';
        const list_all_quest = document.querySelectorAll('#list_quest>li');

        if (action == 're-render') {
            list_all_quest.forEach(element => {
                element.parentNode?.removeChild(element);
            })
        }

        for (const quest of object_all_quest) {

            if (document.getElementById(quest.li.id)) continue;

            Object.values(quest).map((element, index) => {
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

                if (element.status) {
                    const fotherICon = document.getElementById(element.id);

                    fotherICon.setAttribute('data-status', 'active')

                    console.log(element.status)
                    createrDomElement(
                        'img',
                        fotherICon,
                        `icon_checked_index-${index+1}`,
                        '',
                        url_checked_icon
                    );

                }
            });
        }
        removeElemetsQuest();
        checkedQuest();
        document.getElementById('countquest').innerHTML = `${object_all_quest.length} items left`
    }
}