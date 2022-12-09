<script>

    /** Structure de l'objet article
     * {
        src: "";
        alt: "";
        figcaption:"";
        }

        items == un tableau 3D chaque case contenant une ligne de la gallerie
     */

    export let items = [[[{}, {}], [{}, {}]],
                        [[{}, {}, {}]],
                        [[{}, {}], [{}, {}]]];
    export let textColor = "white";
    export let fadeColor = "hsla(14.6, 100%, 50%, 80%)";

</script>

<section>
    <h2>Gallery</h2>
    {#each items as tab2d}
        <div class="gGear">
        {#each tab2d as  tab3d}
            <div class="pGear">
            {#each tab3d as item}
                <figure style:--fadeColor={fadeColor} tabindex="-1">
                    <img src="{(item.src === null) ? item.src : "favicon.svg"}" alt="{item.alt}" loading="lazy">
                    <figcaption style:color={textColor}>{item.figcaption}</figcaption>
                </figure>
            {/each}
            </div>
        {/each}
        </div>
    {/each}
</section>

<style lang="scss">
    section {
        width: 90%;
        margin: auto;
    }

    figure{
        position: relative;
        flex-grow: 1;
        text-align: center;
        margin: 5px;
        width: 100%;

        background-color: #EEE;
        box-sizing: border-box;
    }

    figcaption{
        text-align: center;
        padding-top: 20%;
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
        width: 100%;
        height: 80%;
        /* Transition */
        opacity: 0%;
        background-color: transparent;
        transition-property: opacity background-color;
        transition-timing-function: ease-in-out;
        transition-duration: 0.3s;
    }

    img{
        width: 100%;
    }

    figure:hover figcaption, figure:focus figcaption{
        opacity: 100%;
        background-color: var(--fadeColor);
    }

    figure:focus{
        border: 1px solid black;
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
