<script>
  import { onMount } from "svelte";

  ("use strict");
  let intervalId,
    actualNavIndex = 0,
    lastNavIndex = 3,
    carroussel,
    tabs = [],
    tabDot = [],
    nav;
  const CARRSWAPTIME = 2000;

  onMount(async () => {
    tabs = [...carroussel.children];
    tabs.pop();
    tabDot = [...nav.children];
    ActivateCarroussel();
  });

  function ActivateCarroussel() {
    clearInterval(intervalId);
    intervalId = setInterval(NextSlide, CARRSWAPTIME);
  }

  function DesactivateCarroussel() {
    clearInterval(intervalId);
  }

  function NextSlide() {
    lastNavIndex = actualNavIndex;
    actualNavIndex++;
    actualNavIndex = actualNavIndex % tabs.length;

    tabs[lastNavIndex].classList.remove("slidein");
    tabs[lastNavIndex].classList.add("slideout");

    tabs[actualNavIndex].classList.remove("slideout");
    tabs[actualNavIndex].classList.add("slidein");

    tabDot[lastNavIndex].setAttribute("class", "navDot def");
    tabDot[actualNavIndex].setAttribute("class", "navDot colored");
  }

  function GoToSlide(index) {
    lastNavIndex = actualNavIndex;
    actualNavIndex = index;

    tabs[lastNavIndex].classList.remove("slidein");
    tabs[lastNavIndex].classList.add("slideout");

    tabs[actualNavIndex].classList.remove("slideout");
    tabs[actualNavIndex].classList.add("slidein");

    tabDot[lastNavIndex].setAttribute("class", "navDot def");
    tabDot[actualNavIndex].setAttribute("class", "navDot colored");
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  id="carroussel"
  bind:this={carroussel}
  on:mouseleave={ActivateCarroussel}
  on:mouseenter={DesactivateCarroussel}
>
  <article class="slidein">
    <h3>Développement Web FrontEnd</h3>
    <ul>
      <li>
        Créer une maquette de page web à l'aide de <span class="bold"
          >Figma</span
        >
      </li>
      <li>
        Respecter les règles sémantique de <span class="bold"
          ><abbr title="Hypertext Markup Languages">HTML</abbr></span
        >
      </li>
      <li>
        Utiliser <span class="bold"
          ><abbr title="Cascading Style Sheet">CSS</abbr></span
        >
        ses <span class="bold">animations</span> et les modèles
        <span class="bold">Flex</span>
        et <span class="bold">Grid</span> pour styliser une page web
      </li>
      <li>
        Utiliser <span class="bold">Javascript</span> et le
        <span class="bold"><abbr title="Document Object Modele">DOM</abbr></span
        > dans le but de dynamiser une page web
      </li>
      <li>
        Créer une page web <span class="bold">responsive</span> à partir d'une maquette
      </li>
    </ul>
  </article>
  <article class="slideout">
    <h3>Maitrise de Framework</h3>
    <ul>
      <li>
        Créer une page web à l'aide de <span class="bold">Bootstrap</span> et de
        son système de grid
      </li>
      <li>
        Gérer mes feuille de style <abbr title="Cascading Style Sheet">CSS</abbr
        >
        à l'aide de <span class="bold">Sass</span>
      </li>
      <li>
        Gérer et développer un site web grâce à <span class="bold">Symfony</span
        >
      </li>
      <li>
        Dynamiser une page web statique avec <span class="bold">React</span>
      </li>
      <li>
        Développer et Organiser un projet web avec <strong>Svelte</strong>
        et <span class="bold">SvelteKit</span>
      </li>
      <li>
        Utiliser <span class="bold">ThreeJS</span> pour intégrer de la 3D dans une
        page web dynamique
      </li>
      <li>
        Créer un site avec le <span class="bold"
          ><abbr title="Content Management Systeme">CMS</abbr>Wordpress</span
        >
      </li>
    </ul>
  </article>
  <article>
    <h3>Développement Web BackEnd</h3>
    <ul>
      <li>
        Gérer le côté serveur d'un site web avec <span class="bold"
          ><abbr title="Hypertext PreProcessor">PHP</abbr></span
        >
      </li>
      <li>
        Appliquer la <span class="bold"
          ><abbr title="Programmation Orientée Objets">POO</abbr></span
        > pour créer des solutions durables et modulables
      </li>
      <li>
        Gérer / Créer une base de donnée relationnelle via le <abbr
          title="Systeme de Gestion de Base de Données">SGBD</abbr
        >
        <span class="bold"
          >My<abbr title="Structured Query Language">SQL</abbr></span
        >
      </li>
      <li>
        Utiliser l'analyse <span class="bold">Merise</span> pour concevoir des bases
        de données
      </li>
    </ul>
  </article>
  <article>
    <h3>Langages connu</h3>
    <ul>
      <li>Java</li>
      <li>Javascript</li>
      <li><abbr title="Hypertext PreProcessor">PHP</abbr></li>
      <li>C++</li>
      <li>Python</li>
      <li>C#</li>
      <li>Ruby</li>
      <li>TypeScript</li>
      <li>Haskell</li>
      <li>GdScript</li>
      <li>Rust</li>
    </ul>
  </article>
  <nav bind:this={nav}>
    <h3
      class="navDot"
      on:click={() => {
        GoToSlide(0);
      }}
    >
      Front-end
    </h3>
    <h3
      class="navDot"
      on:click={() => {
        GoToSlide(1);
      }}
    >
      Frameworks
    </h3>
    <h3
      class="navDot"
      on:click={() => {
        GoToSlide(2);
      }}
    >
      Back-end
    </h3>
    <h3
      class="navDot"
      on:click={() => {
        GoToSlide(3);
      }}
    >
      Langages
    </h3>
  </nav>
</div>

<style lang="scss">
  @use "mixin.scss" as *;
  @use "var.scss" as *;

  #carroussel {
    position: relative;
    height: 95%;
    overflow: hidden;
    z-index: 2;

    li{
      font-size: 0.9rem;
      padding-right: 10px;
    }

    .slidein {
      animation-name: SlideIn;
      animation-timing-function: ease-in;
      animation-duration: 0.5s;
      animation-direction: normal;
      animation-fill-mode: forwards;
    }

    .slideout {
      animation-name: SlideOut;
      animation-timing-function: ease-in;
      animation-duration: 0.5s;
      animation-direction: normal;
      animation-fill-mode: forwards;
    }

    > article {
      visibility: hidden;
      position: absolute;
      top: 0px;
      width: 100%;
      height: 100%;
    }

    > article:first-child {
      visibility: visible;
    }

    nav {
      /* valeur par défault: flexWrap = wrap */
      @include Flex(row, center, center, nowrap);
      width: 100%;
      height: 10%;
      position: absolute;
      bottom: 0;
      user-select: none;
    }
  }

  :global(.navDot) {
    height: 100%;
    flex-grow: 1;

    background-color: var(--color);
    outline: 1px solid var(--primaryColor);
    color: var(--primaryColor);

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    box-shadow: 0px -1px 1px #111;
    text-shadow: none;
    font-size: 0.9rem;

    margin: 0;
  }

  :global(.navDot:active){
    outline-color: var(--secondaryColor);
  }

  :global(.def) {
    background-color: var(--color);
    outline-color: var(--primaryColor);
    color: var(--primaryColor);
  }

  :global(.colored) {
    background-color: var(--primaryColor);
    color: var(--color);
  }

  :global(.clean) {
    clear: both;
  }

  @keyframes SlideIn {
    from {
      visibility: hidden;
      left: 120%;
    }
    to {
      visibility: visible;
      left: 0px;
    }
  }

  @keyframes SlideOut {
    from {
      left: 0px;
      visibility: visible;
    }
    to {
      visibility: hidden;
      left: -120%;
    }
  }

  @media screen and (min-width: 480px) {
    #carroussel {
      ul {
        padding-left: 10%;
      }
    }
  }

  @media screen and (min-width: 780px) {
    #carroussel {
      li{
        font-size: 1.2rem;
      }
    }
    :global(.navDot){
      font-size: 1.5rem;
    }
  }
</style>
