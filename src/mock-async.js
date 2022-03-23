const items = [{
    id: 1,
    title: 'EL SEÑOR DE LOS ANILLOS I: LA COMUNIDAD DEL ANILLO',
    description: '',
    price: 920,
    pictureUrl: 'https://imagessl8.casadellibro.com/a/l/t5/28/9788445073728.jpg',
    stock: 15
}, {
    id: 2,
    title: 'EL SEÑOR DE LOS ANILLOS II: LAS DOS TORRES',
    description: '',
    price: 920,
    pictureUrl: 'https://imagessl5.casadellibro.com/a/l/t7/35/9788445073735.jpg',
    stock: 12
}, {
    id: 3,
    title: 'EL SEÑOR DE LOS ANILLOS III: EL RETORNO DEL REY',
    description: '',
    price: 920,
    pictureUrl: 'https://imagessl2.casadellibro.com/a/l/t5/42/9788445073742.jpg',
    stock: 5
}]

const mockFetch = new Promise((resolve, reject) => {
    if (items.length > 0) {
        resolve(items)
    } else {
        reject('Internal Error')
    }
})

export default mockFetch;