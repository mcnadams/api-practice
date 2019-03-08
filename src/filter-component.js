function filterByRace(results, race) {
    return results.filter(result => {
        return result.race === race;
    });
}

function filterByName(results, name) {
    return results.filter(result => {
        return result.name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
    });
}

export default function filterResults(results, searchParams) {
    const name = searchParams.name;
    const effect = searchParams.effect;
    const race = searchParams.race; 
    if(!name && effect && !race) {
        return results;
    }
    else if(!name && effect && race) {
        return filterByRace(results, race);
    }
    else if(name && !effect && race) {
        return filterByRace(results, race);
    }
    else if(name && effect && race) {
        const byRace = filterByRace(results, race);
        return filterByName(byRace, name);
    }
    else if(name && effect && !race) {
        return filterByName(results, name);
    }
    else if(name && !effect && !race) {
        return results;
    }
    else {
        return [];
    }
}