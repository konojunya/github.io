<?php
require_once('../functions.php');

session_start();
if($_SESSION['token'] === sha1("zdsxfgyuhijo23456789ftgyhuij")){

$month = $_POST['month'];
$day = $_POST['day'];
$starttime = $_POST['starttime'];
$endtime = $_POST['endtime'];
$contents = $_POST['contents'];

connectDB();
//データベースに書き込み
$insert = mysql_query('insert into kazuki(month,day,starttime,endtime,contents) values('.$month.','.$day.','.$starttime.','.$endtime.','.'"'.$contents.'"'.');');

closeDB();
if($insert == true){
	sleep(2);
	echo "書き込み完了";
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title>かずきの日程</title>
	<link rel="stylesheet" href="../css/database.css">
</head>
<body>
	<h1>かずきの日程</h1>
	<h3>日時と内容を追加してください</h3>
	<form action="" method="post">
		<select name="month">
			<option value=null>-- 月を選択してください --</option>
			<option value="1">1月</option>
			<option value="2">2月</option>
			<option value="3">3月</option>
			<option value="4">4月</option>
			<option value="5">5月</option>
			<option value="6">6月</option>
			<option value="7">7月</option>
			<option value="8">8月</option>
			<option value="9">9月</option>
			<option value="10">10月</option>
			<option value="11">11月</option>
			<option value="12">12月</option>
		</select><br>
		<select name="day">
			<option value=null>-- 日にちを選択してください --</option>
			<option value="1">1日</option>
			<option value="2">2日</option>
			<option value="3">3日</option>
			<option value="4">4日</option>
			<option value="5">5日</option>
			<option value="6">6日</option>
			<option value="7">7日</option>
			<option value="8">8日</option>
			<option value="9">9日</option>
			<option value="10">10日</option>
			<option value="11">11日</option>
			<option value="12">12日</option>
			<option value="13">13日</option>
			<option value="14">14日</option>
			<option value="15">15日</option>
			<option value="16">16日</option>
			<option value="17">17日</option>
			<option value="18">18日</option>
			<option value="19">19日</option>
			<option value="20">20日</option>
			<option value="21">21日</option>
			<option value="22">22日</option>
			<option value="23">23日</option>
			<option value="24">24日</option>
			<option value="25">25日</option>
			<option value="26">26日</option>
			<option value="27">27日</option>
			<option value="28">28日</option>
			<option value="29">29日</option>
			<option value="30">30日</option>
			<option value="31">31日</option>
		</select><br>
		<select name="starttime">
			<option value=null>-- 開始時間を選択してください --</option>
			<option value="0700">7:00~</option>
			<option value="0730">7:30~</option>
			<option value="0800">8:00~</option>
			<option value="0830">8:30~</option>
			<option value="0900">9:00~</option>
			<option value="0930">9:30~</option>
			<option value="1000">10:00~</option>
			<option value="1030">10:30~</option>
			<option value="1100">11:00~</option>
			<option value="1130">11:30~</option>
			<option value="1200">12:00~</option>
			<option value="1230">12:30~</option>
			<option value="1300">13:00~</option>
			<option value="1330">13:30~</option>
			<option value="1400">14:00~</option>
			<option value="1430">14:30~</option>
			<option value="1500">15:00~</option>
			<option value="1530">15:30~</option>
			<option value="1600">16:00~</option>
			<option value="1630">16:30~</option>
			<option value="1700">17:00~</option>
			<option value="1730">17:30~</option>
			<option value="1800">18:00~</option>
			<option value="1830">18:30~</option>
			<option value="1900">19:00~</option>
			<option value="1930">19:30~</option>
			<option value="2000">20:00~</option>
			<option value="2030">20:30~</option>
			<option value="2100">21:00~</option>
			<option value="2130">21:30~</option>
			<option value="2200">22:00~</option>
		</select><br>
		<select name="endtime">
			<option value=null>-- 終了時間を選択してください --</option>
			<option value="0700">~7:00</option>
			<option value="0730">~7:30</option>
			<option value="0800">~8:00</option>
			<option value="0830">~8:30</option>
			<option value="0900">~9:00</option>
			<option value="0930">~9:30</option>
			<option value="1000">~10:00</option>
			<option value="1030">~10:30</option>
			<option value="1100">~11:00</option>
			<option value="1130">~11:30</option>
			<option value="1200">~12:00</option>
			<option value="1230">~12:30</option>
			<option value="1300">~13:00</option>
			<option value="1330">~13:30</option>
			<option value="1400">~14:00</option>
			<option value="1430">~14:30</option>
			<option value="1500">~15:00</option>
			<option value="1530">~15:30</option>
			<option value="1600">~16:00</option>
			<option value="1630">~16:30</option>
			<option value="1700">~17:00</option>
			<option value="1730">~17:30</option>
			<option value="1800">~18:00</option>
			<option value="1830">~18:30</option>
			<option value="1900">~19:00</option>
			<option value="1930">~19:30</option>
			<option value="2000">~20:00</option>
			<option value="2030">~20:30</option>
			<option value="2100">~21:00</option>
			<option value="2130">~21:30</option>
			<option value="2200">~22:00</option>
		</select><br>
		<p>内容</p><textarea name="contents"cols="30" rows="10"></textarea><br>
		<input type="submit" class="submitbtn"><a href="../index.php">戻る</a>
	</form>
	<a href="../chat.php">チャットルームへ！</a>
</body>
</html>
<?php
	print "<a href=../schedule.php>スケジュールを見る</a>";
}else{
	echo "不正アクセスです";
	print "<a href=../login/login.php>戻る</a>";
}
