<template>
  <div>
    <button
      type="button"
      name="button"
      @click="getMsg"
    >
      RailsからAPIを取得する
    </button>
    <div
      v-for="(msg, i) in msgs"
      :key="i"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useFetch } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { app } = useContext();
    console.log(`process.env.API_URL: ${process.env.API_URL}`);
    useFetch(async () => {
      await app.$app.home.fetchHello();
    })

    const getMsg = async () => {
      const res = await app.$app.home.fetchHello();
      console.log(`resres${JSON.stringify(res)}`);
    }

    return {
      getMsg
    };
  },
})
</script>
