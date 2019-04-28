//javascript murni hardcode
// let mahasiswa = {
//     nama : "bramantyo",
//     nim  : 72140012,
//     email: "bram@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));

// //vanila javascript object
// let free = new XMLHttpRequest();
// free.onreadystatechange = function(){
//     if(free.readyState == 4 && free.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// free.open('GET', 'coba.json', true);
// free.send();

//

//JSON command
$.getJSON('coba.json', function(data){
    console.log(data)
});