<script>
  import { onMount } from "svelte";


  "use strict";
let intervalId, actualNavIndex = 0, lastNavIndex, carroussel, tabs, tabDot = [], nav;
const CARRSWAPTIME = 2000;

onMount(() =>{
    tabs = [...carroussel.children];
    tabs.pop();

    addDot(tabs.length);
    ActivateCarroussel();
});

function ActivateCarroussel() {
    intervalId = setInterval(NextSlide, CARRSWAPTIME);
}

function DesactivateCarroussel() {
    clearInterval(intervalId);
}

function NextSlide() {
    lastNavIndex = actualNavIndex;
    actualNavIndex++;
    actualNavIndex = actualNavIndex%tabs.length;

    
    tabs[lastNavIndex].classList.remove("slidein");
    tabs[lastNavIndex].classList.add("slideout");

    tabs[actualNavIndex].classList.remove("slideout");
    tabs[actualNavIndex].classList.add("slidein");
    
    tabDot[lastNavIndex].style.backgroundColor = "var(--light)";
    tabDot[actualNavIndex].style.backgroundColor = "var(--primaryColor)";

}

/** Ajoute un certain nombre nbSlide de point en bas du carroussel représentant la navigation
 * 
 * @param nbSlide
 */
function addDot(nbSlide) {
    let spanElem
    for (let i = 0; i < nbSlide; i++) {
        spanElem = document.createElement("span");
        spanElem.setAttribute("class", "navDot");
        // span mis dans un tableau pour garder une trace dans nextSLide
        tabDot.push(spanElem);
        nav.appendChild(spanElem);
    }
}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="carroussel" bind:this={carroussel} on:mouseleave={ActivateCarroussel} on:mouseenter={DesactivateCarroussel} on:click={NextSlide}>
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
        Développer et Organiser un projet web avec <span class="bold"
          >Svelte</span
        >
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
  <nav bind:this={nav}/>
</div>

<style lang="scss">
  @use "mixin.scss" as *;
  @use "var.scss" as *;

  #carroussel {
    position: relative;
    height: 95%;
    overflow: hidden;
    z-index: 2;

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
      position: absolute;
      bottom: 1em;
    }
  }

  :global(.navDot){
      width: 10px;
      height: 10px;

      background-color: var(--color);
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
</style>
