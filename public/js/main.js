import * as http from './http';

http.get('/endpoint')
  .then((response) => {
    if (response.status !== 200) {
      // todo: handle the error
      return;
    }
    response.json().then((data) => {
      console.log(data);
    });
  });
