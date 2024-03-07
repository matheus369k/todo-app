export const createrDomElement = (tagHtml, father, id, style, url, text, name, alt, title, type) => {
    const element = document.createElement(`${tagHtml}`);

    if (tagHtml == 'span')
        element.textContent = text

    element.setAttribute('id', id);

    if (alt)
        element.setAttribute('alt', alt);

    if (title)
        element.setAttribute('title', title);

    if (type)
        element.setAttribute('type', type);

    if (tagHtml == 'img')
        element.setAttribute('src', url);

    if (name)
        element.setAttribute('name', name)

    element.setAttribute('class', style);

    father.appendChild(element)
}