
// Fuzzyfikasi untuk sub-kriteria Fasilitas Toilet
function fuzzyfikasiToilet(toilet) {
    var keanggotaan = {
        dalam_kamar: 0,
        luar_kamar: 0
    };

    if (toilet == 2) {
        keanggotaan.dalam_kamar = 1;
    } else if (toilet == 1) {
        keanggotaan.luar_kamar = 1;
    }

    return keanggotaan;
}

//fuzzyfikasi untuk subkretia fasilitas listrik/air
function fuzzyfikasiListrikAir(listrikAir) {
    var keanggotaan = {
        disediakan: 0,
        tidak_disediakan: 0
    };

    if (listrikAir == 2) {
        keanggotaan.disediakan = 1;
    } else if (listrikAir == 1) {
        keanggotaan.tidak_disediakan = 1;
    }

    return keanggotaan;
}

//fuzzyfikasi untuk subkretia fasilitas parkir
function fuzzyfikasiParkir(parkir) {
    var keanggotaan = {
        luas: 0,
        pas_pasan: 0
    };

    //if = luas atau pas-pasan
    if (parkir == "luas") {
        keanggotaan.luas = 1;
    } else if (parkir == "pas_pasan") {
        keanggotaan.pas_pasan = 1;
    }

    return keanggotaan;
}

//fuzzyfikasi untuk subkretia fasilitas lemari (ada/tidak)
function fuzzyfikasiLemari(lemari) {
    var keanggotaan = {
        ada: 0,
        tidak_ada: 0
    };

    if (lemari =="ada") {
        keanggotaan.ada = 1;
    } else if (lemari == "tidak_ada") {
        keanggotaan.tidak_ada = 1;
    }

    return keanggotaan;
}
//fuzzyfikasi untuk subkretia fasilitas kasur (ada/tidak)
function fuzzyfikasiKasur(kasur) {
    var keanggotaan = {
        ada: 0,
        tidak_ada: 0
    };

    if (kasur =="ada") {
        keanggotaan.ada = 1;
    } else if (kasur == "tidak_ada") {
        keanggotaan.tidak_ada = 1;
    }

    return keanggotaan;
}
//fuzzyfikasi untuk subkretia fasilitas internet (ada/tidak)
function fuzzyfikasiInternet(internet) {
    var keanggotaan = {
        ada: 0,
        tidak_ada: 0
    };

    if (internet =="ada") {
        keanggotaan.ada = 1;
    } else if (internet == "tidak_ada") {
        keanggotaan.tidak_ada = 1;
    }

    return keanggotaan;
}

//fuzzyfikasi untuk subkretia lingkungan keamanan (sangat aman, aman, cukup)
function fuzzyfikasiKeamanan(keamanan) {
    var keanggotaan = {
        sangat_aman: 0,
        aman: 0,
        cukup: 0
    };
    if (keamanan == "sangat_aman") {
        keanggotaan.sangat_aman = 1;
    }
    else if (keamanan == "aman") {
        keanggotaan.aman = 1;
    } else if (keamanan == "cukup") {
        keanggotaan.cukup = 1;
    }
    return keanggotaan;
}
//fuzzyfikasi untuk subkretia lingkungan kenyamanan (sangat nyaman, nyaman, cukup)
function fuzzyfikasiKenyamanan(kenyamanan) {
    var keanggotaan = {
        sangat_nyaman: 0,
        nyaman: 0,
        cukup: 0
    };
    if (kenyamanan == "sangat_nyaman") {
        keanggotaan.sangat_nyaman = 1;
    } else if (kenyamanan == "nyaman") {
        keanggotaan.nyaman = 1;
    } else if (kenyamanan == "cukup") {
        keanggotaan.cukup = 1;
    }
    return keanggotaan;
}

//fuzzyfikasi untuk subkretia lingkungan kebersihan (sangat bersih, bersih, cukup)
function fuzzyfikasiKebersihan(kebersihan) {
    var keanggotaan = {
        sangat_bersih: 0,
        bersih: 0,
        cukup: 0
    };
    if (kebersihan == "sangat_bersih") {
        keanggotaan.sangat_bersih = 1;
    } else if (kebersihan == "bersih") {
        keanggotaan.bersih = 1;
    } else if (kebersihan == "cukup") {
        keanggotaan.cukup = 1;
    }
    return keanggotaan;
}
// Fuzzyfikasi untuk kriteria Jarak ke Kampus
function fuzzyfikasiJarak(jarak) {
    var keanggotaan = {
        kurang: 0,
        sedang: 0,
        baik: 0
    };

    if (jarak < 400) {
        keanggotaan.kurang = 1;
    } else if (jarak >= 400 && jarak < 800) {
        keanggotaan.sedang = (800 - jarak) / 400;
        keanggotaan.baik = (jarak - 400) / 400;
    } else if (jarak >= 800 && jarak < 1200) {
        keanggotaan.sedang = (1200 - jarak) / 400;
        keanggotaan.baik = (jarak - 800) / 400;
    } else if (jarak >= 1200 && jarak < 1600) {
        keanggotaan.sedang = (1600 - jarak) / 400;
        keanggotaan.baik = (jarak - 1200) / 400;
    } else if (jarak >= 1600) {
        keanggotaan.baik = 1;
    }

    return keanggotaan;
}

// Fuzzyfikasi untuk kriteria Luas Kos
function fuzzyfikasiLuas(luas) {
    var keanggotaan = {
        kurang: 0,
        sedang: 0,
        baik: 0
    };

    if (luas == "3x5") {
        keanggotaan.baik = 1;
    } else if (luas == "3x4") {
        keanggotaan.sedang = 1;
    } else if (luas == "3x3") {
        keanggotaan.sedang = 1;
    } else if (luas == "3x2.5") {
        keanggotaan.kurang = 1;
    }else if (luas == "3x2") {
        keanggotaan.kurang = 1;
    }

    return keanggotaan;
}

// Fuzzyfikasi untuk gabungan fasilitas dengan bobot
function fuzzyfikasiFasilitas(toilet, listrikAir, parkir, lemari, kasur, internet) {
    // Bobot untuk setiap sub-kriteria fasilitas
    var bobotToilet = 0.2;
    var bobotListrikAir = 0.2;
    var bobotParkir = 0.2;
    var bobotLemari = 0.2;
    var bobotKasur = 0.2;
    var bobotInternet = 0.1;

    // Menghitung nilai keanggotaan dari setiap sub-kriteria dengan bobot
    var nilaiToilet = (toilet.dalam_kamar * 2 + toilet.luar_kamar * 1) / 3;
    var nilaiListrikAir = (listrikAir.disediakan * 2 + listrikAir.tidak_disediakan * 1) / 3;
    var nilaiParkir = (parkir.luas * 2 + parkir.pas_pasan * 1) / 3;
    var nilaiLemari = (lemari.ada * 2 + lemari.tidak_ada * 1) / 3;
    var nilaiKasur = (kasur.ada * 2 + kasur.tidak_ada * 1) / 3;
    var nilaiInternet = (internet.ada * 2 + internet.tidak_ada * 1) / 3;

    // Menghitung nilai total dengan bobot
    var nilaiTotal = (bobotToilet * nilaiToilet) + (bobotListrikAir * nilaiListrikAir) + 
                     (bobotParkir * nilaiParkir) + (bobotLemari * nilaiLemari) + 
                     (bobotKasur * nilaiKasur) + (bobotInternet * nilaiInternet);

    var keanggotaan = {
        baik: 0,
        cukup: 0,
        kurang: 0
    };

    // Menentukan keanggotaan berdasarkan nilai total
    if (nilaiTotal >= 0.6) {
        keanggotaan.baik = 1;
    } else if (nilaiTotal >= 0.3 && nilaiTotal < 0.6) {
        keanggotaan.cukup = 1;
    } else {
        keanggotaan.kurang = 1;
    }

    return keanggotaan;
}

// Fuzzyfikasi untuk kriteria Lokasi (sangat strategis (5), strategis (4), cukup strategis (3), tidak strategis (2), sangat tidak strategis (1))
function fuzzyfikasiLokasi(lokasi) {
    var keanggotaan = {
        sangat_strategis: 0,
        strategis: 0,
        cukup_strategis: 0,
        tidak_strategis: 0,
        sangat_tidak_strategis: 0
    };

    if (lokasi == "sangat_strategis") {
        keanggotaan.sangat_strategis = 1;
    } else if (lokasi == "strategis") {
        keanggotaan.strategis = 1;
    } else if (lokasi == "cukup_strategis") {
        keanggotaan.cukup_strategis = 1;
    } else if (lokasi == "tidak_strategis") {
        keanggotaan.tidak_strategis = 1;
    } 

    return keanggotaan;
}

// Fuzzyfikasi untuk gabungan lingkungan dengan bobot
function fuzzyfikasiLingkungan(keamanan, kenyamanan, kebersihan) {
    // Bobot untuk setiap sub-kriteria lingkungan
    var bobotKeamanan = 0.35;
    var bobotKenyamanan = 0.35;
    var bobotKebersihan = 0.3;

    // Menghitung nilai keanggotaan dari setiap sub-kriteria dengan bobot
    var nilaiKeamanan = (keamanan.sangat_aman * 4 + keamanan.aman * 3 + keamanan.cukup * 2) / 9;
    var nilaiKenyamanan = (kenyamanan.sangat_nyaman * 4 + kenyamanan.nyaman * 3 + kenyamanan.cukup * 2) / 9;
    var nilaiKebersihan = (kebersihan.sangat_bersih * 4 + kebersihan.bersih * 3 + kebersihan.cukup * 2) / 9;

    // Menghitung nilai total dengan bobot
    var nilaiTotal = (bobotKeamanan * nilaiKeamanan) + (bobotKenyamanan * nilaiKenyamanan) + (bobotKebersihan * nilaiKebersihan);

    var keanggotaan = {
        baik: 0,
        cukup: 0,
        kurang: 0
    };

    // Menentukan keanggotaan berdasarkan nilai total
    if (nilaiTotal >= 0.6) {
        keanggotaan.baik = 1;
    } else if (nilaiTotal >= 0.3 && nilaiTotal < 0.6) {
        keanggotaan.cukup = 1;
    } else {
        keanggotaan.kurang = 1;
    }

    return keanggotaan;
}

//fuzzyfikasi akses jalan (aspal/tidak aspal)
function fuzzyfikasiAkses(akses) {
    var keanggotaan = {
        aspal: 0,
        tidak_aspal: 0
    };
    if (akses == "aspal") {
        keanggotaan.aspal = 1;
    } else if (akses == "tidak_aspal") {
        keanggotaan.tidak_aspal = 1;
    }
    return keanggotaan;
}

//fuzzyfikasi daya tampung (luas/standar)
function fuzzyfikasiDayaTampung(dayaTampung) {
    var keanggotaan = {
        luas: 0,
        standar: 0
    };
    if (dayaTampung == "luas") {
        keanggotaan.luas = 1;
    } else if (dayaTampung == "standar") {
        keanggotaan.standar = 1;
    }
    return keanggotaan;
}

// Fuzzyfikasi untuk gabungan semua kriteria dengan bobot
function fuzzyfikasiGabungan(fuzzyJarak, fuzzyLuas, fuzzyFasilitas, fuzzyLokasi, fuzzyLingkungan, fuzzyAkses, fuzzyDayaTampung) {
    // Bobot untuk setiap kriteria
    var bobotJarak = 0.2;
    var bobotLuas = 0.2;
    var bobotFasilitas = 0.2;
    var bobotLokasi = 0.1;
    var bobotLingkungan = 0.1;
    var bobotAkses = 0.1;
    var bobotDayaTampung = 0.1;

    // Menghitung nilai total dari setiap kriteria dengan bobot
    var nilaiJarak = fuzzyJarak;
    var nilaiLuas = fuzzyLuas;
    var nilaiFasilitas = fuzzyFasilitas;
    var nilaiLokasi = fuzzyLokasi;
    var nilaiLingkungan = fuzzyLingkungan;
    var nilaiAkses = fuzzyAkses;
    var nilaiDayaTampung = fuzzyDayaTampung;

    // Menghitung nilai total dengan bobot
    var nilaiTotal = (bobotJarak * nilaiJarak) + (bobotLuas * nilaiLuas) + (bobotFasilitas * nilaiFasilitas) + 
                     (bobotLokasi * nilaiLokasi) + (bobotLingkungan * nilaiLingkungan) + (bobotAkses * nilaiAkses) +
                     (bobotDayaTampung * nilaiDayaTampung);

    var keanggotaan = {
        baik: 0,
        cukup: 0,
        kurang: 0
    };

    // Menentukan keanggotaan berdasarkan nilai total
    if (nilaiTotal >= 0.6) {
        keanggotaan.baik = 1;
    } else if (nilaiTotal >= 0.3 && nilaiTotal < 0.6) {
        keanggotaan.cukup = 1;
    } else {
        keanggotaan.kurang = 1;
    }

    return keanggotaan;
}


// Evaluasi aturan untuk kriteria gabungan
function evaluasiGabungan(jarak, luas, toilet, listrikAir, parkir, lemari, kasur, internet, lokasi, keamanan, kenyamanan, kebersihan, akses, dayaTampung) {
    // Fuzzyfikasi untuk setiap kriteria
    var fuzzyJarak = fuzzyfikasiJarak(jarak);
    var fuzzyLuas = fuzzyfikasiLuas(luas);
    var fuzzyFasilitas = fuzzyfikasiFasilitas(toilet, listrikAir, parkir, lemari, kasur, internet);
    var fuzzyLokasi = fuzzyfikasiLokasi(lokasi);
    var fuzzyLingkungan = fuzzyfikasiLingkungan(keamanan, kenyamanan, kebersihan);
    var fuzzyAkses = fuzzyfikasiAkses(akses);
    var fuzzyDayaTampung = fuzzyfikasiDayaTampung(dayaTampung);

    // Fuzzyfikasi gabungan semua kriteria
    var fuzzyGabungan = fuzzyfikasiGabungan(fuzzyJarak, fuzzyLuas, fuzzyFasilitas, fuzzyLokasi, fuzzyLingkungan, fuzzyAkses, fuzzyDayaTampung);

    return fuzzyGabungan;
}


// Definisi variabel fuzzifier dengan nilai fuzzifikasi untuk setiap kriteria
var fuzzifier = {
    baik: 0.8,
    cukup: 0.5,
    kurang: 0.2
};

// Tentukan rentang harga
var minPrice = 500000; // Rp 500.000
var maxPrice = 5000000; // Rp 5.000.000

// Hitung skala nilai
var scale = maxPrice - minPrice;

// Defuzzyfikasi untuk kriteria gabungan
// Defuzzyfikasi untuk kriteria gabungan
function defuzzyfikasiGabungan(keanggotaan) {
    var pembilang = 0;
    var penyebut = 0;

    // Mendapatkan pembilang dan penyebut dari nilai keanggotaan
    for (var key in keanggotaan) {
        pembilang += fuzzifier[key] * keanggotaan[key];
        penyebut += keanggotaan[key];
    }

    // Menghindari pembagian dengan nol
    if (penyebut === 0) {
        return 0;
    }

    //pembilang
    console.log("Pembilang: " + pembilang); // Tambahkan baris ini untuk mencetak nilai pembilang
    //penyebut
    console.log("Penyebut: " + penyebut); // Tambahkan baris ini untuk mencetak nilai penyebut
    // Menghitung nilai centroid (defuzzyfikasi)
    var centroid = pembilang / penyebut;

    // Hitung harga properti dari nilai centroid
    var price = minPrice + centroid * scale;

    console.log("Nilai defuzzyfikasi sebelum dikonversi: " + price); // Tambahkan baris ini untuk mencetak nilai defuzzyfikasi

    return price;
}

// Mengonversi nilai centroid menjadi format uang
function formatPrice(price) {
    return "Rp. " + price.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

//coba
var kos1 = {
    jarak: 300,
    luas: "3x5",
    toilet: 2,
    listrikAir: 2,
    parkir: "luas",
    lemari: "ada",
    kasur: "ada",
    internet: "ada",
    lokasi: "sangat_strategis",
    keamanan: "sangat_aman",
    kenyamanan: "sangat_nyaman",
    kebersihan: "sangat_bersih",
    akses: "aspal",
    dayaTampung: "luas"
};

var kos2 = {
    jarak: 500,
    luas: "3x4",
    toilet: 1,
    listrikAir: 1,
    parkir: "pas_pasan",
    lemari: "tidak_ada",
    kasur: "tidak_ada",
    internet: "tidak_ada",
    lokasi: "strategis",
    keamanan: "aman",
    kenyamanan: "nyaman",
    kebersihan: "bersih",
    akses: "aspal",
    dayaTampung: "standar"
};

//buat untuk hitung
var fuzzyGabungan1 = evaluasiGabungan(kos1.jarak, kos1.luas, kos1.toilet, kos1.listrikAir, kos1.parkir, kos1.lemari, kos1.kasur, kos1.internet, kos1.lokasi, kos1.keamanan, kos1.kenyamanan, kos1.kebersihan, kos1.akse, kos1.dayaTampung);
var fuzzyGabungan2 = evaluasiGabungan(kos2.jarak, kos2.luas, kos2.toilet, kos2.listrikAir, kos2.parkir, kos2.lemari, kos2.kasur, kos2.internet, kos2.lokasi, kos2.keamanan, kos2.kenyamanan, kos2.kebersihan, kos2.akse, kos2.dayaTampung);

// Defuzzyfikasi untuk kriteria gabungan
var price1 = defuzzyfikasiGabungan(fuzzyGabungan1);
var price2 = defuzzyfikasiGabungan(fuzzyGabungan2);

// Mengonversi nilai centroid menjadi format uang
var formattedPrice1 = formatPrice(price1);
var formattedPrice2 = formatPrice(price2);

console.log("Harga kos 1: " + formattedPrice1);
console.log("Harga kos 2: " + formattedPrice2);