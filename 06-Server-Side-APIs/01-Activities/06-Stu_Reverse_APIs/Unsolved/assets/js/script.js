var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call

$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// https://www.javascripttutorial.net/javascript-fetch-api/
// The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.
// The Fetch API allows you to asynchronously request for a resource.
// Use the fetch() method to return a promise that resolves into a Response object. To get the actual data, you call one of the methods of the Response object e.g., text() or json(). These methods resolve into the actual data.
// Use the status and statusText properties of the Response object to get the status and status text of the response.
// use the catch() method or try...catch statement to handle a failure request.
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
