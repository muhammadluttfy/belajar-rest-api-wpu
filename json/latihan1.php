<?php 

// $mahasiswa = [
//   [
//     "nama" => "Muhammad Lutfi",
//   "nim" => 18083000124,
//   "email" => "muhammadlutfi3101@gmail.com",
//   "prodi" => "S1 Sistem Informasi",
//   ],
//   [
//     "nama" => "Ahla Ainin Nafisah",
//   "nim" => 18083000124,
//   "email" => "ahlaainin@gmail.com",
//   "prodi" => "S1 Pendidikan Bahasa Arab",
//   ],
// ];

$pdo = new PDO("mysql:dbname=dev_sim-tunas-aksara;host=localhost", "root", "");
$statement = $pdo->prepare("SELECT * FROM students");
$statement->execute();
$results = $statement->fetchAll(PDO::FETCH_ASSOC);

$json = json_encode($results);
echo $json

?>