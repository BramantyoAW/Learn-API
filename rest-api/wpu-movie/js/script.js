
function searchMovie() { //dibuatkan function agar lebih fleksibel
    $('movie-list').html(''); //untuk meminta request dalam bentuk kosong walaupun sudah ada isinya akan di kosongkan lagi

    $.ajax({
        url:'http://www.omdbapi.com',
        type:'get', // type post/get/update sesuai kebutuhan
        dataType: 'json', //type datanya
        data: {
            'apiKey' : 'f19210da', // key untuk menyambung apinya example postman http://www.omdbapi.com/?apikey=f19210da&s="judul"
            's' : $('#search-input').val() //parameter dari search tergantung kebijakan dari api publicnya
        },
        success: function (result){
            //console.log(result); // coba hasil dari console log inspek element
            if( result.Response == "True") {
                let movies = result.Search; // untuk mengambil data dan menjadikan encode
                
                $.each(movies, function(i,data){ //each untuk looping semua data menggunakan bootstrap
                    $('#movie-list').append(`
                    <div class="col-md-4">
                        <div class="card mb-3">
                        <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title +`</h5> 
                                <p class="card-text">Year : `+ data.Year +`</p>
                                <p class="card-text">Type :`+ data.Type +`</p>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" 
                                data-id="`+ data.imdbID+`">see detail</a>
                            </div>
                        </div>  
                    </div>             
                    `) //Field data.<Field> dapat mengecek di postman
                });

                //untuk mengkosongkan setiap data yang sudah di inputkan
                $('#search-input').val('');

                //else untuk result atau hasil yang error
                }else{
                    $('#movie-list').html(`
                    <div class="col">
                    <h1 class="text-center">`+ result.Error +`</h1>
                    </div>
                    `)
            }
        }
    });
}


//search info dengan click button search
$('#search-button').on('click', function (){ //menjalankan search berdasarkan function
   searchMovie()
});


//search info dengan enter . enter dengan code 13 (keycodesearch)
$('#search-input').on('keyup', function (e) {
    if(e.which === 13) {
        searchMovie()
    }
});


//see detail dari id 'see-detail' //masih error
$('#movie-list').on('click','.see-detail', function (){
   console.log($(this).data('id')) // buat ngecek di log  belum bisa nampil

    $.ajax({
        url:'http://www.omdbapi.com',
        type : 'get',
        dataType: 'json',
        data: {
            'apikey' : 'f19210da',
            'i' : $('this').data('id')
        },
        success : function (movie){
            if(movie.Response === "True"){
                $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="`+ movie.Poster +`" class="img-fluid">
                            <p>`+ movie.Title +`</p>
                        </div>
                    </div>
                </div>
                `);
            }
        }

     });
});