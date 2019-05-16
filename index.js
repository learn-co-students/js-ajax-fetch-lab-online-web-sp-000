function getToken() {
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`,
    {
      method: "POST",
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
      .then(res => res.json())
      .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById("results").innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  const repo = `cookiemccormick/js-ajax-fetch-lab`;
  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };
  fetch(`https://api.github.com/repos/${repo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(json => getIssues(json));
}

function getIssues(json) {
  const repo = `cookiemccormick/js-ajax-fetch-lab`;
  fetch(`https://api.github.com/repos/${repo}/issues?state=open`,
    {
      method: 'GET',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(issues) {
  let issuesList = "<ul>";

  for (var i = 0; i < issues.length; i++) {
    const issue = issues[i];
    issuesList += `
      <li>
        ${issue.title} - ${issue.body}
      </li>`;
  }

  issuesList += "</ul>";

  document.getElementById("issues").innerHTML = issuesList;
}