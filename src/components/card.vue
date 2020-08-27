<template>
  <div
    class="card is-unselectable"
    :style="{ background: `linear-gradient(${card.gradient[0]}, ${card.gradient[1]})`, boxShadow: `0 0 15px 2.5px ${card.gradient[0]}` }"
  >
    <h3 class="title has-text-white">{{ card.title }}</h3>
    <p class="subtitle has-text-white">{{ card.description }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["card"],
};
</script>

<style lang="scss" scoped>
.card {
  padding: 2em;
  height: 200px;
  border-radius: 4px;
  transition: transform 0.2s;
  color: #ffffff;

  &:hover {
    transform: translateY(-10px);
  }
}
</style>
