const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: '',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    { id: '2', name: 'Samsung S21', price: 800, category: 'celular', img: '', stock: 30, description: 'Descripcion de Samsung S21'},
    { id: '3', name: 'Ipad', price: 200, category: 'tablet', img: '', stock: 15, description: 'Descripcion de tablet'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}