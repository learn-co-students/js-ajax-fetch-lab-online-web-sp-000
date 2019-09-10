const baseURL = 'https://api.github.com';
const user = 'racheladaw';
const repo = 'js-ajax-fetch-lab'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(
    `${baseURL}/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  console.log(json)
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">Link To Repo</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  console.log(document.getElementById('title').value)
  let postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(
    `https://api.github.com/repos/racheladaw/js-ajax-fetch-lab/issues`,
    {
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
  fetch(
    `${baseURL}/repos/${user}/${repo}/issues`,
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(json => showIssues(json)
  );
}

function showIssues(json) {
  const issuesList = `<ul>${json
  .map(i => '<li>' + i.title + '</li>')
  .join('')}</ul>`;
  document.getElementById('issues').innerHTML = issuesList;
}
