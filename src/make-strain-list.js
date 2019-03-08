export function makeListTemplate(strain) {
    const template = document.createElement('template');
    template.innerHTML = `
        <li id="strain-${strain.id}">
            <a href="./strain.html?id=${strain.id}">
            ${strain.name} (${strain.race})
            </a>
        </li>
    `;
    return template.content;
}