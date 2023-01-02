<script>
</script>

<!-- gérer les ombres des planêtes par rapport au soleil avec boxshadow inset et l'inspecteur google -->
<div id="galaxy">
  <div class="orbit" id="sun" />
  <a href="https://www.linkedin.com/in/lo%C3%AFc-canin-9b2aa11b4/" target="_blank" rel="noreferrer"
    ><div class="orbit" id="linkedin">
      <section>
        <img src="img/linkedinIcon.svg" alt="linkedin" />
      </section>
    </div></a
  >
  <a href="https://github.com/Frizzus" target="_blank" rel="noreferrer"
    ><div class="orbit" id="github">
      <section>
        <img src="img/githubIcon.svg" alt="github" />
      </section>
    </div></a
  >
  <a href="mailto:loiccanin.pro@gmail.com" target="_blank" rel="noreferrer"
    ><div class="orbit" id="email">
      <section>
        <img src="img/gmailIcon.svg" alt="Gmail" />
      </section>
    </div></a
  >
</div>

<style lang="scss">
  @use "mixin.scss" as *;
  @use "var.scss" as *;

  #galaxy {
    overflow: hidden;
    height: 100vw;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    transform: scale(0.9, 0.9);
  }

  .orbit {
    position: absolute;
    top: 0;
    left: 0;

    section {
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid var(--color);
      box-shadow: 0 0 7px #111;
      box-sizing: border-box;
    }
  }

  .orbit:not(#sun):hover {
    background-color: var(--primaryColor);
  }

  .orbit:not(#sun):hover > section {
    border-color: var(--primaryColor);
  }

  .orbit:not(#sun) {
    border: 2px dotted var(--color);
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    background-color: var(--secondaryColor);
    animation-name: OrbitCircle;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .orbit {
    box-shadow: 0 0 5px #111;
  }

  #sun {
    z-index: 5;
    width: 4vw;
    height: 4vw;
    border-radius: 4vw;
    top: 48vw;
    left: 48vw;
    background-color: var(--color);
  }

  #email {
    z-index: 4;
    width: 20vw;
    height: 20vw;
    border-radius: 20vw;
    top: 39vw;
    left: 39vw;
    animation-duration: 7s;

    section {
      z-index: 5;
      width: 4vw;
      height: 4vw;
      border-radius: 4vw;
      top: 1vw;
      left: 1vw;

      animation-name: OrbitCircle;
      animation-duration: 7s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: reverse;
    }
  }

  #github {
    z-index: 3;
    width: 35vw;
    height: 35vw;
    border-radius: 35svw;
    top: 35vw;
    left: 35vw;
    animation-duration: 9.5s;

    section {
      z-index: 4;
      width: 6vw;
      height: 6vw;
      border-radius: 6vw;
      top: 2vw;
      left: 2vw;

      animation-name: OrbitCircle;
      animation-duration: 9.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: reverse;
    }
  }

  #linkedin {
    z-index: 2;
    width: 60vw;
    height: 60vw;
    border-radius: 60vw;
    top: 22vw;
    left: 20vw;
    animation-duration: 19s;
    animation-direction: reverse;

    section {
      z-index: 3;
      width: 18vw;
      height: 18vw;
      border-radius: 18vw;
      transform: translate(-9vw, -9vw);

      animation-name: OrbitCircle;
      animation-duration: 19s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  @keyframes OrbitCircle {
    from {
      transform: rotateZ(0deg);
    }
    25% {
      transform: rotateZ(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
