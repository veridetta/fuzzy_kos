<?php

function hitungJarakKeanggotaan($jarak) {
    // Rentang dan nilai keanggotaan untuk setiap kriteria jarak
    $rentang = array(
        array(400, 800, 1200, 1600, PHP_INT_MAX),
    );
    $skala_nilai = array(5, 4, 3, 2, 1);
    
    // Mendapatkan nilai keanggotaan untuk setiap rentang
    $keanggotaan = array();
    foreach ($rentang as $i => $range) {
        $keanggotaan[$i] = array();
        foreach ($range as $j => $batas) {
            if ($j == 0) {
                $keanggotaan[$i][$j] = $jarak <= $batas ? 1 : 0;
            } elseif ($j == count($range) - 1) {
                $keanggotaan[$i][$j] = $jarak > $range[$j - 1] ? 1 : 0;
            } else {
                $keanggotaan[$i][$j] = max(0, min(($jarak - $range[$j - 1]) / ($range[$j] - $range[$j - 1]), ($range[$j + 1] - $jarak) / ($range[$j + 1] - $range[$j])));
            }
        }
    }

    // Normalisasi nilai keanggotaan
    $total_keanggotaan = array();
    foreach ($keanggotaan as $i => $range_keanggotaan) {
        $total_keanggotaan[$i] = array_sum($range_keanggotaan);
    }

    // Hitung hasil akhir berdasarkan skala nilai
    $hasil = array();
    foreach ($total_keanggotaan as $i => $total) {
        $hasil[$i] = $total * $skala_nilai[$i];
    }

    return $hasil;
}

// Contoh pemanggilan fungsi dengan jarak 1000m
$jarak = 800;
$hasil_jarak_keanggotaan = hitungJarakKeanggotaan($jarak);
print_r($hasil_jarak_keanggotaan);

?>