//counter code
/*var button=document.getElementById('counter');
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            if(request.status==200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://hetal93hasmukh.imad.hasura-app.io/counter',true);
    request.send(null);
};*/

var submitCmt=document.getElementById('submit-comment');
submitCmt.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            if(request.status==200)
            {
                var comments=request.responseText;
                comments=JSON.parse(comments);
                var cmtlist='';
                for(var j=0;j<comments.length;j++)
                {
                    cmtlist+='<i>'+comments[j]+'</i>';
                }
                var span=document.getElementById('cmt');
                span.innerHTML=cmtlist;
            }
        }
    };
    var commentInput=document.getElementById('comment');
    var commentValue=commentInput.value;
    request.open('GET','http://hetal93hasmukh.imad.hasura-app.io/submit-comment?comment='+commentValue,true);
    request.send(null);
};

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            if(request.status==200)
            {
                console.log('user logged in');
                alert('Logged in successfully');
            }
            else if(request.status===403)
            {
                alert('Username/password is incorrect');
            }
            else if(request.status===500)
            {
                alert('Something went wrong on the server');
            }
        }
    };
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
    //var name1=nameInput.value;
    
    request.open('POST','http://hetal93hasmukh.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
  
};

