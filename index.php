<?php
require_once('includes/init.php');

$page = "Hasil";
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>SPK Pemilihan Perangkat Desa Metode VIKOR</title>

        <!-- Custom fonts for this template-->
        <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
		<!-- Custom styles for this template-->
		<link href="assets/css/sb-admin-2.min.css" rel="stylesheet">
		<link href="assets/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
		<script src="assets/vendor/jquery/jquery.min.js"></script>
        <!-- Custom styles for this template-->
        <link href="assets/css/sb-admin-2.min.css" rel="stylesheet" />
		<link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon">
		<link rel="icon" href="assets/img/favicon.ico" type="image/x-icon">
        <style>
            .bg-circle {
            border-radius: 50%; /* Membuat latar belakang menjadi lingkaran */
            justify-content: center;
            align-items: center;
            padding:20px;
            }
        </style>
    </head>

    <body class="bg-gradient-info">
		<nav class="navbar navbar-expand-lg navbar-dark bg-white shadow-lg pb-3 pt-3 font-weight-bold">
            <div class="container">
                <a class="navbar-brand text-info" style="font-weight: 900;" href="index.php"> <img src="assets/img/logo.png" width="30" height="30" class="d-inline-block align-top" alt=""> Sistem Pendukung Keputusan Penentuan Harga KOS metode Fuzzy Tsukamoto</a>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link text-info" href="login.php">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
		<div class="container pt-4">
			<?php
			$status = isset($_GET['status']) ? $_GET['status'] : '';
			$msg = '';
			switch($status):
				case 'sukses-baru':
					$msg = 'Data berhasil disimpan';
					break;
				case 'sukses-hapus':
					$msg = 'Data behasil dihapus';
					break;
				case 'sukses-edit':
					$msg = 'Data behasil diupdate';
					break;
			endswitch;

			if($msg):
				echo '<div class="alert alert-info">'.$msg.'</div>';
			endif;
			?>

			<div class="card shadow mb-4 p-2">
				<!-- /.card-header -->
				<div class="card-header py-3">
					<div class="row justify-content-center">
						<div class="text-center p-4 col-md-10">
							<span class="display-2"><img src="assets/img/logo.png" width="100" height="100" class="d-inline-block align-top" alt=""></span>
							<h4 style="font-weight: 800;">Selamat datang, di website Sistem Pendukung Keputusan Penentuan Harga KOS metode Fuzzy Tsukamoto</h4>
						</div>
					</div>
				</div>

				<div class="card-body">
				<div class="row mb-3">
					<div class="col-md-12">
						<p class="text-info">Silahkan masukkan harga minimal dan maksimal yang anda inginkan.</p>
					</div>

					<div class="col-md-6">
						<label for="minPrice">Harga Minimal:</label>
						<input type="number" id="minPrice" class="form-control" placeholder="0">
					</div>
					<div class="col-md-6">
						<label for="maxPrice">Harga Maksimal:</label>
						<input type="number" id="maxPrice" class="form-control" placeholder="1500000">
					</div>
				</div>

					<div class="table-responsive">
						<table class="table table-bordered" id="dataTable2" width="100%" cellspacing="0">
							<thead class="bg-info text-white">
								<tr align="center">
									<th rowspan="1">No</th>
									<th rowspan="1">Nama Pemilik</th>
									<th rowspan="1">Nama KOS</th>
									<th rowspan="1">Harga</th>
									<th rowspan="1">Aksi</th>
								</tr>
							</thead>
							<tbody>
							<?php
							$no = 1;
							$query = mysqli_query($koneksi,"SELECT k.*, p.nama, p.no_hp, f.toilet, f.listrik_air, f.parkir, f.lemari, f.kasur, f.internet, l.keamanan, l.kenyamanan, l.kebersihan FROM kos k LEFT JOIN pemilik p ON k.pemilik_id = p.id LEFT JOIN fasilitas f ON k.fasilitas_id = f.id LEFT JOIN lingkungan l ON k.lingkungan_id = l.id ORDER BY k.id DESC");
							while($data = mysqli_fetch_array($query)):
								$harga = mysqli_query($koneksi,"SELECT harga FROM hasil WHERE pemilik_id = '$data[pemilik_id]'");
								$harga = mysqli_fetch_assoc($harga);
								//ubah no_hp dari 08xxx menjadi 628xxx
								$data['no_hp'] = substr($data['no_hp'], 1);
								$data['no_hp'] = "62" . $data['no_hp'];

								//format uang rp.
								$harga['harga'] = "Rp. " . number_format($harga['harga'],2,',','.');
								//pesan wa untuk memberitahu harga dan fasilitas lain
								$fasilitas_jarak_dll = "Jarak ke kampus: {$data['jarak']} km, Luas KOS: {$data['luas']} m^2, Toilet: {$data['toilet']}, Listrik / Air: {$data['listrik_air']}, Parkir: {$data['parkir']}, Lemari: {$data['lemari']}, Kasur: {$data['kasur']}, Internet: {$data['internet']}, Keamanan: {$data['keamanan']}, Kenyamanan: {$data['kenyamanan']}, Kebersihan: {$data['kebersihan']}, Lokasi: {$data['lokasi']}, Akses Jalan: {$data['akses_jalan']}, Daya Tampung: {$data['daya_tampung']}";
								$pesan = " Halo, {$data['nama']}. Saya tertarik dengan kos dengan nama kos '{$data['nama_kos']}' yang anda miliki dengan harga {$harga['harga']}. Dengan Fasilitas: {$fasilitas_jarak_dll}. Terima kasih.";
							?>
								<tr align="center">
									<td><?php echo $no; ?></td>
									<td><?php echo $data['nama']; ?></td>
									<td><?php echo $data['nama_kos']; ?></td>
									<td><?php echo $harga['harga']; ?></td>
									<td>
										<a href="#" class="btn btn-info btn-sm" data-toggle="modal" data-target="#detail<?php echo $data['id']; ?>"><i class="fas fa-fw fa-eye"></i> Detail</a>
										<a href="https://wa.me/<?php echo $data['no_hp']; ?>?text=<?php echo $pesan; ?>" class="btn btn-success btn-sm" target="_blank"><i class="fab fa-fw fa-whatsapp"></i> Kirim Pesan</a>
										<a href="https://www.google.com/maps/search/?api=1&query=<?php echo $data['lokasi']; ?>" class="btn btn-primary btn-sm" target="_blank"><i class="fas fa-fw fa-map-marked-alt"></i> Lokasi</a>
									</td>
								</tr>
								<div class="modal fade" id="detail<?php echo $data['id']; ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div class="modal-dialog" role="document">
										<div class="modal-content">
											<div class="modal-header bg-info">
												<h5 class="modal-title text-white" id="exampleModalLabel">Detail KOS</h5>
												<button class="close" type="button" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">×</span>
												</button>
											</div>
											<div class="modal-body">
												<div class="form-group">
													<label>Nama Pemilik</label>
													<input type="text" class="form-control" value="<?php echo $data['nama']; ?>" readonly>
												</div>
												<div class="form-group">
													<label>Jarak Ke Kampus</label>
													<input type="text" class="form-control" value="<?php echo $data['jarak']; ?> km" readonly>
												</div>
												<div class="form-group">
													<label>Luas Kos</label>
													<input type="text" class="form-control" value="<?php echo $data['luas']; ?> m^2" readonly>
												</div>
												<div class="form-group"></div>
													<label class="font-weight-bold">Fasilitas</label>
													<div class="row">
														<div class="col-md-6">
															<label>Toilet</label>
															<input type="text" class="form-control" value="<?php echo $data['toilet']; ?>" readonly>
														</div>
														<div class="col-md-6">
															<label>Listrik / Air</label>
															<input type="text" class="form-control" value="<?php echo $data['listrik_air']; ?>" readonly>
															
														</div>
														<div class="col-md-6">
															<label>Parkir</label>
															<input type="text" class="form-control" value="<?php echo $data['parkir']; ?>" readonly>
															
														</div>
														<div class="col-md-6">
															<label>Lemari</label>
															<input type="text" class="form-control" value="<?php echo $data['lemari']; ?>" readonly>
															
														</div>
														<div class="col-md-6">
															<label>Kasur</label>
															<input type="text" class="form-control" value="<?php echo $data['kasur']; ?>" readonly>
														</div>
														<div class="col-md-6">
															<label>Internet</label>
															<input type="text" class="form-control" value="<?php echo $data['internet']; ?>" readonly>
															
														</div>
													</div>
												<div class="form-group">
													<label class="font-weight-bold">Lingkungan</label>
													<div class="row">
														<div class="col-md-4">
															<label>Keamanan</label>
															<input type="text" class="form-control" value="<?php echo $data['keamanan']; ?>" readonly>
														</div>
														<div class="col-md-4">
															<label>Kenyamanan</label>
															<input type="text" class="form-control" value="<?php echo $data['kenyamanan']; ?>" readonly>
															
														</div>
														<div class="col-md-4">
															<label>Kebersihan</label>
															<input type="text" class="form-control" value="<?php echo $data['kebersihan']; ?>" readonly>
														</div>
													</div>
												</div>
												<div class="form-group">
													<label>Lokasi</label>
													<input type="text" class="form-control" value="<?php echo $data['lokasi']; ?>" readonly>
												</div>
												<div class="form-group">
													<label>Akses Jalan</label>
													<input type="text" class="form-control" value="<?php echo $data['akses_jalan']; ?>" readonly>
												</div>
												<div class="form-group">
													<label>Daya Tampung</label>
													<input type="text" class="form-control" value="<?php echo $data['daya_tampung']; ?>" readonly>
												</div>
											</div>
											<div class="modal-footer">
												<button class="btn btn-secondary" type="button" data-dismiss="modal">Tutup</button>
											</div>
										</div>
									</div>
								</div>

								<?php 
								$no++;
								endwhile; ?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<?php
			require_once('template/footer.php');
			?>
			<script>
				$(document).ready(function() {
					var dataTable = $('#dataTable2').DataTable();

					$('#minPrice, #maxPrice').on('keyup', function() {
						var minPrice = parseFloat($('#minPrice').val() || 0);
						var maxPrice = parseFloat($('#maxPrice').val() || Infinity);

						dataTable.draw();
					});

					$.fn.dataTable.ext.search.push(
						function(settings, data, dataIndex) {
							var minPrice = parseFloat($('#minPrice').val() || 0);
							var maxPrice = parseFloat($('#maxPrice').val() || Infinity);
							var price = ambilAngka(data[2]);
							console.log(price, minPrice, maxPrice);
							return price >= minPrice && price <= maxPrice;
						}
					);
				});
				function ambilAngka(s) {
					// Menghapus semua karakter non-digit
					var cleanNumber = s.replace(/[^\d]/g, '');
					// Mengonversi string ke angka
					var number = parseFloat(cleanNumber);
					// Mengonversi angka ke string dengan 2 desimal, lalu membuang 2 angka di belakang koma
					var formattedNumber = parseFloat((number / 100).toFixed(0));
					return formattedNumber;
				}
			</script>
		</div>
	</body>
</html>

