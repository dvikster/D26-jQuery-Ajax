var out='';

function inintTodo() {
    out='';
    $('.todo-tr').remove();
    $.ajax({
        type: 'POST',
        url: 'core.php',
        data: {'action': 'init'},
        success: ifSuccess
    });
}
inintTodo();

var todoList='';


function ifSuccess(data) {
    todoList = JSON.parse(data);
    console.log(todoList);
    out +='<table class="bordered">';
    out +='<thead class="todo-tr">';
    out +='<tr><th>Название задачи</th>';
    out +='<th>Описание задачи</th>';
    out +='<th>Удалить задачу</th></thead> ';

    for (var key in todoList){
        out +='<tr class="todo-tr">';
        out +='<td>' + todoList[key].head +'</td>';
        out +='<td>' + todoList[key].body +'</td>';
        out +='<td><button class="waves-effect waves-light btn" data-id="'+todoList[key].id+'">Удалить</button> </td></tr>';
    }
    out += '</table>';
    $('#server-answer').append(out);
    $('#server-answer button').on('click', deleteTask);
}

function deleteTask() {
    var idButton = $(this).data("id");
    console.log(idButton);

    $.ajax({
        type: 'POST',
        url: 'core.php',
        data:{
            'action':'delete',
            'id': $(this).data("id")
        },
        success: function (data) {
            console.log(data);
            inintTodo();
        }
    });
}


function createTask(event){
    event.preventDefault();
    console.log($('#title_todo').val());
    console.log($('#desc_todo').val());
    $.ajax({
        type: 'POST',
        url: 'core.php',
        data:{
            'action':'create',
            'head': $('#title_todo').val(),
            'body': $('#desc_todo').val()
        },
        success: function (data) {
            console.log(data);
            inintTodo();
            $('#title_todo').val('');
            $('#desc_todo').val('');
        }
    });

}

$('#create-task').on('click',createTask);
