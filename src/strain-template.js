export function makeSingleLi(effect) {
    const template = document.createElement('template');
    template.innerHTML = `<li id="effect">${effect}</li>`;
    return template.content;
}
 
export function makeStrainHeader(strain) {
    const template = document.createElement('template');
    template.innerHTML = `
        <header id="strain-header">
            <h1>${strain.name}</h1>
            <h2>${strain.race}</h2>    
        </header>
    `;

    return template.content;
}

export function makeDescription(strain) {
    const template = document.createElement('template');
    template.innerHTML = `
        <p>${strain.desc}</p>
    `;

    return template.content;
}
