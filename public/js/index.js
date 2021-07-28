let postButton = document.getElementById("post-button");
let postTitleInputEl = document.getElementById("post-title-input");
let postCommentInputEl = document.getElementById("post-comment-input");
let postTitle = postTitleInputEl.value;
let postComment = postCommentInputEl.value;

postButton.onClick = async ()=> {
    fetch('/api/post'{
        method: 'POST',
        body: JSON.stringify({title:postTitle,comment:postComment}),
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => response.json())
        .then(data => console.log(data));
}