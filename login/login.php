<?php
require_once('../functions.php');

session_start();

$_SESSION['token'] = "null";
//login system
$name = $_POST['name'];
$password = $_POST['password'];

connectDB();

$result_name = mysql_query('select name from login where name="'.$name.'";');

$db_name = mysql_fetch_assoc($result_name);

$result_password = mysql_query('select password from login where password="'.$password.'";');

$db_password = mysql_fetch_assoc($result_password);


closeDB();

if($name == $db_name['name'] && $password == $db_password['password']){
	if($name == "konojunya"){
		sleep(1);
		$_SESSION['token'] = sha1("aesrdtfyguh234567dxcfghv");
		$_SESSION['name'] = "konojunya";
		header("location:../database/jun.php");
		exit;
	}else if($name == "kidosaya"){
		sleep(1);
		$_SESSION['token'] = sha1("sxdcfvgh45678wertgvdcvfbnhgbvcd");
		$_SESSION['name'] = "kidosaya";
		header("location:../database/saya.php");
		exit;
	}else if($name == "makki"){
		sleep(1);
		$_SESSION['token'] = sha1("sxdcfvgbhbvtcrd345678gfdxsdcfvgbh");
		$_SESSION['name'] = "makki";
		header("location:../database/maki.php");
		exit;
	}else if($name == "kinokoruumu"){
		sleep(1);
		$_SESSION['token'] = sha1("zdsxfgyuhijo23456789ftgyhuij");
		$_SESSION['name'] = "kinokoruumu";
		header("location:../database/kazuki.php");
		exit;
	}
}else{
	echo "ログインに失敗しました";
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title>ログイン</title>
	<link rel="stylesheet" href="../css/login.css">
</head>
<body>
	<h2>
		ログイン
	</h2>
	<form action="" method="post">
		<input type="text" name="name"><br>
		<input type="password" name="password"><br>
		<input type="submit" class="submitbtn">
		<a href="../index.php">戻る</a>
	</form>
</body>
</html>