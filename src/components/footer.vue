<template>
  <div class="footer py-6 has-background-black has-text-centered">
    <img src="/images/logo.png" alt="logo" draggable="false" @click="$scrollTo('#')" />
    <p>Tüm hakları saklıdır.</p>
    <small>Copyright {{ date }} ©</small>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  img {
    height: 128px;
    width: 128px;
    cursor: pointer;
    transform: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.75;
    }
  }
}
</style>

<script>
export default {
  name: "Footer",
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>