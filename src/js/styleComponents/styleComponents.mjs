// estilo padrão
export const styleQuestComponents = {
    li_quest: 'group/clean h-16 grid grid-cols-8 items-center border-b-1 border-solid border-gray-600',
    span_message: 'w-max font-semibold col-span-6 text-gray-400 cursor-pointer text-base select-none',
    button_checked: 'col-1 flex justify-center items-center h-6 w-6 rounded-full border-1 border-gray-600 border-solid ml-4 hover:border-r-gradientColor-btn-from hover:border-b-gradientColor-btn-from hover:border-t-gradientColor-btn-to hover:border-l-gradientColor-btn-to transition-all',
    button_closed: 'invisible group-hover/clean:visible rmr-4 col-9 justify-self-center text-base cursor-pointer',
}

// estilo de quest completa
export const styleQuestComplet = {
    span_message_complet: 'w-max font-semibold col-span-6 cursor-auto text-base select-none text-gray-600 line-through',
    button_checked_complet: 'col-1 bg-gradient-to-tr from-gradientColor-btn-from to-gradientColor-btn-to flex justify-center items-center h-6 w-6 rounded-full border-1 border-gray-600 border-solid ml-4 transition-all',
}

// estilo button all
export const styleAllSelectbtn = {
    all_select_on: 'absolute top-1/2 -translate-y-1/2 left-5 h-6 w-6 rounded-full border-1 border-gray-600 border-solid  bg-gradient-to-tr from-gradientColor-btn-from to-gradientColor-btn-to flex justify-center items-center',
    all_select_off: 'absolute top-1/2 -translate-y-1/2 left-5 h-6 w-6 rounded-full border-1 border-gray-600 border-solid'
}