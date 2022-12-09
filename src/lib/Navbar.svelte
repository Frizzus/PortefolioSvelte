<script>
  import ColorPicker from "./ColorPicker.svelte";
</script>

<nav>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div id="picker" tabindex="0">
    <ColorPicker />
    <img src="img/palette-solid.svg" alt="plateau pour peinture" />
  </div>
  <a href="#apropos" class="lwf">
    <h2>Ma <br />Présentation</h2>
    <img src="img/file-contract-solid.svg" alt="document" />
  </a>
  <a href="#bottom" class="lwf">
    <h2>Le <br />Labo</h2>
    <img src="img/flask-vial-solid.svg" alt="labo" />
  </a>
  <a href="#top" class="lwf">
    <h2>Me <br />Contacter</h2>
    <img src="img/phone-solid.svg" alt="Contact" />
  </a>
</nav>

<style lang="scss">
  @use "mixin.scss" as *;
  @use "var.scss" as *;

  nav {
    position: fixed;
    width: fit-content;
    /* valeur par défault: flexWrap = wrap */
    @include Flex(row, flex-start, flex-start, nowrap);
    z-index: 100;
    left: 0px;
    top: 0px;
  }

  h2 {
    margin: 0px;
    font-size: 1em;
    color: var(--secondaryColor);
    display: none;
  }

  h2 + img,
  #picker img {
    display: inline;
    height: 1.8em;
  }

  a,
  #picker {
    text-decoration: none;
    width: 4em;
    height: 8vh;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
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
  }

  a:focus {
      flex-grow: 1;
    }

    a:focus > h2 {
      display: block;
    }

    #picker:hover {
      border: 1px solid black;
    }

  @media screen and (min-width: 800px) {
    nav {
      /* valeur par défault: flexWrap = wrap */
      @include Flex(column, space-between, start, nowrap);

      a:focus > h2 {
        display: none;
      }

      a:hover {
        width: 12em;
      }

      a:hover > h2 {
        display: block;
      }

      #picker,
      a {
        border-top-right-radius: 50px;
        border-bottom-left-radius: 0px;
      }
    }
  }
</style>
