<?php

    $data = $_POST['data'];

    if ($data == "rs"){
        header("Location: maps/rs/index.html");
    } elseif ($data == "rb"){
        header("Location: maps/rb/index.html");
    } elseif ($data == "kl") {
        header("Location: maps/kl/index.html");
    } else {
        echo "Data tidak tersedia";
    }

?>