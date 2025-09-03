function concat(a, b) {
    return new Promise((resolve) => {
        resolve(a + b);
    });
}


function setUpper(s) {
    return new Promise((resolve) => {
        resolve(s.toUpperCase());
    });
}

function decorateString(s) {
    return new Promise((resolve) => {
        resolve(`*** ${s} ***`);
    });
}

concat('Hello, ', 'world!')
.then(r => setUpper(r))
.then(r => decorateString(r))
.then(finalResult => {
    console.log(finalResult);
});
