<template>
    <h1>Servicios</h1>
    
   <div class="container">
    <div class="card">
        <figure>
            <img src="../assets/depositos.jpg" alt="">
        </figure>
        <div class="contenido">
            <h2>Depositos</h2>
            <p>Realizamos tus pagos de facturas y te ayudamos a realizar tus depositos.</p>
            <a href="#">Leer Más</a>

        </div>
    </div>

    <div class="card">
        <figure>
            <img src="../assets/encomiendas.jpg" alt="">
        </figure>
        <div class="contenido">
            <h2>Encomiendas</h2>
            <p>Te ayudamos con retiros y envios de encomiendas.</p>
            <a href="#">Leer Más</a>

        </div>
    </div>

    <div class="card">
        <figure>
            <img src="../assets/img.jpeg" alt="">
        </figure>
        <div class="contenido">
            <h2>Compras y Más</h2>
            <p>Hacemos todo tipo de compras y te las llevamos hasta la puerta de tu casa.</p>
            <a href="#">Leer Más</a>

        </div>
    </div>
    
   </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}

.container{
    width: 100%;
    display: flex;
    max-width: 1100px;
}

.card{
    width: 100%;
    margin: 20px;
    border-radius: 6px;
    overflow: hidden;
    background: rgb(255, 255, 255);
    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
    cursor: default;
    transition: all 400ms ease;
}

.card:hover{
    box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
    transform: translateY(-3%);
}

.card img{
    width: 100%;
    height: 210px;
}

.card .contenido{
    padding: 15px;
    text-align: center;
}

.card .contenido p{
    line-height: 1.5;
    color: #6a6a6a;
}

.card .contenido h3{
    font-weight: 400;
    margin-bottom: 15px;
}

.card .contenido a{
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    margin-top: 10px;
    color: #2fb2cc;
    border: 1px solid #f15d07;
    border-radius: 4px;
    transition: all 400ms ease;
}

.card .contenido a:hover{
    background: #f06f06;
    color:#fff;
    box-shadow: 0 0 80px #fcad03, 0 0 40px #fcad03, 0 0 80px #fcad03;
    transition: 1s;

}


</style>



