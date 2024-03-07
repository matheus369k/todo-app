export const ThemerStyle = {
    bodyDarkStyle: 'bg-darkMode-bg',
    bodylightStyle: 'bg-lightMode-bg',
    listStyleDark: 'bg-darkMode-container',
    listStyleLight: 'bg-lightMode-container',
    inputStyleDark: {
        bg: 'bg-darkMode-container',
        placeholder: 'placeholder:text-gray-600',
        text: 'text-gray-400'
    },
    inputStyleLight: {
        bg: 'bg-lightMode-container',
        placeholder: 'placeholder:text-gray-400',
        text: 'text-gray-600'
    },
    list_quest_elements_dark: {
        border_bottom: 'border-gray-600',
        button_checked: 'border-gray-600',
        span_message_on: 'text-gray-600',
        span_message_off: 'text-gray-400' 
    }, list_quest_elements_light: {
        border_bottom: 'border-gray-400',
        button_checked: 'border-gray-400',
        span_message_on: 'text-gray-400',
        span_message_off: 'text-gray-600' 
    },
    filterElementsDark: {
        containerColorelement: 'text-gray-400',
        spanColor: 'text-gray-600',
        elementListFilter: 'hover:text-gray-100'
    },
    filterElementsLight: {
        containerColorelement: 'text-gray-600',
        spanColor: 'text-gray-400',
        elementListFilter: 'hover:text-gray-900'
    },
    bottom_message_dark: 'text-gray-700',
    bottom_message_light: 'text-gray-400'
}

// estilo padrão
export const styleQuestComponents = {
    li_quest: 'group/clean h-16 grid grid-cols-8 items-center border-b-1 border-solid border-gray-600',
    span_message: 'w-max font-semibold col-span-6 cursor-pointer text-base select-none text-gray-400',
    button_checked: 'col-1 flex justify-center items-center h-6 w-6 rounded-full border-1 border-solid ml-4 hover:border-r-gradientColor-btn-from hover:border-b-gradientColor-btn-from border-gray-600 hover:border-t-gradientColor-btn-to hover:border-l-gradientColor-btn-to transition-all',
    button_closed: 'invisible group-hover/clean:visible rmr-4 col-9 justify-self-center text-base cursor-pointer',
}

// estilo de quest completa
export const styleQuestComplet = {
    span_message_complet: 'w-max font-semibold col-span-6 cursor-auto text-base select-none line-through text-gray-600',
    button_checked_complet: 'col-1 bg-gradient-to-tr from-gradientColor-btn-from to-gradientColor-btn-to flex justify-center items-center h-6 w-6 rounded-full ml-4 transition-all',
}

// estilo button all
export const styleAllSelectbtn = {
    all_select_on: 'absolute top-1/2 -translate-y-1/2 left-5 h-6 w-6 rounded-full bg-gradient-to-tr from-gradientColor-btn-from to-gradientColor-btn-to flex justify-center items-center',
    all_select_off: 'absolute top-1/2 -translate-y-1/2 left-5 h-6 w-6 rounded-full border-1 border-solid border-gray-600'
}

export const filterElements = {
    element_active: 'text-blue-600',
    element_default_light: ThemerStyle.filterElementsLight.elementListFilter,
    element_default_dark: ThemerStyle.filterElementsDark.elementListFilter,
}