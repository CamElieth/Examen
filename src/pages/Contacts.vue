<template>
    <section class="contactos">
        <div class="intro">
            <h2>Contactos</h2>
            <p>Puedes contactarnos a traves de los siguientes medios será un placer atenderte.</p> <br>
            

        </div>
        <div class="detalle">
            <h3>Correo</h3>
            <a href="">
              <img src="..//assets/correo.png" alt="">
            </a>
            <p>telollevong@gmail.com</p>
        </div>
        <div class="detalle">
            <h3>whatsapp</h3>
            <a href="https://api.whatsapp.com/send/?phone=%2B50584107407&text&type=phone_number&app_absent=0">
                <img src="..//assets/wass.png" alt="">
            </a>
            <p>Puedes realizar tus pedidos por medio de nuestro whatsapp en la linea claro o tigo.</p>
            
        </div>
        <div class="detalle">

            <h3>Facebook</h3>
            <a href="https://www.facebook.com/profile.php?id=100063558635737">
                <img src="../assets/facebook.png" alt="">
            </a>
            <p>Visitanos en nuestra pagina de facebook y enterate de todas nuestras novedades.</p>
        </div>
    </section>
    

</template>
<style>
.contactos{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(252, 197, 164);
   
}

.contactos h2{
    text-align: center;
    color:#e44202;
    width: 100%;
}

.contactos p{
    text-align: center;
    color:#5e5d5c;
    width: 100%;
}


.intro{
    width: 100%;
    margin: auto;
    padding: 30px 30%;
    display: flex;
    flex-wrap: wrap;
}


.detalle{
    width: 30%;
    margin: 10px auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -40px;
    background-color: white;
}
div .contactos{
   
    box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
    
}
.detalle p{
    text-align: center;
}
.detalle h3{
    text-align: center;
    width: 100%;
}
.detalle a{
    text-align: center;
    width: 130%;
    height: 60%;
}





</style>
