<script>
  import { onMount } from "svelte";
  import { afterUpdate } from "svelte";

  /** Structure de l'objet article
     * {
        src: "";
        title: "";
        alt: "";
        caption:"";
        lien: "";
        }

        items == un tableau 3D chaque case contenant une ligne de la gallerie
     */

  export let items = [];
  items = FetchForGallery(items);
  export let textColor = "white";
  export let fadeColor = "hsla(0, 0%, 2%, 40%)";

  function FetchForGallery(results) {
    let lignes = [];

    // On fait le tour du tableau results 4 à 4 pour prendre tous les résultat et ont fait en sorte que le tableau de fin soit div par 4 pour le component Gallery
    for (let i = 0; i < results.length + (4 - (results.length % 4)); i += 4) {
      // à chaque itération le programme push dans lignes une ligne de la gallery et prévoit que l'indice peut être plus haut que le nombre d'item dans results en ajoutant un objet vide à la place (géré par Gallery)

      lignes.push([
        [
          results[i] !== undefined
            ? {
                src: results[i].src,
                alt: results[i].alt,
                title: results[i].title,
                caption: results[i].caption,
                lien: results[i].lien,
              }
            : {},

          results[i + 1] !== undefined
            ? {
                src: results[i + 1].src,
                alt: results[i + 1].alt,
                title: results[i + 1].title,
                caption: results[i + 1].caption,
                lien: results[i + 1].lien,
              }
            : {},
        ],

        [
          results[i + 2] !== undefined
            ? {
                src: results[i + 2].src,
                alt: results[i + 2].alt,
                title: results[i + 2].title,
                caption: results[i + 2].caption,
                lien: results[i + 2].lien,
              }
            : {},

          results[i + 3] !== undefined
            ? {
                src: results[i + 3].src,
                alt: results[i + 3].alt,
                title: results[i + 3].title,
                caption: results[i + 3].caption,
                lien: results[i + 3].lien,
              }
            : {},
        ],
      ]);
    }
    return lignes;
  }
</script>

<section>
  {#each items as tab2d}
    <div class="gGear">
      {#each tab2d as tab3d}
        <div class="pGear">
          {#each tab3d as item}
            {#if item.src == null}
              <figure />
            {:else}
              <figure style:--fadeColor={fadeColor} tabindex="-1">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption style:color={textColor}>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                  <a href={item.lien}>Vers le site</a>
                </figcaption>
              </figure>
            {/if}
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</section>

<style lang="scss">
  @use "var.scss" as *;

  section {
    width: 90%;
    margin: auto;
  }

  figure {
    position: relative;
    flex-grow: 1;
    text-align: center;
    margin: 7px;
    width: 100%;

    background-color: transparent;
    box-sizing: border-box;
  }

  figcaption {
    text-align: center;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Transition */
    opacity: 0%;
    background-color: transparent;
    transition-property: opacity background-color;
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;

    p {
      color: white;
      font-size: 1rem;
    }

    a {
      font-family: "Signika Negative";
      width: fit-content;
      padding: 2%;
      background-color: var(--laboColor);
      color: white;
      border-radius: 5px;
      text-decoration: none;
      box-shadow: 1px 2px 0 white;
      text-shadow: 1px 1px 1px #111;
    }

    a:active {
      box-shadow: none;
    }
  }

  img {
    width: 100%;
    border-radius: 5px;
  }

  figure:hover figcaption,
  figure:focus figcaption {
    opacity: 100%;
    background-color: var(--fadeColor);
  }

  figure:hover img,
  figure:focus img {
    filter: grayscale(100%);
    width: 100%;
  }

  .gGear {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .pGear {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    .pGear {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1000px) {
    .gGear {
      flex-direction: row;
    }
  }
</style>
