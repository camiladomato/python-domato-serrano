<?php

$nombre=$_POST['nombre'];
$correo=$_POST['email'];

$destinatario="profe.melanieserrano@gmail.com"
$asunto="Inscripcion a CamelGaming"
$cuerpo='
    <html> 
        <head>
            <title>Bienvenido a CamelGaming</title>
        </head>

        <body>
            <h1>Bienvenid@ a CamelGaming</h1>
            <p>
                Hola '$nombre'.
                Gracias por inscribirte. Te mantendremos informado con las novedades de videojuegos, teconologia y mas.
            </p>
        </body>
    </html>

';
$headers="MIME-version:1.0\r\n";
$headers.="content.Type: text/html; charset-UTF8";


$headers.="FROM: $nombre <$correo>\r\n";
mail($destinatario,$nombre,$asunto;$cuerpo;$headers)

echo "Correo enviado";
?>