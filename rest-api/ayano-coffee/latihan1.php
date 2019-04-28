<?php 
    $data = file_get_contents('data/coffee.json');
    $menu = json_decode($data, true);

    //var_dump($menu["menu"][0]["nama"]); //test array ambil

    $menu = $menu["menu"];
    

?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Ayano Coffee</title>
  </head>
  <body>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.0.min.js" integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-white bg-white">
            <a class="navbar-brand" href="#">
                <img src="img/ayano.jpg" height="40" width="40">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">All Menu</a>
                <!-- <a class="nav-item nav-link" href="#">Pricing</a>
                <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
                </div>
            </div>
        </nav>
    </div>

    <div class="container">
        <div class="row mt-3">
            <h1>Coffee </h1>
        </div>
        <br>
        <div class="row">
            <?php foreach ($menu as $menus): ?>
                <div class="col-md-4">
                <div class="card mb-3" >
                    <img src="img/<?= $menus["gambar"]?>" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title"><?= $menus["nama"]?></h5>
                            <p class="card-text"><?= $menus["deskripsi"]?></p>
                            <p class="card-text"><?= $menus["harga"]?></p>
                            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                        </div>
                    </div>
                </div>
            <?php endforeach ?>
        </div>
    </div>
  </body>
</html>