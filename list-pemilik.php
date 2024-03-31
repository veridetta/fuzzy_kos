<?php
require_once('includes/init.php');
$sesi = get_sesi();

cek_login($role = array(1,2));

$page = "Pemilik";
require_once('template/header.php');
?>

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800"><i class="fas fa-fw fa-cube"></i> Data Pemilik KOS</h1>

    <a href="tambah-pemilik.php" class="btn btn-info"> <i class="fa fa-plus"></i> Tambah Data </a>
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
        <h6 class="m-0 font-weight-bold text-info"><i class="fa fa-table"></i> Daftar Data Pemilik KOS</h6>
    </div>

    <div class="card-body">
		<div class="table-responsive">
			<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
				<thead class="bg-info text-white">
					<tr align="center">
						<th>No</th>
						<th>Nama</th>
						<th>Username</th>
						<th>Tempat Lahir</th>
						<th>Tanggal Lahir</th>
						<th>Alamat</th>
						<th>No HP</th>
						<?php if($_SESSION['role'] == 1): ?>
						<th>Aksi</th>
						<?php endif; ?>
					</tr>
				</thead>
				<tbody>
				<?php
				$no = 1;
				$query = mysqli_query($koneksi,"SELECT p.*, u.username FROM pemilik p LEFT JOIN user u ON p.user_id = u.id ORDER BY p.id DESC");
				while($data = mysqli_fetch_array($query)):
				?>
					<tr align="center">
						<td><?php echo $no; ?></td>
						<td><?php echo $data['nama']; ?></td>
						<td><?php echo $data['username']; ?></td>
						<td><?php echo $data['tempat_lahir']; ?></td>
						<td><?php echo $data['tanggal_lahir']; ?></td>
						<td><?php echo $data['alamat']; ?></td>
						<td><?php echo $data['no_hp']; ?></td>
						<?php if($_SESSION['role'] == 1): ?>
							<td>
							<div class="btn-group" role="group">
								<a data-toggle="tooltip" data-placement="bottom" title="Edit Data" href="edit-pemilik.php?id=<?php echo $data['id']; ?>" class="btn btn-info btn-sm"><i class="fa fa-edit"></i></a>
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