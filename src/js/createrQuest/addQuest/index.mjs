import {
    ButtonCheckedObjectQuest,
    ButtonClosedObjectQuest,
    IconsClosedObjectQuest,
    LiObjectQuest,
    QuestObjectAll,
    SpanMessageObjectQuest
} from "../../createObjectQuest/index.mjs";
import { renderListQuest } from "../../renderListQuest/index.mjs";
import {
    checkedQuest
} from "../../statusComplet/addRemove/index.mjs";
import {
    styleQuestComponents
} from "../../styleComponents/styleComponents.mjs";

import {
    createrDomElement
} from "../createElements/index.mjs";

/* 
const list = [
    {
        li: {
            tagName: 'li',
            dad: list_quest,
            id: `container_questy_index-${length_list}`,
            style: styleQuestComponents.li_quest
        },
        buttonChecked: {
            tagName: 'button',
            dad: quest_element,
            id: `btn_checked_index-${length_list}`,
            style: styleQuestComponents.button_checked,
            dataStatus:  'buttons_status'
        },
        spanMessage: {
            tagName: 'span',
            dad: quest_element,
            id: `span_message_index-${length_list}`,
            text: input_value
        },
        buttonClosed: {
            tagName: 'button',
            dad: quest_element,
            id: `btn_closed_index-${length_list}`,
            style: styleQuestComponents.button_closed
        },
        iconClosed: {
            tagName: 'img',
            dad: button_closed_quest,
            id: `icon_closed_index-${length_list}`,
            url: url_closed_icon
        }
    }
] */

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
        'buttons_status'
    );

    const spanMessageObjectQuest = new SpanMessageObjectQuest(
        'span',
        `container_questy_index-${length_list}`,
        `span_message_index-${length_list}`,
        styleQuestComponents.span_message,
        input_value.value
    );

    input_value.value=''

    const buttonClosedObjectQuest = new ButtonClosedObjectQuest(
        'button',
        `container_questy_index-${length_list}`,
        `btn_closed_index-${length_list}`,
        styleQuestComponents.button_closed
    );

    const url_closed_icon = './src/assets/icon-cross.svg';

    const iconsClosedObjectQuest = new IconsClosedObjectQuest(
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