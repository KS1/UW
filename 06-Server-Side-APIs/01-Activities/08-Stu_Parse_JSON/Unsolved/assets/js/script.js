// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
// var requestUrl = 'https://api.github.com/repos/{owner}/{repo}/issues';
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';


fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    // TODO: Loop through the response
    // TODO: Console log each issue's URL and each user's login

    //looping over the fetch response and inserting the URL of your repos into a list
    for (var i = 0; i < data.length; i++) {
      //Create a list element
      var userName = document.createElement('h3');
      var issueTitle = document.createElement('p');

      //Set the text of the list element to the JSON response's .html_url property
      userName.textContent = data[i].user.login;
      issueTitle.textContent = data[i].title;

      //Append the li element to the id associated with the ul element.
      repoList.appendChild(listItem);
    }

  });

  