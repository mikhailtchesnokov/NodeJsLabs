module.exports = {
    getCustomer: (id) => {
        // Simulate external call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ id, name: 'John Doe', age: 30 });                
            }, 1000);            
        });
    }
};
