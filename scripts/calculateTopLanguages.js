

function getRepos(username){
    let totalPoints = 0;
    let langaugeObj = {};
    const REPO_URL = `https://api.github.com/users/${username}/repos?per_page=10`;
    fetch(REPO_URL).then(data=>data.json()).then((data) => {
        data.forEach(function(repo){
            if(repo.fork) return;
            
            fetch(repo.languages_url).then(data=>data.json()).then((languages)=>{
                console.log(languages);
                Object.keys(languages).forEach((key)=>{
                    console.log(key);
                    console.log(languages.key);
                    if(langaugeObj.key === undefined){
                        langaugeObj.key = languages.key;
                        
                    }else{
                        langaugeObj.key += languages.key;
                    }
                });
                
            });
        });
    });

}

// getRepos("anjalbinayak");




