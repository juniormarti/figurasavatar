
// creamos la variable para capturar el elemento por el id
function circulo(){
    var figura = document.getElementById("figura");
    figura.classList=" ";
    figura.classList.toggle("circulo")
}

function rombo(){
    var figura = document.getElementById("figura");
    figura.classList=" ";
    figura.classList.toggle("rombo")
}

function rectanguloH(){
    var figura = document.getElementById("figura");
    figura.classList=" ";
    figura.classList.toggle("rectanguloH")
}

function rectanguloV(){
    var figura = document.getElementById("figura");
    figura.classList=" ";
    figura.classList.toggle("rectanguloV")
}

function arriba(){
    var figura = document.getElementById("figura");
    figura.classList=" ";
    figura.classList.toggle("arriba")
}


function abajo(){
    var figura = document.getElementById("figura");
    figura.classList=" ";
    figura.classList.toggle("abajo")
}

function izquierda(){
    var figura = document.getElementById("figura");
    figura.classList=" ";
    figura.classList.toggle("izquierda")
}

function derecha(){
    var figura = document.getElementById("figura");
    figura.classList=" ";
    figura.classList.toggle("derecha")
}

function diagonal(){
    var figura = document.getElementById("figura");
    figura.classList=" ";
    figura.classList.toggle("diagonal")
}

function triangulo(){
    var figura = document.getElementById("figura");
    figura.classList=" ";
    figura.classList.toggle("triangulo")
}

function imagen(){
    var figura = document.getElementById("figura");
    figura.classList=" ";
    figura.classList.toggle("imagen")
}

function fecha(){
    const d  = new Date();
    document.getElementById("figura").innerHTML = d;
    figura.classList=" ";
    figura.classList.toggle("fecha")
}

function aleatorio(){
    
    document.getElementById("figura").innerHTML =
    Math.floor(Math.random() * 10);
    figura.classList=" ";
    figura.classList.toggle("aleatorio")
}


/*de aqui en adelante es de capturar datos de avatar*/

function capturarDatos(){

    /*capturamos valores de cada campo del formulario*/

    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    //capturamos los elementos a los cuales les asiganeremos los valores

    var mFoto = document.getElementById("mFoto");
    var mNombres = document.getElementById("mNombres");
    var mDescripcion = document.getElementById("mDescripcion");
    var mEdad = document.getElementById("mEdad");
    var mFecha = document.getElementById("mFecha");
    var mGenero = document.getElementById("mGenero");
    var mEmail = document.getElementById("mEmail");

    var contAvatar = document.getElementById("contAvatar");

    mNombres.textContent = nombres;
    mDescripcion.textContent = descripcion;
    mEdad.textContent = edad;
    mFecha.textContent = fecha;
    mGenero.textContent = genero;
    mEmail.textContent = email;

    if (genero == "Masculino"){
        mFoto.src="img/perfil.png";
    } else if (genero == "Femenino"){
        mFoto.src="img/woman.png";
    } else{
        mFoto.src="img/otro.png";
    }

    switch (color) {
        case "Morado":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Morado")
            break;
        case "Rojo":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Rojo")
            break;
        case "Azul":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Azul")
            break;
        case "Turquesa":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Turquesa")
            break;
        case "Verde":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Verde")                
            break;
        }
    }


    function paralelogramo(){
        var figura = document.getElementById("figura");
        figura.classList=" ";
        figura.classList.toggle("paralelogramo")
    }

    function trapecio(){
        var figura = document.getElementById("figura");
        figura.classList=" ";
        figura.classList.toggle("trapecio")
    }

    function tricolor(){
        var figura = document.getElementById("figura");
        figura.classList=" ";
        figura.classList.toggle("tricolor")
    }