<template>
  <div class="wallet-status-desktop">
    <img src="@/assets/header/logo.png" class="wallet-logo" />
    <div class="wallet-connected">
      <h4 class="text-white p-0 m-0 text-shadow wallet-title">No Wallet</h4>
      <div class="text-uppercase btn btn-red mt-1">Connect</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ConnectWallet'
};
</script>

<style>
.wallet-status-desktop {
  display: flex;
  padding:0.5rem;
}
.wallet-logo {
  width: 117px;
  height: 117px;
}
.wallet-connected {
  padding: 1rem;
}
</style>