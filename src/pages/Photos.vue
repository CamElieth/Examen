<template>
    <h1>Fotos</h1>

    <div class="fotos">
        <img src=../assets/foto1.jpg alt="">
        <img src=../assets/foto2.jpg alt="">
        <img src=../assets/foto3.jpg alt="">
        <img src=../assets/TeloLlevo.jpg alt="">


    </div>
    
</template>


<style>
.fotos{
    width: 95%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
}
.fotos img{
    width: 45%;
    margin:10px auto;
    border-radius: 10px;
}
@media (max-width: 520px){
    .fotos img{
    width: 90%;
    margin:10px auto;
    border-radius: 10px;
}
}
.fotos :hover{
    box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
    transform: translateY(-3%);
}

</style>


