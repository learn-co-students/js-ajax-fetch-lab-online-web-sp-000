const baseURL = 'https://api.github.com';
const user = 'patech-patrice';
const token = '';

function getToken() {
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response=> response.json())
  .then(reply=> showResults(reply));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `a href=$(json.html_url)>${
    json.html_url
  }</a>`;
}

function createIssue() {
  const repo = `patech-patrice/js-ajax-fetch-lab`;
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(`https://api.github.com/repos/${repo}/issues`, {
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
  const repo = `patech-patrice/js-ajax-fetch-lab`;
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}
