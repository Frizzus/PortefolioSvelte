<script>
  import { onMount } from "svelte";


let nav;
let TAB;


function EnableTLWF() {
    [...TAB].forEach(element => {
        element.addEventListener("touchstart", chooseClick);
        [...element.children].forEach(e => {
            e.style.pointerEvents = "none";
        });
    });
}

function chooseClick(event) {
    if (event.target === document.activeElement) {
        
    }
    else{
        event.preventDefault();
        event.target.focus();
    }
}

onMount(() => {
  TAB = nav.children;
  EnableTLWF();
});
</script>

<nav bind:this={nav}>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <a href="#top">
    <h2>Accueil</h2>
    <img src="img/avatar.svg" alt="mon avatar" />
  </a>
  <a href="#apropos">
    <h2>Ma <br />Présentation</h2>
    <img src="img/file-contract-solid.svg" alt="document" />
  </a>
  <a href="#contact">
    <h2>Me <br />Contacter</h2>
    <img src="img/phone-solid.svg" alt="Contact" />
  </a>
  <a href="#fondu">
    <h2>Le <br />Labo</h2>
    <img src="img/flask-vial-solid.svg" alt="labo" />
  </a>
</nav>

<style lang="scss">
  @use "mixin.scss" as *;
  @use "var.scss" as *;

  nav {
    position: fixed;
    width: 100%;
    /* valeur par défault: flexWrap = wrap */
    @include Flex(row, flex-start, flex-start, nowrap);
    z-index: 100;
    left: 0px;
    top: 0px;
  }

  h2 {
    margin: 0px;
    padding-right: 5px;
    font-size: 1em;
    color: var(--secondaryColor);
    display: none;
  }

  h2 + img{
    display: inline;
    height: 1.8em;
  }

  a{
    outline-style: none;
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
  }

    a:focus{
      flex-grow: 1;
    }

    a:focus > h2 {
      display: block;
    }

  @media screen and (min-width: 800px) {
    nav {
      /* valeur par défault: flexWrap = wrap */
      @include Flex(column, space-between, start, nowrap);

      a:focus > h2 {
        display: none;
        flex-grow: 0;
      }

      a:hover {
        width: 12em;
      }

      a:hover > h2 {
        display: block;
      }

      a {
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0px;
      }
    }
  }
</style>
