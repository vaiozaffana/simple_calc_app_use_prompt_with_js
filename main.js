let input1 = prompt("Masukkan Angka Pertama")
let operator = prompt("Masukkan opertor")
let input2 = prompt("Masukkan Angka Kedua")

let result;

if (isNaN(input1) || isNaN(input2)) {
    alert("Error: Input Harus Angka");
}

switch (operator) {
    case '+':
        result = parseFloat(input1) + parseFloat(input2);
        break;
    case '-':
        result = parseFloat(input1) - parseFloat(input2);
        break;
    case '*':
        result = parseFloat(input1) * parseFloat(input2);
        break;
    case '/':
        if (input2 == 0) {
            alert("Error: Pembagian Nol Tidak Diperbolehkan.");
            break;
        }
        result = parseFloat(input1) / parseFloat(input2);
        break;
    default:
        alert("Error: Invalid operator. Harus Gunakan +, -, *, atau /.");
}

document.write("<h2>Hasil: " + result + "</h2>");




