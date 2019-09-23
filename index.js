const baseURL = 'https://api.github.com';
const user = 'alankrajina';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "84d82e6ca044d304c178819fff83cababf896cec";
}



function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const url = `${baseURL}/repos/${repo}/forks`

  fetch(url,{
    method: 'POST',
    headers: {
    Authorization: "84d82e6ca044d304c178819fff83cababf896cec"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
}

function showResults(json) {
    $("#results").append(`<a href=${json.html_url}>${json.html_url}</a>`)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
