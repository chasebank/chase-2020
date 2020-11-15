<template>
  <main>
    <div id="content">
      <h1 class="heading--home"><span data-content="CHASE">CHASE</span><span>WHITESIDE</span><span>Designer</span><span>Developer</span></h1>

      <h2>
        <span data-content="Portfolio">Portfolio</span><span>Projects</span>
      </h2>

      <h2 class="heading--link">
        <nuxt-link to="/portfolio" class="page-link" title="View my portfolio page"><span data-content="Portfolio">Portfolio</span><span>Projects</span></nuxt-link>
      </h2>

      <ProjectList/>

      <h3>
        This is a Heading 3
      </h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita beatae consequatur id commodi, aut numquam repudiandae iure, sequi fugit eaque animi <a href="">optio aperiam impedit officiis</a> similique laborum eum dignissimos. Est, impedit quis. Minima!
      </p>

      <h4>
        This is a Heading 4
      </h4>

      <ul>
        <li>This is a list item</li>
        <li>This is a list item</li>
        <li>This is a list item</li>
        <li>This is a list item</li>
      </ul>

      <!-- <LongContent/> -->
    </div>
  </main>
</template>

<script>
import pageMixin from '~/mixins/page-mixin.vue'

export default {
  mixins: [pageMixin],

  async asyncData ({ $content, params }) {
    const projects = await $content('projects', params.slug)
        .only(['title'])
        .fetch()

    return {
      projects
    }
  },

  data: () => ({
    
  }),
}
</script>

<style lang="scss">
button {
  background: cyan;
}
</style>
