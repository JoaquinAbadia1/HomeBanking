function login() {
    const usuarioInput = document.getElementById('usuarioPrincipal').value;
    const password = document.getElementById('passPrincipal').value;
fetch('./usuario.json').then((response) => response.json()).then((usuario) => {
if(usuarioInput === usuario.usuario && password === usuario.contraseña ){
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href ='inicio/inicio.html';
    }else {
        console.log('Incorrecto')
    }

}
})
