<?php
$host = "localhost";
$user = "root"; // Kendi ayarlarınla güncelle
$pass = "";     // Kendi ayarlarınla güncelle
$dbname = "furkan_portfolio";

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    // Hata ayıklama modunu açalım (Mühendislik kuralı!)
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Bağlantı hatası: " . $e->getMessage());
}
?>