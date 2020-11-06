<template>
  <div id="app">
    <header>
      <canvas id="stars"></canvas>
    </header>

    <Nuxt />

    <footer>

    </footer>
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
}

body {
  background-image: url('~assets/images/personal-site--bg.jpg');
  --headerHeight: 21.5vw;
  background-size: calc(var(--headerHeight) * .79);
  background-attachment: fixed;
  overflow-x: hidden;
  // force scrollbar to prevent content jump
  overflow-y: scroll;
  
  @media (max-width: $smallScreen) {
    --headerHeight: 65vw;
  }
}

body,
#__nuxt,
#__layout,
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

#app {
  // background-color: red;
}

header {
  position: fixed;
  top: 0;
  width: var(--innerVW);
  background: url('~assets/images/personal-site--header.png') no-repeat top left;
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: var(--headerHeight);
  
  canvas {
    // background-color: red;
    position: absolute;
    width: 100%;
    height: 100%;
    mask-image: url('~assets/images/personal-site--header-mask--alpha.png');
    mask-size: cover;
    opacity: .75;
    // mix-blend-mode: overlay;
  }
}

main {
  flex-grow: 1;
  // keep over fixed pos header
  z-index: 1;
  
  display: grid;
  place-items: center center;
  //
  // DEBUG
  //
  // display: none;
}

#content {
  // background-color: cyan;
  width: calc(100% - 3rem);
  max-width: 40rem;
}

section {
  // background-color: yellow;
  display: block;
}

footer {
  background-image: url('~assets/images/personal-site--footer.png');
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: var(--headerHeight);
}
</style>
