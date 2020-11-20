<template>
  <div class="container">
      <h1>MEtodologías de autenticación REST API</h1>
      <div class="row">
          <div class="txtBox">
              <h2>HTTP Authentication</h2>
              <p>este es el método más sencillo para cumplir con los requisitos de acceso a un servicio web. Es sencillo porque no requiere ninguno de los procesos habituales en un sistema de credenciales: cookies, identificadores de sesión o páginas de acceso. Todo el proceso de autenticación básica HTTP se basa en campos estándar en el encabezado HTTP.</p>
          </div>
          <div class="imgBox">
              <img src="https://www.itsitio.com/wp-content/uploads/2019/10/1_NVwfSg8wHwFZ_R7ULgzdLQ-780x405.jpeg" alt="">
          </div>
      </div>
      <div class="row">
          <div class="imgBox">
              <img src="https://mdn.mozillademos.org/files/14689/HTTPAuth.png" alt="">
          </div>
          <div class="txtBoxL">
              <h2>¿Cómo funciona?</h2>
            <p>HTTP soporta el uso de varios mecanismos de identificación para controlar el acceso a páginas u otros resources. Estos mecanismos se basan en el uso del código de estado 401 y el response header WWW-Authenticate.</p>
            <ul>
                <li>Basic</li>
                <p>El cliente envía el nombre de usuario y la contraseña sin encriptar en codificación textual base64. Sólo debe usarse con HTTPs, ya que la contraseña puede ser fácilmente capturada</p>
            </ul>
            <ul>
                <li>Digest</li>
                <p>El cliente envía la contraseña en forma de hash. Es mucho más difícil de obtener los valores de usuario y contraseña.</p>
            </ul>
          </div>

      </div>
      <div class="row">
          <div class="txtBox">
              <h2>Autenticaicion por token</h2>
              <p>La autenticación por token es un procedimiento habitual para loguear a los usuarios en APIs REST y recordarles para los futuros accesos al servicio web.</p>
          </div>
          <div class="imgBox">
              <img src="https://miro.medium.com/max/1000/1*kifAbWyQHOB1AV0aQSIfTA.jpeg" alt="">
          </div>
      </div>
      <div class="row">
          <div class="imgBox">
              <img src="https://programarivm.com/wp-content/uploads/2013/11/token-based-auth.png" alt="">
          </div>
          <div class="txtBoxL">
              <h2>¿Cómo funciona?</h2>
            <p>En este método, el usuario se identifica al igual que con la autenticación básica, con sus credenciales, nombre de usuario y contraseña. Pero en este caso, con la primera petición de autentificación, el servidor generará un token basado en esas credenciales. Para evitar que en cada llamada el usuario deba entregar su clave y password se usa el token, que no es más que una cadena de texto bien larga, encriptada con una clave. Según se hace el login, el servidor devuelve al cliente un token y el cliente en futuros accesos entrega ese token para certificar que está autenticado.

El servidor guarda en base de datos este registro y lo devuelve al usuario para que a partir de ese momento no envíe más credenciales de inicio de sesión en cada petición HTTP.  En lugar de las credenciales, simplemente se debe enviar el token codificado en cada petición HTTP.
</p>
             
          </div>

      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
     width: 100%;
     height: auto;
 }
.container h1{
    text-align: center;
    font-family: var(--font-titulo);
     font-size: 50px;
}
 .container .row{
     margin: 50px 0;
     display: flex;
     flex-direction: row;
     justify-content: space-evenly;
     align-items: center;
     flex-wrap: wrap;
 }
 .container .row .txtBox{
     width: 550px;
     height: 400px;
     padding: 20px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background: var(--bckgreg);
 }
 .container .row .txtBoxL{
     width: 550px;
     height: 700px;
     padding: 20px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
 background: var(--bckgreg);
 }
 .container .row .txtBox h2{
     font-family: var(--font-subtitulo);
     font-size: 30px;
     margin-bottom: 50px;
 }
  .container .row .txtBoxL h2{
     font-family: var(--font-subtitulo);
     font-size: 30px;
     margin-bottom: 50px;
 }
 .container .row .txtBox p{
     text-align: justify;
     font-family: var(--font-content);
     font-size: 20px;
 }
  .container .row .txtBoxL p{
     text-align: justify;
     font-family: var(--font-content);
     font-size: 20px;
 }
 .container .row .imgBox{
     width: 350px;
     height: 400px;
 }
 .container .row .imgBox img{
     width: 100%;
     height: 100%;
 }
</style>