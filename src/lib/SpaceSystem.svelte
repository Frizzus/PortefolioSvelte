<script>
</script>

<!-- gérer les ombres des planêtes par rapport au soleil avec boxshadow inset et l'inspecteur google -->
<div id="galaxy">
  <div class="orbit" id="sun" />
  <div class="orbit" id="linkedin">
    <section>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src="favicon.svg" alt="linkedin">
      </a>
    </section>
  </div>
  <div class="orbit" id="indeed">
    <section>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src="favicon.svg" alt="indeed">
      </a>
    </section>
  </div>
  <div class="orbit" id="email">
    <section>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src="favicon.svg" alt="Gmail">
      </a>
    </section>
  </div>
  <div id="plandiag">
    <div class="orbit" id="github">
      <section>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src="favicon.svg" alt="github">
        </a>
      </section>
    </div>
  </div>
</div>

<style lang="scss">
  @use "mixin.scss" as *;
  @use "var.scss" as *;

  #galaxy {
    overflow: hidden;
    height: 100vw;
    position: relative;
  }

  a{
    display: block;
    width: 100%;
    height: 100%;
  }

  img{
    width: 100%;
    transform: scale(0.9, 0.9);
  }

  .orbit {
    position: absolute;
    top: 0;
    left: 0;

    section {
      position: absolute;
      top: 50%;
      left: 0;
      border: 1px solid var(--color);
      box-shadow: 0 0 7px #111;
      box-sizing: border-box;
    }
  }

  .orbit:not(#sun) {
    border: 2px dotted var(--color);
  }

  .orbit:not(#github, #sun) {
    background-color: var(--secondaryColor);
    animation-name: OrbitCircle;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .orbit:not(#github) {
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
    top: 40vw;
    left: 40vw;
    animation-duration: 7s;

    section {
      z-index: 5;
      width: 4vw;
      height: 4vw;
      border-radius: 4vw;
      transform: translate(-2vw, -2vw);
    }
  }

  #indeed {
    z-index: 3;
    width: 30vw;
    height: 30vw;
    border-radius: 30vw;
    top: 35vw;
    left: 35vw;
    animation-duration: 9.5s;

    section {
      z-index: 4;
      width: 6vw;
      height: 6vw;
      border-radius: 6vw;
      transform: translate(-3vw, -3vw);
    }
  }

  #linkedin {
    z-index: 2;
    width: 60vw;
    height: 60vw;
    border-radius: 60vw;
    top: 20vw;
    left: 20vw;
    animation-duration: 19s;
    animation-direction: reverse;

    section {
      z-index: 3;
      width: 18vw;
      height: 18vw;
      border-radius: 18vw;
      transform: translate(-9vw, -9vw);
    }
  }

  #plandiag {
    position: absolute;
    top: 0;
    left: 0;
    transform: skew(0deg, 15deg);
  }

  #github {
    z-index: 1;
    width: 106vw;
    height: 106vw;
    border-radius: 106vw;
    top: -10vw;
    left: -10vw;
    animation-name: OrbitCircle;
    animation-duration: 60s;
    animation-direction: reverse;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    section {
      z-index: 2;
      width: 8vw;
      height: 8vw;
      border-radius: 8vw;
      top: calc(50% - 4vw);
      left: -4vw;
    }
  }

  @keyframes OrbitCircle {
    from{
        transform: rotateZ(0deg);
    }
    25%{
        transform: rotateZ(90deg);
    }
    50%{
        transform: rotate(180deg);
    }
    75%{
        transform: rotate(270deg);
    }
    to{
        transform: rotate(360deg);
    }
}
</style>
