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
          v-for="(user, i) in state.users"
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

/**
 * pagesディレクトリの役割
 * mountなどしたい時や、Store, injectonなどを渡す
 */

/**
 * Nuxt.jsが初期化された直後に、
 * ローカルストレージに保存した有効期限内であれば、
 * Railsにユーザーを取得するようリクエストします。
 */

export default defineComponent({
  setup() {
    const { app } = useContext();
    const state = reactive<{ users: User[] }>({
      users: [],
    });

    /** memo */
    /** useFetch, useAsync どちらもpageディレクトリ内で使える。 */
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
