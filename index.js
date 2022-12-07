function login() {
    const usuario = document.getElementById('usuarioPrincipal').value;
    const password = document.getElementById('passPrincipal').value;
    if(usuario === 'joaquin' && password === 'abadia' ){
        localStorage.setItem("usuario", usuario);
        window.location.href ='inicio/inicio.html';
    }else {
        console.log('Incorrecto')
    }

}
