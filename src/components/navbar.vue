<template>
  <b-navbar class="container is-fixed-top has-background-black">
    <template slot="brand">
      <b-navbar-item class="has-background-black" href="#">
        <img src="/images/logo.png" alt="Batakköylü Logo" />
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item class="has-text-white" href="#hizmetlerimiz">
        <b-icon icon="party-popper" class="mr-2"></b-icon>Hizmetlerimiz
      </b-navbar-item>
      <b-navbar-item class="has-text-white" href="#hakkimizda">
        <b-icon icon="newspaper-variant" class="mr-2"></b-icon>Hakkımızda
      </b-navbar-item>
      <b-navbar-item class="has-text-white" href="#galeri">
        <b-icon icon="image-outline" class="mr-2"></b-icon>Galeri
      </b-navbar-item>
      <b-navbar-item class="has-text-white" href="#iletisim">
        <b-icon icon="phone" class="mr-2"></b-icon>İletişim
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style lang="scss" scoped>
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
};
</script>