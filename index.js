const token = '079dd0d256d2e9987731023d1bb239f3c299788f'
const githubURL = 'https://api.github.com'
const userName = 'tiffanynuugen'
const repoName = 'js-ajax-fetch-lab'
const repo = 'learn-co-curriculum/js-ajax-fetch-lab'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

// POST /repos/:owner/:repo/forks

function forkRepo() {
  const fullURL = `${githubURL}/repos/${repo}/forks`

  fetch(fullURL,
  {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
  //use fetch to fork it!
}

function showResults(json) {
  const results = document.querySelector("#results").innerHTML = `<a href="${json.html_url}">repo</a>`
  //use this function to display the results from forking via the API
}

function createIssue() {
  const title = document.querySelector("#title")
  const text = document.querySelector("#body")
  const data = {
    title: title.value,
    body: text.value
  }
  // POST /repos/:owner/:repo/issues
  const fullURL = `${githubURL}/repos/${repoName}/issues`

  fetch(fullURL,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: `token ${token}`
      }
    })
  .then(res => res.json())
  .then(json => console.log(json))
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  const issues = document.querySelector("#issues").innerHTML += `<p>${createIssue()}</p>`
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
