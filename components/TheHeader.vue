<template>
  <header>
    <canvas id="stars"></canvas>
  </header>
</template>

<script>
import { gsap } from "gsap"

export default {
  mounted() {
    // https://stackoverflow.com/questions/30492259/get-a-random-number-focused-on-center
    function weightedRandom(max, numDice) {
      var num = 0;
      
      for (var i = 0; i < numDice; i++) {
        num += Math.random() * (max/numDice);
      }
      
      return num;
    }


    
    const canvas = document.getElementById(`stars`),
          scale = window.devicePixelRatio,
          ctx = canvas.getContext(`2d`),
          ctxWidth = canvas.scrollWidth * scale,
          ctxHeight = canvas.scrollHeight * scale;

    canvas.width = ctxWidth;
    canvas.height = ctxHeight;

    ctx.scale(scale, scale);



    function createTile(x, y, size, fill) {  
      let time = gsap.utils.random(40, 200) * scale;
      
      if (Math.random() < .75) {
        x = Math.random() < .75 ? weightedRandom(ctxWidth * .3, 2) : weightedRandom(ctxWidth * .5, 2)
      }
      
      let tile = {
        x: x,
        y: ctxHeight,
        fill: fill,
        render: function(ctx) {
          ctx.fillStyle = this.fill;
          ctx.fillRect(this.x, this.y, size, size);
        }
      };
      
      tile.tl = gsap.timeline({
          repeat: -1
        }).to(tile, {
          y: ctxHeight * -1,
          ease: `none`,
          duration: time,
        }).progress(Math.random())
      
      return tile;
    }



    let tiles = []

    for (let i = 0; i < (ctxWidth * 10) * scale; i++) {
      let size = Math.random() > .95 ? 1 : gsap.utils.random(.4, 1, .1);
      // let color = Math.random() > .8 ? `yellow` : `cyan`;
      let tile = createTile(gsap.utils.random(0, ctxWidth), 0, size, `#00647c`);
      tiles.push(tile)
    }



    gsap.ticker.add(render)
    
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < tiles.length; i++) {
        let tile = tiles[i];
        tile.render(ctx)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: grid;
  position: fixed;
  top: 0;
  width: var(--innerVW);
  min-height: var(--headerHeight);
  mask-image: url('~assets/images/personal-site--header--alpha.png');
  mask-repeat: no-repeat;
  mask-size: cover;
  mask-position: 0% -1.25rem;

  &:before {
    display: block;
    content: '';
    background-image: url('~assets/images/personal-site--header--alpha.png');
    background-position: top left;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
}

header:before,
canvas {
  width: 100%;
  height: 100%;
  grid-area: 1 / 1;
}

canvas {
  mask-image: linear-gradient(to top, black 20%, rgba(black,.75));
}
</style>