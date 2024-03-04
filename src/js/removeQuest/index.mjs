import {
    renderListQuest
} from "../renderListQuest/index.mjs";

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

            quest.parentNode?.removeChild(quest);
            renderListQuest('re-render');
        })
    })
}

function switchAtribute(attributo, index, element, object_all_quest) {
    const att_PartInit = {
        li: element.li.id.split('-')[0],
        buttonChecked: element.buttonChecked[attributo].split('-')[0],
        spanMessage: element.spanMessage[attributo].split('-')[0],
        buttonClose: element.buttonClosed[attributo].split('-')[0],
        iconClose: element.iconsClosed[attributo].split('-')[0]
    }


    object_all_quest[index].li.id = `${att_PartInit.li}-${index+1}`;
    object_all_quest[index].buttonChecked[attributo] = `${att_PartInit.buttonChecked}-${index+1}`;
    object_all_quest[index].spanMessage[attributo] = `${att_PartInit.spanMessage}-${index+1}`;
    object_all_quest[index].buttonClosed[attributo] = `${att_PartInit.buttonClose}-${index+1}`;
    object_all_quest[index].iconsClosed[attributo] = `${att_PartInit.iconClose}-${index+1}`;

    return object_all_quest
}