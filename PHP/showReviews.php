<?php
    include 'db_connection.php';

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=utf-8');

    $conn = OpenCon();

    //echo "Connexion réussie";

    $sql = "SELECT name, review, stars FROM reviews";
    //$result = mysqli_query($conn, $sql) or die ("Erreur " . mysqli_error($conn));
    $result = $conn->query($sql);

    $json = $result -> fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($json);
?>