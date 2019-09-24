const baseURL = "https://api.github.com";
const user = "adavisson";

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
  //return "97e50cea8b91ca3ba9fb77120fef320fc748d0c2";
}

function forkRepo() {
  const repo = "learn-co-curriculum/js-ajax-fetch-lab";
  //use fetch to fork it!
  fetch(`${baseURL}/repos/${repo}/forks`, {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(data => data.json())
    .then(res => showResults(res));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const resultsDiv = document.getElementById("results");
  const jsonLink = `<a href="${json.html_url}">${json.html_url}</a>`;
  resultsDiv.innerHTML = jsonLink;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = "js-ajax-fetch-lab";
  const postData = {
    title: `${document.getElementById("title").value}`,
    body: `${document.getElementById("body").value}`
  };

  fetch(`${baseURL}/repos/${user}/${repo}/issues`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(getIssues);
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = "js-ajax-fetch-lab";

  fetch(`${baseURL}/repos/${user}/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(data => data.json())
    .then(function(res) {
      document.getElementById("issues").innerHTML = `<ul>${res
        .map(i => "<li>" + i.title + " " + i.body + "</li>")
        .join("")}</ul>`;
    })
    .catch(function(error){
      console.log(error);
    });
    
}
