<?php require_once('includes/init.php'); ?>
<?php cek_login($role = array(1)); ?>

<?php
$sesi = get_sesi();
$errors = array();
$sukses = false;

if(isset($_POST['submit'])):	
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
	if(!$password) {
		$errors[] = 'Password tidak boleh kosong';
	}
	
	if(empty($errors)):
		$password = sha1($password);
		$simpan_user = mysqli_query($koneksi, "INSERT INTO user (username, password, role) VALUES ('$username', '$password', 'owner')");
		if($simpan_user) {
			$id_user = mysqli_insert_id($koneksi);
			$simpan_pemilik = mysqli_query($koneksi, "INSERT INTO pemilik (nama, tempat_lahir, tanggal_lahir, alamat, no_hp, user_id) VALUES ('$nama', '$tempat_lahir', '$tanggal_lahir', '$alamat', '$no_hp', '$id_user')");
			if($simpan_pemilik) {
				redirect_to('list-pemilik.php?status=sukses-baru');		
			}else{
				$errors[] = 'Data gagal disimpan';
			}
		}else{
			$errors[] = 'Data gagal disimpan';
		}
	endif;

endif;
?>

<?php
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
	<div class="alert alert-info">
		<?php foreach($errors as $error): ?>
			<?php echo $error; ?>
		<?php endforeach; ?>
	</div>
<?php endif; ?>	

<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-fw fa-plus"></i> Tambah Data Pemilik</h6>
    </div>
	
	<form action="tambah-pemilik.php" method="post">
		<div class="card-body">
			<div class="row">
				<div class="form-group col-md-6">
					<label class="font-weight-bold">Nama Pemilik</label>
					<input autocomplete="off" type="text" name="nama" required class="form-control"/> 
				</div>
				<div class="form-group col-md-6">
					<label class="font-weight-bold">Username</label>
					<input autocomplete="off" type="text" name="username" required class="form-control"/>
				</div>
				<div class="form-group col-md-6">
					<label class="font-weight-bold">Password</label>
					<input autocomplete="off" type="password" name="password" required class="form-control"/>
				</div>

				<div class="form-group col-md-6">
					<label class="font-weight-bold">Tempat Lahir</label>
					<input autocomplete="off" type="text" name="tempat_lahir" required class="form-control"/>
				</div>
				<div class="form-group col-md-6">
					<label class="font-weight-bold">Tanggal Lahir</label>
					<input autocomplete="off" type="date" name="tanggal_lahir" required class="form-control"/>
				</div>
				
				<div class="form-group col-md-6">
					<label class="font-weight-bold">No HP</label>
					<input autocomplete="off" type="text" name="no_hp" required class="form-control"/>
				</div>
				<div class="form-group col-md-6">
					<label class="font-weight-bold">Alamat</label>
					<textarea autocomplete="off" name="alamat" required class="form-control"></textarea>
				</div>
			</div>
		</div>
		<div class="card-footer text-right">
            <button name="submit" value="submit" type="submit" class="btn btn-info"><i class="fa fa-save"></i> Simpan</button>
            <button type="reset" class="btn btn-info"><i class="fa fa-sync-alt"></i> Reset</button>
        </div>
	</form>
</div>


<?php
require_once('template/footer.php');
?>