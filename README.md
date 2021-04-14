# react-server-request
# react-server-request


## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

 
## Installing

Using npm:

```bash
$ npm i react-server-request
```

Using bower:

```bash
$ bower i react-server-request
```

Using yarn:

```bash
$ yarn add react-server-request
```






use react-server-request simply:
_______________________________
-----------------------------------

```js
// file name API.js
import {Request} from 'react-server-request'

export default  new Request('here will be main path')

// this is like  ----->
// const API = new Request('https://jsonplaceholder.typicode.com')
 

```


```js

// get request for loading data
// get request for loading data
import {API} from './api'

API.get('/here will be get request path')
// this is like  ----->
// const API = new Request('/users')
.then(res=>console.log(res))
.catch(function (error) {
    console.log(error);
```


```js
import {API} from './api'
API.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```



```js
import {API} from './api'
API.delete('/user')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```


```js
import {API} from './api'
API.put('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```



<!-- 
this is really eassy tio use and very light weight so it will be good user experince
this is really eassy tio use and very light weight so it will be good user experince
this is really eassy tio use and very light weight so it will be good user experince -->