<template>
  <div class="fight-wrap container-wrap">
    <img class="static-bg" src="@/assets/fight/Village.jpg" alt="fight-background" />
    <div class="page-title">Chapter 1: Enemy at the gates</div>
    <div class="fight-body-wrap">
      <!-- 自选英雄 -->
      <div v-if="heroDataList.length" class="hero-container-wrap">
        <div class="choose-title">Choose Hero</div>
        <div class="hero-container">
          <div class="left-arrow"  @click="previous('curHeroIndex','heroDataList')"></div>
          <div class="hero-item" style="min-width:300px;height:620px">
            <HeroCard :heroInfo="heroDataList[curHeroIndex]" />
          </div>
          <div class="right-arrow" @click="next('curHeroIndex','heroDataList')"></div>
        </div>
      </div>

      <!-- 敌人主要内容 -->
      <div class="fight-body">
        <div class="fight-container">
          <div class="fight-tab">
            <div @click="switchTo(true)" :class="{ active: active }">
              <img src="@/assets/fight/icon-tab1.png" alt />
              <span>Basic Enemy</span>
            </div>
            <div @click="switchTo(false)" :class="{ active: !active }">
              <img src="@/assets/fight/icon-tab2.png" alt />
              <span>Boss Fight</span>
            </div>
          </div>

          <div v-show="active" class="enemy-selection fight-block-one">
            <div class="enemy-item">
              <div class="left-arrow" @click="previous('curTierIndex1','tierList1')"></div>
              <FightCard :enemyInfo="tierList1[curTierIndex1]" :heroInfo="heroDataList[curHeroIndex]" />
              <div class="right-arrow" @click="next('curTierIndex1','tierList1')"></div>
            </div>
            <div class="enemy-item">
              <div class="left-arrow" @click="previous('curTierIndex2','tierList1')"></div>
              <FightCard :enemyInfo="tierList2[curTierIndex2]" :heroInfo="heroDataList[curHeroIndex]" />
              <div class="right-arrow" @click="next('curTierIndex2','tierList2')"></div>
            </div>
          </div>
          <div v-show="!active" class="enemy-selection fight-block-two">
            <BossFight  :bossList="bossList" :heroInfo="heroDataList[curHeroIndex]" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import FightCard from "./components/FightCard";
import BossFight from "./components/BossFight";
import HeroCard from "@/components/HeroCard";
import { mapState } from 'vuex'

export default {
  name: "fight",
  components: { FightCard, BossFight, HeroCard },
  data() {
    return {
      active: true,
      curHeroIndex:0,
      curTierIndex1:0,
      curTierIndex2:0,
      heroDataList:[],
      tierList1:[
        {tokenId:0, name:'Red Skull 1',imgurl:'@/assets/fight/card.png',power:'70%',bnb:0.00235125, xp: 100 },
        {tokenId:1, name:'Red Skull 2',imgurl:'@/assets/fight/card.png',power:'67%',bnb:0.0028215, xp: 110 },
        {tokenId:2, name:'Red Skull 3',imgurl:'@/assets/fight/card.png',power:'63%',bnb:0.00329175, xp: 120 },
      ],
      tierList2:[
        {tokenId:3, name:'Red Skull Archer',imgurl:'@/assets/fight/card.png',power:'59%',bnb:0.003762, xp: 130 },
        {tokenId:4, name:'Red Skull Assasin',imgurl:'@/assets/fight/card.png',power:'55%',bnb:0.00423225, xp: 150 },
        {tokenId:5, name:'Red Skull 1',imgurl:'@/assets/fight/card.png',power:'51%',bnb:0.0047025, xp: 200 },
      ],
      bossList:[
        {tokenId:6,name:'Boss 2',imgurl:'@/assets/fight/card.png',power:'0%',bnb:1, xp: 2000, description:'' },
        {tokenId:7,name:'Zangrief',imgurl:'@/assets/fight/card.png',power:'0%',bnb:0.0172425, xp: 400, description:'Your squad spots ZANGRIEF at the stronghold gates charging towards them. Defeat Him in order to claim the stronghold once and for all!' },
      ],
    };
  },
  computed:{
    ...mapState([
      'heroDatas'
    ]),
    unlockBtnClass: function () {
      const isYellow = this.heroDataList[this.curHeroIndex].xp > (this.heroDataList[this.curHeroIndex].level*1000+999)
      return {
        'unlock-btn': true, 
        'btn': true,
        'disabled': !isYellow,
        'btn-dark': !isYellow,
        'btn-yellow': isYellow,
      }
    }
  },
  watch: {
    "$store.state.heroDatas": {
      handler(newValue,oldValue) {
        this.heroDataList = newValue.filter(item => item.arrivalTime === '0')
      },
      immediate: true,
      deep: true,

    },
  },
  mounted() {
    const tokenId = this.$route.query.tokenId || -1
    for (let i=0; i< this.heroDataList.length; i++) {
      if (tokenId === this.heroDataList[i].tokenId) {
        this.curHeroIndex = i
        return
      }
    }
  },

  methods: {
    switchTo(active) {
      this.active = active;
    },
    // 上一张卡片
    previous(key,list) {
      let newIndex = 0
      if (!this[list].length) return
      if (this[key] === 0) {
        newIndex = this[list].length - 1
      } else {
        newIndex = this[key] - 1
      }
      this[key] = newIndex
    },
    // 下一张
    next(key,list) {
      let newIndex = 0
      if (!this[list].length) return
      if ((this[key] + 1) === this[list].length) {
        newIndex = 0
      } else {
        newIndex = this[key] + 1
      }
      this[key] = newIndex
    }
  }
};
</script>

<style lang='scss' scoped>
.left-arrow, .right-arrow {
  width: 30px;
  height: 45px;
  cursor: pointer;
  min-width: 30px;
}
.left-arrow {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAA0CAYAAAAJ4SEAAAAABHNCSVQICAgIfAhkiAAABrBJREFUWEfFWXtMlWUcPtzvJVcJiYgwS0RMLi0ygtHWFEpUvMAc0KotrEnwj3NjJGP6h41BfyhrOpEYl3kHhulYRmKxZRM1HB1cSmoSgqAInUKInufse8/OORzO9TuHb/vtfO/3vt/7Pt/v8vx+73ucFAt7LcLyRZACSCRkAFIN+YqwnBYQ2xdY+3MIAepfR/Hgg4UAl4+F90iaUoSGht5oaWnxS0pKCqqoqOgpKytbgb5nIWmOBJeKBakt/io8PDz6Ghsbxzdu3Pi6ttq2bt168dixYyk0rSPA0ZcIqkDtR05O47t37+7eu3fvu4Zc6sSJE5c2b968Bn0/2Bucjl9lZWV1HDlyJMnf359mM3hVVVV1l5SUvIHOFnuBy8LkVcKvIiMjf+7o6AiNjo6OmA+UeA6tKaG9ZWiXyw2OJqwVfuXl5aVsampSrV+/fpUpUKI/IyPj6tmzZzn+S7nACb7aI/yquLhYWVlZGY+2s7nAOC49Pf3HCxcuvInbGjnAkRpInGq+yszMvFJfX7960SJD9GUaJqjl9tDQ0IsY+Zkt4Kh6+lUqlwwJCfm1vb09NCEhIdg0hPlHBAYG3hwdHV2KEZ9YA26OCUEL/aCHBFtAiXf9/Pz6JiYmXkU7z1JwOlGYlpZ28eTJk3HGqMFSwM7OzhOzs7O+eC/RXHA6UQgwA+fPn/dITEx8ztLFTY0HSYshr5gDTkOk+KonpaWlw+Xl5VGmFrG2XwtcsDFwdHQ6vJqj4uLilJ2dnVGIQjdrFzb13vT0tMrNzc1LGmcQHB1eaEvh7u5+/8yZM0/Xrl37gqnJbe2fmpoaR0HwzHzgqC0yPH1MsW3btks1NTVrrOUsS8GqVKoRb2/vIOk9d22zElQBO3x8fPrB0p6osUzmQksBGBvf29s7EhsbS3APIIsFuO/RoNYe79ix4+qBAwfewr1FaUcOkHCf4Q0bNpDEeyGxBEdt1TISu7u7H0Fbz8uxkDVznDp1anDTpk2kJw24TjTe3rdv3y9ysbw1wPjO8ePH72zZsoWupAE3yw6w8iTdzdqJ5Xivubn5Vk5ODjl0DjiCNIeU5cBhcA7sHQawh4hE53VIHMGozYqdzx9gf7tzmbEvQ56+m52dTZ/vgawmuBJIJQLi766uLlVycnKg3VRjYuLTp08PYjfGgNCAS0bjawj3i5P5+fm/19bWrkCOcziVtLa2PkBJH6IN7j0pED7E7zv8ONRUNzHQLzU1NdSRWuzr6xtevnw5eW4QEkazEpy4uMH9GEL0LLmvt7W1rXQUQOTWh8itwq3UxRPNygdPqDRJizn4fZ+gXFxcRrDXHMvLy2PpbNcLVck4qhKR+NXgGB0si6YhMxAPCQF9kFrkZkOBPec1lExhS5YssWmPYOzrZmZmVK6urqJk0pSdQntP8fJjSZOC84QWSdCThYWFNw4ePJhkLxVqFZsacCwgqalwadFH+HWHeEtt+iCPqzhG4evr2w/CdEGN95LcIA2BE2uQY2IgQrUjuBf1FcfoBEx8fPwV7M6XYltIX5XlIt8ilVIp/obSFbXIswq1r+FSQf6FiF0yzasJGNxPFhUV9eMAZiW+2sVWhKQxbA0ZfEbP56gxalFED7VIYEKrBM+AUZsaBaoSVQVNHW0LwICAgFtjY2NM/mYdHlKLHOwKYcCMQhZrAUjH/UcScAUq2cvnzp2LCgsLsyoN4jjiDo4jWDaZBY446AOkG7EgA4YuIc7Z5ph6586dv1VXV6+y1NTYqF8GZSVibouPwPQDZljyRbFd1DE1jsDuHT58eCo3N9fsfS6y0jWcucRh3gpr6jf9gKGpqUn6qJhPJ6ojIiKUiOrAmJgY7cg36JqohG/Ad+nrNp3P0aScxJipmQIpagJft27dzbq6umVBQUEiqOYA3L9/f8+uXbteQ8e31mhOf0KmP0YsA4bXkOSLnlKbBE7qYeAowGPD8Mc/QT0GTzsBvregoIDz/SQHOK5pjqm5YK70IQpPT8+7hw4d+mf79u06BQUq4auoiAn8G7nACW3qm3oCHf9BBFdyHDVITarLsvDwcGVDQ0NASkpKMEx6HyZltqFYfD6nb9L52vpRzYChmYWp6YPa/qg/z3d48KncmtNehKYmhWgTOCsef4hIc4IfqU3e8xiiCUJwf9kTnABKAmeWERUPczXNPV9dyAwUAHnoCHACJDnuZYigHgJkcav/b44Ad9uR4ARIUg81KbhuTPJFtnnqwDqSLtG9EOAIUt8ftX2V9/cgPQsFToAR/EhtksTpj7ckWdizEX116bf/B1x9xpozOxIAAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
}
.right-arrow {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAA0CAYAAAAJ4SEAAAAABHNCSVQICAgIfAhkiAAABspJREFUWEfNWXtIlWccLnA4N+dl6Ww3nO3a5pYrps2NTcoMFJkXtIYJKomJQ+YfQwhLpaIh/dFQSnIjHbJcZIhECiKWW9OmzkuZnWOeWVNMLa/z7nTPc/a+h9Pp6PnO6XP6g4f3u7zf+z7n+f3e33s569f9Zy5AJhAnrltQngSKxPtVKdYLMjUofcww6MazNKBsNdiRXBZVs7e37ygpKZkKCwvbevbs2RsHDhzYMDs7+5IgdUWQpKL/m5FcM1W7dOmSNiQk5C3jng8ePFh5/Pjxj/HMWTwvRJkNUNEVN5JbZC+Li4vjKJ4z7XF4ePjhvn376i9fvhwi3o2gZDyS5IoaybEz5/swDw+PjUv11tnZqdu1a9fg3bt3/UQdqrei8UhyV4HPLly40BcZGfmiJSnKy8tb9+zZYz89Pf2OqHtFkFQ9HknuOuBbXFx8OyYmRnZoieO6zMzMmiNHjmxDODiJytLV9IQqZhgQBQUFzfv37//QmlYRj6NRUVE3qqurPzWKx69xrUp+JLmfgC/Rye3z588rVs74RzQ0NAyEh4cP9fb2qupqkisGYkJDQ1sRT1usUc60bmFh4a3ExETn+fn5l9VwNcn9ACQEBgZer6qqkiPRZo5w9XRCQsKvZWVlgU/qapJLB7719PTs6O7u3mwzK5MPtVpth5+f39TIyMhWW0c1yaUAeW5ubncGBwffUIucbCcjI6Pq2LFjvriXs0wWrr8DLI5qkosFfnRxcdHCJY9MX2oRHRoa6t+9e3dTY2NjsGizG2U8cGW5PgzknJ2dNXDB22oRMtcO4vCPvXv3OszMzMjw4WqHJM2qaCDn5OR0e3R01KZUYuUPmk1KSqo9c+bMR8LVJCZd/UhTJBcBlDo6OnaMj4+rNiAsEe7q6urz9/d/MDAw8L7RgKGKdLneSC4AqMF6rhvz5WuWGlX7/enTp39JSUnZIqZBqsjFRKEk54aLQd6ggtp9K2oPA3E4ICCgva2tTU6DJHiSyq06OfkLcnJyWtLT0+V2wWtNkSNJHx+fa62trZ/QvWuO3KlTp64iBj8Huaskx8ytzzOrFXPGgYl15W+xsbH+kpye11oh5+3t3dHe3s6Ulk3l1gy57OxsTVZWlpylNq8JckjEE9iWajH3ypX4OSiWYUjCDg4OmsnJyRWdW80lvRMnTnQgfbgtLCy4i/dcsVQDDw3kMH11Yvp6U1HWVKFSX1/fsK+v70BPT48U5E8mXqAR2PAIOUz8dzDxq76eM/0dyAjz8fHxt4qKil7Hu2eBCYBuLBd1h1A+D2gNymHJ1IUlEz9YMauoqLiDjdQ/ExMTUq2bQq0B0ekoSrkorTaQc3V11WFRuGklmPX394/ggOhmfX29nDtJpgDgnpk2BzDXyrjT4lpDcl8AZe7u7l0YNaord/jw4YajR496wp0vCCJ0H91Id9KGgacBB3HfjlLHa5L7Csj18vLS6HQ61UZrU1PTvR07dsyMjY3JQUYXUi0GPm0GmARcxf0YSh5p0LV6I7kc4Bus8X+vrKzkRuSJjC6Mjo7W1NbWym2macBzNnoIMLaeAuYBDaBXy9gM5CIiItpKS0s/sJUZ8tT8oUOHGnGet8nIhcxX3wPShVSF5HjMSyNJqkUFHzOSywewrE9qz8/Pf88WcnV1dZqdO3eum5qaMs5ZdCFdSZsVROQp1hTuGVt9y/VHctcAfxy1tsXFxVmlHBMpph1dc3PzNtGJqQv5uB/gSZQMeMYc3cgRuqyRXB2wHefBXTh3UzxaU1NTm3Jzc7lbYyKlmY5CnpQuADJv0YVUyxDwSsjpz+dwiHMfhzlLnmzKhnBYo0lOTn4Gm6FXxTPTUUgXMsvLtpYMeCXk9Gu5ubm5ETs7Oxmoj33X0tLSGxwcPAZXyu0jEynzFYOeRpX4jEpJF/bgmuQtutAcUbp12YUm4wq7dKaG7aIBxhVdSMhRyOzOdoxzFl34wJI6y70nOY6YjRcvXuzBAeArxpWxlm/Amv5dPJNxRZWolpwLmUgZQzL72+zCpZT7GS+isZ67h7MM96CgIIe8vDxdWlqaEw4BuW2k0TU8AZWpgc9IkEoxkdIUj0KlalK5IIC5zsvMR6YTNKtwLiQhR1Hf6lFoDblQVKbbEgDuenhNUjKuZFuML7qRay0aEynz1V9KO7O2HpUjueWMhKiWcWrgPEjYNAqVkiQ5nt1y6FMZGfjye2Z3KiXjiqmBapmdC5V2qrQeyXkDjLe/Aa6r7ACOQHtxz7YYV1wAPlFqUEpK1iM5qsJYk//EGLehaIK2tlOl9eW+lQSpIOOKypGUjCulbaleT5JTvWE1GvwXvBid0h9VuJgAAAAASUVORK5CYII=);
  background-size: 100% 100%;
}
.fight-body-wrap {
  max-width: 1400px;
  margin: auto;
  padding: 1rem;
  flex-wrap: nowrap;
  justify-content: space-around;
  display: flex;
  .hero-container-wrap {
    padding-bottom: 3rem;
    align-items: center;
    flex-direction: column;
    display: flex;
    .choose-title {
      text-shadow: black 2px 2px;
      font-size: 1.75rem;
      --bs-text-opacity: 1;
      color: rgba(255,255,255,1);
    }
    .hero-container {
      align-items: center;
      justify-content: center;
      width: 100%;
      display: flex;
      .hero-item {
        background-color: #282334;
        border: 3px solid #000;
        border-radius: 10px;
        padding: 10px;
        margin: 0.5rem;
        width: 15%;
        min-width: 250px;
      }
    }
  }
  .fight-body {
    .fight-container {
      max-width: 850px;
      min-height: 620px;
      margin: auto;
      .fight-tab {
        .active {
          background: rgba(70, 64, 85, 0.9686274509803922);
          border-radius: 10px;
        }
        border-radius: 10px;
        border: 1px solid #000;
        width: 380px;
        display: flex;
        background: rgba(40, 35, 52, 0.9686274509803922);
        > div {
          display: flex !important;
          align-items: center;
          color: #fff;
          cursor: pointer;
          padding: 10px 22px;
          width: 50%;
          img {
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }
          &:hover {
            background: rgba(70, 64, 85, 0.9686274509803922);
            border-radius: 10px;
          }
        }
      }
      .enemy-selection {
        background-color: rgba(40,35,52,.8313725490196079);
        border: 3px solid #000;
        padding: 1rem;
        border-radius: 10px;
        max-width: 850px;
        min-height: 620px;
        color: #ffffff;
      }
      .fight-block-one {
        display: flex;
        flex-wrap: nowrap;
        .enemy-item {
          padding: 0.5rem;
          align-items: center;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}

</style>