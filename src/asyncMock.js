const products = [
    {
        id: '1',
        name: 'Taza de cerámica',
        price: 10000,
        category: 'productos',
        img: 'https://acdn.mitiendanube.com/stores/972/210/products/whatsapp-image-2024-07-16-at-15-49-26-ac6877cf5b327d616817211558123708-1024-1024.webp',
        stock: 25,
        description: 'Taza de cerámica personalizada con el diseño que vos quieras'
    },
    { id: '2', name: 'Identificación para mascotas', price: 2500, category: 'productos', img: 'https://acdn.mitiendanube.com/stores/972/210/products/whatsapp-image-2024-07-16-at-16-09-24-2-e8fed38f733382628817211570371366-1024-1024.webp', stock: 30, description: 'Identificación para mascotas personalizada. Formas: hueso, circulo o corazón'},
    { id: '3', name: 'Set de jardín', price: 14000, category: 'productos', img: 'https://acdn.mitiendanube.com/stores/972/210/products/whatsapp-image-2024-07-16-at-16-44-12-1-bbfe9faba4dc75316117211590992422-1024-1024.webp', stock: 15, description: 'Set de jardín personalizado. Incluye: individual, servilleta, toalla y taza'},
    { id: '4', name: 'Curriculum Vitae', price: 3000, category: 'servicios', img: 'https://d22fxaf9t8d39k.cloudfront.net/25deb7f7f392d9d6d480ec791673b0b53dfe9f77f412894dbf70f2660a5ca0d3347390.png', stock: 9999, description: 'Diseño de Curriculum Vitae optimizado según tu perfil'},
    { id: '5', name: 'Invitación para evento', price: 4000, category: 'servicios', img: 'https://d22fxaf9t8d39k.cloudfront.net/fbaabc98146a280c8d4e4b705a10916cc81f0181f97f10918aac083202969ca0347390.png', stock: 9999, description: 'Invitación digital personalizada para todo tipo de eventos'},
    { id: '6', name: 'Tarjeta personal', price: 12000, category: 'servicios', img: 'https://d22fxaf9t8d39k.cloudfront.net/62d25f4b23b72dd48e1c37c3e8aab73516d89050fb41f82e147e95a03e80b21c347390.png', stock: 9999, description: 'Diseño de tarjeta personal, doble faz'},
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

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        const filteredProducts = products.filter(product => product.category === category);
        resolve(filteredProducts);
    }, 500);
    });
};