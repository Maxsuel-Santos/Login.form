let email = document.getElementById('email');
let password = document.getElementById('password');

email.addEventListener('focus', () => {
    email.style.borderColor = '#4a5f6a';
});

email.addEventListener('blur', () => {
    email.style.borderColor = '#ccc';
});

//

password.addEventListener('focus', () => {
    password.style.borderColor = '#4a5f6a';
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
            frm.email.focus();
            return false;
        }

        if(frm.password.value < 6 || frm.password.value == "" || frm.password.value == null) {
            window.alert("Por favor, indique uma senha válida.");
            frm.password.focus();
            return false;
        }
}
