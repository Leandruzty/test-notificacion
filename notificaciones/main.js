var button = document.getElementById("button");

button.addEventListener('click', function(){
  notify();
});


function notify(){

  // Verificar que el navegador soporta notificaciones

  if (!("Notification" in window)) {
    
    alert("Tu navegador no soporta notificaciones");

  }else if(Notification.permission === "granted"){

    // Lanzar notificacion si ya esta autorizado el servicio

    var notification = new Notification("Tu pedido ya esta listo!");

  }else if(Notification.permission !== "denied"){

    Notification.requestPermission(function(permission){

      if(Notification.permission === "granted"){

        var notification = new Notification("Sus pedidos seran notificados a partir de ahora");

      }

    });

  }



}

