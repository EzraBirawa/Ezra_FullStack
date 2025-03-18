let registrasi = document.getElementById('registrasi')
let usernameLabel = document.getElementById("usernameLabel");
let usernameInput = document.getElementById("usernameInput");
let passwordLabel = document.getElementById("passwordLabel");
let passwordInput = document.getElementById("passwordInput");
let loginButton = document.getElementById('loginButton');
let logoutButton = document.getElementById('logoutButton');
let admin1 = document.getElementById('admin1');
let admin2 = document.getElementById('admin2');
let admin3 = document.getElementById('admin3');
let admin4 = document.getElementById('admin4');
let basic = document.getElementById('basic');


// agar tidak muncul pada halaman utama
admin1.style.display = 'none';
admin2.style.display = 'none';
admin3.style.display = 'none';
admin4.style.display = 'none';
basic.style.display = 'none';
logoutButton.style.display = 'none';


function onLogin() {
    console.log('tombol login diklik');
    console.log(usernameInput.value);
    console.log(passwordInput.value);
    localStorage.setItem("username", usernameInput.value);

    if (usernameInput.value == 'admin1' && passwordInput.value == 'orang1') {
        alert('login sebagai orang 1');
        localStorage.setItem("role", "orang1");
        registrasi.style.display = 'none';
        usernameInput.style.display = 'none';
        passwordInput.style.display = 'none';
        usernameLabel.style.display = 'none';
        passwordLabel.style.display = 'none';
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';

        // saat login benar, tulisan akan muncul
        admin1.style.display = 'block';
        admin2.style.display = 'none';
        admin3.style.display = 'none';
        admin4.style.display = 'none';
        basic.style.display = 'none';
    }

    else if (usernameInput.value == 'admin2' && passwordInput.value == 'orang2') {
        alert('login sebagai orang 2');
        localStorage.setItem("role", "orang2");
        registrasi.style.display = 'none';
        usernameInput.style.display = 'none';
        passwordInput.style.display = 'none';
        usernameLabel.style.display = 'none';
        passwordLabel.style.display = 'none';
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';

        // saat login benar, tulisan akan muncul
        admin1.style.display = 'none';
        admin2.style.display = 'block';
        admin3.style.display = 'none';
        admin4.style.display = 'none';
        basic.style.display = 'none';
    }

    else if (usernameInput.value == 'admin3' && passwordInput.value == 'orang3') {
        alert('login sebagai orang 3');
        localStorage.setItem("role", "orang3");
        registrasi.style.display = 'none';
        usernameInput.style.display = 'none';
        passwordInput.style.display = 'none';
        usernameLabel.style.display = 'none';
        passwordLabel.style.display = 'none';
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';

        // saat login benar, tulisan akan muncul
        admin1.style.display = 'none';
        admin2.style.display = 'none';
        admin3.style.display = 'block';
        admin4.style.display = 'none';
        basic.style.display = 'none';
    }

    else if (usernameInput.value == 'admin4' && passwordInput.value == 'orang4') {
        alert('login sebagai orang 4');
        localStorage.setItem("role", "orang4");
        registrasi.style.display = 'none';
        usernameInput.style.display = 'none';
        passwordInput.style.display = 'none';
        usernameLabel.style.display = 'none';
        passwordLabel.style.display = 'none';
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';

        // saat login benar, tulisan akan muncul
        admin1.style.display = 'none';
        admin2.style.display = 'none';
        admin3.style.display = 'none';
        admin4.style.display = 'block';
        basic.style.display = 'none';
    }

    else {
        alert('anda siapa? alien?');
        // masukkan username alien disini agar usernamenya tetap masuk di localstorage dan tidak hilang saat di refresh
        localStorage.setItem("username", "alien");
        localStorage.setItem("role", "alien");
        registrasi.style.display = 'block';
        usernameInput.style.display = 'block';
        passwordInput.style.display = 'block';
        usernameLabel.style.display = 'block';
        passwordLabel.style.display = 'block';
        loginButton.style.display = 'block';
        logoutButton.style.display = 'none';

        // saat login salah, tulisan akan muncul
        admin1.style.display = 'none';
        admin2.style.display = 'none';
        admin3.style.display = 'none';
        admin4.style.display = 'none';
        basic.style.display = 'block';
    }
}

if (localStorage.getItem('username')) {
    registrasi.style.display = 'none';
    usernameInput.style.display = 'none';
    passwordInput.style.display = 'none';
    usernameLabel.style.display = 'none';
    passwordLabel.style.display = 'none';
    loginButton.style.display = 'none';
    logoutButton.style.display = 'block';


    if (localStorage.getItem('role') == 'orang1') {
        admin1.style.display = 'block';
        admin2.style.display = 'none';
        admin3.style.display = 'none';
        admin4.style.display = 'none';
        basic.style.display = 'none';
    }
    else if (localStorage.getItem('role') == 'orang2') {
        admin1.style.display = 'none';
        admin2.style.display = 'block';
        admin3.style.display = 'none';
        admin4.style.display = 'none';
        basic.style.display = 'none';
    }
    else if (localStorage.getItem('role') == 'orang3') {
        admin1.style.display = 'none';
        admin2.style.display = 'none';
        admin3.style.display = 'block';
        admin4.style.display = 'none';
        basic.style.display = 'none';
    }
    else if (localStorage.getItem('role') == 'orang4') {
        admin1.style.display = 'none';
        admin2.style.display = 'none';
        admin3.style.display = 'none';
        admin4.style.display = 'block';
        basic.style.display = 'none';
    }
    else {
        // saat salah login, harus login ulang
        registrasi.style.display = 'block';
        usernameInput.style.display = 'block';
        passwordInput.style.display = 'block';
        usernameLabel.style.display = 'block';
        passwordLabel.style.display = 'block';
        loginButton.style.display = 'block';
        logoutButton.style.display = 'none';
        
        // tulisan yang muncul saat salah login
        admin1.style.display = 'none';
        admin2.style.display = 'none';
        admin3.style.display = 'none';
        admin4.style.display = 'none';
        basic.style.display = 'block'; 
    }
}

function onLogout() {
    console.log('tombol logout diklik');
    localStorage.clear();
    location.reload();
}

// percobaan perubahan