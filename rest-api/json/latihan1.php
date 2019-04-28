<?php

//array encode hardcode
// $mahasiswa = [
//     [
//     "nama" => "Bramantyo Aryo Wicaksono",
//     "nim" => "72140012",
//     "email" => "bram@gmail.com"
//     ],
//     [
//     "nama" => "Lorensia Mawar",
//     "nim" => "72140045",
//     "email" => "mawar@gmail.com"
//     ]
// ];

//var_dump($mahasiswa); //assosiative
// $data = json_encode($mahasiswa);
// echo $data;


//array encode dari db
$dbh = new PDO('mysql:host=localhost;dbname=siswadb', 'root', '');
$db = $dbh->prepare('SELECT * FROM siswa');
$db->execute();
$siswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($siswa);
echo $data;

?>