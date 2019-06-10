const baseURL = 'https://api.github.com';
const user = 'Raf-Batista';

const token = 'a5f7d85ecf5d9f0c530cf34abed3474794247435 ';



function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  //use fetch to fork it!
  fetch(`${baseURL}/repos/learn-co-curriculum/js-ajax-fetch-lab/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

    fetch(`${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`, {
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
  //once an issue is submitted, fetch all open issues to see the issues you are creating
   fetch(`${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`, {
     headers: {
       Authorization: `token ${getToken()}`
     }
   })
     .then(res => res.json())
     .then(json => console.log(json));
}
