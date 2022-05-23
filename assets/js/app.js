let email = document.getElementById('email');
let password = document.getElementById('password');

email.addEventListener('focus', () => {
    email.style.borderColor = '#040b25';
});

email.addEventListener('blur', () => {
    email.style.borderColor = '#ccc';
});

//

password.addEventListener('focus', () => {
    password.style.borderColor = '#040b25';
});

password.addEventListener('blur', () => {
    password.style.borderColor = '#ccc';
});

//

function validaForm(frm) {
        // O campo e-mail precisa de conter: "@", "." e não pode estar vazio
        if(frm.email.value.indexOf("@") == -1 ||
          frm.email.valueOf.indexOf(".") == -1 ||
          frm.email.value == "" ||
          frm.email.value == null) {
            window.alert("Por favor, indique um e-mail válido.");
            event.preventDefault(); // Não recarregar a página
            frm.email.focus();
            return false;
        }
}

// Mostrar senha
let btn = document.querySelector('.lnr-eye');
btn.addEventListener('click', function() {
    let input = document.querySelector('#password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});
