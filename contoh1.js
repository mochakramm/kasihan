const ucapan = (nama, callback) => {
    console.log(`hallo ${nama}!`)
    callback()
}

ucapan('dina', () =>{
    console.log('semoga harimu menyenangkan')
})

const operasi = (callback, ...args) => {
    const hasil = callback(...args)
    console.log(hasil)
}

const tambah = (a, b) => (a+b)
const ra = (a,b,c) => (a+b+c)

setTimeout(() => {
    console.log('ini asinkron')
}, 2000);

operasi(tambah, 10,10)
operasi(ra, 10,10,10)


const asinkron = (callback) => {
    console.log('memproses data....')
    setTimeout(() => {
        console.log('data muncul!!!')
        callback()
    }, 2000);
    console.log('ini dikerjain dulu')
}

asinkron(() => {
    console.log('data muncul setelah 2 detik')
})




const memasak = (port, callback) => {
    setTimeout(() => {
        console.log('ini dimasak 2 detik')
        callback()
    }, 2000);
}

const port = 200
memasak(port, () => {
    console.log(`ini port ${port}`)
})

const minum =  () => {
    setTimeout(() => {
        console.log('ini diminum 1 detik')
    }, 1000);
}

minum()

const data1 = [10,10,10,10]

function jumlah (data) {
   return data.reduce((element, total) => element + total,0)
}
console.log(jumlah(data1))



const salam =  (bahasa) => {
    return (nama) => {
        if (bahasa === 'indonesia') {
            console.log(`selamat pagi ${nama}`)
        } else if (bahasa === 'inggris') {
            console.log(`good morning ${nama}`)
        } else {
            console.log('undefined')
        }
    }
}

const selamatpagi = salam('indonesia')
selamatpagi('andi')

const hi = (language, nama) => {
    if (language === 'inggris') {
        return `haii mr ${nama}`
    } else {
        return `haii mr ${nama}`
    }
}
console.log(hi('indo', 'jajang'))


const operation = () => {
    return {
        kali: (a,b) => a * b,
        tambah: (a,b) => a+b 
    }
}

const hitung =  operation()
console.log(hitung.kali(10,5))

const generator = (sunda) => {
    return () => {
        if (sunda === 'indonesia') return `ieu orang indonesia`;
        if (sunda === 'inggris') return `ieu orang inggris`;
        if (sunda === 'belanda') return `ieu orang walanda`;
        else {return `operasi tidak valid`}
    }
}

const lakuin = generator('belanda')
console.log(lakuin())

const makan = () => {
    return {
        pagi: (nama) => {return `${nama} makan pagi`},
        siang: (nama) => {return `${nama} makan siang`}
    }
}

const gunakan = makan()

console.log(gunakan.pagi('akram'))

const pesanan = (menu) => {
    if (menu === 'makanan') {
       return setTimeout(() => {
            return 'makanan jadi'
        }, 2000);
    } else {
        return setTimeout(() => {
            return 'minuman jadi'
        }, 1000);
    }
}

console.log(pesanan('makanan'), () => {
    console.log('jadi yah')
})