
var intentosrestantes= 3;




function validacionClave(id) {
    var expresionRegular = /^\d{1,2}$/;
    if (!expresionRegular.test(id)) {
    //retorno falso si la clave es invalida
    return false;
    }
    //retorno verdadero si la clave es valida
    return true;
    }

function VerifForm() {
    
    var formulario = document.getElementById("formulario")
    var InfoSubmit = document.getElementById("InfoSubmit")
    var email = document.getElementById("mail")
    var pass = document.getElementById("password")
    ajax(email.value,pass.value)
   
    InfoSubmit.innerHTML="Datos erroneos"
    intentosrestantes-=1;
    if (intentosrestantes==0) {
        formulario.innerHTML="Se ha bloqueado la cuenta"
    }
       
}
    
    
   




function ajax(email,pass){
    var http;
    
    if (window.XMLHttpRequest) {

        http = new XMLHttpRequest();
    }
    else{
        http = new ActiveXObject();
    }
    
    const URL = "https://jsonplaceholder.typicode.com/users";



    http.onreadystatechange = function () {
            
        if (this.readyState == 4 && this.status==200) {
            
           var response= JSON.parse(http.response)
           response.forEach(element => {
             if(email==element.email&&pass==element.id){
                console.log(response)
                window.location.href = "./Detalle.html?user="+email;
               
             }
             
            
           });
        }
       
    }
    http.open("GET",URL);
    http.send();






}

