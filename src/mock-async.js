const items = [{
    id: 1,
    title: 'El Señor de los Anillos I: La Comunidad Del Anillo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'J.R.R. Tolkien',
    price: 920,
    category: 'fantasia',
    pictureUrl: 'https://imagessl8.casadellibro.com/a/l/t5/28/9788445073728.jpg',
    stock: 15,
    sale: true
}, {
    id: 2,
    title: 'El Señor de los Anillos II: Las Dos Torres',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'J.R.R. Tolkien',
    price: 920,
    category: 'fantasia',
    pictureUrl: 'https://imagessl5.casadellibro.com/a/l/t7/35/9788445073735.jpg',
    stock: 12,
    sale: false
}, {
    id: 3,
    title: 'El Señor de los Anillos III: El Retorno del Rey',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'J.R.R. Tolkien',
    price: 920,
    category: 'fantasia',
    pictureUrl: 'https://imagessl2.casadellibro.com/a/l/t5/42/9788445073742.jpg',
    stock: 5,
    sale: false
}, {
    id: 4,
    title: 'El hobbit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'J.R.R. Tolkien',
    price: 720,
    category: 'fantasia',
    pictureUrl: 'https://dojiw2m9tvv09.cloudfront.net/15559/product/image_2021-03-09_1512103536.png',
    stock: 8,
    sale: true
}, {
    id: 5,
    title: 'Guías del Autoestopista Galáctico',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'Douglas Adams',
    price: 620,
    category: 'ciencia-ficcion',
    pictureUrl: 'https://tse2.mm.bing.net/th?id=OIP.WU80hP991-WnUEg_mUW9AQHaLU&pid=Api',
    stock: 42,
    sale: true
}, {
    id: 6,
    title: 'El Restaurante del Fin del Mundo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'Douglas Adams',
    price: 620,
    category: 'ciencia-ficcion',
    pictureUrl: 'https://www.libreriaelaguila.es/imagenes_grandes/9788433/978843397328.JPG',
    stock: 6,
    sale: false
}, {
    id: 7,
    title: 'La vida, el universo y todo lo demás',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'Douglas Adams',
    price: 620,
    category: 'ciencia-ficcion',
    pictureUrl: 'https://www.anagrama-ed.es/uploads/media/portadas/0001/14/f6633cea444ba6d8e400325f5bf1f2e90000e1a5.jpeg',
    stock: 7,
    sale: false
}, {
    id: 8,
    title: 'Crimen y castigo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'Fiódor Dostoyevski',
    price: 700,
    category: 'novela',
    pictureUrl: 'https://granicaeditor.com/tapas/9788418008122.jpg',
    stock: 20,
    sale: false
}, {
    id: 9,
    title: 'Crónica de una muerte anunciada',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'Gabriel García Marquez',
    price: 700,
    category: 'novela',
    pictureUrl: 'https://imagessl7.casadellibro.com/a/l/t0/37/9788497592437.jpg',
    stock: 9,
    sale: false
}, {
    id: 10,
    title: 'La sombra del viento',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquam lectus, at gravida justo. Donec leo sem, maximus at justo id, varius euismod urna. Phasellus facilisis elementum mauris, sed rutrum metus consectetur vitae. Donec malesuada quam nec fringilla convallis. Ut lobortis massa eu commodo consequat. Etiam at tortor convallis, aliquam dolor sit amet, euismod dui. Nunc lobortis enim at varius placerat. Pellentesque et mi lorem. Suspendisse ullamcorper molestie accumsan. Vestibulum eu scelerisque lacus. Proin sit amet massa lectus. Aliquam erat volutpat.',
    author: 'Carlos Ruiz Zafón',
    price: 700,
    category: 'novela',
    pictureUrl: 'https://pbs.twimg.com/media/Ert9RgyW4AMwftj.jpg',
    stock: 14,
    sale: true
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



