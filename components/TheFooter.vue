<template>
  <footer>

  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  // background-image: url('~assets/images/personal-site--footer.png');
  // background-position: bottom center;
  // background-size: cover;
  // background-repeat: no-repeat;
  min-height: var(--headerHeight);

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-image: url('~assets/images/personal-site--header.png');
    background-position: top left;
    background-size: cover;
    background-repeat: no-repeat;
    // background: red;
    mask-image: url('~assets/images/personal-site--header-mask--alpha--noise.png');
    mask-size: cover;
    transform: rotate(180deg);
  }
}
</style>