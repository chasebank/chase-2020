<template>
  <main>
    <div class="content">
      <Logo />

      <h1 class="title">
        chase-2020
      </h1>

      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>

      <!-- <LongContent/> -->
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

export default {
  mixins: [pageMixin],

  data: () => ({
    title: 'hero there',
  }),
}
</script>

<style lang="scss">
  
</style>
