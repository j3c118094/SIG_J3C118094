<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- FONTS -->
    <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>

    <!-- FAWESOME -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">


    <!-- jQuery library -->
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>

    <style>

        .judul {
            font-family: 'Lato';font-size: 120px;font-weight: 900;
        }

    </style>
</head>
<body style="display : none;">


        <section id="header" >

            <div class="container-fluid shadow-sm sticky-top" style="height: 8vh; width: 100%;">
                <div class="row h-100">
                    <div class="col my-auto text-center">
                        MENU
                    </div>
                </div>
            </div>

        </section>

        <section id="content" >
            <div class="container mx-auto my-5 shadow" style="height: 75vh">
                <div class="row" style="height: 45%">
                    <div class="col my-auto text-center">
                        <h1 class="judul">WEBGIS</h1>
                        <p style="font-size: 12px; font-weigth: 800;">
                            Sistem Informasi Geografis<br/>
                            Data Fasilitas Kesehatan Kabupaten Bekasi<br/>
                            Alan Raihan Maulana - J3C118094<br/>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col">
                        <form id=selection method="POST" action="assets/process.php">
                            <div class="form-group">
                                <select name="data" onchange="enable()" class="form-control shadow" id="exampleFormControlSelect1">
                                    <option value="" disabled selected>--- Pilih Data ---</option>
                                    <option value="rs">Peta Sebaran Jumlah Rumah Sakit</option>
                                    <option value="rb">Peta Sebaran Jumlah Rumah Bersalin</option>
                                    <option value="kl">Peta Sebaran Jumlah Rumah Klinik</option>
                                </select>
                            </div>
                          </form>        
                          <button id="buka" disabled onclick="submit()" class="btn btn-primary w-100 my-1 text-white font-weight-bold">BUKA</button>
                  
                    </div>

                    <div class="col">
                    </div>
                </div>

                <div class="row" style="height: 25%;">
                    <div class="col">
                    </div>
                    <div class="col text-center">
                        <?php 
                            $ip = $_SERVER['REMOTE_ADDR'];
                            $details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));
                            echo '<span style="font-weight: 300; font-size: 14px">Anda mengakses dari : '.$details->City.' Koordinat : '.$details->loc.'</span>'; // -> "Mountain View
                        ?>
                     </div>
                    <div class="col">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col text-center">
                        <a style="font-weight: 300; font-size: 14px; text-decoration: none;" href="https://bekasikab.bps.go.id/subject/30/kesehatan.html#subjekViewTab3">Direct Data Source (BPS Kab. Bekasi)</a>
                    </div>

                    <div class="col">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col text-center">
                        <a style="font-weight: 300; font-size: 14px; text-decoration: none;" href="./assets/maps/files/">Unduh Peta</a>
                    </div>

                    <div class="col">
                    </div>
                </div>

                
            </div>
        </section>

        <script>
            function enable(){
                $('#buka').prop('disabled', false);
            }

            function submit(){
                $('body').fadeOut();
                window.setTimeout(  
                function() {  
                    $('#selection').submit();
                    },  
                    1000
                );
            }

            $( document ).ready(function() {
                $('body').fadeIn(1000);
            });

        </script>
</body>
</html>