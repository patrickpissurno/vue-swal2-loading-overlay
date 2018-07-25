# Vue Sweet Alert 2 Loading Overlay
[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/vue-swal2-loading-overlay.svg)](http://npm-stats.com/~packages/vue-swal2-loading-overlay)
[![npm-version](https://img.shields.io/npm/v/vue-swal2-loading-overlay.svg)](https://www.npmjs.com/package/vue-swal2-loading-overlay)
[![license](https://img.shields.io/github/license/patrickpissurno/vue-swal2-loading-overlay.svg?maxAge=1800)](https://github.com/patrickpissurno/vue-swal2-loading-overlay/blob/master/LICENSE)

Vue.js plugin to easily add loading overlays (extends [vue-sweetalert2](https://github.com/avil13/vue-sweetalert2))

## Installation
```bash
# npm
npm install vue-swal2-loading-overlay --save

# Yarn
yarn add vue-swal2-loading-overlay
```

## Usage
1. Install the plugin (for exemple, in your ```main.js``` file)
```js
//You need to have 'vue-sweetalert2' installed for 'vue-swal2-loading-overlay' to work

import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import LoadingOverlay from 'vue-swal2-loading-overlay';

Vue.use(VueSweetalert2);
Vue.use(LoadingOverlay);

new Vue({
  el: '#app'
});
```
2. Profit! Wherever you could call ```this.$swal({})``` you can also call ```this.$loading.show()```. Example:
```vue
<template>
  <h4>I wanna hide this content until I finish loading something</h4>
</template>

<script>
  export default {
      mounted(){
          this.$loading.show({ background: 'black', color: '#00FF00' });
      }
  }
</script>
```

## API methods
#### ```this.$loading.show(opts)```
Shows the loading indicator. You can specify the following properties by passing the ```opts``` object parameter:

Property | Result | Defaults
--- | --- | ---
```background``` | Changes the overlay background color | ```'white'```
```color``` | Changes the loading indicator color | ```'#3085d6'```
```animation``` | If set to **false**, 'show' and 'hide' animations will be disabled | ```true```

You can also omit the ``` opts ``` parameter and it will use the defaults.

#### ```this.$loading.hide()```
Hides the loading indicator.

## Browser support
Modern browsers with support to ES6.

## Related projects
- [sweetalert2/sweetalert2](https://github.com/sweetalert2/sweetalert2) - Sweet Alert 2
- [avil13/vue-sweetalert2](https://github.com/avil13/vue-sweetalert2) - Vue.js wrapper

## License
Licensed under [MIT](https://github.com/patrickpissurno/vue-swal2-loading-overlay/blob/master/LICENSE).
