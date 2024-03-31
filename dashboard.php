<?php
require_once('includes/init.php');

$user_role = get_role();
$sesi = get_sesi();
if($_SESSION['role']==1|| $_SESSION['role']==2){
    // do nothing
} else {
    redirect_to("login.php");
}	


if($user_role == 'admin' || $user_role == 'owner') {
$page = "Dashboard";
require_once('template/header.php');

$errors = array();
$sukses = false;

?>

<div class="mb-4">
    
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800"><i class="fas fa-fw fa-home"></i> Dashboard</h1>
    </div>

	<?php
	if($user_role == 'admin' || $user_role == 'owner') {
	?>
	
    <!-- Content Row -->
    <div class="alert alert-info">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        Selamat datang <span class="text-uppercase"><b><?php echo $_SESSION['username']; ?>!</b></span>
    </div>
    <?php if(!empty($errors)): ?>
        <div class="alert alert-error">
            <?php foreach($errors as $error): ?>
                <?php echo $error; ?>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>		
    <?php if(!empty($sukses)): ?>
        <div class="alert alert-info">
            <?php foreach($sukses as $sukses): ?>
                <?php echo $sukses; ?>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>	
    <div class="row">
        <div class="col-xl-6 col-md-6 mb-4">
            <div class="card border-left-danger shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="h5 mb-0 font-weight-bold text-gray-800"><a href="list-pemilik.php" class="text-secondary text-decoration-none">Data Pemilik Kos</a></div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-cube fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		
		
		<div class="col-xl-6 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="h5 mb-0 font-weight-bold text-gray-800"><a href="list-penilaian.php" class="text-secondary text-decoration-none">Data Hasil</a></div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-edit fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
	<?php
	}
    ?>
</div>

<?php
require_once('template/footer.php');
}else {
	header('Location: login.php');
}
?>
