<script>
</script>

<section id="picker">
  <div id="colorView" />
  <form>
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
  <input type="range" id="hsl" min="0" max="360" value="0" step="1" />
  <button>Changer de couleur primaire</button>
</section>

<style lang="scss">
  @use "mixin.scss" as *;
  @use "var.scss" as *;

  #picker {
    /* valeur par défault: flexWrap = wrap */
    @include Flex(column, center, center, nowrap);
    display: none;
    position: relative;

    width: 100%;
    height: 100%;

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
  }

  #colorView {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    border: 2px dotted var(--textColor);
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
</style>
