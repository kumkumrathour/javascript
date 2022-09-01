const posts =[
    { title: 'post one', body:'this is post one'},
    { title: 'post two', body:'this is post two' }
];
function getPosts(){
    setTimeout(()=>{
      let output = '';
      posts.forEach((post,index) => {
        output +=`<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    },4.000)
}
 function createPost(post){
    setTimeout(() => {
        posts.push(post);
    },2000);
}
getPosts();
createPost({title: 'post three', body: 'this is post three'});