let postButton = document.getElementById("post-button");
let postTitleInputEl = document.getElementById("post-title-input");
let postBodyInputEl = document.getElementById("post-body-input");
let postTitle = postTitleInputEl.value;
let postBody = postBodyInputEl.value;

postButton.onClick = async ()=> {
    fetch('/api/post'{
        method: 'POST',
        body: JSON.stringify({title:postTitle,body:postBody}),
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => response.json())
        .then(data => console.log(data));
}