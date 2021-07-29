let postButton = document.getElementById("post-button");

if(postButton) {
  postButton.addEventListener('click',async()=> {
    let postTitleInputEl = document.getElementById("post-title-input");
    let postBodyInputEl = document.getElementById("post-body-input");
    let postTitle = postTitleInputEl.value;
    let postBody = postBodyInputEl.value;
    console.log('is this click workin!!!',{title:postTitle,body:postBody})
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({title:postTitle,body:postBody}),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('response',response);
      // fetch('/api/post',{
      //     method: 'POST',
      //     body: JSON.stringify({title:postTitle,body:postBody}),
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   })
      //   .then(response => response.json())
      //   .then(data => console.log(data));
  });
}