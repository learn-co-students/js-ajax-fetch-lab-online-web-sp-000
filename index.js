const baseURL = 'https://api.github.com';
const user = 'barbarajohnsonATX';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const fullURL = `${baseURL}/repos/${repo}/forks`;

  fetch(
    fullURL, {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
  .then(res => res.json())
  //.then(json => console.log(json));
  .then(json => showResults(json));

}

//In showResults, write code to display a link to the forked repo url (json.html_url). 
//Append this link to the results div.
function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href="${json.html_url}">Repo</a>`;

}

//Create a new issue for your forked repository with the createIssue function. 
//Use the title and body inputs from the provided form as data for your fetch request. 
// Example:
// {
//   "title": "Found a bug",
//   "body": "I'm having a problem with this.",
//   "assignees": [
//     "octocat"
//   ],
//   "milestone": 1,
//   "labels": [
//     "bug"
//   ]


function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const repoName = 'js-ajax-fetch-lab';
  const fullURL = `${baseURL}/repos/${user}/${repoName}/issues`;

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
    //.then(json => console.log(json));
    .then(json => getIssues());
}

//After the issue is created, fetch and display a list of all issues associated with your repository on the page. 
//Append them to the issues div.
function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repoName = 'js-ajax-fetch-lab';
  const fullURL = `${baseURL}/repos/${user}/${repoName}/issues`;

  fetch(fullURL, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(json => showIssues(json))

}

function showIssues(issues) {
  //use this function to display the results from forking via the API
  const issuesList = `<ul>${issues
    .map(
      issue =>
        '<li><strong>' +
        issue.title+
        '</strong> - ' +
        issue.body+
        '</li>'
    )
    .join('')}</ul>`;
    document.getElementById('issues').innerHTML = issuesList;
}
