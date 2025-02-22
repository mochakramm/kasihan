const tambah = (a,b,callback) => {
    a + b
    
}

console.log(tambah(10,10, () => {
    console.log('ini callback')
}))