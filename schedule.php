<?php

require_once('./functions.php');
session_start();

function h($s){
	htmlspecialchars($s);
}

connectDB();

$result_schedule_jun = mysql_query('select month,day,starttime,endtime,contents from jun;');
$result_schedule_saya = mysql_query('select month,day,starttime,endtime,contents from saya;');
$result_schedule_maki = mysql_query('select month,day,starttime,endtime,contents from maki;');
$result_schedule_kazuki = mysql_query('select month,day,starttime,endtime,contents from kazuki;');

closeDB();


if($_SESSION['token'] == sha1("aesrdtfyguh234567dxcfghv") || $_SESSION['token'] == sha1("sxdcfvgh45678wertgvdcvfbnhgbvcd") || $_SESSION['token'] == sha1("zdsxfgyuhijo23456789ftgyhuij") || $_SESSION['token'] == sha1("sxdcfvgbhbvtcrd345678gfdxsdcfvgbh")){
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title>スケジュール一覧</title>
	<link rel="stylesheet" href="./css/schedule.css">
</head>
<body>
	<h3>じゅんじゅんの予定一覧</h3>
	<?php
	while($db_schedule = mysql_fetch_assoc($result_schedule_jun)){
		h(print($db_schedule['month'])."月");
		h(print($db_schedule['day'])."日");
		$starttime = $db_schedule['starttime'];
		if(strlen($starttime) == 3){
			print(substr($db_schedule['starttime'],0,1));
			print("：");
			print(substr($db_schedule['starttime'],2,2));
		}else if(strlen($starttime) == 4){
			print(substr($db_schedule['starttime'],0,2));
			print("：");
			print(substr($db_schedule['starttime'],2,2));
		}
		$endtime = $db_schedule['endtime'];
		if(strlen($endtime) == 3){
			print(" 〜 ");
			print(substr($db_schedule['endtime'],0,1));
			print("：");
			print(substr($db_schedule['endtime'],0,1));
		}else if(strlen($endtime) == 4){
			print(" 〜 ");
			print(substr($db_schedule['endtime'],0,2));
			print("：");
			print(substr($db_schedule['endtime'],2,2));
		}
		h(print("「"));
		h(print($db_schedule['contents']));
		h(print "」<br>");
	}
?>
	<h3>さーちゃんの予定一覧</h3>
	<?php 
	session_start();
	while($db_schedule = mysql_fetch_assoc($result_schedule_saya)){
		h(print($db_schedule['month'])."月");
		h(print($db_schedule['day'])."日");
		$starttime = $db_schedule['starttime'];
		if(strlen($starttime) == 3){
			print(substr($db_schedule['starttime'],0,1));
			print("：");
			print(substr($db_schedule['starttime'],2,2));
		}else if(strlen($starttime) == 4){
			print(substr($db_schedule['starttime'],0,2));
			print("：");
			print(substr($db_schedule['starttime'],2,2));
		}
		$endtime = $db_schedule['endtime'];
		if(strlen($endtime) == 3){
			print(" 〜 ");
			print(substr($db_schedule['endtime'],0,1));
			print("：");
			print(substr($db_schedule['endtime'],0,1));
		}else if(strlen($endtime) == 4){
			print(" 〜 ");
			print(substr($db_schedule['endtime'],0,2));
			print("：");
			print(substr($db_schedule['endtime'],2,2));
		}
		h(print("「"));
		h(print($db_schedule['contents']));
		h(print "」<br>");
	}
?>
	<h3>まきまきの予定一覧</h3>
	<?php 
	session_start();
	while($db_schedule = mysql_fetch_assoc($result_schedule_maki)){
		h(print($db_schedule['month'])."月");
		h(print($db_schedule['day'])."日");
		$starttime = $db_schedule['starttime'];
		if(strlen($starttime) == 3){
			print(substr($db_schedule['starttime'],0,1));
			print("：");
			print(substr($db_schedule['starttime'],2,2));
		}else if(strlen($starttime) == 4){
			print(substr($db_schedule['starttime'],0,2));
			print("：");
			print(substr($db_schedule['starttime'],2,2));
		}
		$endtime = $db_schedule['endtime'];
		if(strlen($endtime) == 3){
			print(" 〜 ");
			print(substr($db_schedule['endtime'],0,1));
			print("：");
			print(substr($db_schedule['endtime'],0,1));
		}else if(strlen($endtime) == 4){
			print(" 〜 ");
			print(substr($db_schedule['endtime'],0,2));
			print("：");
			print(substr($db_schedule['endtime'],2,2));
		}
		h(print("「"));
		h(print($db_schedule['contents']));
		h(print "」<br>");
	}
?>
	<h3>かずきの予定一覧</h3>
	<?php
	session_start();
	while($db_schedule = mysql_fetch_assoc($result_schedule_kazuki)){
		h(print($db_schedule['month'])."月");
		h(print($db_schedule['day'])."日");
		$starttime = $db_schedule['starttime'];
		if(strlen($starttime) == 3){
			print(substr($db_schedule['starttime'],0,1));
			print("：");
			print(substr($db_schedule['starttime'],2,2));
		}else if(strlen($starttime) == 4){
			print(substr($db_schedule['starttime'],0,2));
			print("：");
			print(substr($db_schedule['starttime'],2,2));
		}
		$endtime = $db_schedule['endtime'];
		if(strlen($endtime) == 3){
			print(" 〜 ");
			print(substr($db_schedule['endtime'],0,1));
			print("：");
			print(substr($db_schedule['endtime'],0,1));
		}else if(strlen($endtime) == 4){
			print(" 〜 ");
			print(substr($db_schedule['endtime'],0,2));
			print("：");
			print(substr($db_schedule['endtime'],2,2));
		}
		h(print("「"));
		h(print($db_schedule['contents']));
		h(print "」<br>");
	}
?>
	<br><br><a href="./index.php">トップへ戻る</a>
</body>
</html>
<?php
}else{
	echo "不正アクセスです！";
	print "<a href=./index.php>戻る</a>";
}