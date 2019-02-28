function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

const user = "";

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(showResults(json));
}

function showResults(json) {
  let link = `<a href="${json.html.url}>`;
  $('#results').append(link);
}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const postData = {
    title: $('#title').val(),
    body: $('#body').val()
  }
  fetch(`https://api.github.com/repos/${repo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(getIssues(json));
}

function getIssues() {
  const repo = `${user}/js-ajax-fetch-lab`;
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(console.log(json));
}

