const products = [
    {
        name : 'tofee',
        price : 100

    },
    {
        name : 'choclate',
        price : 200

    },
    {
        name : 'biscuit',
        price : 300

    }
]

const prices = products.map(item => item.price);

console.log(prices)