# Image Loader Vue

A component for Vue.js 2 for pre-loading images to be put in the markup of the application. Using this module to load images will keep remove the responsibility of loading images from the view and thus not block its rendering process.

## Installation
Use npm to install the the module:

`npm install image-loader-vue`

## Importing the component

There are a few ways to include the component, depending on your needs.

Include the component as a CommonJS module:

```javascript
var ImageLoader = require('image-loader-vue');
```

Or, if using ES2015, include the component via import statement:
```javascript
import ImageLoader from 'image-loader-vue';
```

Or, if using a build tool like Gulp or Grunt, include the `node_modules/image-loader/dist/image-loader.min.js` in your sources.

Then, add the `ImageLoader` component to the Vue instance or the parent component which needs it:
```javascript
var ImageLoader = require('image-loader-vue');

var vm = new Vue({
  components: {
    ImageLoader
  }
  ...
})
```

## Usage

Now the `ImageLoader` component is available to use in the template by using its `src` prop:
```html
  <image-loader :src="http://example.com/image.jpg"></image-loader>
```

There is also a possibility to add a loader/spinner which will be shown while the image is loading. This is achieved by using Vue component slots:
```html
  <image-loader :src="http://example.com/image.jpg">
    <div class="loader example" slot="loader"></div>
  </image-loader>
```
