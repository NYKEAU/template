<?php
    include 'db_connection.php';

    /*header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=utf-8');*/

    $conn = OpenCon();

    $data = [
        'name' => $_POST['name'],
        'avis' => $_POST['avis'],
        'score' => floatval($_POST['score'])
    ];

    $sql = "INSERT INTO `reviews`(`name`, `review`, `stars`) VALUES (:name,:avis,:score)";
    echo $conn->prepare($sql)->execute($data);

    $url = 'http://localhost:5500/index.html';

    echo '<script>window.location = "'.$url.'";</script>';
    
    //$result = $conn->execute($sql);
?>