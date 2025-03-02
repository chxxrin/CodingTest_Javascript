const makePerson = ({familyName, givenName,address}) => {
    return {
        name : `${givenName} ${familyName}`,
        address,
    };
};

const person = makePerson({
    familyName: 'Park',
    givenName: 'Bomi',
    address: 'Seoul',
    country: 'Korea',
});

console.log(person);