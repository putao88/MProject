<template>
  <div class="home-wrap">
    <!-- <home-header /> -->
    <!-- <img class="myheroes-bg" src="@/assets/home/myheroes-bg.jpg"> -->
    <div class="home-bottom-wrap">
      <div class="home-bottom">
        <div class="menu-btns">
          <div class="menu-btn btn-hero disabled">
            <img src="@/assets/home/recruit.png" />
          </div>
          <div class="menu-btn btn-hero" @click="goTo('myheroes')">
            <img src="@/assets/home/myheroes.png" />
          </div>
          <div class="menu-btn btn-hero" @click="goTo('myreserve')">
            <img src="@/assets/home/myreserve.png" />
          </div>
          <div class="menu-btn btn-hero" @click="goTo('upgrade')">
            <img src="@/assets/home/upgrade.png" />
          </div>
          <div class="menu-btn btn-hero" @click="goTo('market')">
            <img src="@/assets/home/market.png" />
          </div>
          <div class="menu-btn btn-hero" @click="goTo('battlelog')">
            <img src="@/assets/home/battlelog.png" />
          </div>
          <div class="menu-btn btn-hero" @click="goTo('gitbook')">
            <img src="@/assets/home/gitbook.png" />
          </div>
        </div>
        <div class="btn-hero btn-fight" @click="goTo('fight')">
          <img src="@/assets/home/fight.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Home',
  data() {
    return {}
  },
  methods: {
    goTo(path) {
      if (path === 'gitbook') {
        window.open("https://bnbheroes.gitbook.io/bnbheroes/")
        return
      }
      if (path === 'upgrade') {
        return
      }
			this.$router.push({ path: path})
    }
  }
}
</script>

<style lang="scss" scoped>
.home-wrap {
  width:100%;
  height: 100%;
  overflow: hidden;
  background-color: #4f473e;
}
.home-bottom-wrap {
  width:100%;
  position: absolute;
  bottom: 10px;
}
.home-bottom {
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.menu-btns {
  flex-wrap: nowrap;
  align-items: flex-end;
  display: flex;
}
.menu-btn {
  padding: 0 10px;
  align-self: auto;
  margin:0.25rem;
  cursor: pointer;
  img {
    height: 120px;
  }
}
.btn-hero:hover {
  margin-bottom: 15px;
  transition: all .1s;
}
.menu-btn.disabled {
  pointer-events: none;
  opacity: .65;
}
.btn-fight {
  img {
    width:150px
  }
}
</style>