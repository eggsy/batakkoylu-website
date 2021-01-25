<template>
  <div
    class="card"
    :style="{
      background: `linear-gradient(${card.gradient[0]}, ${card.gradient[1]})`,
      boxShadow: `0 0 0px 2.5px ${card.gradient[0]}`,
    }"
  >
    <div>
      <h3 class="title has-text-white">{{ card.title }}</h3>
      <p class="subtitle has-text-white">{{ card.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 2em;
  height: 200px;
  border-radius: 4px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
