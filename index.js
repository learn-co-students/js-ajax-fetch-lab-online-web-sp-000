// REMEMBER TO COMMIT WHEN ADDING SOMETHING THAT WORKS!

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}
const learnOwner = "learn-co-curriculum";
const repo = "js-ajax-fetch-lab";

function forkRepo() {
  // POST /repos/:owner/:repo/forks
  fetch(`https://api.github.com/repos/${learnOwner}/${repo}/forks`, {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const url = json.html_url;
  const link = `<a href="${url}">Your Repo</a>`;
  document.getElementById("results").innerHTML = link;
}

function createIssue() {
  // POST /repos/:owner/:repo/issues
  const title = document.getElementById("title").value;
  const text = document.getElementById("body").value;
  const body = JSON.stringify({ title: title, body: text })
  fetch(`https://api.github.com/repos/tuzmusic/${repo}/issues`, {
    method: "POST",
    body: body,
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response => getIssues())
    .catch(error => console.log(error));
}

function getIssues() {
  fetch(`https://api.github.com/repos/tuzmusic/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  let str = '<ul>'
  json.forEach(issue => {
    str += `<li><a href="${issue.html_url}">${issue.title}</a></li>`
  });
  document.getElementById('issues').innerHTML = str + '</ul>'
}
