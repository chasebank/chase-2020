<template>
  <div id="app">
    <TheHeader/>

    <Nuxt />

    <TheFooter/>
  </div>
</template>

<script>
export default {
  data: () => ({
    
  }),

  mounted() {
    document.documentElement.style.setProperty('--scrollbarWidth', `${window.innerWidth - document.documentElement.clientWidth}px`);
  }
}
</script>

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
  
}
</style>
