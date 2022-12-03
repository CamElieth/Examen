<template>
    <h1>Mision y Vision</h1>

    <section>
        <div class="img">
            <img src="../assets/moto.webp" alt="">
        </div>
        <div class="title">
            <h2>Nosotros</h2>
            <p class="textPage">"Realizamos mandados a bordo de motocicletas"</p>
            <p class="textYouCan">
                Sabemos cómo brindarle un buen servicio a los clientes para que nuestra empresa tenga una diferenciación entre los demás por el buen trato a los mismo además contamos con un servicio seguro y súper confiable
            </p>
            
        </div>
    </section>

    <section>
        <div class="title">
        <h2>Misión</h2>
          
            <p class="textYouCan">
                Te lo llevo tiene como misión  ofrecer a la comunidad  de Nueva Guinea el servicio de mandados y mensajería ya que cuenta  con gran variedad de servicios tales cómo  servicios de pagos,  depositos, compras y demás; esta empresa cuenta con personal capacitado para ofrecer un mejor servicio y con valores fundamentales como responsabilidad, humildad, puntualidad y honestidad
            </p>
        </div>
        <div class="title">
            <h2>Visión</h2>
           
            <p class="textYouCan">
               Nuestra visión es convertirnos en una de las empresas más reconocidas en el ámbito de mandados, no solo local sino nacional e internacionalmente, brindando un servicio con calidad y entregar las encomiendas en el menor tiempo posible.
            </p>
            
        </div>
    </section>
    
</template>
<style>
section{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.img{
    width: 45%;
    margin:0px auto;

}
.img img{
    width: 95%;
    margin: auto;
    margin-top: 10%;
}
.title{
    width: 40%;
    text-align: center;
    margin: auto;
    padding-top: 40px;
    color: rgb(110, 111, 112);
   
}
.title h2{
    color:rgb(245, 133, 5);
}
h1{
    font-size: 80px;
}
.textPage{
    font-size: 30px;
}
.textYouCan{
    font-size: 20px;

  
}
@media (max-width: 520px){
    h1{
    font-size: 40px;
}
    .title{
        width: 90%;
        text-align: center;
        padding: 10px;
        color: rgb(110, 111, 112);
   
}
    .img{
        width: 90%;
        margin: auto;
    }
    .img img{
        width: 100%;
    }
}
</style>