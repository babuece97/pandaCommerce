
 // for New page
 const  primee=document.getElementById('prime');
 primee.addEventListener('click',function(){
     window.location.href="buy.html";

 });

 // for review section
document.getElementById('comment').addEventListener('click', function(){
    const commentBox=document.getElementById('feedback');
    const userComment=commentBox.value;
 
    const newComment=document.createElement('p');
    newComment.innerText=userComment;

    const commentContainer=document.getElementById('comment-container');
    commentContainer.appendChild(newComment);
})