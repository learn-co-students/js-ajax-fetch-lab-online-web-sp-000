
const githubURL = `https://api.github.com`;
const userName = `buraizu`;
const repoName = `js-ajax-fetch-lab`;

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ``;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const fullURL = `${githubURL}/repos/${repo}/forks`;
  fetch(fullURL, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(jsonResponse => showResults(jsonResponse));
}

// POST /repos/:owner/:repo/forks

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">Don't fear the repo</a>`;
}

function createIssue() {
  const repo = `${userName}/${repoName}`;
  const fullURL = `${githubURL}/repos/${userName}/${repoName}/issues`
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const issueData = {
    title: issueTitle,
    body: issueBody
  }
  fetch(fullURL, {
    method: 'POST',

    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json())
    .then(jsonResponse => getIssues());
}

// POST /repos/:owner/:repo/issues

function getIssues() {
  const fullURL = `${githubURL}/repos/${userName}/${repoName}/issues`
  const issuesDiv = document.getElementById('issues');
  fetch(fullURL, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json())
    .then(jsonResponse => showIssues(jsonResponse));
}

function showIssues(json) {
  const issues = json.map(issue => {
    `<p>${issue.title}</p><br />
    <p>${issue.html_url}</p>`
  });
  document.getElementById('issues').innerHTML = issues;
}
