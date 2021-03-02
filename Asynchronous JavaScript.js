var post = new XMLHttpRequest();

post.addEventListener("readystatechange", () => {
  if (post.readyState === 4 && post.status === 200) {
    console.log(post, post.responseText);
  } else if (post.readyState === 4) {
    console.log("could not fetch date");
  }
  //   console.log(post);
});

post.open("GET", "https://jsonplaceholder.typicode.com/todos");
post.send();
