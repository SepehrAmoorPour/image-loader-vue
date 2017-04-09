const ImageLoader = {
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
      this.$refs.imageContainer.append(image);
      this.loadingImage = false;
    }.bind(this);
    image.src = this.src;
  },
  render: function(h) {
    return h('div', {ref: "imageContainer"},
            h('slot', {attrs: {name: 'loader', 'v-if': 'loadingImage'}}))
  }
};

export default ImageLoader;
