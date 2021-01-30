<?php

define("DATABASE","demo");
define("ENV_PROD",false);
define("HOST","localhost");
define("PAGE_SIZE",20);
define("PASSWORD","password");
define("USER","root");
//----------------------------------------------
date_default_timezone_set("Europe/Warsaw");
error_reporting(E_ALL | E_STRICT);
ini_set("display_errors",!ENV_PROD);
ini_set("error_log","../log/phperror.txt");
//----------------------------------------------
$GLOBALS['flag_connected'] = false;

?>