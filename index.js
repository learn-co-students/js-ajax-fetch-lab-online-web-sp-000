function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function getHeader(){
  return { Authorization: `token ${getToken()}` }
}
function forkRepo() {
  const prefix = 'https://api.github.com/repos/';
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const postscript = '/forks';
  const path = prefix + repo + postscript;
  fetch(path, {
    method: 'post',
    headers: getHeader()
  }).then(res => res.json())
  .then(json => showResults(json));
}

function showResults(json) {
  console.log(json)
  let html = `<p><strong id="repo-name">${json.name}</strong> :: <span id="owner">${json.owner.login}</span></strong></p><a href="${json.html_url}" target="_">Your Fork</a>`
  document.querySelector('#results').innerHTML = html;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#body').value;
  const body = JSON.stringify({ title: title, body: content });
  const path = `https://api.github.com/repos/${getOwner()}/${getRepo()}/issues`;
  fetch(path, {
    method: 'post',
    headers: getHeader(),
    body: body
  })
  .then(res => getIssues());
}

function getOwner(){
  let owner
  if(owner = document.querySelector('#owner')){
    return owner.innerHTML;
  }else{
    return "micahshute";
  }

}

function getRepo(){
  let repo
  if(repo = document.querySelector('#repo-name')){
    return repo.innerHTML;
  }else{
    return "js-ajax-fetch-lab"
  }
  
}

function getIssues() {
console.log("HERE")
 const path = `https://api.github.com/repos/${getOwner()}/${getRepo()}/issues`
 fetch(path, {
   headers: getHeader()
 }).then(res => res.json())
 .then(json => showIssues(json))
}

function showIssues(json){
  console.log("SHOW ISSUES")
  console.log(json);
  let html = "<ul>" + json.map(j => (
    `</li><h4>${j.title}</h4><p>${j.number} :: <span id="body">${j.body} :: </span><a href="${j.url}">${j.url}</a></p></li>`
  )).join('') + "</ul>";
  document.querySelector('#issues').innerHTML = html;
}