import Vue from 'vue';

const ImageLoader = Vue.extend({
  props: [
    'src'
  ],
  data () {
    return {
      loadingImage: true
    }
  },
  mounted () {
    const image = new Image();
    image.onload = function () {
      this.$refs.imageContainer.appendChild(image);
      this.loadingImage = false;
    }.bind(this);
    image.src = this.src;
  },
  template: '<div ref="imageContainer">' +
              '<slot name="loader" v-if="loadingImage"></slot>' +
            '</div>'
});

export default ImageLoader;
