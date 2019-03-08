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

const list = document.getElementById('strain-list');

export default function loadStrainList(strains) {
    while(list.children.length > 0) {
        list.lastElementChild.remove();
    }
    strains.forEach(strain => {
        const dom = makeListTemplate(strain);
        list.appendChild(dom);
    });
}

export function noResults() {
    while(list.children.length > 0) {
        list.lastElementChild.remove();
    }
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'No Results';
    list.appendChild(errorMsg);
}