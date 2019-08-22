const baseURL = 'https://api.github.com';
const user = 'mackenzie-km';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${getToken()}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const uri = baseURL + '/repos/' + repo + '/forks'
  fetch(uri, {
    method: 'POST',
    headers: {
       Authorization: `token ${getToken()}`
     }
  }).then(res => res.json())
  .then(res => showResults(res));
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
  console.log(json)
  $("#results").append('<a href="' + json.html_url + '">hello, fork</a>')
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `${user}/js-ajax-fetch-lab`;
  const uri = baseURL + '/repos/' + repo + '/issues'
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value};

  fetch(uri, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
        }
      }
  ).then(res => res.json())
  .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'mackenzie-km/js-ajax-fetch-lab';
  const uri = baseURL + '/repos/' + repo + '/issues'
  fetch(uri, {
      headers: {
        Authorization: `token ${getToken()}`
        }
      }
    ).then(res => res.json())
    .then(res =>
      res.map(r => $("#issues").append(r.title + "<br>"))
  )
}
