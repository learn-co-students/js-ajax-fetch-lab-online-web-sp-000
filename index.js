const baseURL = 'https://api.github.com';
const user = 'atribecalledarty';
const token = 'ab29c6790c4aba37364cc85c719f3d6655001077';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`${baseURL}/repos/${repo}/forks`, {
    method:'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const results = json.html_url;
  document.getElementById('results').innerHTML = results;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html'
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  fetch(`${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      authorization: `token ${getToken()}`
    }
  })
  getIssues();
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`, {
    header: {
      authorization: `token ${getToken()}`
    }
  })
  .then(result => result.json())
  .then(function(json){
    const issues = `<ul>
      ${json.map(issue => '<li>' + issue.title + '</li>').join('')}
    </ul>`
    document.getElementById('issues').innerHTML = issues;
  })
}
