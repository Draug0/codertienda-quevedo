const items = [{
    id: 1,
    title: 'El Señor de los Anillos I: La Comunidad Del Anillo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'J.R.R. Tolkien',
    price: 920,
    pictureUrl: 'https://imagessl8.casadellibro.com/a/l/t5/28/9788445073728.jpg',
    stock: 15
}, {
    id: 2,
    title: 'El Señor de los Anillos II: Las Dos Torres',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'J.R.R. Tolkien',
    price: 920,
    pictureUrl: 'https://imagessl5.casadellibro.com/a/l/t7/35/9788445073735.jpg',
    stock: 12
}, {
    id: 3,
    title: 'El Señor de los Anillos III: El Retorno del Rey',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'J.R.R. Tolkien',
    price: 920,
    pictureUrl: 'https://imagessl2.casadellibro.com/a/l/t5/42/9788445073742.jpg',
    stock: 5
}, {
    id: 4,
    title: 'El hobbit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'J.R.R. Tolkien',
    price: 720,
    pictureUrl: 'https://dojiw2m9tvv09.cloudfront.net/15559/product/image_2021-03-09_1512103536.png',
    stock: 7
}]

export const mockFetch = new Promise((resolve, reject) => {
    if (items.length > 0) {
        resolve(items)
    } else {
        reject('Internal Error')
    }
})

export const getItem = (bookId) => {
    return new Promise((resolve, reject) => {
        let item = items.filter(item => item.id == bookId)
        if (item) {
            resolve(item[0])
        } else {
            reject('Internal Error')
        }
    })
}



