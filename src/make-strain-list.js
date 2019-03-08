export function makeListTemplate(strain) {
    const template = document.createElement('template');
    template.innerHTML = `
        <li title="${strain.desc}">
            <a href="./strain.html?id=${strain.id}">
            ${strain.name} (${strain.race})
            </a>
        </li>
    `;
    return template.content;
}