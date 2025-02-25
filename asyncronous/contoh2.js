async function kerjakanTugas(nama, waktu) {
    return new Promise((resolve) => {
        console.log(`Memulai tugas: ${nama}...`);
        setTimeout(() => {
            resolve(`${nama} selesai dalam ${waktu / 1000} detik!`);
        }, waktu);
    });
}

// ✅ Menjalankan tugas satu per satu
async function jalankan() {
    const hasil1 = await kerjakanTugas('Cuci Piring', 3000);
    console.log(hasil1);

    const hasil2 = await kerjakanTugas('Menyapu', 2000);
    console.log(hasil2);

    console.log('Semua tugas selesai!');
}

jalankan();
