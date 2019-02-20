// REMEMBER TO COMMIT WHEN ADDING SOMETHING THAT WORKS!

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
}

function forkRepo() {
  const repo = "learn-co-curriculum/js-ajax-fetch-lab";
  // POST /repos/:owner/:repo/forks
  fetch(`https://api.github.com/repos/${repo}/forks`, { 
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
  const title = document.getElementById('title').innerHTML
  const text = document.getElementById('body').innerHTML
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
