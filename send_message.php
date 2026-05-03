<?php
include 'db.php';

if ($_POST) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $msg = htmlspecialchars($_POST['message']);

    $insert = $db->prepare("INSERT INTO messages (sender_name, sender_email, message_text) VALUES (?, ?, ?)");
    $result = $insert->execute([$name, $email, $msg]);

    if ($result) {
        echo "Mesajınız başarıyla iletildi, Furkan size en kısa sürede dönecek!";
    } else {
        echo "Bir hata oluştu.";
    }
}
?>