const baseURL = 'https://api.github.com';
const user = 'blainelawson';
const token = ''

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`${baseURL}/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(res => 
    showResults(res)
    )
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">${json.html_url}</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `${user}/js-ajax-fetch-lab`;
  
  const issueText = document.querySelector('input#body').value;
  const issueTitle = document.querySelector('input#title').value;

  const data = {title: issueTitle, body: issueText}

  fetch(`${baseURL}/repos/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => getIssues())

}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(jsonArray) {
  jsonArray.forEach(function(json) {
    document.querySelector('div#issues').append(json.title)
    document.querySelector('div#issues').append(json.body)
  })
}
