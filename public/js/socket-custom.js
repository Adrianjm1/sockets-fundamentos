var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');
});

//ESCUCHAR 
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
//ENVIAR INFO
socket.emit('enviarMensaje', {
    usuario: "Adrian",
    mensaje: "Hola mundo"
}, function(resp) {
    console.log('respuesta: ', resp);
});

//ESCUCHAR INFO
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

})