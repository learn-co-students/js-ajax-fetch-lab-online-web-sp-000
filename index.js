const baseURL = 'https://api.github.com';
const user = 'btate712'

function getToken() {
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`${baseURL}/repos/${repo}/forks`,
  {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function showResults(json) {
  $("div#results").append(`<p><a href="${json.html_url}">Forked Repo URL</a></p>`);
}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function getIssues() {
  const repo = `${user}/js-ajax-fetch-lab`;
  fetch(`${baseURL}/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp => resp.json()).then(json => console.log(json));
}

function displayIssues(json) {
  let issueList = '<ul>';
  for (let i = 0; i < json.length; i++) {
    issueList += '<li>' + json[i].title + '</li> ';
  }
  issueList += '</ul>';
  $("div#issues").append(issueList);
}
