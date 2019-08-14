<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$to = isset($_REQUEST["to"]) ? "info@casex.co" : "admin@casex.co";

$from = '13ebenezer13@gmail.com';

$email = isset($_REQUEST["email"]) ? $_REQUEST["email"] : "No Email Entered";

$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : 'No Name Entered';

$subject = isset($_REQUEST['subject']) ? $_REQUEST['subject'] : "From Website Contact Form";

$message = isset($_REQUEST['message']) ? $_REQUEST['message'] : "No Message, this is spam";

$body = "<i>Message from the contact form on the website</i></br></br> " . $message . "</br></br></br>From " . $email;

function sendEmail($From,$Name,$To,$Title,$Body,$Attach)
{

/*
$to      = $To;
$subject = $Title;
$message = $Body;
$headers = 'From: '.$From. "\r\n" .
    'Reply-To: '.$From . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
*/

$mail = new PHPMailer;

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;

//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 465;

//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'ssl';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "admin@casex.co";

//Password to use for SMTP authentication
$mail->Password = "Pass1234";

//Set who the message is to be sent from
$mail->setFrom($From, $Name . " - Website Contact Form");

//Set an alternative reply-to address
// $mail->addReplyTo($From, "AutoNote Support");

//Set who the message is to be sent to
$mail->addAddress($To, $To);

//Set the subject line
$mail->Subject = $Title;

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML($Body);

//Replace the plain text body with one created manually
//$mail->AltBody = 'This is a plain-text message body';

//Attach an image file

if($Attach!="")
{
$mail->addAttachment($Attach);
}

//send the message, check for errors
$mail->send();

}

sendEmail($from, $name, $to, $subject, $body, "");

?>