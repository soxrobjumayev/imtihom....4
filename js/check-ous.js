let elCardTemplate = document.querySelector('#RGTS-item').content
let elWrapper = document.querySelector('.card-render')

function renderCards(postsArray, wrapper){
    var rusultRender = document.createDocumentFragment()
    
    postsArray.forEach(item => {
        var postCardItem = elCardTemplate.cloneNode(true)

        postCardItem.querySelector('.card-heading').textContent = item.title;
        postCardItem.querySelector('.card-info').textContent = item.body;
        postCardItem.querySelector(".card-btn").dataset.postId = item._id;
        postCardItem.querySelector(".card-btn").textContent = item._id;
        
        rusultRender.appendChild(postCardItem);
    });

    wrapper.innerHTML = null
    wrapper.appendChild(rusultRender)
}


if (!localStorage.getItem('token')) {
    window.location.href = "/login.html"
}else {
    async function getProfile() {
        const token = localStorage.getItem('token')
        const result = await fetchAPI({
            url: `${API}/api/posts`,
            headers: {
                "Authorization": token
            }
        })
        return result
      
    }
    
    getProfile().then(result =>  {
    renderCards(result.posts , elWrapper);

    })
    
}




