<?php
    include 'db_connection.php';

    $conn = OpenCon();

    echo "Connexion réussie";

    CloseCon($conn);
?>