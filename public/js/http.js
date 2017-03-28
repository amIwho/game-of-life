function getRequest(url) {
  return fetch(url)
    .catch((err) => {
      // todo: handle the fetch error
    });
}


function postRequest() {
  return fetch(url)
    .catch((err) => {
      // todo: handle the fetch error
    });
}

export default { get: getRequest, post: postRequest };
