Vue.component("color-picker", {
  props: ["presets", "color"],
  methods: {
    openColorPicker() {
      const el = this.$refs.inputColor;
      el.click();
    },
    changeBackgroundColor(preset) {
      this.color = preset;
    }
  },
  template: `
    <div class="colorpicker" v-bind:style="{backgroundColor: color}">
      <h1 class="bold">pick a color</h1>
      <div class="colorpicker__input--wrapper">
        <input class="colorpicker__input--text" type="text" maxlength="7" placeholder="#ffd837" v-model="color">
        <button class="colorpicker__button" @click="openColorPicker">
          <i class="material-icons">
            colorize
          </i>
        </button>
        <input class="colorpicker__input--color" type="color" v-model="color" ref="inputColor" />
      </div>
      <p class="bold">or choose from these predefined colors</p>
      <div class="colorpicker__presets">
        <button class="colorpicker__preset" v-for="preset in presets" @click="changeBackgroundColor(preset)">
          {{ preset }}
        </button>
      </div>
  </div>`
});

const getMaxInt = max => Math.floor(Math.random() * Math.floor(max));

const colors = [
  "#c8e2ea",
  "#eec1de",
  "#f7c224",
  "#fe705c",
  "#a2e0da",
  "#f88383",
  "#91cdb2"
];

const colorpickerConfig = () => ({
  presets: colors,
  color: colors[getMaxInt(colors.length)]
});

const amountOfColorpickers = 4;
let colorpickers = [];

for (let i = 0; i < amountOfColorpickers; i++) {
  colorpickers.push(colorpickerConfig());
}

var app = new Vue({
  el: "#app",
  data: {
    colorpickers
  }
});
