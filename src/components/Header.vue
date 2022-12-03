<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark" aria-label="Ninth navbar example">
    <div class="container-xl">
      <div class="navbar-brand">
        <img src="../assets/logo.jpg" alt="" class="logo">
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07XL">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Inicio</router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown" aria-expanded="false">Acerca de</a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/misionVision" class="dropdown-item">Mision y vision</router-link>
              </li>
              <li>
                <router-link to="/nuestroEquipo" class="dropdown-item">Nuestro Equipo</router-link>
              </li>
              
            </ul>
          </li>

          

          <li class="nav-item">
            <router-link to="/services" class="nav-link active">Servicios</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/photos" class="nav-link active">Fotos</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/contacto" class="nav-link active">Contactos</router-link>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>

    </header>
</template>
<style>
header{
  position: sticky;
  top: 0;
  background-color: rgb(247, 92, 3);
}

a:hover{
    margin-top: -3px;
    font-size: 20px;
    color:rgb(147, 150, 153);
}

.logo{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.navbar-collapse{
    width: 80%;
}
.navbar-collapse .navbar-nav{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
</style>