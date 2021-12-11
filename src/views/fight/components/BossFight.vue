<template>
  <div>
    <p class="boss-fight-p">Boss of Chapter 1: {{curItem.name }}</p>
    <div class="boss-fight-div">
      <div class="img">
        <div class="fight-card">
          <div class="arrow" @click="previous">
            <img src="@/assets/fight/left-arrow.png" alt />
          </div>
          <div class="card-body" v-if="dataSource.length">
            <div class="card-img">
              <img src="@/assets/fight/boss2.png" alt />
            </div>
          </div>
          <div class="arrow" @click="next">
            <img src="@/assets/fight/right-arrow.png" alt />
          </div>
        </div>
      </div>
      <div class="info">
        <p class="title">
          BOSS NAME:
          <span>{{ curItem.name }}</span>
        </p>
        <div class="description">
          <p>DESCRIPTION:</p>
          <p class="des-info">
            {{ curItem.description }}
          </p>
        </div>
        <div class="enemy-detail">
          <div class="xp-info">
            <p>
              SUCCESS CHANCE
              <span span style="color:rgb(10, 253, 10)">{{ curItem.power }}</span>
            </p>
            <p>HP REQUIRED TO FIGHT</p>
            <div>
              <img src="@/assets/fight/glod.png" alt />
              <div>
                BASE BNB
                <br />{{ curItem.bnbInfo }}
              </div>
              <img src="@/assets/fight/xp.png" alt />
              <div>
                XP
                <br />{{ curItem.xpInfo }}
              </div>
            </div>
          </div>
          <div class="btn btn-dark disabled fight-btn">FIGHT</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FightCard",
  props: {
    dataSource: {
      type: Array,
      default: true
    }
  },
  data() {
    return {
      curItem: {},
      curIndex: 0
    };
  },
  mounted() {
    if (this.dataSource.length) {
      this.curItem = this.dataSource[this.curIndex];
    }
  },
  methods: {
    // 上一张卡片
    previous() {
      let newIndex = 0
      if (!this.dataSource.length) return
      if (this.curIndex === 0) {
        newIndex = this.dataSource.length - 1
      } else {
        newIndex = this.curIndex - 1
      }
      this.curIndex = newIndex
      this.curItem = this.dataSource[newIndex]
    },
    // 下一张
    next() {
      let newIndex = 0
      if (!this.dataSource.length) return
      if ((this.curIndex + 1) === this.dataSource.length) {
        newIndex = 0
      } else {
        newIndex = this.curIndex + 1
      }
      this.curIndex = newIndex
      this.curItem = this.dataSource[newIndex]
    }
  }
};
</script>

<style lang="scss" scoped>
.fight-card {
  width: 100%;
  display: flex;
  align-items: center;
  .arrow {
    cursor: pointer;
  }
  .card-body {
    width: 100%;
    .card-info {
      width: 100%;
      font-size: 1.75rem;
      text-align: center;
      line-height: 42px;
    }
    .card-img {
      position: relative;
      width: 300px;
      height: 407px;
      margin: 15px auto;
      img {
        width: 100%;
        height: 100%;
      }
      > div {
        position: absolute;
        height: 120px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 5px;
        bottom: 0;
        left: 20px;
        padding: 8px 14px;
        font-size: 1rem;
        line-height: 24px;
        p {
          margin-bottom: 0.25rem;
        }
        > div {
          height: 48px;
          display: flex;
          align-items: center;
          img {
            width: 40px;
            height: 40px;
            margin-right: 0.4rem;
          }
          > div {
            margin-right: 0.7rem;
          }
        }
      }
    }
    .card-bottom {
      background-image: url("~@/assets/fight/buttom.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 160px;
      margin: auto;
      cursor: pointer;
      border-color: #212529;
      opacity: 0.65;
      text-align: center;
      line-height: 48px;
    }
    div {
      color: #ffffff;
    }
  }
}
.boss-fight-p {
  font-size: 1.75rem;
  line-height: 50px;
  text-align: center;
}
.boss-fight-div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.info {
  padding: 24px;
  text-align: left;
  background: rgba(0, 0, 0, 0.76);
  border-radius: 5% 5%;
  width: 355px;
  height: auto;
  font-size: 1rem;
  line-height: 24px;
  > p {
    &:nth-child(1) {
      margin-bottom: 16px;
    }
  }
  .description {
    margin-bottom: 1rem;
  }
  .enemy-detail {
    display: flex;;
    align-items: center;
    justify-content: center;
    flex-direction: column
  }
  .xp-info {
    margin: auto;
    height: 120px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    padding: 8px 14px;
    font-size: 1rem;
    line-height: 24px;
    margin-bottom: 0.5rem;
    > p {
      margin-bottom: 0.25rem;
    }
    > div {
      height: 48px;
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        margin-right: 0.5rem;
      }
      > div {
        margin-right: 1rem;
      }
    }
  }
  .fight-btn {
    padding: 0.5rem 3rem 1rem 3rem; 
  }

}
</style>