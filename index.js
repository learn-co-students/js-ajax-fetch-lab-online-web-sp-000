const baseURL = 'https://api.github.com';
const user = 'TyyHunt';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
  	method: 'POST',
  	headers: {
  		Authorization: `token ${getToken()}`
  	}
  })
  .then(res => res.json())
  .then(data => showResults(data))
}

function showResults(data) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${data.html_url}>${data.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch(url, {
  	method: 'POST',
  	body: JSON.stringify({title: title, body: body}),
  	headers: {Authorization: `token ${getToken()}`}
  })
  .then(res => res.json())
  .then(data => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  fetch(url, {
  	headers: { Authorization: `token ${getToken()}`}
  })
  .then(res => res.json())
  .then(data => {
  	let output = '<h2>Issues</h2>';
  	data.forEach(function(issue){
  		output += `
  			<ul>
  			<li>Title: ${issue.title}</li>
  			<li>Issue: ${issue.body}</li>
  			</ul>
  		`;
  	});
  	document.getElementById('issues').innerHTML = output;
  })
}
