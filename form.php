<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];

    $mailTo = "aljewaryammar@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$subject.

    mail($mailTo, $txt, $headers);
    header("Location: yhteystiedot.html?mailsend");
}