const mainContent = document.getElementById("main-content")
const contentForm = document.getElementById("content-form")
const postTitle = document.getElementById("post-title")
const postBody = document.getElementById("post-area")

let postArr = []
function renderPost(){
    mainContent.innerHTML = ""
    for(let i=0; i<postArr.length; i++){
        mainContent.innerHTML += `<h3>${postArr[i].title}</h3>
        <p>${postArr[i].body}</p>`
    }
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data=>{postArr =data.slice(0, 5)
        renderPost()
    }
)

contentForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newPost = {
        title: postTitle.value,
        body: postBody.value
    }    

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "POST", headers:{
        "Content-type": "application/json"
    },
    body: JSON.stringify(newPost)
    })
    .then(response=>response.json())
    .then(post=>{
        postArr.unshift(post)
        renderPost()
        contentForm.reset()
    })

})

