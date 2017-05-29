$(document).ready(function () {
    $('#send-answer').on('click', getAnswer);
    $('#send-answer2').on('click', signPass);

});

function getAnswer() {
    console.log($('#number').val());
    $.get(
        '1.php',
        {
            'num': $('#number').val()
        },
        ifSuccess
    );
}

function ifSuccess(data) {
    $('#server-answer').html(data);
}

function signPass() {
    console.log($('#name').val());
    console.log($('#pass').val());
    $.post(
        '2.php',
        {
            'name': $('#name').val(),
            'pass': $('#pass').val()
        },
        ifSuccess2
    );
}

function ifSuccess2(data) {
    $('#server-answer2').html(data);
}
