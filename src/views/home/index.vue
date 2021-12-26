<template>
  <div class="home-wrap">
    <div class="town-container">
      <img class="town town-bg" src="@/assets/home/background.jpeg" alt="town-bg" />
      <img class="town town-bg" src="@/assets/home/1-1.png" alt="town-bank" />
      <img class="town town-bg" src="@/assets/home/2-1.png" alt="town-inn" />
      <img class="town town-bg" src="@/assets/home/3-1.png" alt="town-barracs" />
      <img class="town town-bg" src="@/assets/home/4-1.png" alt="town-ground" />
      <img class="town town-bg" src="@/assets/home/objects.png" alt="town-objects" />
    </div>
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
          <div class="menu-btn btn-hero" @click="goTo('battlelogs')">
            <img src="@/assets/home/battlelog.png" />
          </div>
          <div class="menu-btn btn-hero" @click="goTo('gitbook')">
            <img src="@/assets/home/gitbook.png" />
          </div>
        </div>
        <div class="btn-hero btn-fight pe-lg-5" @click="goTo('fight')">
          <img src="@/assets/home/fight.png" />
        </div>
      </div>
    </div>
    <Upgrade @closeModel="closeModel" v-if="showUpgrade" />

  </div>
</template>

<script>
import Upgrade from './components/upgrade'
export default {
  name: "Home",
  components: {Upgrade},
  data() {
    return {
      showUpgrade: false
    };
  },
  methods: {
    goTo(path) {
      if (path === "gitbook") {
        window.open("https://bnbheroes.gitbook.io/bnbheroes/");
        return;
      }
      if (path === "upgrade") {
        this.showUpgrade = true
        return
      }
      this.$router.push({ path: path });
    },
    closeModel() {
      this.showUpgrade = false
    }
  }
};
</script>

<style lang="scss" scoped>
.home-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #4f473e;
}
.home-bottom-wrap {
  width: 100%;
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
  margin: 0.25rem;
  cursor: pointer;
  img {
    height: 120px;
  }
}
.btn-hero:hover {
  margin-bottom: 15px;
  transition: all 0.1s;
}
.menu-btn.disabled {
  pointer-events: none;
  opacity: 0.65;
}
.btn-fight {
  img {
    width: 150px;
  }
}
.town-container {
  left: 0;
  right: 0;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  width: inherit;
}
.town-container,
.towns {
  position: absolute;
  top: 0;
  bottom: 0;
}
.town {
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
}
@media (max-width: 1600px) {
  .town {
    width: auto;
  }
}
</style>