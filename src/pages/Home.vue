<template>
    
    <div class="perfil">
        
        <h1 >TE LO LLEVO</h1>
        <h2>"Tus mandaditos express"</h2>
        <p>Somos una empresa constituida por un excelente equipo humano que a través del tiempo ha mejorado su sistema, talento y servicio con la única intención de satisfacer al máximo a nuestros clientes.</p>
        <div class="perfilimg">
            <img src="../assets/home1.jpg" alt="" class="imagenPerfil">
            <img src="../assets/home2.jpg" alt="" class="imagenPerfil">
            <img src="../assets/llevo.jpg" alt="" class="imagenPerfil">
            <img src="../assets/home3.jpg" alt="" class="imagenPerfil">
            <img src="../assets/home4.jpg" alt="" class="imagenPerfil">
        </div>


    </div>
  
</template>
<style>
hr{
    width: 100%;
}

.perfil{
    width: 100%;
    height: 90vh;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    background-image: url(../assets/fondo.avif);

 /* background-color: #b13706;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23DD0000'/%3E%3Cstop offset='1' stop-color='%23330825'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%234B00FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%234B00FF' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.5'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E"); */
   
    background-attachment: fixed;
    background-size: cover;
    
}
 h1{
    text-align: center;
    color:#e44202;
    width: 100%;
}
.perfil h2{
    text-align: center;
    width: 100%;
    margin-top: 10px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    padding: 10px;
   
    
}
.perfil p{
    text-align: center;
    margin-top: 10px;
    margin-left: 15%;
    color: rgb(255, 255, 255);
    font-weight: 600;
    padding: 10px;
    width: 70%;
    font-size: 20px;
    
}
.perfilimg{
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
}
.imagenPerfil{
    width: 18%;
    margin: auto;
    border-radius: 5px;
}
</style>