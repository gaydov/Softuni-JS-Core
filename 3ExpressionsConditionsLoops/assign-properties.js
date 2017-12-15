function generateObject(args) {

    let obj = {};

    for (let i = 0; i < args.length; i += 2) {

        obj[args[i]] = args[i + 1];
    }

    return obj;
}