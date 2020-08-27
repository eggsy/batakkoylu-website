<template>
  <b-navbar class="container is-fixed-top has-background-black">
    <template slot="brand">
      <b-navbar-item class="has-background-black" @click="goTo('#')">
        <img src="/images/logo.png" alt="Batakköylü Logo" />
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item class="has-text-white" @click="goTo('hakkimizda')">
        <b-icon icon="newspaper-variant" class="mr-2"></b-icon>Hakkımızda
      </b-navbar-item>
      <b-navbar-item class="has-text-white" @click="goTo('galeri')">
        <b-icon icon="image-outline" class="mr-2"></b-icon>Galeri
      </b-navbar-item>
      <b-navbar-item class="has-text-white" @click="goTo('iletisim')">
        <b-icon icon="phone" class="mr-2"></b-icon>İletişim
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style lang="scss" scoped>
.navbar-item {
  font-family: "Lexend Deca", sans-serif;
}

.container .navbar-menu {
  background-color: #000000;
}
</style>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      mobile: {
        burger: false,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      const hash = this.$route.hash?.replace(/#/g, "");
      const element = document.getElementById(hash);

      if (element) this.goTo(hash);
    }, 1000);
  },
  methods: {
    goTo(anchor) {
      this.$router.push({ hash: `#${anchor === "#" ? "" : anchor}` });
      this.$scrollTo(anchor, { offset: 60 });
    },
  },
};
</script>