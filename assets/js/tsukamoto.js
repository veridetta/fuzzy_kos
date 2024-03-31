$('#hitungButton').click(function(e) {
    e.preventDefault();
    var jarak = parseInt($('#jarak_kampus').val());
    var luas = $('#luas_kos').val(); // Nilai luas tidak perlu diubah menjadi integer karena sudah dalam format string
    var toilet = $('#toilet').val();
    var listrikAir = $('#listrik_air').val();
    var parkir = $('#parkir').val();
    var lemari = $('#lemari').val();
    var kasur = $('#kasur').val();
    var internet = $('#internet').val();
    var lokasi = $('#lokasi').val();
    var keamanan = $('#keamanan').val();
    var kenyamanan = $('#kenyamanan').val();
    var kebersihan = $('#kebersihan').val();
    var akses = $('#akses_jalan').val();
    var dayaTampung = $('#daya_tampung').val();

    //validasi
    if (jarak < 0 || jarak > 2000) {
        alert("Jarak harus diantara 0 sampai 2000 meter");
        return;
    }
    if (luas != "3x5" && luas != "3x4" && luas != "3x3" && luas != "3x2.5" && luas != "3x2") {
        alert("Luas kos tidak valid");
        return;
    }
    if (toilet != "di dalam kamar" && toilet != "di luar kamar") {
        alert("Toilet tidak valid");
        return;
    }
    if (listrikAir != "disediakan" && listrikAir != "tidak_disediakan") {
        alert("Listrik/Air tidak valid");
        return;
    }
    if (parkir != "luas" && parkir != "pas_pasan") {
        alert("Parkir tidak valid");
        return;
    }
    if (lemari != "ada" && lemari != "tidak_ada") {
        alert("Lemari tidak valid");
        return;
    }
    if (kasur != "ada" && kasur != "tidak_ada") {
        alert("Kasur tidak valid");
        return;
    }
    if (internet != "ada" && internet != "tidak_ada") {
        alert("Internet tidak valid");
        return;
    }
    if (lokasi != "sangat strategis" && lokasi != "strategis" && lokasi != "cukup" && lokasi != "tidak strategis" && lokasi != "sangat_tidak_strategis") {
        alert("Lokasi tidak valid");
        return;
    }
    if (keamanan != "sangat aman" && keamanan != "aman" && keamanan != "cukup" && keamanan != "tidak_aman") {
        alert("Keamanan tidak valid");
        return;
    }
    if (kenyamanan != "sangat nyaman" && kenyamanan != "nyaman" && kenyamanan != "cukup" && kenyamanan != "tidak nyaman") {
        alert("Kenyamanan tidak valid");
        return;
    }
    if (kebersihan != "sangat bersih" && kebersihan != "bersih" && kebersihan != "cukup" && kebersihan != "tidak bersih") {
        alert("Kebersihan tidak valid");
        return;
    }
    if (akses != "aspal" && akses != "tidak aspal") {
        alert("Akses jalan tidak valid");
        return;
    }
    if (dayaTampung != "luas" && dayaTampung != "standar") {
        alert("Daya tampung tidak valid");
        return;
    }
    //fungsi fuzzyfikasi

    //fake data
    // var jarak = 500;
    // var luas = "3x5";
    // var toilet = "di dalam kamar";
    // var listrikAir = "disediakan";
    // var parkir = "luas";
    // var lemari = "ada";
    // var kasur = "ada";
    // var internet = "ada";
    // var lokasi = "sangat_strategis";
    // var keamanan = "sangat_aman";
    // var kenyamanan = "sangat_nyaman";
    // var kebersihan = "sangat_bersih";
    // var akses = "aspal";
    // var dayaTampung = "luas";
    // Definisi variabel alfa dan z
    var alfa = new Array(18);
    var z = new Array(18);

    
    
function fuzzyfikasiToilet(toilet) {
    var keanggotaan = {
        dalam_kamar: 0,
        luar_kamar: 0
    };

    if (toilet == "di dalam kamar") {
        keanggotaan.dalam_kamar = 1;
    } else if (toilet == "di luar kamar") {
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

    if (listrikAir == "disediakan") {
        keanggotaan.disediakan = 1;
    } else if (listrikAir == "tidak_disediakan") {
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
        keanggotaan.sangat_bersih = 4;
    } else if (kebersihan == "bersih") {
        keanggotaan.bersih = 3;
    } else if (kebersihan == "cukup") {
        keanggotaan.cukup = 2;
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
        keanggotaan.baik = 1;
    } else if (jarak >= 400 && jarak < 800) {
        keanggotaan.sedang = (800 - jarak) / 400;
        keanggotaan.baik = (jarak - 400) / 400;
    } else if (jarak >= 800 && jarak < 1200) {
        keanggotaan.sedang = (1200 - jarak) / 400;
        keanggotaan.baik = (jarak - 800) / 400;
    } else if (jarak >= 1200 && jarak < 1600) {
        keanggotaan.sedang = (1600 - jarak) / 400;
        keanggotaan.kurang = (jarak - 1200) / 400;
    } else if (jarak >= 1600) {
        keanggotaan.kurang = 1;
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
        keanggotaan.sangat_strategis = 5;
    } else if (lokasi == "strategis") {
        keanggotaan.strategis = 4;
    } else if (lokasi == "cukup") {
        keanggotaan.cukup_strategis = 3;
    } else if (lokasi == "tidak_strategis") {
        keanggotaan.tidak_strategis = 2;
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

/**
*  mencari harga di himpunan harga murah
*  @param alfa
*  @return harga
*/
function hargaMurah(alfa){
    var murah = 300;
    var sedang = 700;
    var mahal = 1500;

    if(alfa > 0 && alfa < 1){
        return (mahal - alfa * sedang);
    }else if(alfa == 1){
        return murah;
    }else{
        return mahal;
    }
}

/**
*  mencari harga di himpunan harga mahal
*  @param alfa
*  @return harga
*/
function hargaMahal(alfa){
    var murah = 300;
    var sedang = 700;
    var mahal = 1500;

    if(alfa > 0 && alfa < 1){
        return (murah + alfa * sedang);
    }else if(alfa == 1){
        return mahal;
    }else{
        return murah;
    }
}

/**
*  mencari nilai z untuk semua aturan yang ada
*/
function aturan(jarak, luas, toilet, listrikAir, parkir, lemari, kasur, internet, lokasi, keamanan, kenyamanan, kebersihan, akses, dayaTampung) {
    // Fuzzyfikasi untuk setiap kriteria
    var jarakFuzzy = fuzzyfikasiJarak(jarak);
    var luasFuzzy = fuzzyfikasiLuas(luas);
    //fasilitas
    var toiletFuzzy = fuzzyfikasiToilet(toilet);
    var listrikAirFuzzy = fuzzyfikasiListrikAir(listrikAir);
    var parkirFuzzy = fuzzyfikasiParkir(parkir);
    var lemariFuzzy = fuzzyfikasiLemari(lemari);
    var kasurFuzzy = fuzzyfikasiKasur(kasur);
    var internetFuzzy = fuzzyfikasiInternet(internet);
    //lingkungan
    var keamananFuzzy = fuzzyfikasiKeamanan(keamanan);
    var kenyamananFuzzy = fuzzyfikasiKenyamanan(kenyamanan);
    var kebersihanFuzzy = fuzzyfikasiKebersihan(kebersihan);

    var lokasiFuzzy = fuzzyfikasiLokasi(lokasi);
    var aksesFuzzy = fuzzyfikasiAkses(akses);
    var dayaTampungFuzzy = fuzzyfikasiDayaTampung(dayaTampung);

    var arrayKriteria = [jarakFuzzy, luasFuzzy, toiletFuzzy, listrikAirFuzzy, parkirFuzzy, lemariFuzzy, kasurFuzzy, internetFuzzy, lokasiFuzzy, keamananFuzzy, kenyamananFuzzy, kebersihanFuzzy, aksesFuzzy, dayaTampungFuzzy];



    // Definisi aturan fuzzy
    // Aturan 1: Jarak = Kurang DAN Luas = Kurang ... THEN Harga = Murah
    alfa[0] = Math.min(jarakFuzzy.kurang, luasFuzzy.kurang);
    z[0] = hargaMurah(alfa[0]);

    // Aturan 2: Jarak = Kurang DAN Luas = Sedang ... THEN Harga = Murah
    alfa[1] = Math.min(jarakFuzzy.kurang, luasFuzzy.sedang);
    z[1] = hargaMurah(alfa[1]);

    // Aturan 3: Jarak = Kurang DAN Luas = Baik ... THEN Harga = Murah
    alfa[2] = Math.min(jarakFuzzy.kurang, luasFuzzy.baik);
    z[2] = hargaMurah(alfa[2]);

    // Aturan 4: Jarak = Sedang DAN Luas = Kurang ... THEN Harga = Murah
    alfa[3] = Math.min(jarakFuzzy.sedang, luasFuzzy.kurang);
    z[3] = hargaMurah(alfa[3]);

    // Aturan 5: Jarak = Sedang DAN Luas = Sedang ... THEN Harga = Murah
    alfa[4] = Math.min(jarakFuzzy.sedang, luasFuzzy.sedang);
    z[4] = hargaMurah(alfa[4]);

    // Aturan 6: Jarak = Sedang DAN Luas = Baik ... THEN Harga = Cukup
    alfa[5] = Math.min(jarakFuzzy.sedang, luasFuzzy.baik);
    z[5] = hargaMurah(alfa[5]);

    // Aturan 7: Jarak = Baik DAN Luas = Kurang ... THEN Harga = Cukup
    alfa[6] = Math.min(jarakFuzzy.baik, luasFuzzy.kurang);
    z[6] = hargaMurah(alfa[6]);

    // Aturan 8: Jarak = Baik DAN Luas = Sedang ... THEN Harga = Mahal
    alfa[7] = Math.min(jarakFuzzy.baik, luasFuzzy.sedang);
    z[7] = hargaMurah(alfa[7]);

    // Aturan 9: Jarak = Baik DAN Luas = Baik ... THEN Harga = Mahal
    alfa[8] = Math.min(jarakFuzzy.baik, luasFuzzy.baik);
    z[8] = hargaMahal(alfa[8]);

    // Aturan 10: Toilet = Dalam Kamar ... THEN Harga = Mahal
    alfa[9] = toiletFuzzy.dalam_kamar;
    z[9] = hargaMahal(alfa[9]);

    // Aturan 11: Toilet = Luar Kamar ... THEN Harga = Cukup
    alfa[10] = toiletFuzzy.luar_kamar;
    z[10] = hargaMahal(alfa[10]);

    // Aturan 12: Listrik/Air = Disediakan ... THEN Harga = Mahal
    alfa[11] = listrikAirFuzzy.disediakan;
    z[11] = hargaMahal(alfa[11]);

    // Aturan 13: Listrik/Air = Tidak Disediakan ... THEN Harga = Cukup
    alfa[12] = listrikAirFuzzy.tidak_disediakan;
    z[12] = hargaMurah(alfa[12]);

    // Aturan 14: Parkir = Luas ... THEN Harga = Mahal
    alfa[13] = parkirFuzzy.luas;
    z[13] = hargaMahal(alfa[13]);

    // Aturan 15: Parkir = Pas-pasan ... THEN Harga = Cukup
    alfa[14] = parkirFuzzy.pas_pasan;
    z[14] = hargaMurah(alfa[14]);

    // Aturan 16: Lemari = Ada ... THEN Harga = Mahal
    alfa[15] = lemariFuzzy.ada;
    z[15] = hargaMahal(alfa[15]);

    // Aturan 17: Lemari = Tidak Ada ... THEN Harga = Cukup
    alfa[16] = lemariFuzzy.tidak_ada;
    z[16] = hargaMurah(alfa[16]);

    // Aturan 18: Jarak = Baik DAN Luas = Baik ... THEN Harga = Mahal
    alfa[17] = Math.min(jarakFuzzy.baik, luasFuzzy.baik);
    z[17] = hargaMahal(alfa[17]);

    // Aturan 19: Keamanan = Sangat Aman ... THEN Harga = Mahal
    alfa[18] = keamananFuzzy.sangat_aman;
    z[18] = hargaMahal(alfa[18]);

    // Aturan 20: Keamanan = Aman ... THEN Harga = Mahal
    alfa[19] = keamananFuzzy.aman;
    z[19] = hargaMahal(alfa[19]);

    // Aturan 21: Keamanan = Cukup ... THEN Harga = Cukup
    if(keamananFuzzy.cukup){
        alfa[20]=keamananFuzzy.cukup;
    }else{
        alfa[20]=0;
    }
    z[20] = hargaMurah(alfa[20]);

    // Aturan 22: Keamanan = Tidak Aman ... THEN Harga = Murah
    if(keamananFuzzy.tidak_aman){
        alfa[21] = keamananFuzzy.tidak_aman;
    }else{
        alfa[21]=0;
    }
    z[21] = hargaMurah(alfa[21]);

    // Aturan 23: Kenyamanan = Sangat Nyaman ... THEN Harga = Mahal
    if(kenyamananFuzzy.sangat_nyaman){
        alfa[22] = kenyamananFuzzy.sangat_nyaman;
    }else{
        alfa[22]=0;
    }
    z[22] = hargaMahal(alfa[22]);

    // Aturan 24: Kenyamanan = Nyaman ... THEN Harga = Cukup
    if(kenyamananFuzzy.nyaman){
        alfa[23] = kenyamananFuzzy.nyaman;
    }else{
        alfa[23]=0;
    }
    z[23] = hargaMurah(alfa[23]);

    // Aturan 25: Kenyamanan = Tidak Nyaman ... THEN Harga = Murah
    if(kenyamananFuzzy.tidak_nyaman){
        alfa[24] = kenyamananFuzzy.tidak_nyaman;
    }else{
        alfa[24]=0;
    }
    z[24] = hargaMurah(alfa[24]);

    // Aturan 26: Kebersihan = Sangat Bersih ... THEN Harga = Mahal
    if(kebersihanFuzzy.sangat_bersih){
        alfa[25] = kebersihanFuzzy.sangat_bersih;
    }else{
        alfa[25]=0;
    }
    z[25] = hargaMahal(alfa[25]);

    // Aturan 27: Kebersihan = Bersih ... THEN Harga = Cukup
    if(kebersihanFuzzy.bersih){
        alfa[26] = kebersihanFuzzy.bersih;
    }else{
        alfa[26]=0;
    }
    z[26] = hargaMurah(alfa[26]);

    // Aturan 28: Kebersihan = Kurang Bersih ... THEN Harga = Murah
    if(kebersihanFuzzy.kurang_bersih){
        alfa[27] = kebersihanFuzzy.kurang_bersih;
    }else{
        alfa[27]=0;
    }
    
    z[27] = hargaMurah(alfa[27]);

    // Aturan 29: Akses = Sangat Mudah ... THEN Harga = Mahal
    if(aksesFuzzy.sangat_mudah){
        alfa[28] = aksesFuzzy.sangat_mudah;
    }else{
        alfa[28]=0;
    }

    z[28] = hargaMahal(alfa[28]);

    // Aturan 30: Akses = Mudah ... THEN Harga = Cukup
    if(aksesFuzzy.mudah){
        alfa[29] = aksesFuzzy.mudah;
    }else{
        alfa[29]=0;
    }
    z[29] = hargaMurah(alfa[29]);

    // Aturan 31: Akses = Sulit ... THEN Harga = Murah
    if(aksesFuzzy.sulit){
        alfa[30] = aksesFuzzy.sulit;
    }else{
        alfa[30]=0;
    }
    z[30] = hargaMurah(alfa[30]);

    // Aturan 32: Daya Tampung = Besar ... THEN Harga = Murah
    if(dayaTampungFuzzy.besar){
        alfa[31] = dayaTampungFuzzy.besar;
    }else{
        alfa[31]=0;
    }
    z[31] = hargaMurah(alfa[31]);

    // Aturan 33: Daya Tampung = Sedang ... THEN Harga = Cukup
    if(dayaTampungFuzzy.sedang){
        alfa[32] = dayaTampungFuzzy.sedang;
    }else{
        alfa[32]=0;
    }
    z[32] = hargaMurah(alfa[32]);

    // Aturan 34: Daya Tampung = Kecil ... THEN Harga = Mahal
    if(dayaTampungFuzzy.kecil){
        alfa[33] = dayaTampungFuzzy.kecil;
    }else{
        alfa[33]=0;
    }
    z[33] = hargaMahal(alfa[33]);

    // Aturan 35: Lokasi = Strategis ... THEN Harga = Mahal
    if(lokasiFuzzy.strategis){
        alfa[34] = lokasiFuzzy.strategis;
    }else{
        alfa[34]=0;
    }
    z[34] = hargaMahal(alfa[34]);

    // Aturan 36: Lokasi = Tidak Strategis ... THEN Harga = Murah
    if(lokasiFuzzy.tidak_strategis){
        alfa[35] = lokasiFuzzy.tidak_strategis;
    }else{
        alfa[35]=0;
    }
    z[35] = hargaMurah(alfa[35]);

    // Aturan 35: Lokasi = Strategis ... THEN Harga = Mahal
    if(lokasiFuzzy.sangat_strategis){
        alfa[36] = lokasiFuzzy.sangat_strategis;
    }else{
        alfa[36]=0;
    }
    z[36] = hargaMahal(alfa[36]);

    // Aturan 35: Lokasi = Strategis ... THEN Harga = Mahal
    if(lokasiFuzzy.cukup_strategis){
        alfa[37] = lokasiFuzzy.cukup_strategis;
    }else{
        alfa[37]=0;
    }
    z[37] = hargaMurah(alfa[37]);

    // Kembali ke nilai z
    return z;
}


/**
*  mencari nilai total z(defuzzyfikasi)
*  @return nilai total z
*/
function defuzzyfikasi(){
    var temp1 = 0;
    var temp2 = 0;
    var hasil = 0;

    for(i = 0; i < 38; i++){
        temp1 = temp1 + alfa[i] * z[i];
        temp2 = temp2 + alfa[i];
    }

    hasil = temp1 / temp2;
    return Math.round(hasil);
}

/**
*  menghitung semua aturan dan menentukan harga
*  @return harga
*/
function prediksiHarga(){
    aturan(jarak, luas, toilet, listrikAir, parkir, lemari, kasur, internet, lokasi, keamanan, kenyamanan, kebersihan, akses, dayaTampung);
    console.log(z);
    console.log(alfa);
    return defuzzyfikasi();
}

function hitung(jarak, luas, toilet, listrikAir, parkir, lemari, kasur, internet, lokasi, keamanan, kenyamanan, kebersihan, akses, dayaTampung){
    var fjarak = fuzzyfikasiJarak(jarak);

}
    //untuk menampilkan tabel alfa dan z setiap aturan
    var z_result = "";
    for(i = 0; i < z.length; i++){
        z_result += "<tr><td>"+(i+1)+"</td><td>alfa</td><td>"+alfa[i]+"</td><td>z</td><td>"+z[i] + "</td><tr/>";
    }
    // $('#z-result').html(z_result);
    var harga = prediksiHarga();
    $('#hasil').html("Hasil Perhitungan : Rp "+harga+".000,00");	
    $("#harga").val(harga+"000");
    // alert("Rp "+prediksiHarga()+".000,00");

});
