<template>
  <main>
    <div id="content">
      <h1 class="heading--home"><span data-content="Portfolio">Portfolio</span><span>Projects</span></h1>

      <ProjectList/>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

export default {
  mixins: [pageMixin],

  data: () => ({
    title: 'Portfolio',
  }),
}
</script>

<style lang="scss" scoped>

</style>