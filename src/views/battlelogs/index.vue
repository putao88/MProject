<template>
  <div class="battlelogs-wrap container-wrap">
    <img class="static-bg" src="@/assets/battlelogs/battlelog-bg.jpeg" alt="battlelogs-background" />
    <div class="bg-overlay"></div>
    <div class="page-title">MY BATTLES</div>

    <div style="padding:0 3rem">
      <table style="color: rgb(227, 227, 227);" class="battlelogs-table">
        <thead>
          <tr>
            <th>Hero</th>
            <th>Enemy</th>
            <th>Rewards</th>
            <th>XP Earned</th>
            <th>HP Loss</th>
            <th>Tx Hash</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="load-wrap">
      <div class="btn btn-dark text-white">Load More</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "battlelogs",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.battlelogs-wrap {
  width: 100%;
}
.battlelogs-table {
  caption-side: bottom;
  border-collapse: collapse;
  --bs-table-bg: transparent;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: #212529;
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: #212529;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212529;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  vertical-align: top;
  border-color: #dee2e6;
  thead {
    vertical-align: bottom;
  }
}
.battlelogs-table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  border-bottom-width: 1px;
  // background-color: var(--bs-table-bg);
  // box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}
th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}
.load-wrap {
  justify-content: center;
  display: flex;
}
</style>