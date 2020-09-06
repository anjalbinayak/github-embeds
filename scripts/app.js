const PROFILE_API = "https://api.github.com/users/";


function createGithubProfileCard(rootElmSelector){
    let profileCard = document.querySelector(rootElmSelector);
    if(!profileCard) return;
    let username = profileCard.getAttribute('data-username') || "anjalbinayak"; 

    let api_url = PROFILE_API + username;
    fetch(api_url).then(data=>data.json()).then((data)=>{
        let imageElm = profileCard.querySelector('.bin-github-profile-image');
        let nameElm = profileCard.querySelector('.bin-github-name');
        let bioElm = profileCard.querySelector('.bin-github-bio');
        let followerElm = profileCard.querySelector('.bin-github-follower-count');
        let repoElm = profileCard.querySelector('.bin-github-repo-count');
        let followingElm = profileCard.querySelector('.bin-github-following-count');

        let twitterElm = profileCard.querySelector('.bin-github-twitter-link');
        let blogElm = profileCard.querySelector('.bin-github-blog-link');

        
        let avatar = data.avatar_url;
        let profile_url = data.html_url;
        let bio = data.bio;
        let followers = data.followers;
        let following = data.following;
        let name = data.name;
        let repos = data.public_repos;
        let blog = data.blog;
        let twitter = "https://twitter.com/"+ data.twitter_username;

        if(!blog) blogElm.style.display="none";
        if(!data.twitter_username) twitterElm.style.display="none";
        addLink(imageElm, profile_url);
        addLink(twitterElm , twitter);
        addLink(blogElm, blog);

        imageElm.src=avatar;
        nameElm.innerHTML = name;
        followerElm.innerHTML += followers;
        followingElm.innerHTML += following;
        repoElm.innerHTML += repos;
        bioElm.innerHTML = bio;
    });






    console.log(api_url);
    console.log(username);
    console.log(profileCard);
}

function addLink(elm, link){
    elm.addEventListener('click', function(){
        console.log(link);
        window.open(link)
    });
}


createGithubProfileCard('.bin-github-profile-card');


// bin-github-profile-image
// bin-github-username
// bin-github-profile-metadata
// bin-github-follower-count
// bin-github-repo-count
// bin-github-following-count