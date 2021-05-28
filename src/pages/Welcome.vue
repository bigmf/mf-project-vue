<template>
  <div class="hello-message">{{ welcomeMsg }}</div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { singleton } from '../singleton';

export default {
  name: 'Welcome',
  setup() {
    const username = ref('');

    const initUserInfo = () => {
      singleton.onGlobalStateChange(value => {
        username.value = value.currentUser.username;
      }, true);
    };

    onMounted(initUserInfo);

    const welcomeMsg = computed(() =>
      username.value
        ? `我在子应用中获取到了你的用户名：${username.value}`
        : '还未登录',
    );

    return {
      welcomeMsg,
    };
  },
};
</script>
