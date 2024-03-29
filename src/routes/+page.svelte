<script>
  import Carroussel from "../lib/Carroussel.svelte";
  import Gallery from "../lib/Gallery.svelte";
  import Navbar from "../lib/Navbar.svelte";
  import SpaceSystem from "../lib/SpaceSystem.svelte";
  import ColorPicker from "../lib/ColorPicker.svelte";

  /** @type {import('./$types').PageServerLoad} */
  export let data;

  /** @type {import('./$types').ActionData} */  
  export let form;

  let bd, needReload = false;

  if (form?.success) {
    bd = form.content.results;
    needReload = true;
  }
  else{
    bd = data.post.items.results;
  }
  
</script>

<header>
  <Navbar />
  <ColorPicker />
  <h1>Loïc Canin</h1>
  <hr />
  <h2>Développeur Web créatif et innovant !</h2>
  <div id="leftPart" />
  <div id="rightPart" />
</header>
<main>
  <section id="apropos">
    <h2>A propos de Moi</h2>
    <div>
      <img src="img/avatar.svg" alt="mon avatar" />
      <p>
        Je cherche un stage du 27/02/23 au 03/05/23 pour ma formation de
        <strong>développeur web</strong>. Curieux et <strong>innovant</strong>, j’accorde beaucoup d’importance à
        une ambiance de travail bienveillante et a l’entraide. J’aime relever
        des défis techniques et me surpasser pour un projet commun.
      </p>
      <p>     
        Dû à mon côté innovant, j’ai toujours préféré chercher une ou plusieurs
        solutions plutôt que de faire uniquement le travail demandé, c’est pour
        moi une un bon moyen d’aiguiser mon esprit et un bon moyen de trouver
        des solutions plus efficaces que celles existantes. <br /> Je suis quelqu’un
        d’empathique, je laisse toujours une seconde chance, j’accompagne et je cherche
        à comprendre tous ceux en qui je veux venir en aide et surtout je pense qu’accorder
        sa confiance est le meilleur moyen de régler les conflits et d’aider les
        autres à s’ouvrir.
      </p>
      <div class="clean" />
    </div>
  </section>
  <section id="competences">
    <h2>Mes Compétences</h2>
        <Carroussel/>
    <div />
  </section>
  <section id="contact">
    <h2>Me Contacter</h2>
    <SpaceSystem />
  </section>
  <section id="labo">
    <div id="fondu" />
    <h2>Le Labo</h2>
    <div>
      <p>
        Vous y trouverez des sites que j'ai fait répondant à une ou plusieurs compétences, que ce soit un site que j'ai fait pour quelqu'un, un site pour m'exercer à une technologie ou certain de mes autres projet personnels concluant. Vous pouvez faire une recherche en spécifiant une technologie.
      </p>
      <form action="?/labo#labo" method="post" name="labo">
        <input type="text" name="motclef" id="recherche" placeholder="recherche ..." />
        <select name="trie" id="tri">
          <option value="lexi">Ordre lexicographique</option>
          <option value="decroissant">Du plus vieux au plus jeune</option>
          <option value="croissant">Du plus jeune au plus vieux</option>
        </select>
        <input type="submit" value="Trier"/>
      </form>
      {#key bd}
        <Gallery items={bd} doReload={needReload}/>
      {/key}
      
    </div>
  </section>
</main>
<footer>
  <img src="img/footerWave.svg" alt="vague noire">
  <address>
    <ul>
      <li>Mail : <a href="mailto:loiccanin.pro@gmail.com">loiccanin.pro@gmail.com</a></li>
      <li>Linkedin : <a href="https://www.linkedin.com/in/lo%C3%AFc-canin-9b2aa11b4/" target="_blank" rel="noopener noreferrer">Loïc Canin</a></li>
      <li>Github : <a href="https://github.com/Frizzus" target="_blank" rel="noopener noreferrer">Frizzus</a></li>
      <hr>
      <li class="nopuce">&copy; Site web créé et apartenant à Loïc Canin.</li>
    </ul>
  </address>
</footer>

<style lang="scss">
  @use "../lib/mixin.scss" as *;
  @use "../lib/var.scss" as *;

  :global(body) {
    margin: 0px;
    overflow-x: hidden;

    :global(p) {
      margin: 0px;
      padding: 0px;
      font-size: 1.2rem;
      font-family: "Signika Negative";
      color: var(--textColor);
    }

    :global(h2) {
      text-align: center;
      font-size: 2.5rem;
      color: #222;
      font-family: "Marhey";
      text-shadow: 1px 1px 2px var(--shadowTxt);
    }

    :global(h3) {
      color: var(--primaryColor);
      text-align: center;
      font-size: 1.5rem;
      font-family: "Signika Negative";
      text-shadow: 1px 1px 2px var(--shadowTxt);
    }

    :global(li) {
      font-size: 1.2rem;
      font-family: "Signika Negative";
      color: var(--textColor);
    }

    :global(.bold) {
      font-weight: bold;
    }

    :global(abbr) {
      text-decoration: none;
      font-style: italic;

      transition-property: color;
      transition-duration: 0.7s;
      transition-timing-function: ease-out;
    }

    :global(abbr:hover) {
      color: var(--primaryColor);
    }

    //marche pas
    // Firefox
    scrollbar-color: var(--secondaryColor);

    //Autre
    ::-webkit-scrollbar-thumb {
      color: var(--secondaryColor);
    }
  }

  /*=============================================
=            HEADER            =
=============================================*/

  header {
    /* Overflow */
    overflow: hidden;
    /* postition */
    position: relative;
    /* dimensions */
    height: 105vh;
    /* background */
    background-image: linear-gradient(
      25deg,
      var(--secondaryColor) 5%,
      var(--primaryColor) 95%
    );

    h1 {
      text-align: center;
      font-size: 4rem;
      color: var(--color);
      font-family: "Marhey";
      align-self: center;
      margin-bottom: 0px;
      text-shadow: 1px 1px 4px var(--shadowTxt);
    }

    h2 {
      color: var(--color);
      font-size: 2rem;
      font-family: "Signika Negative";
    }

    > div {
      /* dimension */
      height: 20vh;
      width: 100%;
      /* background */
      background-color: var(--color);
    }

    #leftPart {
      /* position */
      position: absolute;
      bottom: 0;
      left: -20%;
      /* border */
      border-top-right-radius: 100%;
    }

    #rightPart {
      /* position */
      position: absolute;
      bottom: 0px;
      left: 70%;
      /* border */
      border-top-left-radius: 100%;
    }

    hr {
      width: 60%;
      margin: auto;
      color: var(--color);
    }
  }

  /*=============================================
=            MAIN            =
=============================================*/
  main {
    position: relative;
    margin: 0px;

    > section:not(#competences, #contact, #labo) {
      width: 70%;
      margin: auto;
    }
  }

  #competences {
    width: 70%;
    margin: auto;
    height: 40em;
    color: var(--primaryColor);
    position: relative;
    background-color: var(--color);
    /* valeur par défault: flexWrap = wrap */
    @include Flex(column, flex-start, stretch, nowrap);
    border-radius: 0.2em;
    box-shadow: 1px 2px 3px #111;
  }

  #competences > :last-child {
    position: absolute;
    z-index: -1;
    width: 145%;
    height: 100%;
    top: 0;
    left: -22%;
    background-image: linear-gradient(
      to top,
      var(--secondaryColor) 50%,
      white 80%
    );
    clip-path: content-box ellipse(100% 70% at 50% 100%);
  }
  @media screen and (max-width: 480px){
    #competences>h2{
      font-size: 2rem;
    }
  }

  #apropos {
    background-color: var(--color);
    padding-bottom: 50px;

    div {
      position: relative;
      /* valeur par défault: flexWrap = wrap */
      @include Flex(column, start, start, nowrap);
    }

    img {
      width: 50%;
      background-color: var(--primaryColor);
      border-radius: 100%;
      align-self: center;
    }

    p {
      margin-top: 10px;
      margin-bottom: 10px;
      text-indent: 5%;
    }
  }

  #contact {
    background-image: linear-gradient(
      to bottom,
      var(--secondaryColor) 10%,
      #121212 30%
    );

    > h2 {
      z-index: 10;
      position: relative;
      top: 20px;
      padding: 10px;
      width: fit-content;
      height: fit-content;
      margin: auto;
      border-radius: 5px;
      background-color: white;
      box-shadow: 1px 2px 3px #111;
    }
  }


  /*=============================================
=            LE LABO            =
=============================================*/

  #fondu {
    height: 70vh;
    background-image: url(img/laboStep.svg);
    background-repeat: repeat-x;
    background-position: bottom;
    background-size: auto;
  }
  #labo {
    background-color: var(--laboBackground);

    h2 {
      font-family: "Signika Negative";
      font-size: 3rem;
      color: var(--laboColor);
      text-shadow: 1px 1px 3px var(--laboNeon);
    }

    p {
      color: white;
      margin-bottom: 1em;
      text-align: center;
      width: 80%;
      margin: auto;
      margin-bottom: 1em;
    }

    form {
      border: 1px solid var(--laboColor);
      border-radius: 0.2em;
      box-shadow: 0 0 5px var(--laboNeon), inset 0 0 5px var(--laboNeon);
      /* valeur par défault: flexWrap = wrap */
      @include Flex(column, space-around, center);
      width: 60%;
      height: 8rem;
      margin: auto;
      margin-bottom: 2rem;
      padding-bottom: 0.7em;
      padding-top: 0.7em;
    }

    /* marche pas */
    input:focus-visible {
      box-sizing: border-box;
    }

    input,
    select {
      background-color: var(--laboBackground);
      color: white;
      border: 1px solid white;
      border-radius: 0.2em;
    }

    input:focus,
    select:focus,
    input:hover,
    select:hover {
      box-shadow: 0 0 3px #eee;
      outline: none;
    }
  }

  @media screen and (min-width: 800px) {
    header{
        h1{
            text-align: center;
            font-size: 10em;
            color: var(--color);
            font-family: "Signika Negative";
            align-self: center;
            margin-bottom: 0px;
        }
    
        h2{
            color: var(--color);
            font-size: 3em;
        }
    }

    #labo{
      form{
        /* valeur par défault: flexWrap = wrap */
        @include Flex(row, space-around, center, nowrap);
        height: auto;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    #apropos{
        div{
            display: block;
        }
        
        img{
            float: right;
            width: 25%;
        }
    }
  }

  
  /*=============================================
  =            FOOTER            =
  =============================================*/
  
  footer{
    position: relative;
    background: linear-gradient(50deg, white 10%, var(--primaryColor) 45%, var(--secondaryColor) 95%);
    height: 250px;
    overflow: hidden;

    img{
      width: 100%;
    }

    address{
      font-size: 0.8rem;
      font-family: "Signika Negative";
      color: #1a1a1a;
      position: absolute;
      left: 2vw;
      bottom: 5%;

    }
    li{
      font-size: 1rem;
      padding-right: 20px;
    }
    .nopuce{
      list-style: none;
      opacity: 50%;
    }
    a{
      text-decoration: none;
      color: var(--secondaryColor);
    }
    a:visited{
      color: var(--secondaryColor);
    }
    a:hover{
      color: #1a1a1a;
    }
  }

  @media screen and (min-width:800px){
    footer{
      height: 350px;
    }
  }
  
  @media screen and (min-width:1200px){
    footer{
      height: 450px;
    }
  }
  
</style>
