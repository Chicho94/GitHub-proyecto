<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once '/home/bitcodeweb/public_html/increi.com/phpmailer/PHPMailerAutoload.php';
if (isset($_POST['nombre']) && isset($_POST['email']) && isset($_POST['compania']) && isset($_POST['message'])) {
    if (empty($_POST['nombre']) || empty($_POST['email']) || empty($_POST['compania']) || empty($_POST['message'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }
    $variable=0;
    while(!empty($_POST['producto'.$variable])){ $variable++; }
    $mail = new PHPMailer();
    $mail->CharSet = 'UTF-8';
    $mail->IsSMTP();                                
    $mail->From = $_POST['email'];
    $mail->FromName = $_POST['nombre'];
    $mail->AddAddress('increica06@gmail.com');
    $mail->AddAddress('ventas@increi.com');
    $mail->AddAddress($_POST['email']);
    $mail->Subject = $_POST['compania'];
    if ($variable!=0){
        $cordel="";
        $crochet="";
        $crudo="";
        $color="";
        for ($i=0; $i < $variable ; $i++) { 
            if ($_POST['producto'.$i]=='CORDEL') {
                $cordel=$_POST['cantidad'.$i].'('.$_POST['cordel'.$i].'), '. $cordel;
            } elseif ($_POST['producto'.$i]=='HILO_CROCHET') {
                $crochet=$_POST['cantidad'.$i].'('.$_POST['crochet'.$i].'), '. $crochet;
            } elseif ($_POST['producto'.$i]=='PABILO_CRUDO') {
                $crudo=$_POST['cantidad'.$i].'('.$_POST['crudo'.$i].'), '. $crudo;
            } elseif ($_POST['producto'.$i]=='PABILO_COLOR') {
                $color=$_POST['cantidad'.$i].'('.$_POST['color'.$i].'), '. $color;
            }
        }
        $cotizar = "               Cordel: " . $cordel . "\r\n\r\n               Hilo Crochet: " . $crochet ."\r\n\r\n               Pabilo Crudo: " . $crudo . "\r\n\r\n               Pabilo de Color: " . $color; 
            
        $mail->Body = "Nombre: " . $_POST['nombre'] . "\r\n\r\nEmail: " . $_POST['email'] . "\r\n\r\nTeléfono: " . $_POST['telefono'] . "\r\n\r\nCompañía: " . $_POST['compania'] . "\r\n\r\nProductos a Cotizar: " . $variable . " \r\n\r\n" . $cotizar . "\r\n\r\nMensaje: " . stripslashes($_POST['message']);

    } else {  
        $mail->Body = "Nombre: " . $_POST['nombre'] . "\r\n\r\nEmail: " . $_POST['email'] . "\r\n\r\nTeléfono: " . $_POST['telefono'] . "\r\n\r\nCompañía: " . $_POST['compania'] . "\r\n\r\nMensaje: " . stripslashes($_POST['message']);
        }

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'enviado');
    echo json_encode($data);

} else {
    $data = array('success' => false, 'message' => 'Por favor, termine de llenar el formulario.');
    echo json_encode($data);
}