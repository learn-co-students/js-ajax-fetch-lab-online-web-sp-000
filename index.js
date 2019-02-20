// REMEMBER TO COMMIT WHEN ADDING SOMETHING THAT WORKS!

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
const learnOwner = "learn-co-curriculum"
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
  const url = json.html_url
  const link = `<a href="${url}">Your Repo</a>`
  document.getElementById('results').innerHTML = link
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById('title').value
  const text = document.getElementById('body').value
  fetch(`https://api.github.com/repos/tuzmusic/${repo}/issues`, {
    method: "POST",
    title: title,
    body: text,
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response=>
      getIssues()
      )
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`https://api.github.com/repos/tuzmusic/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  debugger
}
