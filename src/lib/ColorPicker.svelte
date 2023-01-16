<script>
  import { onMount } from "svelte";

  class TSLColor {
    constructor(teinte = 180, saturation = "100%", lumiere = "50%") {
      this.teinte = teinte;
      this.saturation = saturation;
      this.lumiere = lumiere;
    }

    setOption(option) {
      switch (option) {
        case "pastel":
          this.saturation = "70%";
          this.lumiere = "80%";
          this.option = option;
          break;
        case "equilibre":
          this.saturation = "60%";
          this.lumiere = "50%";
          this.option = option;
          break;
        case "sombre":
          this.saturation = "90%";
          this.lumiere = "20%";
          this.option = option;
          break;
        case "sature":
          this.saturation = "100%";
          this.lumiere = "50%";
          this.option = option;
          break;
      }
    }

    toStyle() {
      return (
        "hsl(" +
        this.teinte +
        ", " +
        this.saturation +
        ", " +
        this.lumiere +
        ")"
      );
    }
  }

  let picker;
  let teinteBar;
  let docStyle;
  let pickerSelect;
  let pickerImg;
  let button;
  let styleSelects;
  /**
 * const navLinks = document.getElementsByClassName("lwf");
let view = document.querySelector("#colorView");
 */
  let isDeployed = false;
  let color = new TSLColor();
  let complementaryColor = new TSLColor();
  let laboColor = new TSLColor();
  let laboNeon = new TSLColor(0, "100%", "62%");

  function initBindVar() {
    docStyle = document.documentElement.style;
    pickerSelect = picker.children[0];
    pickerImg = picker.children[1];
  }

  function deployPicker() {
    picker.focus();
    if (!isDeployed) {
      picker.style.width = "20em";
      picker.style.height = "15em";
      pickerSelect.style.display = "flex";
      pickerImg.style.display = "none";
      isDeployed = true;
    }
  }

  // le colorpicker doit se retirer si il est déployé et si l'évenement focusout focus un élément extérieur au picker (sinon les inout à l'intérieur du colorpicker fermerait l'onglet à chaque fois que l'on veut changer le valeur)
  function retrievePicker(event) {
    if (isDeployed && isFocusOut(event)) {
      picker.style.width = "4em";
      picker.style.height = "8vh";
      pickerSelect.style.display = "none";
      pickerImg.style.display = "block";
      isDeployed = false;
    }
  }

  function switchStyle(event) {
    color.setOption(event.target.id);
    changeViewStyle();
  }

  function setColor(event) {
    color.teinte = event.target.value;
    docStyle.setProperty(
      "--teinteThumbColor",
      "hsl(" + event.target.value + ", 100%, 50%)"
    );
    changeViewStyle();
  }

  function changeViewStyle() {
    docStyle.setProperty("--pickerColor", color.toStyle());

    // --secondaryColor
    complementaryColor.teinte = (color.teinte + 180) % 360;
    complementaryColor.saturation = color.saturation;
    complementaryColor.lumiere = color.lumiere;
    docStyle.setProperty("--pickerCColor", complementaryColor.toStyle());
  }

  function changePageStyle(event) {
    event.preventDefault();
    docStyle.setProperty("--primaryColor", color.toStyle());
    docStyle.setProperty("--secondaryColor", complementaryColor.toStyle());

    // --laboColor
    laboColor.teinte = color.teinte;
    docStyle.setProperty("--laboColor", laboColor.toStyle());

    // --laboNeon
    laboNeon.teinte = color.teinte;
    docStyle.setProperty("--laboNeon", laboNeon.toStyle());
  }

  // faire en sorte que picker ne perde pas le focus quand on clique à l'intérieur
  function isFocusOut(event) {
    let isOut = true;

    [...pickerSelect.children].forEach((element) => {
      if (element === event.relatedTarget) {
        isOut = false;
      }
    });
    return isOut;
  }
  onMount(() => {
    initBindVar();
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- aggrandir et rétrécir l'onglet -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
  id="picker"
  tabindex="0"
  bind:this={picker}
  on:click={deployPicker}
  on:focusout={retrievePicker}
>
  <section>
    <div id="colorView" />
    <!-- détecter et changer le changement de style de couleur -->
    <form bind:this={styleSelects} on:change={switchStyle}>
      <div>
        <label for="pastel">Pastel</label>
        <label for="equilibre">Equilibré</label>
      </div>
      <div>
        <label for="sombre">Sombre</label>
        <label for="sature">Saturé</label>
      </div>

      <input type="radio" name="color" id="pastel" />
      <input type="radio" name="color" id="equilibre" />
      <input type="radio" name="color" id="sombre" />
      <input type="radio" name="color" id="sature" />
    </form>
    <!-- détecter et changer le changement de teinte -->
    <!-- setup des valeur au lancement de la page -->
    <input
      type="range"
      id="hsl"
      min="0"
      max="360"
      value="0"
      step="1"
      bind:this={teinteBar}
      on:mousemove={setColor}
      on:change={setColor}
      on:load={setColor}
    />
    <!-- détecter et changer la couleur à l'appuie du bouton pour changer le theme de la page -->
    <button bind:this={button} on:click={changePageStyle}
      >Changer de couleur primaire</button
    >
  </section>
  <img src="img/palette-solid.svg" alt="plateau pour peinture" />         
</div>
<div id="show">
  <img src="img/upArrow.svg" alt="arrow">
  <img src="img/upArrow.svg" alt="arrow">
  <img src="img/upArrow.svg" alt="arrow">
</div>


<style lang="scss">
  @use "mixin.scss" as *;
  @use "var.scss" as *;

  #show{
    position: fixed;
    z-index: 50;
    top: 9vh;
    right: 0;
    width: fit-content;
    /* valeur par défault: flexWrap = wrap */
    @include Flex(column, center);

    img{
      opacity: 0;
      width: 4em;

      animation-name: Clignote;
      animation-duration: 1.5s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 3;
    }

    :nth-child(1){
      animation-delay: 0.6s;
    }

    :nth-child(2){
      animation-delay: 0.4s;
      position: relative;
      top: -1.8em;
    }

    :nth-child(3){
      animation-delay: 0.2s;
      position: relative;
      top: -3.5em;
    }
  }

  @keyframes Clignote{
    from {opacity: 0;}
    40%, 50% {opacity: 1;}
    80%, to {opacity: 0;}
  }

  #picker {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    text-decoration: none;
    width: 4em;
    height: 8vh;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: var(--color);
    box-shadow: 1px 0px 5px var(--textColor);
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    /* valeur par défault: flexWrap = wrap */
    @include Flex(row, center, center, nowrap);
    overflow: hidden;
    /* Transition */
    transition-property: width, height, flex-grow;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;

    section{
      /* valeur par défault: flexWrap = wrap */
    @include Flex(column, center, center, nowrap);
    display: none;
    position: relative;

    width: 100%;
    height: 100%;
    }

    form {
      /* valeur par défault: flexWrap = wrap */
      @include Flex(column, space-evenly, center, nowrap);
    }
    form div {
      /* valeur par défault: flexWrap = wrap */
      @include Flex(row, space-evenly, center, nowrap);
      margin-top: 5px;
      margin-bottom: 5px;
    }
    form label {
      background-color: #333;
      color: var(--color);
      width: 80px;
      margin-left: 5px;
      margin-right: 5px;
      border-radius: 5px;
      font-family: "Marhey";
      text-align: center;
    }
    form label:active {
      background-color: #555;
    }
    form input {
      appearance: none;
      position: absolute;
    }

    button {
      margin-top: 5px;
      background-color: #333;
      color: var(--color);
      font-family: "Marhey";
      border: none;
      border-radius: 5px;
    }
    button:active {
      background-color: #555;
    }

    img {
    display: inline;
    height: 1.8em;
  }
  }

  #picker:hover {
      border: 1px solid black;
    }

  #colorView {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-image: linear-gradient(
      45deg,
      var(--pickerCColor) 5%,
      var(--pickerColor) 95%
    );
  }
  #hsl {
    background: linear-gradient(
      90deg,
      hsl(0, 100%, 50%) 0%,
      hsl(60, 100%, 50%) 17%,
      hsl(120, 100%, 50%) 33%,
      hsl(180, 100%, 50%) 50%,
      hsl(240, 100%, 50%) 66%,
      hsl(300, 100%, 50%) 83%,
      hsl(360, 100%, 50%) 100%
    );
    height: 0.6em;
    border-radius: 5px;
  }
  #hsl::-moz-range-thumb {
    background-color: var(--teinteThumbColor);
    border-color: var(--color);
    border-width: 1px;
    box-shadow: inset 1px 1px 2px #eee;
  }
  #hsl::-moz-range-thumb:active {
    box-shadow: none;
  }
  #hsl::-webkit-slider-thumb {
    background-color: var(--teinteThumbColor);
    border-color: var(--color);
    border-width: 1px;
    box-shadow: inset 1px 1px 2px #eee;
  }
  #hsl::-webkit-slider-thumb:active {
    box-shadow: none;
  }

  @media screen and (min-width: 800px){
    #picker{
        border-top-left-radius: 0px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 0px;
      }
  }
</style>
