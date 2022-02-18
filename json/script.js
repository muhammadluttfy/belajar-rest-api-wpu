// JSON.stringify => mengubah data menjadi JSON
// let mahasiswa = {
//   nama: "Muhammad Lutfi",
//   nim: 18083000124,
//   prodi: "S1 Sistem Informasi",
// };

// console.log(JSON.stringify(mahasiswa));

// =======================================

// JSON.parse => parsing data dari json ke array | vanilla JS
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status == 200) {
//     let mahasiswa = JSON.parse(this.responseText);
//     console.log(mahasiswa);
//   }
// };

// =======================================

// xhr.open("GET", "coba.json", true);
// xhr.send();

// JSON.parse => parsing data dari json ke array | JQuery
$.getJSON("coba.json", function (data) {
  console.log(data);
});
