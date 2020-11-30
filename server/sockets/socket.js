const { io } = require('../server')





io.on('connection', (client) => {


    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta app'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //ESCUCHAR CLIENTE

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /*
                if (mensaje.usuario) {
                    callback({
                        resp: 'todo salio bien'
                    })
                } else {
                    callback({
                        resp: 'todo salio mal'
                    })
                }
                callback();
        */
    })


})