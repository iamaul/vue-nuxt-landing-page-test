<template>
  <div
    class="w-full flex flex-row items-center justify-between gap-4 py-8 flex-wrap"
  >
    <img v-for="(img, i) in brandImage" :key="i" :src="img" class="" />
  </div>
</template>
<script setup>
const brandImage = ref([
  '/icon/brand/Huawei.svg',
  '/icon/brand/Apple.svg',
  '/icon/brand/Honda.svg',
  '/icon/brand/TikTok.svg',
  '/icon/brand/Tencent.svg',
]);
</script>
