document.addEventListener("DOMContentLoaded", () => {

   const form = document.querySelector("#github-form")
   form.addEventListener('submit', (e) =>{
    e.preventDefault()
  const input = document.querySelector("input#search")
    fetch(`https://api.github.com/search/users?q=${input.value}`, {
    headers: {
        "Accept": "application/vnd.github.v3+json"
    }
}
)
.then((response) => response.json())
.then((data) => {  
    console.log(data)

    const userList = document.querySelector('#user-list')
   
    const li = document.createElement('li')
    const image = document.createElement('img')

    li.innerText = data.items[0].login
    image.src = data.items[0].avatar_url
    
    
    userList.appendChild(li) 
    userList.appendChild(image)
    repos(li)
   form.reset()
   
})
    
})

//  function repos (li){
//     li.addEventListener('click', () => {
//     fetch("https://api.github.com/users/octocat/repos")
//     .then((response) => response.json())
//     .then((data) => { for (const item of data){
//        const reposList = document.querySelector('#repos-list')
//        const newTag = document.createElement('li')
//        newTag.innerText = item.archive_url
//        reposList.appendChild(newTag)  
//        console.log(item.archive_url)
//  }})
// })}})



function repos (li){
    li.addEventListener('click', () => {
    fetch("https://api.github.com/users/octocat/repos")
    .then((response) => response.json())
    .then((data) => { 
        console.log(data)
        data.forEach(item => {
       const reposList = document.querySelector('#repos-list')
       const newTag = document.createElement('li')
       newTag.innerText = item.archive_url
       reposList.appendChild(newTag)  
       console.log(item.archive_url)
 })})
})}})