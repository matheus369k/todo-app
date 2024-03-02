import {
    ButtonCheckedObjectQuest,
    ButtonClosedObjectQuest,
    IconsClosedObjectQuest,
    LiObjectQuest,
    QuestObjectAll,
    SpanMessageObjectQuest
} from "../../createObjectQuest/index.mjs";
import { checkedQuest } from "../../statusComplet/addRemove/index.mjs";
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
    const length_list = list_quest.childElementCount + 1;

    // criando o elemnto li...
    createrDomElement(
        'li',
        list_quest,
        `container_questy_index-${length_list}`,
        styleQuestComponents.li_quest
    );

    const liObjectQuest = new LiObjectQuest(
        'li',
        'list_quest',
        `container_questy_index-${length_list}`,
        styleQuestComponents.li_quest
    )

    // criando o elemnto button checked...
    const quest_element = document.getElementById(`container_questy_index-${length_list}`);

    createrDomElement(
        'button',
        quest_element,
        `btn_checked_index-${length_list}`,
        styleQuestComponents.button_checked,
        '',
        '',
        'buttons_status'
    );

    const buttonCheckedObjectQuest = new ButtonCheckedObjectQuest(
        'button',
        `container_questy_index-${length_list}`,
        `btn_checked_index-${length_list}`,
        styleQuestComponents.button_checked,
        'buttons_status'
    );

    // criando a menssgem...
    const input_value = document.getElementById('search').value;

    createrDomElement(
        'span',
        quest_element,
        `span_message_index-${length_list}`,
        styleQuestComponents.span_message,
        '',
        input_value
    );

    const spanMessageObjectQuest = new SpanMessageObjectQuest(
        'span',
        `container_questy_index-${length_list}`,
        `span_message_index-${length_list}`,
        styleQuestComponents.span_message,
        input_value
    );

    // criando o elemnto button close...
    createrDomElement(
        'button',
        quest_element,
        `btn_closed_index-${length_list}`,
        styleQuestComponents.button_closed
    );

    const buttonClosedObjectQuest = new ButtonClosedObjectQuest(
        'button',
        `container_questy_index-${length_list}`,
        `btn_closed_index-${length_list}`,
        styleQuestComponents.button_closed
    );

    // crinado elemento clean
    const url_closed_icon = './src/assets/icon-cross.svg';
    const button_closed_quest = document.getElementById(`btn_closed_index-${length_list}`);

    createrDomElement(
        'img',
        button_closed_quest,
        `icon_closed_index-${length_list}`,
        '',
        url_closed_icon
    );

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
    checkedQuest();
}