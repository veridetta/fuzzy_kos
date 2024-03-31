<?php require_once('includes/init.php'); 
$user_role = get_role();
if($user_role == 'admin') {
$errors = array();
$sukses = false;

$id = (isset($_GET['id'])) ? trim($_GET['id']) : '';

if(isset($_POST['submit'])){
	//nama, tempat_lahir, tanggal_lahir, alamat, no_hp
	$nama = $_POST['nama'];
	$tempat_lahir = $_POST['tempat_lahir'];
	$tanggal_lahir = $_POST['tanggal_lahir'];
	$alamat = $_POST['alamat'];
	$no_hp = $_POST['no_hp'];
	$username = $_POST['username'];
	$password = $_POST['password'];

	// Validasi
	if(!$nama) {
		$errors[] = 'Nama tidak boleh kosong';
	}
	if(!$tempat_lahir) {
		$errors[] = 'Tempat lahir tidak boleh kosong';
	}
	if(!$tanggal_lahir) {
		$errors[] = 'Tanggal lahir tidak boleh kosong';
	}
	if(!$alamat) {
		$errors[] = 'Alamat tidak boleh kosong';
	}
	if(!$no_hp) {
		$errors[] = 'No HP tidak boleh kosong';
	}	
	if(!$username) {
		$errors[] = 'Username tidak boleh kosong';
	}
	
	// Jika lolos validasi lakukan hal di bawah ini
	if(empty($errors)){
		$data = mysqli_query($koneksi,"SELECT * FROM user WHERE id='$id'");
			$d = mysqli_fetch_array($data);
			$user_id = $d['user_id'];
		if($password) {
			$password = sha1($password);
			$update_user = mysqli_query($koneksi, "UPDATE user SET username='$username', password='$password' WHERE id='$user_id'");
			if($update_user) {
				$update = mysqli_query($koneksi,"UPDATE pemilik SET nama='$nama', tempat_lahir='$tempat_lahir', tanggal_lahir='$tanggal_lahir', alamat='$alamat', no_hp='$no_hp' WHERE id='$id'");
				if($update) {
					redirect_to('list-pemilik.php?status=sukses-edit');
				}else{
					$errors[] = 'Data gagal diupdate';
				}
			}else{
				$errors[] = 'Data gagal diupdate';
			}
		}else{
			$update_user = mysqli_query($koneksi, "UPDATE user SET username='$username' WHERE id='$user_id'");
			$update = mysqli_query($koneksi,"UPDATE pemilik SET nama='$nama', tempat_lahir='$tempat_lahir', tanggal_lahir='$tanggal_lahir', alamat='$alamat', no_hp='$no_hp' WHERE id='$id'");
			if($update) {
				redirect_to('list-pemilik.php?status=sukses-edit');
			}else{
				$errors[] = 'Data gagal diupdate';
			}
		}
	
		
		if($update) {
			redirect_to('list-pemilik.php?status=sukses-edit');
		}else{
			$errors[] = 'Data gagal diupdate';
		}
	}
}

$page = "Pemilik";
require_once('template/header.php');
?>


<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800"><i class="fas fa-fw fa-cube"></i> Data Pemilik</h1>

	<a href="list-pemilik.php" class="btn btn-secondary btn-icon-split"><span class="icon text-white-50"><i class="fas fa-arrow-left"></i></span>
		<span class="text">Kembali</span>
	</a>
</div>

<?php if(!empty($errors)): ?>
	<div class="alert alert-danger">
		<?php foreach($errors as $error): ?>
			<?php echo $error; ?>
		<?php endforeach; ?>
	</div>	
<?php endif; ?>


<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-fw fa-edit"></i> Ubah Data Pemilik</h6>
    </div>
	
	<form action="edit-pemilik.php?id=<?php echo $id; ?>" method="post">
		<?php
		if(!$id) {
		?>
		<div class="card-body">
			<div class="alert alert-danger">Data tidak ada</div>
		</div>
		<?php
		}else{
		$data = mysqli_query($koneksi,"SELECT p.*, u.username FROM pemilik p LEFT JOIN user u ON p.user_id = u.id WHERE p.id='$id'");
		$cek = mysqli_num_rows($data);
		if($cek <= 0) {
		?>
		<div class="card-body">
			<div class="alert alert-danger">Data tidak ada</div>
		</div>
		<?php
		}else{
			while($d = mysqli_fetch_array($data)){
		?>
		<div class="card-body">
			<div class="row">
				<div class="form-group col-md-6">
					<label class="font-weight-bold">Nama Pemilik</label>
					<input type="text" class="form-control" name="nama" value="<?php echo $d['nama']; ?>" />
				</div>
				<div class="form-group col-md-6">
					<label class="font-weight-bold">Username</label>
					<input type="text" class="form-control" name="username" value="<?php echo $d['username']; ?>" />
				</div>
				<div class="form-group col-md-6">
					<label class="font-weight-bold">Password <small>(Biarkan kosong jika tidak diubah)</small></label>
					<input type="password" class="form-control" name="password" />
				</div>
				<div class="form-group col-md-6">
					<label class="font-weight-bold">Tempat Lahir</label>
					<input type="text" class="form-control" name="tempat_lahir" value="<?php echo $d['tempat_lahir']; ?>" />
				</div>
				<div class="form-group col-md-6">
					<label class="font-weight-bold">Tanggal Lahir</label>
					<input type="date" class="form-control" name="tanggal_lahir" value="<?php echo $d['tanggal_lahir']; ?>" />
				</div>
				<div class="form-group col-md-6">
					<label class="font-weight-bold">No HP</label>
					<input type="text" class="form-control" name="no_hp" value="<?php echo $d['no_hp']; ?>" />
				</div>
				<div class="form-group col-md-6">
					<label class="font-weight-bold">Alamat</label>
					<textarea class="form-control" name="alamat"><?php echo $d['alamat']; ?></textarea>
				</div>
			</div>
		</div>
		<div class="card-footer text-right">
            <button name="submit" value="submit" type="submit" class="btn btn-success"><i class="fa fa-save"></i> Update</button>
            <button type="reset" class="btn btn-info"><i class="fa fa-sync-alt"></i> Reset</button>
        </div>
		<?php
		}
		}
		}
		?>
	</form>
</div>

<?php
require_once('template/footer.php');
}else {
	header('Location: login.php');
}
?>