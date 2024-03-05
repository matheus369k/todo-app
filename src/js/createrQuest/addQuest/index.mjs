import {
    ButtonCheckedObjectQuest,
    ButtonClosedObjectQuest,
    IconsObjectQuest,
    LiObjectQuest,
    QuestObjectAll,
    SpanMessageObjectQuest
} from "../../createObjectQuest/index.mjs";

import {
    renderListQuest
} from "../../renderListQuest/index.mjs";

import {
    styleQuestComponents
} from "../../styleComponents/styleComponents.mjs";


export function AddElementQuest() {
    const list_quest = document.getElementById('list_quest');
    const input_value = document.getElementById('search');
    const length_list = list_quest.childElementCount + 1;

    if (input_value.value.length < 3) return;

    const liObjectQuest = new LiObjectQuest(
        'li',
        'list_quest',
        `container_questy_index-${length_list}`,
        styleQuestComponents.li_quest
    )

    const buttonCheckedObjectQuest = new ButtonCheckedObjectQuest(
        'button',
        `container_questy_index-${length_list}`,
        `btn_checked_index-${length_list}`,
        styleQuestComponents.button_checked,
        'buttons_status',
        false
    );

    const spanMessageObjectQuest = new SpanMessageObjectQuest(
        'span',
        `container_questy_index-${length_list}`,
        `span_message_index-${length_list}`,
        styleQuestComponents.span_message,
        input_value.value
    );

    input_value.value = ''

    const buttonClosedObjectQuest = new ButtonClosedObjectQuest(
        'button',
        `container_questy_index-${length_list}`,
        `btn_closed_index-${length_list}`,
        styleQuestComponents.button_closed,
        'buttons_close'
    );

    const url_closed_icon = './src/assets/icon-cross.svg';

    const iconsClosedObjectQuest = new IconsObjectQuest(
        'img',
        `btn_closed_index-${length_list}`,
        `icon_closed_index-${length_list}`,
        url_closed_icon
    );

    const questObjectAll = new QuestObjectAll(
        liObjectQuest,
        buttonCheckedObjectQuest,
        spanMessageObjectQuest,
        buttonClosedObjectQuest,
        iconsClosedObjectQuest
    );

    if (localStorage.listQuests) {

        const questListAll = [...JSON.parse(localStorage.listQuests), questObjectAll]

        localStorage.setItem('listQuests', `${JSON.stringify(questListAll)}`)

    } else {

        localStorage.setItem('listQuests', `[${JSON.stringify(questObjectAll)}]`)

    }
    renderListQuest();
}