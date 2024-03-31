<?php
require_once('includes/init.php');
$sesi = get_sesi();

cek_login($role = array(1,2));

$page = "Kos";
require_once('template/header.php');
?>

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800"><i class="fas fa-fw fa-cube"></i> Data KOS</h1>

    <a href="tambah-kos.php" class="btn btn-info"> <i class="fa fa-plus"></i> Tambah Data </a>
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
        <h6 class="m-0 font-weight-bold text-info"><i class="fa fa-table"></i> Daftar Data KOS</h6>
    </div>

    <div class="card-body">
		<div class="table-responsive">
			<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
				<thead class="bg-info text-white">
					<tr align="center">
						<th rowspan="2">No</th>
						<th rowspan="2">Nama Pemilik</th>
						<th rowspan="2">Nama KOS</th>
						<th rowspan="2">Jarak Ke Kampus</th>
						<th rowspan="2">Luas Kos</th>
						<th colspan="6" rowspan="1">Fasilitas</th>
						<th rowspan="2">Lokasi</th>
						<th colspan="3" rowspan="1">Lingkungan</th>
						<th rowspan="2">Akses Jalan</th>
						<th rowspan="2">Daya Tampung</th>
						<?php if($_SESSION['role'] == 1): ?>
						<th rowspan="2">Aksi</th>
						<?php endif; ?>
					</tr>
					<tr>
						<th>Toilet</th>
						<th>Listrik / Air</td>
						<th>Parkir</td>
						<th>Lemari</th>
						<th>Kasur</th>
						<th>Internet</th>
						<th>Keamanan</th>
						<th>Kenyamanan</th>
						<th>Kebersihan</th>
					</tr>
				</thead>
				<tbody>
				<?php
				$no = 1;
				$query = mysqli_query($koneksi,"SELECT k.*, p.nama, f.toilet, f.listrik_air, f.parkir, f.lemari, f.kasur, f.internet, l.keamanan, l.kenyamanan, l.kebersihan FROM kos k LEFT JOIN pemilik p ON k.pemilik_id = p.id LEFT JOIN fasilitas f ON k.fasilitas_id = f.id LEFT JOIN lingkungan l ON k.lingkungan_id = l.id ORDER BY k.id DESC");
				while($data = mysqli_fetch_array($query)):
				?>
					<tr align="center">
						<td><?php echo $no; ?></td>
						<td><?php echo $data['nama']; ?></td>
						<td><?php echo $data['nama_kos']; ?></td>
						<td><?php echo $data['jarak']; ?></td>
						<td><?php echo $data['luas']; ?></td>
						<td><?php echo $data['toilet']; ?></td>
						<td><?php echo $data['listrik_air']; ?></td>
						<td><?php echo $data['parkir']; ?></td>
						<td><?php echo $data['lemari']; ?></td>
						<td><?php echo $data['kasur']; ?></td>
						<td><?php echo $data['internet']; ?></td>
						<td><?php echo $data['lokasi']; ?></td>
						<td><?php echo $data['keamanan']; ?></td>
						<td><?php echo $data['kenyamanan']; ?></td>
						<td><?php echo $data['kebersihan']; ?></td>
						<td><?php echo $data['akses_jalan']; ?></td>
						<td><?php echo $data['daya_tampung']; ?></td>
						<?php if($_SESSION['role'] == 1): ?>
							<td>
							<div class="btn-group" role="group">
								<!-- <a data-toggle="tooltip" data-placement="bottom" title="Edit Data" href="edit-pemilik.php?id=<?php echo $data['id']; ?>" class="btn btn-info btn-sm"><i class="fa fa-edit"></i></a> -->
								<a  data-toggle="tooltip" data-placement="bottom" title="Hapus Data" href="hapus-pemilik.php?id=<?php echo $data['id']; ?>" onclick="return confirm ('Apakah anda yakin untuk meghapus data ini')" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></a>
							</div>
						</td>
						<?php endif; ?>
					</tr>
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