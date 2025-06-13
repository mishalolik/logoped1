let button = document.getElementById('vive');
let input = document.getElementById('give');
button.onclick = function () {
    if (input.value == '') {
        alert('вы не написали ничего!!!')
    } else {
        alert('спасибо за номер телефона!');
    }

}
