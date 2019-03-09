export function makeSingleLi(effect) {
    const template = document.createElement('template');
    template.innerHTML = `<li id="effect">${effect}</li>`;
    return template.content;
}
