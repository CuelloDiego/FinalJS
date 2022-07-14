var inputformat = /^[0-9]+$/;
const idinput = document.getElementById("idInput");
const errorinput=document.getElementById("Errorinput")
function VerifInput(){

    if (inputformat.test(idinput.value)) {
        ajax()
        
    }
    else{
        errorinput.innerHTML="Los parametros ingresados no son numericos"
    }
}



function ajax(){
    var http;
    
    if (window.XMLHttpRequest) {

        http = new XMLHttpRequest();
    }
    else{
        http = new ActiveXObject();
    }



    
    const URL = 'https://rickandmortyapi.com/api/character/'+idinput.value+'/';

    errorinput.innerHTML="";

    http.onreadystatechange = function () {
             var id = document.getElementById("id")
            var name = document.getElementById("name")
            var status = document.getElementById("status")
            var species = document.getElementById("species")
            var type = document.getElementById("type")
            var gender = document.getElementById("gender")
        if (this.readyState == 4 && this.status==200) {
            
    
            
           
           var response= JSON.parse(http.response)
     
           id.innerHTML = response.id;
           name.innerHTML = response.name;
           status.innerHTML = response.status;
           species.innerHTML = response.species;
           type.innerHTML = response.type;
           gender.innerHTML = response.gender;
        }
        else{
            id.innerHTML = "No encontrado";
           name.innerHTML = "No encontrado";
           status.innerHTML = "No encontrado";
           species.innerHTML = "No encontrado";
           type.innerHTML = "No encontrado";
           gender.innerHTML = "No encontrado";
           
        }
    }
    http.open("GET",URL);
    http.send();






}
function VerImagen(){
    imagen.innerHTML='<img src="https://rickandmortyapi.com/api/character/avatar/'+idinput.value+'.jpeg" alt="">'
    
}
window.onload = function () { var hora = document.getElementById("hora")
var hoy=new Date();
h=hoy.getHours();
m=hoy.getMinutes();   
hora.innerHTML=h+":"+m;


const url = new URLSearchParams(window.location.search);
var user = document.getElementById("user");
user.innerHTML=""+url.get('user');

}
