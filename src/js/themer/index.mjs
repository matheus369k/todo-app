import {
    ThemerStyle
} from "../styleComponents/styleComponents.mjs";

export function switchThemer(icon_switch_themer) {
    localStorage.setItem('themer', `${localStorage.themer == 'dark' ? 'light' : 'dark'}`);
    detectedThemer(icon_switch_themer);
}

export function detectedThemer(icon_switch_themer) {
    const current_themerDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const list_container = document.getElementById('container-list');
    const filter_container = document.getElementById('container-filter');
    const count_element = document.getElementById('countquest');
    const elements_filter = document.querySelectorAll('[name=filter-container]>li');
    const button_clean_complet = document.getElementById('btn-remove-all-complet');
    const bottom_message = document.getElementById('bottom-message');
    const input = document.getElementById('search');

    if (!localStorage.themer)
        localStorage.setItem('themer', `${current_themerDark ? 'dark' : 'light'}`);

    if (localStorage.themer == 'dark') {

        toggleSingleStyleElementThemer(
            document.body,
            ThemerStyle.bodylightStyle,
            ThemerStyle.bodyDarkStyle
        );

        toggleSingleStyleElementThemer(
            input,
            ThemerStyle.inputStyleLight.bg,
            ThemerStyle.inputStyleDark.bg
        );

        toggleSingleStyleElementThemer(
            input,
            ThemerStyle.inputStyleLight.placeholder,
            ThemerStyle.inputStyleDark.placeholder
        );

        toggleSingleStyleElementThemer(
            input,
            ThemerStyle.inputStyleLight.text,
            ThemerStyle.inputStyleDark.text
        );

        toggleSingleStyleElementThemer(
            list_container,
            ThemerStyle.listStyleLight,
            ThemerStyle.listStyleDark
        );

        toggleSingleStyleElementThemer(
            filter_container,
            ThemerStyle.filterElementsLight.containerColorelement,
            ThemerStyle.filterElementsDark.containerColorelement
        );

        toggleSingleStyleElementThemer(
            count_element,
            ThemerStyle.filterElementsLight.spanColor,
            ThemerStyle.filterElementsDark.spanColor
        );

        toggleSingleStyleElementThemer(
            button_clean_complet,
            ThemerStyle.filterElementsLight.elementListFilter,
            ThemerStyle.filterElementsDark.elementListFilter
        );

        toggleSingleStyleElementThemer(
            bottom_message,
            ThemerStyle.bottom_message_light,
            ThemerStyle.bottom_message_dark
        );

        elements_filter.forEach(element => {
            element.classList.replace(
                ThemerStyle.filterElementsLight.elementListFilter,
                ThemerStyle.filterElementsDark.elementListFilter
            )
        });

        toggleListQuestElemenstThemer(
            ThemerStyle.list_quest_elements_light,
            ThemerStyle.list_quest_elements_dark
        );

    } else {

        toggleSingleStyleElementThemer(
            document.body,
            ThemerStyle.bodyDarkStyle,
            ThemerStyle.bodylightStyle
        );

        toggleSingleStyleElementThemer(
            input,
            ThemerStyle.inputStyleDark.bg,
            ThemerStyle.inputStyleLight.bg
        );

        toggleSingleStyleElementThemer(
            input,
            ThemerStyle.inputStyleDark.placeholder,
            ThemerStyle.inputStyleLight.placeholder
        );

        toggleSingleStyleElementThemer(
            input,
            ThemerStyle.inputStyleDark.text,
            ThemerStyle.inputStyleLight.text
        );

        toggleSingleStyleElementThemer(
            list_container,
            ThemerStyle.listStyleDark,
            ThemerStyle.listStyleLight
        );

        toggleSingleStyleElementThemer(
            filter_container,
            ThemerStyle.filterElementsDark.containerColorelement,
            ThemerStyle.filterElementsLight.containerColorelement
        );

        toggleSingleStyleElementThemer(
            count_element,
            ThemerStyle.filterElementsDark.spanColor,
            ThemerStyle.filterElementsLight.spanColor
        );

        toggleSingleStyleElementThemer(
            button_clean_complet,
            ThemerStyle.filterElementsDark.elementListFilter,
            ThemerStyle.filterElementsLight.elementListFilter
        );

        toggleSingleStyleElementThemer(
            bottom_message,
            ThemerStyle.bottom_message_dark,
            ThemerStyle.bottom_message_light
        );

        elements_filter.forEach(element => {
            element.classList.replace(
                ThemerStyle.filterElementsDark.elementListFilter,
                ThemerStyle.filterElementsLight.elementListFilter
            )
        });

        toggleListQuestElemenstThemer(
            ThemerStyle.list_quest_elements_dark,
            ThemerStyle.list_quest_elements_light
        );

    }

    const header = document.querySelector('body>header');
    const header_style_statu = header.getAttribute('style');
    const header_url_bg = header_style_statu.split(';')[0].split('url(')[1].split(')')[0].split('-');

    icon_switch_themer.setAttribute('src', `./src/assets/icon-${localStorage.themer == 'dark' ? 'sun' : 'moon'}.svg`);

    header.setAttribute('style', `background-image: url(${header_url_bg[0]}-${header_url_bg[1]}-${localStorage.themer}.jpg)`);
}

export function toggleListQuestElemenstThemer(oldStyle, newStyle) {

    const list_all_quest = document.querySelectorAll('#list_quest>li');

    list_all_quest.forEach(element => {

        element.classList.replace(
            oldStyle.border_bottom,
            newStyle.border_bottom
        );

        const button_Checked = element.childNodes[0];
        const span_message = element.childNodes[1];

        button_Checked.classList.replace(
            oldStyle.button_checked,
            newStyle.button_checked
        );

        if (button_Checked.hasChildNodes()) {
            span_message.classList.replace(
                oldStyle.span_message_on,
                newStyle.span_message_on
            );
        } else {
            span_message.classList.replace(
                oldStyle.span_message_off,
                newStyle.span_message_off
            );

        }
    })
}

export function toggleSingleStyleElementThemer(fother, oldStyle, newStyle) {
    fother.classList.replace(oldStyle, newStyle);
}