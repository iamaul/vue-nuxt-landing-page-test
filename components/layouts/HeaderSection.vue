<template>
  <div
    class="fixed top-0 inset-x-0 w-full z-50 py-8 flex bg-white flex-row items-center justify-between px-4 sm:px-8 md:px-24"
  >
    <div
      class="flex flex-row items-center font-medium text-lg text-black gap-8"
    >
      <img src="/icon/Logo.svg" class="h-[18px] w-full object-contain" />
      <span class="hover:text-maketer">Home</span>
      <span class="hover:text-maketer">Job</span>
      <span class="hover:text-maketer">Hiring</span>
      <span class="hover:text-maketer">About</span>
    </div>
    <div class="flex-row sm:flex hidden gap-4 items-center">
      <button
        v-if="!login"
        class="py-2.5 px-10 rounded-full text-white bg-maketer font-medium text-base hover:bg-green-800"
        @click="toLogin"
      >
        Login
      </button>
      <button
        v-if="!login"
        class="py-2 px-7 rounded-full text-maketer border-2 border-maketer font-medium text-base hover:bg-maketer hover:text-white"
        @click="toRegister"
      >
        Register
      </button>
    </div>
  </div>
</template>
<script setup>
import { useOauthStore } from '~/store/oauth';

const oauthStore = useOauthStore();
const router = useRouter();

const openLogin = ref(false);

const login = computed(() => {
  oauthStore.getLogin;
});

function toLogin() {
  openLogin.value = true;
}
function closeLogin() {
  openLogin.value = false;
}
function toRegister() {
  router.push('/register');
}
</script>
