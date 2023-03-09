<template>
  <div>
    <p>Hello {{ data }}.</p>
    <ChildPage />
    <p @click="showPerson">Click Me</p>
    <PersonInfo v-if="show" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "Alan",
      show: false,
    };
  },
  mounted() {},
  methods: {
    showPerson() {
      this.show = true;
    },
  },
  components: {
    ChildPage: () => ({
      component: import("./ChildPage.vue"),
    }),
    PersonInfo: () => ({
      component: import("./PersonInfo.vue"),
    }),
  },
};
</script>
