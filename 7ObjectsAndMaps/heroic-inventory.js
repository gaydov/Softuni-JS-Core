function printHeroesInventories(strArr) {

    const splitPattern = /\s\/\s/g;
    let heroes = [];

    for (let heroArgs of strArr) {

        let [name, level, items] = heroArgs.split(splitPattern);

        let currentHeroItems = [];

        if (items !== undefined) {
            currentHeroItems = items.split(', ');
        }

        let currentHero = {
            name: name,
            level: Number(level),
            items: currentHeroItems
        };

        heroes.push(currentHero);
    }

    console.log(JSON.stringify(heroes));
}