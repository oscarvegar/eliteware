<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<title>Melon</title>

</head>

<body>


<?php
    /* add your email address */
    $email_to = "example@eliteware.io";
    $name = $_POST["name"];
    $subject = $_POST["subject"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $text = "NAME: $name<br>
             SUBJECT: $subject<br>
             EMAIL: $email<br>
             MESSAGE: $message";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html; charset=utf-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";
    /* change "Message" to your site Name or any thing you want */
    mail($email_to, "Message", $text, $headers);
?>

</body>
</html>