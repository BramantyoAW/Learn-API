$.getJSON('data/coffee.json', function (result){
    // console.log(result); // untuk melihat hasil object pada console

    let menu = result.menu;
    // console.log(menu); //testing apakah deklarasi menu sudah ada valuenya pada console
    $.each(menu, function  (i, data) {
        // console.log(data);  // mencoba parameter

        //('#daftar-menu') carikan id pada html || append adalah tambahkan elemenbaru di akhir
        $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3" ><img src="img/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><p class="card-text">'+ data.harga +'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'); 
    });
});




$('.nav-link').on('click', function(){
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    
        let kategori = $(this).html();
        $('h1').html(kategori);
// kebawah msaih error
        $.getJSON('data/coffee.json', function (data){
            let menu = data.menu;
            let content = '';

            $.each(menu, function (i, data){
                // tolower adalah memaksa semua isinya yang dipanggil jadi huruf kecil semua
                if(data.kategori == kategori.toLowerCase()){
                    content += '<div class="col-md-4"><div class="card mb-3" ><img src="img/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><p class="card-text">'+ data.harga +'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
                } 
            });
            $('#daftar-menu').html(content);
        });
    });