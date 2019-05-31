function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '775c6bb3ada09cac31507386c53002f956c9790a';
  return token;

  return '';
}


function getRepos() {
  var token = getToken();

  fetch('https://api.github.com/jonmackeyparty/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json))
}

function postComment() {
  const token = getToken();
  const postData = {
    body: 'Incredible work here.'
  };

  fetch(
    'https://api.github.com/repos/jonmackeyparty/a-tag-with-href-attributes-lab-online-web-sp-000/commits/c97b9712703d4cb958555816fb2043ecc5254cdb/comments', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => console.log(res));
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  var token = getToken();

  fetch(`https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
      }
    })
    .then(res => res.json())
    .then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const results = document.getElementById('results');
  const htmlResults = `<a href="${json.html_url}">${
    json.html_url
  }</a>`;

  results.innerHTML += htmlResults;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const token = getToken();
  const repo = 'https://api.github.com/repos/jonmackeyparty/js-ajax-fetch-lab/issues';
  const postData = {
    title: document.querySelector('input#title').value,
    body: document.querySelector('input#body').value
  }

  fetch(repo, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => json())
    .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  var token = getToken();
  const issues = document.getElementById('issues')
  const repo = 'https://api.github.com/repos/jonmackeyparty/js-ajax-fetch-lab/issues';
  fetch(repo, {
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(res => res.json())
    .then(json => console.log(json))

  //for(i = 0; i < info.length; i++) {
    //return issues.innerHTML += `<li> ${info.title}: ${info.body}`
  //};

}
