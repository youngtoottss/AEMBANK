<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $mainService = $_POST['mainService'];
    $subService = $_POST['subService'];
    $message = $_POST['message'];

    $to = "info@aembank.com";  // Change this to your email address
    $subject = "New Contact Form Submission";
    $body = "Full Name: $fullName\nEmail: $email\nService: $mainService\nSub-Service: $subService\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
