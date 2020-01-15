const baseURL = 'https://api.github.com';
const user = 'ChaimSh';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass

  return '851a93c0ae47e161d479207aa413822165075f58';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const url  = `${baseURL}/repos/${repo}/forks`;
  const postData = {
  body: 'Great stuff'
};
  fetch(url, {
    method: 'POST',
    body:JSON.stringify(postData)
    headers: {
      Authorization: `token ${getToken()}`
    }

  })
  .then(res => res.json())
  .then(json => console.log(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html

}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
