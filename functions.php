<?php

function connectDB(){
	$con = mysql_connect('localhost','root','raidoooon39')
		or die('接続できません');
	mysql_select_db('summer');
}
function closeDB(){
	mysql_close();
}