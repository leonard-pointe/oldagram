const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

const feed = document.getElementById("feed")

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    
    feed.innerHTML += `
            <section class="post">
            <section class="account-info">
                <img src="${post.avatar}" class="user-img">
                <div class="name-location">
                    <p class="name bold">${post.name}</p>
                    <p class="location">${post.location}</p>
                </div>
            </section>
            <section class="post-content">
                <img src="${post.post}" class="post-img">
            </section>
            <section class="post-info">
                <div class="interactions">
                    <img src="images/icon-heart.png" class="btn btn-heart" id="heart-${i}">
                    <img src="images/icon-comment.png" class="btn" id="comment-${i}">
                    <img src="images/icon-dm.png" class="btn">
                </div>
                <div>
                    <p class="bold" id="likes-${i}">${post.likes} likes</p>
                    <p><span class="bold" id="username">${post.username}</span> ${post.comment}</p>
                </div>
            </section>
        </section>
    `;
};

// like //

for (let i = 0; i < posts.length; i++) {
    const heartBtn = document.getElementById(`heart-${i}`)
    const likesCount = document.getElementById(`likes-${i}`)
    
    heartBtn.addEventListener("click", function() {
        if (posts[i].liked === false) {
            posts[i].likes += 1;
            posts[i].liked = true;
            heartBtn.classList.add("liked");
        } else {
            posts[i].likes -= 1;
            posts[i].liked = false;
            heartBtn.classList.remove("liked");
        }
        
    likesCount.textContent = `${posts[i].likes} likes`;
    })
}

// comment //
for (let i = 0; i < posts.length; i++) {
    const newComment = document.getElementById(`comment-${i}`)
    
    newComment.addEventListener("click", function() {
        
    })
}