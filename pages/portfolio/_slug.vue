<template>
  <main>
    <div id="content">
      <h1>{{ project.title }}</h1>
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

export default {
  mixins: [pageMixin],

  async asyncData ({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return {
      project
    }
  },

  data: () => ({
    title: 'Portfolio',
  }),
}
</script>

<style lang="scss" scoped>

</style>