const baseURL = 'https://api.github.com';
const user = '';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`${baseURL}/repos/${repo}/forks`,   {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
    ).then(resp => resp.json())
    .then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  aTag = document.createElement('a')
  aTag.setAttribute('href', json.html_url)
  aTag.innerText = json.html_url
  document.querySelector('#results').appendChild(aTag)
}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const titleInput =  document.querySelector('#title')
  const bodyInput = document.querySelector('#body')
  const postData = {
    title: titleInput.value,
    body: bodyInput.value
  };
  titleInput.value = ''
  bodyInput.value = ''

  fetch(
    `${baseURL}/repos/${repo}/issues`, 
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }  
    }
  ).then(response => response.json())
  .then(json => getIssues())
}

function getIssues() {
  const issuesList = document.createElement('ul')
  const repo = `${user}/js-ajax-fetch-lab`;
  fetch(`${baseURL}/repos/${repo}/issues`,{headers: {Authorization: `token ${getToken()}`}})
  .then(resp => resp.json())
  .then(json => {
    for(issue of json){
      const issueLi = document.createElement('li')
      issueLi.innerText = issue.title
      issuesList.appendChild(issueLi)
    }
  })

  document.querySelector('#issues').appendChild(issuesList)
}

// function displayBranches(){
//   const branches = JSON.parse(this.responseText);
//   console.log(branches)
//   const branchesList = `<ul>${branches
//     .map(
//       branch =>
//         '<li><strong>' +
//         branch.name +
//         '</strong>' +
//         '</li>'
//     )
//     .join('')}</ul>`;
//   document.getElementById('details').innerHTML = branchesList;

// }