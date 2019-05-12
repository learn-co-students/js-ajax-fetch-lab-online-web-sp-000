

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `https://api.github.com/repos/${repo}/forks`
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response => response.json())
  .then(json => {showResults(json)
  })
}

function showResults(json) {
 document.getElementById('results').innerHTML = `<a href=${json.html_url}> Fork Results</a>`;

}

function createIssue() {
    const repo = `Jcg408/js-ajax-fetch-lab`;
    const url = `https://api.github.com/repos/${repo}/issues`;
    const postData = {
      title: document.getElementById('title').value,
      body: document.getElementById('body').value
    };
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
      .then(response => response.json())
      .then(json => {getIssues()
      })
  }
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  function getIssues() {
    const repo = `Jcg408/js-ajax-fetch-lab`;
    const url = `https://api.github.com/repos/${repo}/issues`;
    fetch(url, {
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
      .then(response => response.json())
      .then(json => {console.log(json)
      });
  }
  //once an issue is submitted, fetch all open issues to see the issues you are creating

