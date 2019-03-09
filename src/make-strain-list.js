export function makeListTemplate(strain) {
    const url = './strain.html?id=';
    const template = document.createElement('template');
    template.innerHTML = `
        <li id="strain-${strain.id}">
            <a href=${url + encodeURIComponent(strain.name + '-' + strain.id)}>
            ${strain.name} (${strain.race})
            </a>
        </li>
    `;
    return template.content;
}

const list = document.getElementById('strain-list');
const totalResults = document.getElementById('total-results');

export default function loadStrainList(strains) {
    while(list.children.length > 0) {
        list.lastElementChild.remove();
    }
    strains.forEach(strain => {
        const dom = makeListTemplate(strain);
        list.appendChild(dom);
    });
    totalResults.textContent = strains.length + ' total results';
}

export function noResults() {
    while(list.children.length > 0) {
        list.lastElementChild.remove();
    }
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'No Results';
    list.appendChild(errorMsg);
}