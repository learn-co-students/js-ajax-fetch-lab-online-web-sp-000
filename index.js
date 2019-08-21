const baseURL = 'https://api.github.com';
const user = 'mathycoder';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch('https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks',
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(json => showResults(json))

}

function showResults(json) {
  //use this function to display the results from forking via the API
  //const link = json.html_url
  const link = `<a href="${json.html_url}">Link to Results</a>`
  document.querySelector('#results').innerHTML = link
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  //const title = document.querySelector('#title').value
  //const body = document.querySelector('#body').value

  const postData = {
    title: document.querySelector('#title').value,
    body: document.querySelector('#body').value
  };

  fetch(`${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(json => getIssues())
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`,
    {
      headers: {
        Authorization: `token ${getToken()}`,
      }
    }
  ).then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  const issueList = `<ul>${json.map(function(issue) {
    return '<li>' + issue.title + '--' + issue.body + '</li>'
  })}</ul>`
  document.querySelector('#issues').innerHTML = issueList
}
