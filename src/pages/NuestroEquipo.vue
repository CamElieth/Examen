<template>
    <h1>Nuestro Equipo</h1> <br>

    <p>¡Estamos listos para ayudarte en tus mandados!</p>

    <section class="opciones">
        <div class="Prop">
            <p>Propietario</p>
            <img src="../assets/propietario.jpg" alt="">

        </div>
        <div class="colaboradores">
            <p>Motorizado</p>
            <img src="../assets/job.jpg" alt="">

        </div>
        <div class="colaboradores">
            <p>Motorizado</p>
            <img src="../assets/carlo.jpg" alt="">

        </div>
        <div class="colaboradores">
            <p>Motorizada</p>
            <img src="../assets/tania.jpg" alt="">

        </div>

      
    </section>



</template>
<style>
.opciones{
    width: 100%;
    display: flex;
    margin: 30px auto;
}
.opciones div{
    width: 20%;
    margin: auto;
    border: 2px solid rgb(250, 136, 6);
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.opciones div img{
    width: 80%;
    margin: auto;
    height: 100px;
    border-radius: 50%;
}

</style>