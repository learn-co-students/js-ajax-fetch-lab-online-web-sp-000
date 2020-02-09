const baseURL = 'https://api.github.com';
const user = 'ogonzaleznyc';
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  //return '';
  return '199842c73f000be82d48c600fd88023604cdf672';
  //return '';
}

function forkRepo() {
let ownerAndRepo = 'learn-co-curriculum/js-ajax-fetch-lab';
//use fetch to fork it!
//POST /repos/:owner/:repo/forks
  fetch(
    `${baseURL}/repos/${ownerAndRepo}/forks`,
  {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
//use this function to display the results from forking via the API
//from the ReadMe: "write code to display a link to the forked repo url (json.html_url). Append this link to the results div."
  document.getElementById('results').innerHTML =
  `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
//use this function to create an issue based on the values input in index.html
//POST /repos/:owner/:repo/issues
  let ownerAndRepo = 'ogonzaleznyc/js-ajax-fetch-lab';
  let postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  fetch(
    `${baseURL}/repos/${ownerAndRepo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
    .then(json => getIssues(json));
}

function getIssues() {
//once an issue is submitted, fetch all open issues to see the issues you are creating
//GET /repos/:owner/:repo/issues
let ownerAndRepo = 'ogonzaleznyc/js-ajax-fetch-lab';
fetch(
  `${baseURL}/repos/${ownerAndRepo}/issues`,
  {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
  }
}).then(res => res.json())
  .then(json => document.getElementById('issues').innerHTML = json);
}









// function forkRepo() {
//   const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
//   const url = `${baseURL}/repos/${repo}/forks`;
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       Authorization: `token ${getToken()}`
//     }
//   })
//     .then(res => res.json())
//     .then(json => showResults(json));
// }
//
// function showResults(json) {
//   document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
//     json.html_url
//   }</a>`;
// }
//
// function createIssue() {
//   const repo = `${user}/js-ajax-fetch-lab`;
//   const url = `${baseURL}/repos/${repo}/issues`;
//   const postData = {
//     title: document.getElementById('title').value,
//     body: document.getElementById('body').value
//   };
//
//   fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(postData),
//     headers: {
//       Authorization: `token ${getToken()}`
//     }
//   })
//     .then(res => res.json())
//     .then(json => getIssues());
// }
//
// function getIssues() {
//   const repo = `${user}/js-ajax-fetch-lab`;
//   const url = `${baseURL}/repos/${repo}/issues`;
//   fetch(url, {
//     headers: {
//       Authorization: `token ${getToken()}`
//     }
//   })
//     .then(res => res.json())
//     //.then(json => console.log(json));
//     .then(json => document.getElementById('issues').innerHTML = json);
// }
