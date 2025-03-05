function saklar() {
    let toggle1 = document.getElementById("default-toggle1")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")
    let toggle4 = document.getElementById("default-toggle4")
    let toggle5 = document.getElementById("default-toggle5")
    let toggle6 = document.getElementById("default-toggle6")
    let toggle7 = document.getElementById("default-toggle7")
    let toggle8 = document.getElementById("default-toggle8")
    let toggle9 = document.getElementById("default-toggle9")
    let toggle10 = document.getElementById("default-toggle10")
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");
    let lampu7 = document.getElementById("lampu7");
    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");

    // console.log(action, lamp, 'testing', toggle.checked);

// RUANG KELUARGA
    // lampu 1, 2, 3
    if (toggle1.checked) {
        console.log("nyalaRK");
        lampu1.src = "/assets/images/on.gif";
        lampu2.src = "/assets/images/on.gif";
        lampu3.src = "/assets/images/on.gif";
    }
    else {
        console.log("matiRK");
        lampu1.src = "/assets/images/off.gif";
        lampu2.src = "/assets/images/off.gif";
        lampu3.src = "/assets/images/off.gif";
    }


// RUANG MAKAN
    // lampu 4
    if (toggle4.checked) {
        console.log("nyalaRM");
        lampu4.src = "/assets/images/on.gif";
    }
    else {
        console.log("matiRM");
        lampu4.src = "/assets/images/off.gif";
    }


// RUANG TIDUR
    // lampu 5 & 6
    if (toggle5.checked) {
        console.log("nyalaRT");
        lampu5.src = "/assets/images/on.gif";
        lampu6.src = "/assets/images/on.gif";
    }
    else {
        console.log("matiRT");
        lampu5.src = "/assets/images/off.gif";
        lampu6.src = "/assets/images/off.gif";
    }


// RUANG TAMU
    // lampu 7, 8, 9, &10
    if (toggle7.checked) {
        console.log("nyalaRTM");
        lampu7.src = "/assets/images/on.gif";
        lampu8.src = "/assets/images/on.gif";
        lampu9.src = "/assets/images/on.gif";
        lampu10.src = "/assets/images/on.gif";
    }
    else {
        console.log("matiRTM");
        lampu7.src = "/assets/images/off.gif";
        lampu8.src = "/assets/images/off.gif";
        lampu9.src = "/assets/images/off.gif";
        lampu10.src = "/assets/images/off.gif";
    }
}

