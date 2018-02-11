function printSortedSystems(strArr) {

    const splitPattern = /\s\|\s/g;
    let systemsMap = new Map();

    for (let line of strArr) {

        let [sysName, component, subcomponent] = line.split(splitPattern);

        if (!systemsMap.has(sysName)) {

            systemsMap.set(sysName, new Map());
            systemsMap.get(sysName).set(component, []);
            systemsMap.get(sysName).get(component).push(subcomponent);
        } else {

            if (!systemsMap.get(sysName).has(component)) {
                systemsMap.get(sysName).set(component, []);
                systemsMap.get(sysName).get(component).push(subcomponent);
            } else {
                systemsMap.get(sysName).get(component).push(subcomponent);
            }
        }
    }

    function systemsSort(a, b) {
        let firstSystemComponentsCount = a[1].size;
        let secondSystemComponentsCount = b[1].size;

        if (firstSystemComponentsCount > secondSystemComponentsCount) {
            return -1;
        } else if (firstSystemComponentsCount < secondSystemComponentsCount) {
            return 1;
        } else {
            return a[0].localeCompare(b[0]);
        }
    }

    function componentsSort(a, b) {
        let firstComponentLength = a[1].length;
        let secondComponentLength = b[1].length;

        if (firstComponentLength > secondComponentLength) {
            return -1;
        } else if (firstComponentLength < secondComponentLength) {
            return 1;
        }
        return 0;
    }

    systemsMap = new Map([...systemsMap.entries()].sort(systemsSort));

    for (let [system, components] of systemsMap) {

        console.log(system);
        let sortedComponents = new Map([...components.entries()].sort(componentsSort));
        systemsMap.set(system, sortedComponents);

        for(let [component, subcomponents] of sortedComponents) {
            console.log(`|||${component}`);
            for (let subcomp of subcomponents) {

                console.log(`||||||${subcomp}`);
            }
        }
    }
}