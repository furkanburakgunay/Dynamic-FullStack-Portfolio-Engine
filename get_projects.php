<?php
include 'db.php';

// Veritabanındaki tüm projeleri çek
$query = $db->query("SELECT * FROM projects ORDER BY id DESC");
$projects = $query->fetchAll(PDO::FETCH_ASSOC);

// JSON formatında çıktı ver (JS'in anlayacağı dil)
header('Content-Type: application/json');
echo json_encode($projects);
?>