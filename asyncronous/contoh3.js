async function kerjakanTugas(nama, waktu) {
    return new Promise((resolve) => {
        console.log(`memulai tugas: ${nama}....`)

        setTimeout(() => {
            resolve(`${nama} selesai dalam ${waktu}`)
        }, waktu);
    })
    
}

async function jalankan(callback) {
    const hasil =  await Promise.all([
        kerjakanTugas('cuci piring', 1000),
        kerjakanTugas('nyuci', 1000)
    ])

    hasil.forEach((tugas) => console.log(tugas))
    console.log('semua tugas selesai')
    callback()

}

jalankan(() =>{
    console.log('ini callbacknya di eksekusi terakhir')
})