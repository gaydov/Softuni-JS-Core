function printFilledForm(username, email, phone, arr) {

    let pattern = /<([!@+])[A-Za-z]+([!@+])>/g;

    function getReplacer(match, p1) {

        let args = arguments;

        switch (p1) {

            case '!':
                return username;
            case '@':
                return email;
            case '+':
                return phone;
        }
    }

    for (let index = 0; index < arr.length; index++) {

        arr[index] = arr[index].replace(pattern, getReplacer);
    }

    console.log(arr.join('\n'));
}

printFilledForm(
    'Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']

);