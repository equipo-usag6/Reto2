/**
 * autor Lorena Navas
 * escrito 05/10/2021
 * Universidad Sergio Arboleda
 */

/**
 * endpoint api audience Oracle CLoud 
 */

/**
 * AUDITORIO
 */

function traerInformacion(){
    $.ajax({
        url:"https://g93e4859aa2d423-db202109232124.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            prInformacion(respuesta.items);
        }

    });
}

function prInformacion(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].owner+"</td>";
        myTable+="<td>"+items[i].capacity+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarInformacion("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoInformacion").append(myTable);

}
function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93e4859aa2d423-db202109232124.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoInformacion").empty();
            $("#id").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacion(){
    let myData={
        id:$("#id").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93e4859aa2d423-db202109232124.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoInformacion").empty();
            $("#id").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function borrarInformacion(idInformacion){
    let myData={
        id:idInformacion
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93e4859aa2d423-db202109232124.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoInformacion").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}



/**
 * CLIENTE
 */



function traerCliente(){
    $.ajax({
        url:"https://g93e4859aa2d423-db202109232124.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            prCliente(respuesta.items);
        }

    });
}

function prCliente(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarCliente("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoCliente").append(myTable);

}
function guardarCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93e4859aa2d423-db202109232124.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerCliente();
            alert("se ha guardado el dato")
        }
    });
}


function editarCliente(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93e4859aa2d423-db202109232124.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerCliente();
            alert("se ha Actualizado")
        }
    });
}

function borrarCliente(idClientes){
    let myData={
        id:idClientes
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93e4859aa2d423-db202109232124.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCliente").empty();
            traerCliente();
            alert("Se ha Eliminado.")
        }
    });
}

/**
 * MENSAJE
 */



 function traerMensaje(){
    $.ajax({
        url:"https://g93e4859aa2d423-db202109232124.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            prMensaje(respuesta.items);
        }

    });
}

function prMensaje(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarMensaje("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMensaje").append(myTable);

}
function guardarMensaje(){
    let myData={
        id:$("#idMensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93e4859aa2d423-db202109232124.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#guardarMensaje").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerMensaje();
            alert("se ha guardado el dato")
        }
    });
}


function editarMensaje(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93e4859aa2d423-db202109232124.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensaje").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerMensaje();
            alert("se ha Actualizado")
        }
    });
}

function borrarMensaje(idMensajes){
    let myData={
        id:idMensajes
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g93e4859aa2d423-db202109232124.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensaje").empty();
            traerMensaje();
            alert("Se ha Eliminado.")
        }
    });
}
