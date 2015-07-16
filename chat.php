<?php
require_once('./functions.php');
session_start();


if($_SESSION['token'] == sha1("aesrdtfyguh234567dxcfghv") || $_SESSION['token'] == sha1("sxdcfvgh45678wertgvdcvfbnhgbvcd") || $_SESSION['token'] == sha1("zdsxfgyuhijo23456789ftgyhuij") || $_SESSION['token'] == sha1("sxdcfvgbhbvtcrd345678gfdxsdcfvgbh")){
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>チャットルーム</title>
</head>
<body>
	<h1>チャットルーム！！</h1>
	<?php
	connectDB();
	function chat(){
		$result_chat = mysql_query("select name,word from test");
			while($chat = mysql_fetch_assoc($result_chat)){
				print($chat['name']);
				print($chat['word']."<br>");
			}
	}
	chat();
	closeDB();
	?>

</body>
</html>
<?php
}else{
	echo "不正アクセスです！";
	print "<a href=./index.php>戻る</a>";
}