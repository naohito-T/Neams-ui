<template>
  <Tutorial />
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';
import Tutorial from '@/components/Tutorial.vue';

export default defineComponent({
  components: {
    Tutorial,
  },
  setup() {
    const { app } = useContext();
    console.log(`process.env.API_URL: ${process.env.API_URL}`);
    console.log(`process.env.WORKDIR: ${process.env.WORKDIR}`);
    console.log(`process.env.CONTAINER_PORT: ${process.env.CONTAINER_PORT}`);
    console.log(`api疎通${JSON.stringify(app.$app.home.fetchHello())}`);

    return {};
  },
})
</script>
