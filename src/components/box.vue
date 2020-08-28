<template>
  <div
    class="box"
    :style="{ background: `url(${box.image}) center` }"
    @click="$scrollTo('iletisim', { offset: 60 })"
  >
    <span class="is-size-5">{{ box.title }}</span>
  </div>
</template>

<style lang="scss" scoped>
.box {
  position: relative;
  height: 200px;
  object-fit: cover;
  text-align: center;
  color: #ffffff;
  box-shadow: inset 0px 0px 25px 10px black;
  transition: box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: unset;
  }

  span {
    width: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  }
}

@media only screen and (max-width: 1024px) {
  .box {
    width: 100%;
  }
}
</style>

<script>
export default {
  name: "Box",
  props: ["box"],
};
</script>