-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 19, 2024 at 07:12 PM
-- Server version: 8.0.30
-- PHP Version: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_fuzzy_kos`
--

-- --------------------------------------------------------

--
-- Table structure for table `fasilitas`
--

CREATE TABLE `fasilitas` (
  `id` int NOT NULL,
  `toilet` enum('di dalam kamar','di luar kamar') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `listrik_air` enum('disediakan','tidak disediakan') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parkir` enum('luas','pas-pasan') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lemari` enum('ada','tidak ada') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kasur` enum('ada','tidak ada') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `internet` enum('ada','tidak ada') COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fasilitas`
--

INSERT INTO `fasilitas` (`id`, `toilet`, `listrik_air`, `parkir`, `lemari`, `kasur`, `internet`) VALUES
(4, 'di dalam kamar', 'disediakan', 'luas', 'ada', 'ada', 'ada');

-- --------------------------------------------------------

--
-- Table structure for table `hasil`
--

CREATE TABLE `hasil` (
  `id` int NOT NULL,
  `pemilik_id` int DEFAULT NULL,
  `harga` decimal(10,2) DEFAULT NULL,
  `kos_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hasil`
--

INSERT INTO `hasil` (`id`, `pemilik_id`, `harga`, `kos_id`) VALUES
(2, 2, '1350000.00', 3);

-- --------------------------------------------------------

--
-- Table structure for table `kos`
--

CREATE TABLE `kos` (
  `id` int NOT NULL,
  `pemilik_id` int DEFAULT NULL,
  `jarak` text COLLATE utf8mb4_unicode_ci,
  `luas` text COLLATE utf8mb4_unicode_ci,
  `fasilitas_id` int DEFAULT NULL,
  `lokasi` enum('sangat strategis','strategis','cukup','tidak strategis') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lingkungan_id` int DEFAULT NULL,
  `akses_jalan` enum('aspal','tidak aspal') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `daya_tampung` enum('luas','standar') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link_gmaps` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_kos` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kos`
--

INSERT INTO `kos` (`id`, `pemilik_id`, `jarak`, `luas`, `fasilitas_id`, `lokasi`, `lingkungan_id`, `akses_jalan`, `daya_tampung`, `link_gmaps`, `nama_kos`) VALUES
(3, 2, '799', '3x5', 4, 'sangat strategis', 4, 'aspal', 'luas', 'https://maps.app.goo.gl/EqMmF4gdTpTYkZAeA', 'Kosan Kita');

-- --------------------------------------------------------

--
-- Table structure for table `lingkungan`
--

CREATE TABLE `lingkungan` (
  `id` int NOT NULL,
  `keamanan` enum('sangat aman','aman','cukup') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kenyamanan` enum('sangat nyaman','nyaman','cukup') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kebersihan` enum('sangat bersih','bersih','cukup') COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lingkungan`
--

INSERT INTO `lingkungan` (`id`, `keamanan`, `kenyamanan`, `kebersihan`) VALUES
(4, 'sangat aman', 'sangat nyaman', 'sangat bersih');

-- --------------------------------------------------------

--
-- Table structure for table `pemilik`
--

CREATE TABLE `pemilik` (
  `id` int NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tempat_lahir` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `no_hp` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pemilik`
--

INSERT INTO `pemilik` (`id`, `nama`, `tempat_lahir`, `tanggal_lahir`, `no_hp`, `alamat`, `user_id`) VALUES
(2, 'Akbar Edited', 'Jakarta', '2000-02-20', '082112112', 'Jakarta raya blok a no 11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('admin','owner') COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `role`) VALUES
(1, 'owner', '579233b2c479241523cba5e3af55d0f50f2d6414', 'owner'),
(2, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fasilitas`
--
ALTER TABLE `fasilitas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hasil`
--
ALTER TABLE `hasil`
  ADD PRIMARY KEY (`id`),
  ADD KEY `penyewa_id` (`pemilik_id`);

--
-- Indexes for table `kos`
--
ALTER TABLE `kos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `penyewa_id` (`pemilik_id`),
  ADD KEY `fasilitas_id` (`fasilitas_id`),
  ADD KEY `lingkungan_id` (`lingkungan_id`);

--
-- Indexes for table `lingkungan`
--
ALTER TABLE `lingkungan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pemilik`
--
ALTER TABLE `pemilik`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fasilitas`
--
ALTER TABLE `fasilitas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `hasil`
--
ALTER TABLE `hasil`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kos`
--
ALTER TABLE `kos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `lingkungan`
--
ALTER TABLE `lingkungan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pemilik`
--
ALTER TABLE `pemilik`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hasil`
--
ALTER TABLE `hasil`
  ADD CONSTRAINT `hasil_ibfk_1` FOREIGN KEY (`pemilik_id`) REFERENCES `pemilik` (`id`);

--
-- Constraints for table `kos`
--
ALTER TABLE `kos`
  ADD CONSTRAINT `kos_ibfk_1` FOREIGN KEY (`pemilik_id`) REFERENCES `pemilik` (`id`),
  ADD CONSTRAINT `kos_ibfk_2` FOREIGN KEY (`fasilitas_id`) REFERENCES `fasilitas` (`id`),
  ADD CONSTRAINT `kos_ibfk_3` FOREIGN KEY (`lingkungan_id`) REFERENCES `lingkungan` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
