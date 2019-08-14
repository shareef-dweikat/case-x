<?php

require_once "Mail.php";

$from = isset($_REQUEST['email']) ? $_REQUEST['email'] : 'shopkins@uk.ibm.com';

$to = isset($_REQUEST['type']) && $_REQUEST['type'] === "Newsletter" ? "info@casex.co" : '13ebenezer13@gmail.com';

$emailAddress = isset($_REQUEST['email']) ? $_REQUEST['email'] : 'shopkins@uk.ibm.com';

$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : 'No Name Entered';

$subject = isset($_REQUEST['subject']) ? $_REQUEST['subject'] : "From Website Contact Form";

$message = $_REQUEST['message'];

$subject = "Hi!";

$body = "<i>Message from the contact form on the website</i> " . $message . "";

$host = "casex.co";

$username = "emilkort@gmail.com";

$password = "wordpres";

$headers = array ('From' => $from,


  'To' => $to,

  'Subject' => $subject);

$smtp = Mail::factory('smtp',

  array ('host' => $host,

    'auth' => true,


    'username' => $username,

    'password' => $password));



$mail = $smtp->send($to, $headers, $body);



if (PEAR::isError($mail)) {

  echo("<p>" . $mail->getMessage() . "</p>");


 } else {

  echo("<p>Message successfully sent!</p>");

 }

?>
