fetch(
  //  Explain each parameter in comments below.
  //  https://docs.github.com/en/rest/reference/issues 
  //  per_page: Results per page (max 100) Default: 30
  //  state: Indicates the state of the issues to return. Can be either open, closed, or all. Default: open
  //  sort: What to sort results by. Can be either created, updated, comments. Default: created
  //  direction: One of asc (ascending) or desc (descending). Default: desc
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
