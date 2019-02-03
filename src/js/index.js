var app = new Vue({
  el: "#app",
  data: {
    color: "#c8e2ea",
    presets: [
      "#c8e2ea",
      "#eec1de",
      "#f7c224",
      "#fe705c",
      "#a2e0da",
      "#f88383",
      "#91cdb2"
    ]
  },
  methods: {
    openColorPicker() {
      const el = this.$refs.inputColor;
      el.click();
    },
    changeBackgroundColor(preset) {
      this.color = preset;
    }
  }
});
