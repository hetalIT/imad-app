//counter code
var button=document.getElementById('counter');
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
};

var submitCmt=document.getElementById('submit-comment');
submitCmt.onclick=function(){
    var requ=new XMLHttpRequest();
    requ.onreadystatechange=function(){
        if(requ.status==200)
        {
            var comments=requ.responseText;
            comments=JSON.parse(comments);
            var cmtlist='';
            for(var j=0;j<comments.length;j++)
            {
                cmtlist+='<i>'+comments[j]+'</i>';
            }
            var span=document.getElementById('cmt');
            span.innerHTML=cmtlist;
        }
    };
    var commentInput=document.getElementById('comment');
    var commentValue=commentInput.value;
    requ.open('GET','http://hetal93hasmukh.imad.hasura-app.io/submit-comment?comment='+commentValue,true);
    requ.send(null);
};

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            if(request.status==200)
            {
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++)
                {
                  list+='<li>'+names[i]+'</li>';  
                
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
            }
        }
    };
    var nameInput=document.getElementById('name');
    var name1=nameInput.value;
    request.open('GET','http://hetal93hasmukh.imad.hasura-app.io/submit-name?name='+name1,true);
    request.send(null);
  
};

