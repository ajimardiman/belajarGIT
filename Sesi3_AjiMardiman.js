// Menentukan tinggi segitiga
let tinggi = 4;

// Loop untuk mencetak baris
for (let i = 1; i <= tinggi; i++) {
    let baris = '';

    // Loop untuk mencetak bintang sesuai dengan nomor baris
    for (let j = 1; j <= i; j++) {
        baris += '*'; // Menambahkan bintang pada setiap baris
    }

    console.log(baris); // Mencetak baris ke konsol
}