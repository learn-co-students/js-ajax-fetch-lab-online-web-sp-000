const baseURL = 'https://api.github.com';
const user = 'mmarziano';


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '';
  return '';
}




function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(
    `${baseURL}/repos/${repo}/forks`,
    {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }).then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  let url = "<p><a href=" + `${json.html_url}` + ">" + `${json.name}` + "</a></p>";
  $('#results').append(url);
 
}

function createIssue() {
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#body').value;
  const body = JSON.stringify({ title: title, body: content });
  //use this function to create an issue based on the values input in index.html
  const repo = `${user}/js-ajax-fetch-lab`;

  fetch(`${baseURL}/repos/${repo}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: body
  }).then(res => res.json()).then(getIssues())
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${user}/js-ajax-fetch-lab`;
  fetch(`${baseURL}/repos/${repo}/issues`, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(res => showIssues(res))
}

function showIssues(res) {
  for(let i = 0; i < res.length; i++) {
    let title = res[i].title;
    let body = res[i].body;
    $('#issues').empty();
    $('#issues').append("<p>" + `${title}`+ ": " + `${body}` + "</p>");
  }
}