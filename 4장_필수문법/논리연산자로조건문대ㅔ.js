// flag && func();

const makeCompany = (showAddress) => {
    return {
        name: 'golden rabbit',
        ...showAddress && {address:'Seoul'}
    };
};

console.log(makeCompany(false));
console.log(makeCompany(true));