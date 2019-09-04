const baseURL = "https://api.github.com";
const user = "sarahpaz";

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = "";
  return token;
}

function forkRepo() {
  const repo = "learn-co-curriculum/js-ajax-fetch-lab";
  fetch(`${baseURL}/repos/${repo}/forks`, {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById(
    "results"
  ).innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };
  fetch(`${baseURL}/repos/${repo}/issues`, {
    method: "POST",
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
    .then(res => res.json())
    .then(json => console.log(json));
}