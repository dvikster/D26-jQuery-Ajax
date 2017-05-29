$(document).ready(function () {
        $('#send-answer').on('click', getAnswer);

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
