$(document).ready(function () {
    $('#send-answer').on('click', getAnswer);
    $('#send-answer2').on('click', signPass);
    $('#send-answer3').on('click', chooseFile);
    $('#task6').load('6.txt');
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

function chooseFile() {
   // if(document.getElementById('file3').checked ===  true){
    if($('#file3:checked').length){
        $.ajax({
            type: 'GET',
            url: '3.php',
            success: function(data){
                $('#server-answer3').html(data);
            }
        });
   }
   // else if(document.getElementById('file4').checked ===  true){
    else  if($('#file4:checked').val() ===  'on'){
       $.ajax({
           type: 'GET',
           url: '4.php',
           success: function(data){
               $('#server-answer3').html(data);
           }
       });
   }
}

var out='';
$.getJSON('5.json',function (data) {
    out +='1. shopper Name - ' + data.shopperName +'<br>';
    out +='2. shopper Email - ' + data.shopperEmail +'<br>';
    out +='3. productName: <br>';
    for (var key in data.contents){
        out +=' - '+data.contents[key].productName +'<br>';
       }
    $('#server-answer5').html(out);
});