<?php

include_once("db.php");

function getData(){
    if($GLOBALS['flag_connected']===true){         
        $stmt = $GLOBALS['connection']->prepare("SELECT * FROM yogastudio_schedule");
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $res = $stmt->fetchAll();
        echo json_encode($res);
    }
}

?>