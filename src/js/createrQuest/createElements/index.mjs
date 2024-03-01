export const createrDomElement = (tagHtml, father, id, style, url, text) => {
    const element = document.createElement(`${tagHtml}`);

    if (tagHtml == 'span')
        element.textContent = text

    element.setAttribute('id', id);

    if (tagHtml == 'img')
        element.setAttribute('src', url);

    element.setAttribute('class', style);

    father.appendChild(element)
}