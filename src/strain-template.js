export function makeSingleLi(effect) {
    const template = document.createElement('template');
    template.innerHTML = `<li>${effect}</li>`;
    return template.content;
}

function makeEffectsUl(effects) {
    const template = document.createElement('template');
    const ul = document.createElement('ul');
    effects.forEach(effect => {
        const dom = makeSingleLi(effect);
        ul.appendChild(dom);
    });
    template.appendChild(ul);
    console.log('ul', ul);
    return template.content;
}