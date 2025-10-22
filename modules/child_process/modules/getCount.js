const slowFunction = () => {
    let counter = 0;
    while (counter < 5_000_000_000) {
        counter++;
    }
    return counter;
};

process.on('message', (message) => {
    if (message === 'START') {
        console.log('Child process received START message');
        const slowResult = slowFunction();
        const response = { totalCount: slowResult };
        process.send(JSON.stringify(response));
    }
});