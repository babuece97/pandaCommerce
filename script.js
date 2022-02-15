
 // for New page
 const  primee=document.getElementById('prime');
 primee.addEventListener('click',function(){
     window.location.href="buy.html";

 });

 // for review section
    //1.add event handler
document.getElementById('comment').addEventListener('click', function(){
    const commentBox=document.getElementById('feedback');
     //2. get user comment
    //const userComment=commentBox.value;

        // 3.Creat new comment paragraph
 
    const newComment=document.createElement('p');
    newComment.innerText=commentBox.value;

        //4. append the comment

    const commentContainer=document.getElementById('comment-container');
    commentContainer.appendChild(newComment);

        //5.empty the comment box
        commentBox.value='';
})