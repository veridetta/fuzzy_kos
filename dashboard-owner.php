<?php
require_once('includes/init.php');
$sesi = get_sesi();

cek_login($role = array(1,2));

$page = "Hasil";
require_once('template/header.php');
?>

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800 text-capitalize"><i class="fas fa-fw fa-user"></i>  Selamat datang, <?php echo $_SESSION['username']; ?></h1>
</div>

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

<div class="card shadow mb-4">
    <!-- /.card-header -->
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-info"><i class="fa fa-table"></i> Daftar Harga KOS</h6>
    </div>

    <div class="card-body">
	<div class="row mb-3">
		<p class="text-info">Silahkan masukkan harga minimal dan maksimal yang anda inginkan.</p>
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
					$pesan = " Halo, {$data['nama']}. Berikut hasil perhitungan harga KOS untuk anda. Harga KOS yang kami rekomendasikan untuk anda adalah {$harga['harga']}. Fasilitas lain yang anda pilih adalah: {$fasilitas_jarak_dll}. Terima kasih.";
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

