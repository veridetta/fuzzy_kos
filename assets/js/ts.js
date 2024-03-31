

function fJarak(jarak) {
    var j=1;
    if (jarak < 400) {
        j=5;
    } else if (jarak >= 400 && jarak < 800) {
        j = 4;
    } else if (jarak >= 800 && jarak < 1200) {
        j = 3;
    } else if (jarak >= 1200 && jarak < 1600) {
        j = 2;
    } else if (jarak >= 1600) {
        j = 1;
    }
    var total = 5;
    var nilai = 0.2;
    var final = (j/total) * nilai;
    console.log("jarak awal "+jarak+" rumus (j/total) * nilai "+j+"/"+total+" * "+nilai+" = "+final);
    return final;
}
function fLuas(luas) {
    var l = 1;
    if (luas == "3x5") {
        l=5;
    } else if (luas == "3x4") {
        l=4;
    } else if (luas == "3x3") {
        l=3;
    } else if (luas == "3x2.5") {
        l=2;
    }else if (luas == "3x2") {
        l=1;
    }
    var total = 5;
    var nilai = 0.2;
    var final = (l/total) * nilai;
    return final;

}
function fToilet(toilet) {
    var t = 1;
    if (toilet == "di dalam kamar") {
        t=2;
    } else if (toilet == "di luar kamar") {
        t=1;
    }
    var total = 2;
    var nilai = 5;
    var final = (t/total) * nilai;
    final = (final /21)*0.2;
    return final;
}
function fListrikAir(listrikAir) {
    var la = 1;
    if (listrikAir == "disediakan") {
        la=2;
    } else if (listrikAir == "tidak disediakan") {
        la=1;
    }
    var total = 2;
    var nilai = 5;
    var final = (la/total) * nilai;
    final = (final /21)*0.2;
    return final;
}
function fParkir(parkir) {
    var p = 1;
    if (parkir == "luas") {
        p=2;
    } else if (parkir == "pas-pasan") {
        p=1;
    }
    var total = 2;
    var nilai = 3;
    var final = (p/total) * nilai;
    final = (final /21)*0.2;
    return final;
}
function fLemari(lemari) {
    var l = 1;
    if (lemari == "ada") {
        l=2;
    } else if (lemari == "tidak_ada") {
        l=1;
    }
    var total = 2;
    var nilai = 3;
    var final = (l/total) * nilai;
    final = (final /21)*0.2;
    return final;
}
function fKasur(kasur) {
    var k = 1;
    if (kasur == "ada") {
        k=2;
    } else if (kasur == "tidak_ada") {
        k=1;
    }
    var total = 2;
    var nilai = 3;
    var final = (k/total) * nilai;
    final = (final /21)*0.2;
    return final;
}
function fInternet(internet) {
    var i = 1;
    if (internet == "ada") {
        i=2;
    } else if (internet == "tidak_ada") {
        i=1;
    }
    var total = 2;
    var nilai = 2;
    var final = (i/total) * nilai;
    final = (final /21)*0.2;
    return final;
}
function fLokasi(lokasi) {
    var l = 1;
    if (lokasi == "sangat strategis") {
        l=5;
    } else if (lokasi == "strategis") {
        l=4;
    } else if (lokasi == "cukup") {
        l=3;
    } else if (lokasi == "tidak strategis") {
        l=2;
    }
    var total = 5;
    var nilai = 0.1;
    var final = (l/total) * nilai;
    return final;
}
function fKeamanan(keamanan) {
    var k = 1;
    if (keamanan == "sangat aman") {
        k=4;
    } else if (keamanan == "aman") {
        k=3;
    } else if (keamanan == "cukup") {
        k=2;
    }
    var total = 4;
    var nilai = 5;
    var final = (k/total) * nilai;
    final = (final /14)*0.1;
    return final;
}
function fKenyamanan(kenyamanan) {
    var k = 1;
    if (kenyamanan == "sangat nyaman") {
        k=4;
    } else if (kenyamanan == "nyaman") {
        k=3;
    } else if (kenyamanan == "cukup") {
        k=2;
    }
    var total = 4;
    var nilai = 4;
    var final = (k/total) * nilai;
    final = (final /14)*0.1;
    return final;
}
function fKebersihan(kebersihan) {
    var k = 1;
    if (kebersihan == "sangat bersih") {
        k=4;
    } else if (kebersihan == "bersih") {
        k=3;
    } else if (kebersihan == "cukup") {
        k=2;
    }
    var total = 4;
    var nilai = 5;
    var final = (k/total) * nilai;
    final = (final /14)*0.1;
    return final;
}
function fAkses(akses,lebar) {
    var a = 1;
    var l =1;
    if(lebar =="6m"){
        l=5;
    }else if(lebar =="5m"){
        l=4;
    }else{
        l=3;
    }
    if (akses == "aspal") {
        a=2;
    } else if (akses == "tidak aspal") {
        a=1;
    }
    var total_l = 5;
    var nilai_l=a;
    var final_l = (l/total_l) * nilai_l;
    var final = (final_l/5) * 0.1;
    return final;
}

function fDaya(daya) {
    var d = 1;
    if (daya == "luas") {
        d=5;
    } else if (daya == "standar") {
        d=4;
    }
    var total = 5;
    var nilai = 0.1;
    var final = (d/total) * nilai;
    return final;
}

function ffasilitas(ftoilet,flistrikAir,fparkir,flemari,fkasur,finternet){
    var f = ftoilet+flistrikAir+fparkir+flemari+fkasur+finternet;
    var final = f
    return final;
}

function flingkungan(fkeamanan,fkenyamanan,fkebersihan){
    var f = fkeamanan+fkenyamanan+fkebersihan;
    var final = f
    return final;
}

function hitung(jarak, luas, toilet, listrikAir, parkir, lemari, kasur, internet, lokasi, keamanan, kenyamanan, kebersihan, akses, lebarJalan, dayaTampung){
    var fjarak = fJarak(jarak);
    var fluas = fLuas(luas);
    var ftoilet = fToilet(toilet);
    var flistrikAir = fListrikAir(listrikAir);
    var fparkir = fParkir(parkir);
    var flemari = fLemari(lemari);
    var fkasur = fKasur(kasur);
    var finternet = fInternet(internet);
    var flokasi = fLokasi(lokasi);
    var fkeamanan = fKeamanan(keamanan);
    var fkenyamanan = fKenyamanan(kenyamanan);
    var fkebersihan = fKebersihan(kebersihan);
    var fakses = fAkses(akses,lebarJalan);
    var fdaya = fDaya(dayaTampung);

    var fFasilitas = ffasilitas(ftoilet,flistrikAir,fparkir,flemari,fkasur,finternet);
    var fLingkungan = flingkungan(fkeamanan,fkenyamanan,fkebersihan);

    var hasil = fjarak+fluas+flokasi+fakses+fdaya+fFasilitas+fLingkungan;
    console.log("jarak "+fjarak+" luas "+fluas+" lokasi "+flokasi+" akses "+fakses+" daya "+fdaya+" fasilitas "+fFasilitas+" lingkungan "+fLingkungan+" hasil "+hasil);
    var final = hasil * 1500000;
    //bulatkan ke atas
    final = Math.ceil(final);
    $('#jarak_kampus_text').html(fjarak);
    $('#luas_kos_text').html(fluas);
    $('#toilet_text').html(ftoilet);
    $('#listrik_air_text').html(flistrikAir);
    $('#parkir_text').html(fparkir);
    $('#lemari_text').html(flemari);
    $('#kasur_text').html(fkasur);
    $('#internet_text').html(finternet);
    $('#lokasi_text').html(flokasi);
    $('#keamanan_text').html(fkeamanan);
    $('#kenyamanan_text').html(fkenyamanan);
    $('#kebersihan_text').html(fkebersihan);
    $('#akses_jalan_text').html(fakses);
    $('#daya_tampung_text').html(fdaya);
    $('#fasilitas_text').html(fFasilitas);
    $('#fasilitas_kos_text').html(fLingkungan);

    return final;
}
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
    var lebarJalan = $('#lebar_jalan').val();

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
    if (listrikAir != "disediakan" && listrikAir != "tidak disediakan") {
        alert("Listrik/Air tidak valid");
        return;
    }
    if (parkir != "luas" && parkir != "pas-pasan") {
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
    if (lebarJalan != "6m" && lebarJalan != "5m" && lebarJalan != "4m") {
        alert("Lebar jalan tidak valid");
        return;
    }

    var harga = hitung(jarak, luas, toilet, listrikAir, parkir, lemari, kasur, internet, lokasi, keamanan, kenyamanan, kebersihan, akses, lebarJalan, dayaTampung);
    var hargaformat = formatRupiah(harga);
    $('#harga_text').html(hargaformat);	
    $('#hasil').show();
    $('#hasil').removeClass('d-none');
    //set value input harga 
    $('#harga').val(harga);
});
function formatRupiah(harga) {
    return 'Rp ' + harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}