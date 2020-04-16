
let list = $('.list');

$('#btn').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(x){
        list.empty();
        x.forEach(function(xx){
            var li = $('<li></li>');
            li.text(JSON.stringify(xx));
            list.append(li);
        })
    });
});

$('#btn1').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10', function(a){
        list.empty();
            var li = $('<li></li>');
            li.text(JSON.stringify(a));
            list.append(li);
    });
});

$('#btn2').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments?id=12', function(b){
        list.empty();
        var li = $('<li></li>');
        li.text(JSON.stringify(b));
        list.append(li);
    });
});

$('#btn3').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/2', function(c){
        list.empty();
        var li = $('<li></li>');
        li.text(JSON.stringify(c));
        list.append(li);
    });
});

$('#btn4').click(function(){
    $.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{
        userId: 1,
        title: "My New Post",
        body: "This is the body"
    }, function(data){
        list.empty();
        var li = $('<li></li>');
        li.text(JSON.stringify(data.id));
        list.append(li);
        console.log(data.id)
    });
});

$('#btn5').click(function(){
    $.ajax({
        method: 'PUT',
        url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10',
        data: {
            userId: 1,
            title: "New Post",
            body: "New post added"
        },
        complete: function(response){
            list.empty();
            var li = $('<li></li>');
            li.text(JSON.stringify(response));
            list.append(li);
            console.log(response.responseJSON);
        }
    });
});

$('#btn6').click(function(){
    $.ajax({
        method: 'PATCH',
        url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10',
        data: {
    title: "patched it"
    },
        complete: function(response){
            list.empty();
            var li = $('<li></li>');
            li.text(JSON.stringify(response));
            list.append(li);
            console.log(response.responseJSON);
        }
    });
});

$('#btn7').click(function(){
    $.ajax({
        method: 'DELETE',
        url: 'http://jsonplaceholder.typicode.com/posts/12',
        complete: function(response){
            list.empty();
            var li = $('<li></li>');
            li.text(JSON.stringify(response));
            list.append(li);
            console.log(response.statusText);
        }
    });
});


$('#btn8').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/db', function(x){
        console.log(x);
        list.empty();
        x.posts.forEach(function(xx){
            var li = $('<li></li>');
            li.text(JSON.stringify(xx));
            list.append(li);

            x.comments.forEach(function(yy){
                if(xx.id == yy.id){
                    var ul = $('<ul></ul>');
                    var li2 = $('<li></li>');
                    li2.text(JSON.stringify(yy));
                    ul.append(li2);
                    li.append(ul);
                    li.children().hide();
                }
            })
        })
    });
});

list.click(function(text){
    var target = $(text.target);
    if (target.is("li")){
        target.children().show();
    }
});

$('#btn9').click(function(){
    var li = $('<li></li>');
    li.html("<a href='https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts'>BACK TO ALL POST</a>");
    list.append(li);
});
