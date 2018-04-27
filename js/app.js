function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
      'X-Access-Token': 'a26338a935c8999d'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
}

function getData(url) {
  // Default options are marked with *
  return fetch(url, {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
      'X-Access-Token': 'a26338a935c8999d'
    },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
}

function searchTestWithGet() {
	var url = "https://api.eatstreet.com/publicapi/v1/search-test?access-token=a26338a935c8999d"
	getData(url);
}

function searchTest() {
	var url = "https://api.eatstreet.com/publicapi/v1/search-test?access-token=a26338a935c8999d"
	fetch(url).then(function (response) {
	    return response.json();
	}).then(function (json) {
	    console.log(json);
	});
}

function registerUser() {
	var url = "https://api.eatstreet.com/publicapi/v1/register-user?access-token=a26338a935c8999d";
	var newUser = {
	    'email': 'newuser@eatstreet.com',
	    'password': 'password',
	    'firstName': 'New',
	    'lastName': 'User',
	    'phone': '6086667777'
	};	
	postData(url, newUser);
}

document.body.onload = searchTest;