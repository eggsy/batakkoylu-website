<template>
  <nuxt-link to="#iletisim">
    <div class="box" :style="{ background: `url(${box.image}) center` }">
      <span class="is-size-5">{{ box.title }}</span>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.box {
  width: 100%;
  height: 200px;
  object-fit: cover;
  text-align: center;
  color: #ffffff;
  box-shadow: inset 0px 0px 25px 10px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: unset;
  }

  span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
}
</style>

<script>
export default {
  name: "Box",
  props: {
    box: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>