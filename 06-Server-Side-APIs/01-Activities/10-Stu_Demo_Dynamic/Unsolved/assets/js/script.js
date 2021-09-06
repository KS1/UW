var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML

      for (var i = 0; i < data.length; i++) {
        //Create a list element
        var userName = document.createElement('h3');
        var profile = document.createElement('p');
        
        //Set the text of the list element to the JSON response's .html_url property
        userName.textContent = data[i].login;    
        profile.textContent =  data[i].url;  

        userContainer.append(userName);
        userContainer.append(profile);

      }

    });
}
fetchButton.addEventListener('click', getApi);
