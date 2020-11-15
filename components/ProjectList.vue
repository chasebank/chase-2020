<template>
  <section>
    <ul>
      <li v-for="project in projects" :key="project.slug" :class="project.slug">
        <nuxt-link :to="{ name: 'portfolio-slug', params: { slug: project.slug }}" class="portfolio--project-link">{{ project.title }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default { 
  async fetch() {
    this.projects = await this.$content(`projects`)
      .only([`slug`,`title`,`description`])
      .fetch();
  },

  data: () => ({
    projects: null
  }),
}
</script>

<style lang="scss" scoped>
section {
  background-color: magenta;
  @include fullWidth;
  box-shadow: inset 0 0 0 2px cyan;
}

ul {
  list-style: none;
  padding-left: 0;
}
</style>