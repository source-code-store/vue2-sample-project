<template>
  <p>Person Info: {{ ts }}</p>
</template>

<script>
export default {
  data() {
    return {
      ts: new Date().toLocaleString(),
    };
  },
};
</script>
