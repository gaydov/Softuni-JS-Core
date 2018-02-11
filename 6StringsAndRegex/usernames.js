function generateUsernames(emailsArr) {

    let usernames = [];

    for (let email of emailsArr) {

        let atIndex = email.indexOf('@');
        let partBeforeDot = email.substring(0, atIndex);
        let partAfterDot = email.substr(atIndex + 1);
        let partAfterDotTokens = partAfterDot.split('.');

        let username = partBeforeDot + '.';
        for (let word of partAfterDotTokens) {

            username += word[0];
        }

        usernames.push(username);
    }

    return usernames.join(', ');
}