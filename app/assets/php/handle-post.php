<?php
require_once __DIR__ . '/../vendor/autoload.php';

$username = "noreply@tylerlubbers.com";
$password = "1q2w3e4r%T";
$siteKey = '6LfRYAwUAAAAAKfdIaiQuPqWk8CwUPVnfoKHpSzl';
$secret = '6LfRYAwUAAAAAPiyAiLVSakfGWyO6Tljb9O-gQYi';
$to = 'contact@tylerlubbers.com';
$from = 'noreply@tylerlubbers.com';
$lang = 'en';
$valid = 'true';
$name = $email = $subject = $content = "";
$response = array();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  if (isset($_POST["name"]))
    $name = test_input($_POST["name"]);
  if (isset($_POST["email"]))
    $email = test_input($_POST["email"]);
  if (isset($_POST["content"]))
    $content = test_input($_POST["content"]);
  if (isset($_POST["subject"]))
    $subject = test_input($_POST["subject"]);

  if (!$name || !$email || !$subject || !$content){
    $response["message"] = "Sorry! Something went wrong, please try again! (001)";
  }

  $recaptcha = new \ReCaptcha\ReCaptcha($secret);
  if (isset($_POST["g-recaptcha-response"]))
    $resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);

  // if the captcha is cleared with google, send the mail and echo ok.
  if (!($resp->isSuccess())) {
    $valid = false;
  }

  if($valid){
    $body = "Subject: $subject From: $email Message: $content";
    $transport = \Swift_SmtpTransport::newInstance('smtp.gmail.com', 587,'tls')->setUsername('noreply@tylerlubbers.com')->setPassword('1q2w3e4r%T');
    // Create a mailer
    // Create the Mailer using your created Transport
    $mailer = \Swift_Mailer::newInstance($transport);
    // Create the message
    $message = \Swift_Message::newInstance();

    // Give the message a subject
    $message->setSubject($subject);

    // Set the From address with an associative array
    $message->setFrom(array($username => 'Web Master'));

    // Set the To addresses with an associative array
    $message->setTo(array($to));

    // Give it a body
    $message->setBody($body, 'text/html');

    // Send the mail
    $mailer->send($message);

    $response["message"] = "Thanks! I will get back with you as soon as possible!";

  }else{
    $response["message"] =  "Sorry! Something went wrong, please try again! (002)";
  }
  echo json_encode($response);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>