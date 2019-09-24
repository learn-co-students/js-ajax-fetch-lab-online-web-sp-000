const baseURL = 'https://api.github.com';
const user = 'alankrajina';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}



function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const url = `${baseURL}/repos/${repo}/forks`

  fetch(url,{
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
}

function showResults(json) {
    $("#results").append(`<a href=${json.html_url}>${json.html_url}</a>`)
}

    //function to post data
    function createIssue() {
      //use this function to create an issue based on the values input in index.html
      const repo = `${user}/js-ajax-fetch-lab`;
      const url = `${baseURL}/repos/${repo}/issues`;
      const postData = {
        title: document.getElementById('title').value,  // when <a> gets clicked this info gets saved to postData
        body: document.getElementById('body').value     // when <a> gets clicked this info gets saved to postData
      };

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(postData),   // postData passed as a JSON string using JSON.stringify in the request body
        headers: {
          Authorization: `token ${getToken()}`
        }
      })
        .then(res => res.json())
        .then(json => getIssues());
    }


    //function to get data
    function getIssues() {
      //once an issue is submitted, fetch all open issues to see the issues you are creating
      const repo = `${user}/js-ajax-fetch-lab`;
     const url = `${baseURL}/repos/${repo}/issues`;
     fetch(url, {
       headers: {
         Authorization: `token ${getToken()}`
       }
     })
       .then(res => res.json())
       .then(json => console.log(json));   // console log all issues
    }
