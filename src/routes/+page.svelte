<script>
    import Gallery from "../lib/Gallery.svelte";
    import Navbar from "../lib/Navbar.svelte";
    import SpaceSystem from "../lib/SpaceSystem.svelte";
</script>

<header>
  <Navbar />
  <h1>Loïc Canin</h1>
  <hr />
  <h2>Développeur Web FullStack créatif et innovant !</h2>
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
        Développeur web. Curieux et Innovant, j’accorde beaucoup d’importance à
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

    <div />
  </section>
  <section id="contact">
    <h2>Me Contacter</h2>
    <SpaceSystem/>
  </section>
  <section id="labo">
    <div id="fondu" />
    <h2>Le Labo</h2>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia
        modi aut rem beatae omnis neque nulla maxime esse pariatur illum, rerum
        suscipit eius dolorem delectus consequatur natus atque vitae.
        Perspiciatis nulla labore nesciunt dolor, sint quaerat voluptates,
        inventore cumque dolorum ipsum, beatae corrupti doloribus amet maiores
        doloremque repudiandae. Culpa harum obcaecati voluptas impedit quod
        iusto officiis aut quos repellat.
      </p>
      <form action="index.php" method="post" name="labo">
        <input type="text" name="motclef" id="recherche" value="default" />
        <select name="trie" id="tri">
          <option value="lexi">Ordre lexicographique</option>
          <option value="decroissant">Du plus vieux au plus jeune</option>
          <option value="croissant">Du plus jeune au plus vieux</option>
        </select>
        <input type="submit" value="Trier" />
      </form>
      <Gallery/>
    </div>
  </section>
</main>
