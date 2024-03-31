<?php

function redirect_to($url = '') {
	header('Location: '.$url);
	exit();
}

function cek_login($role = array()) {
	
	if(isset($_SESSION['user_id']) && isset($_SESSION['role']) && in_array($_SESSION['role'], $role)) {
		// do nothing
	} else {
		redirect_to("login.php");
	}	
}

function get_role() {
	
	if(isset($_SESSION['user_id']) && isset($_SESSION['role'])) {
		if($_SESSION['role'] == '1') {
			return 'admin';
		} else {
			return 'owner';
		}
	} else {
		return false;
	}	
}

function get_sesi(){
	$sesi=1;
	if(isset($_SESSION['sesi']) && isset($_SESSION['sesi'])) {
		$sesi = $_SESSION['sesi'];
	} 
	return $sesi;	
}
?>