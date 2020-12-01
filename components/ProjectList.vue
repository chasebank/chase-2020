<template>
  <section>
    <ul id="portfolio--projects">
      <!-- <li v-for="project in projects" :key="project.slug" class="portfolio--project" :class="`project--${project.slug}`">
        <img :src="require(`../assets/images/projects/${project.slug}/project-thumb.jpg?disabled`)" alt="" class="portfolio--project-thumb">

        <div class="portfolio--project-info">
          <h3 class="portfolio--project-title"><nuxt-link :to="{ name: 'portfolio-slug', params: { slug: project.slug }}">{{ project.title }}</nuxt-link></h3>
          <h4 class="portfolio--project-description"><nuxt-link :to="{ name: 'portfolio-slug', params: { slug: project.slug }}">{{ project.description }}</nuxt-link></h4>
        </div>

        <nuxt-link :to="{ name: 'portfolio-slug', params: { slug: project.slug }}" class="portfolio--project-link"></nuxt-link>
      </li> -->

      <li v-for="project in projects" :key="project.slug" class="portfolio--project" :class="`project--${project.slug}`">
        <NuxtLink :to="{ name: 'portfolio-slug', params: { slug: project.slug }}" :title="`${project.title} project details`" class="portfolio--project-link">
          <img :src="require(`../assets/images/projects/${project.slug}/project-thumb.jpg?disabled`)" :alt="`Thumbnail for ${project.title} project`" class="project-thumb">

          <span class="project-info">
            <span class="project-title">{{ project.title }}</span>
            <span class="project-description">{{ project.description }}t</span>
          </span>
        </NuxtLink>
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
  // background-color: magenta;
  @include fullWidth;
  box-shadow: inset 0 0 0 2px cyan;
}

#portfolio--projects {
  display: flex;
  justify-content: space-around;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-left: 0;
  // padding-left: 1.5vw;
  // padding-right: 1.5vw;
  padding-bottom: 1rem;
  margin-bottom: 0;
  list-style: none;
  
  @media (min-width: $smallScreen) {
    padding-right: 2vw;
  }
}

.portfolio--project {
  // background-color: red;
  position: relative;
  display: grid;
  --primaryColor: 3,202,128;
  // --primaryColorDark: 32,0,32;
  
  // $projectColor: red;

  .project-info {
    filter: 
        drop-shadow(.1em .2em .1em rgb(var(--primaryColor)))
        drop-shadow(.1em .2em .4em rgba(var(--primaryColor),.5));
  }
  // filter: drop-shadow(.1em .2em .4em rgb(3,202,128));
  
  &:before,
  &:after {
    display: block;
    content: '';
    grid-area: 1 / 1;
    background-repeat: none;
    background-size: fill;
    z-index: 1;
  }
  
  &:before {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 10' preserveAspectRatio='none'%3E %3Cpath d='M 1 1 L 7 1 L 8 8 C 8 10 7 10 6 10 L 2 10 C 1 10 0 10 0 8' fill='" + rgb(var(--primaryColor)) +  "'/%3E %3C/svg%3E");
    filter: blur(1.5rem);
  }
  
  &:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 10' preserveAspectRatio='none'%3E %3Cpath d='M 1 1 L 7 1 L 8 8 C 8 10 7 10 6 10 L 2 10 C 1 10 0 10 0 8' fill='" + rgb(var(--primaryColor)) +  "'/%3E %3C/svg%3E");
    // filter: blur(.5rem);
    // filter: drop-shadow(.1em .2em .4em rgba(var(--primaryColorDark),.5));
  }
}

.project--feastbeast {
  --projectColor: 250,0,0;
}

.project-link {
  grid-area: 1 / 1;
  position: relative;
  text-decoration: none;
  display: flex;
  pointer-events: none;
  outline: none;
  
  &:focus:before {
    background: white;
    display: block;
    content: '';
    position: absolute;
    --offset: 2px;
    top: calc(var(--offset) * -1);
    left: calc(var(--offset) * -1);
    width: calc(100% + (var(--offset) * 2));
    height: calc(100% + (var(--offset) * 2));
    @include squircle(55);
  }
}

.project-thumb {
  width: 10rem;
  height: 18rem;
  object-fit: cover;
  pointer-events: all;
  @include squircle(50);
}

.project-info {
  position: absolute;
  top: 92%;
  left: -10%;
  width: 120%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  // text-shadow: 0px 0px 1px black;
  // filter: drop-shadow(.1rem .2rem .3rem black);
}

.project-title {
  margin-top: 0;
  margin-bottom: .25em;
  font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
  font-weight: bold;
  text-align: right;
  color: white;
  font-size: 2.1rem;
  line-height: .6;
  text-align: right;
  pointer-events: all;
}

.project-description {
  width: 70%;
  font-size: 1.1rem;
  font-family: 'Montserrat',Arial,Helvetica,sans-serif;
  text-align: right;
  line-height: 1;
  font-weight: bold;
  // color: #03ca80;
  color: rgb(var(--primaryColor));
  pointer-events: all;
}

// .portfolio--project {
//   background-color: #000c16;
//   position: relative;
//   border-radius: 3.1rem;
//   perspective: 100px;
//   margin-bottom: calc(#{$mainPadding} * 1.75);
//   margin-left: 1.5vw;
//   margin-right: 1.5vw;
//   $width: 10rem;
//   width: $width;
//   height: calc(#{$width} * 1.8);
  
//   &:before,
//   &:after {
//     display: block;
//     content: '';
//     position: absolute;
//     bottom: 0;
//     height: 100%;
//     border-radius: inherit;
//     transform: rotateX(2deg);
//     transform-origin: center bottom;
//     z-index: -1;
//   }

//   &:before {
//     left: 0;
//     width: $width;
//   }

//   &:after {
//     left: 5%;
//     width: 90%;
//     height: 50%;
//   }
  
//   @media (max-width: $smallScreen) {
//     margin-bottom: 2rem;
    
//     &:nth-child(2n) {
//       margin-top: 4rem!important;
//     }
//   }
  
//   @media (min-width: $largeScreen) {    
//     &:nth-child(2n) {
//       transform: translateY(4rem);
//     }
//   }
  
//   @media (max-width: $largeScreen) {
//     margin-left: 5%;
//     margin-right: 5%
//   }
// }

// .portfolio--project-thumb {
//   object-fit: cover;
//   object-position: 50% 50%;
//   height: 100%;
//   width: 100%;
//   @include squircle(56);
// }

// // .portfolio--project-thumb {
// //   fill: red;
// //   display: block;
// //   width: 8rem;
// //   height: auto;
  
// //   @media (max-width: $smallScreen) {
// //     width: 10rem;
// //   }
// // }

// .portfolio--project-link {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }

// .portfolio--project-info {
//   // background-color: red;
//   position: absolute;
//   top: 94%;
//   right: -2vw;
//   width: 115%;
// }

// .portfolio--project-title {
//   // background-color: yellow;
//   position: relative;
//   left: -20%;
//   color: white;
//   margin-top: 0;
//   margin-bottom: .25em;
//   font-size: 2.5rem;
//   line-height: .6;
//   text-align: right;
//   width: 120%;
// }

// .portfolio--project-description {
//   margin-top: 0;
//   margin-bottom: 0;
//   margin-left: 10%;
//   text-align: right;
//   font-size: 1rem;
//   font-family: 'Montserrat',Arial,Helvetica,sans-serif;
//   line-height: 1;
// }

// @mixin projectStyles($dark,$light) {
//   &:before {
//     background-color: $dark;
//     filter: drop-shadow(0 0 1rem saturate(lighten($dark,10%),10%));
//   }

//   &:after {
//     background-color: $dark;
//     filter: drop-shadow(0 0 .5rem $light);
//   }
  
//   .portfolio--project-description { color: $light }
// }

// .project--price-log {
//   @include projectStyles(#03925c,#00cc82);
// }
// .project--walk-on-water {
//   @include projectStyles(#574d8e,#f1c4aa);
// }
// .project--aau {
//   @include projectStyles(#075788,#27f4fd);
// }
// .project--feastbeast {
//   @include projectStyles(#653d3d,#fc4141);
// }
// .project--officemax-office-depot {
//   @include projectStyles(#949297,#918d94);
// }
// .project--pga {
//   @include projectStyles(#385118,#9ace38);
// }
</style>