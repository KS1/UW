
// https://www.freetogame.com/api-doc
// https://rapidapi.com/digiwalls/api/free-to-play-games-database
// Rate Limits: Please avoid doing more than 4 requests per second.
// Responses
// 200: Success
// 404: Object not found: Game or endpoint not found
// 500: Something wrong on our end (unexpected server errors)

// returns 1 record
// {15 items
//     "id":452
//     "title":"Call Of Duty: Warzone"
//     "thumbnail":"https://www.freetogame.com/g/452/thumbnail.jpg"
//     "status":"Live"
//     "short_description":"A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare."
//     "description":"Call of Duty: Warzone is both a standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare. Warzone features two modes — the general 150-player battle royle, and “Plunder”. The latter mode is described as a “race to deposit the most Cash”. In both modes players can both earn and loot cash to be used when purchasing in-match equipment, field upgrades, and more. Both cash and XP are earned in a variety of ways, including completing contracts. An interesting feature of the game is one that allows players who have been killed in a match to rejoin it by winning a 1v1 match against other felled players in the Gulag. Of course, being a battle royale, the game does offer a battle pass. The pass offers players new weapons, playable characters, Call of Duty points, blueprints, and more. Players can also earn plenty of new items by completing objectives offered with the pass."
//     "game_url":"https://www.freetogame.com/open/call-of-duty-warzone"
//     "genre":"Shooter"
//     "platform":"Windows"
//     "publisher":"Activision"
//     "developer":"Infinity Ward"
//     "release_date":"2020-03-10"
//     "freetogame_profile_url":"https://www.freetogame.com/call-of-duty-warzone"
//     "minimum_system_requirements":{5 items
//     "os":"Windows 7 64-Bit (SP1) or Windows 10 64-Bit"
//     "processor":"Intel Core i3-4340 or AMD FX-6300"
//     "memory":"8GB RAM"
//     "graphics":"NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950"
//     "storage":"175GB HD space"
//     }
//     "screenshots":[4 items
//     0:{...}2 items
//     1:{...}2 items
//     2:{...}2 items
//     3:{...}2 items
//     ]
//     }


// Games by platform & category & sorted
// [39 items
//     0:{11 items
//     "id":472
//     "title":"Jade Goddess"
//     "thumbnail":"https://www.freetogame.com/g/472/thumbnail.jpg"
//     "short_description":"Jade Goddess is a free-to-play, browser based MMO inspired by Eastern mythology."
//     "game_url":"https://www.freetogame.com/open/jade-goddess"
//     "genre":"MMORPG"
//     "platform":"Web Browser"
//     "publisher":"101XP"
//     "developer":"101XP"
//     "release_date":"2020-06-15"
//     "freetogame_profile_url":"https://www.freetogame.com/jade-goddess"
//     }

var getGamesList = function() {
    // var currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    var gamesListApi = `https://www.freetogame.com/api/games`;

    console.log(gamesListApi);

    // fetch("https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc", {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
	
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
		"x-rapidapi-key": "0f14760277msh4633a73019285dap13a775jsnde37e09289b4"
	}
    })
    .then(response => {
        if (response.ok) {
            response.json().then(function(data) {
                // var lon = data.coord['lon'];
                // var lat = data.coord['lat'];
                
                console.log(data);
               
            });
        } else {
            alert(`Error: ${response.statusText}`)
        }
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });

    
    
}

var getGamesFilter = function() {
 
    // var gamesListApi = `https://www.freetogame.com/api/games`; //does not work

    // works - returns 365 records
    // var gamesListApi = `https://free-to-play-games-database.p.rapidapi.com/api/games`;

    // works
    // var gamesListApi = `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc`;

    // Games by platform: Insert platform, eg: pc, browser or all
    // works -- pc 297 records, browser 77 records, all 365 records
    // var gamesListApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=all`;

    // Games by category or tag: Insert game category or tag, 
    // eg: mmorpg, shooter, pvp, mmofps and
    // mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, 
    // survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, 
    // top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, 
    // battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, 
    // action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, 
    // horror, mmorts

    // works - shooter 97 records with category. [tag does not work - returns 365 records]
    // mmorpg 164 records
    // var gamesListApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg`;

    // Sort games by release date, alphabetical or relevance
    // Insert sort by, eg: release-date, popularity, alphabetical or relevance
    // works - alphabetical 365 records
    // var gamesListApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical`;

    // Games by platform & category & sorted   
    // works - returned 39 records 
    var gamesListApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date`;

    // Filter Games by multiple tags for personalized results
    // Insert tag, eg: mmorpg, shooter, pvp, mmofps and more. 
    // Optionally you can also use the "platform" and "sort" parameters
    // works - returned 297 records
    // var gamesListApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?tag=3d.mmorpg.fantasy.pvp&platform=pc`;

    // Return details from a specific game: Insert game id
    // works - returns 1 record. [we need to change "games" to "game" in url]  
    // var gamesListApi = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=452`;

    console.log(gamesListApi);

    // works
    // fetch("https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc", {
    
    fetch(gamesListApi, {	
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
		"x-rapidapi-key": "0f14760277msh4633a73019285dap13a775jsnde37e09289b4"
	}
    })
    .then(response => {
        if (response.ok) {
            response.json().then(function(data) {
             
                
                
                console.log("Response is OK");
                console.log(data);
                // console.log(typeof(data));

                // query returns 2 or more records  
                console.log(data.length);

                // Games by platform & category & sorted
                for(i = 0; i < data.length; i++)
                {
                    console.log("Id: " + data[i].id);
                    console.log("title: " + data[i].title);
                    console.log(data[i].thumbnail);                   
                    console.log(data[i].short_description);                    
                    console.log(data[i].game_url);
                    console.log(data[i].genre);
                    console.log(data[i].platform);
                    console.log(data[i].publisher);
                    console.log(data[i].developer);
                    console.log(data[i].release_date);
                    console.log(data[i].freetogame_profile_url);

                    // console.log(data[i].minimum_system_requirements);
                    // console.log(data[i].minimum_system_requirements.os);
                    // console.log(data[i].minimum_system_requirements.processor);
                    // console.log(data[i].minimum_system_requirements.memory);
                    // console.log(data[i].minimum_system_requirements.graphics);
                    // console.log(data[i].minimum_system_requirements.storage);

                    // console.log(data[i].screenshots);

                    // console.log(data[i].screenshots[0]);
                    // console.log(data[i].screenshots[0].id);
                    // console.log(data[i].screenshots[0].image);

                    // console.log(data[i].screenshots[1]);
                    // console.log(data[i].screenshots[1].id);
                    // console.log(data[i].screenshots[1].image);

                    // console.log(data[i].screenshots[2]);
                    // console.log(data[i].screenshots[2].id);
                    // console.log(data[i].screenshots[2].image);

                    // console.log(data[i].screenshots[3]);
                    // console.log(data[i].screenshots[3].id);
                    // console.log(data[i].screenshots[3].image);
                }
                

                // query returns 1 record 
                // console.log(data.id);
                // console.log(data.title);
                // console.log(data.thumbnail);
                // console.log(data.short_description);
                // console.log(data.description);
                // console.log(data.game_url);
                // console.log(data.genre);
                // console.log(data.platform);
                // console.log(data.publisher);
                // console.log(data.developer);
                // console.log(data.release_date);
                // console.log(data.freetogame_profile_url);

                // console.log(data.minimum_system_requirements);
                // console.log(data.minimum_system_requirements.os);
                // console.log(data.minimum_system_requirements.processor);
                // console.log(data.minimum_system_requirements.memory);
                // console.log(data.minimum_system_requirements.graphics);
                // console.log(data.minimum_system_requirements.storage);

                // console.log(data.screenshots);

                // console.log(data.screenshots[0]);
                // console.log(data.screenshots[0].id);
                // console.log(data.screenshots[0].image);

                // console.log(data.screenshots[1]);
                // console.log(data.screenshots[1].id);
                // console.log(data.screenshots[1].image);

                // console.log(data.screenshots[2]);
                // console.log(data.screenshots[2].id);
                // console.log(data.screenshots[2].image);

                // console.log(data.screenshots[3]);
                // console.log(data.screenshots[3].id);
                // console.log(data.screenshots[3].image);
               
            });
        } else {
            alert(`Error: ${response.statusText}`)
        }
        console.log(response);
        
    })
    .catch(err => {
        console.error(err);
    });
}

btnGetGamesList.addEventListener('click', getGamesList);

btnGetGamesFilter.addEventListener('click', getGamesFilter);
