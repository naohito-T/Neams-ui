<template>
  <div>
    <h2>
      Usersテーブルの取得
    </h2>
    <table v-if="state.users.length">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>created_at</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, i) in users"
          :key="`user-${i}`"
        >
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.created_at }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      ユーザーが取得できませんでした
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, useAsync, useContext, useFetch } from '@nuxtjs/composition-api';
import { User } from '@/lib/app/types/response/home'

export default defineComponent({
  setup() {
    const { app } = useContext();
    const state = reactive<{ users: User[] }>({
      users: [],
    });

    useFetch(async () => {
      state.users = await app.$app.home.fetchUsers();
    })

    useAsync(async () => {
      state.users = await app.$app.home.fetchUsers();
      console.log(`resres${JSON.stringify(state.users)}`);
    })

    return {
      state,
    };
  },
})
</script>
