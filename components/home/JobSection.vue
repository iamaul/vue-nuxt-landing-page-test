<template>
  <div
    class="min-h-screen w-full flex flex-col py-20 items-center px-24 bg-gray-100"
  >
    <h1 class="text-black text-5xl font-semibold">2000+ Job Openings</h1>
    <p class="max-w-lg text-gray-400 mt-4 text-center">
      Explore thousand of marketing job opportunities and find your dream
      company with our comprehensive marketing job search platform
    </p>
    <div class="w-full flex flex-wrap gap-8 mt-6 items-center justify-center">
      <div
        v-for="job in jobs"
        :key="job.slug"
        class="flex p-0 text-left font-medium w-[340px] h-[222px] font-['Roboto'] animate__animated animate__fadeInUp animate__delay-2s"
      >
        <div
          class="bg-white flex items-start w-[340px] h-[222px] pt-[37.15484619140625px] pb-[33.4393310546875px] pl-[27.9453125px] pr-[54.0546875px] drop-shadow-lg rounded-[16.77px]"
        >
          <div
            class="flex flex-col items-start p-0 w-[258px] h-[151px] gap-[7.54px]"
          >
            <Group class="w-[34px] h-[34px]" />
            <a :href="job.Link">
              <p
                class="text-black m-0 w-[177px] text-[18px] tracking-[-0.62px] leading-[normal] mt-[5.46405029296875px]"
              >
                {{ job.API }}
              </p>
            </a>
            <p
              class="text-black mb-3 h-[16.07px] w-[177px] text-[14px] tracking-[-0.62px] leading-[normal] mt-[5.46405029296875px]"
            >
              {{ job.Description }} - {{ job.Category }}
            </p>
          </div>
        </div>
      </div>
      <button
        class="py-2.5 bg-maketer text-white font-medium px-10 mt-6 rounded-full hover:bg-green-700"
      >
        Load More
      </button>
    </div>
  </div>
</template>
<script setup>
import Group from '../../assets/Group.vue';
import { onMounted, computed } from 'vue';
import { useJobStore } from '~/store/jobs';

const store = useJobStore();

const jobs = computed(() => {
  return store.jobs;
});

onMounted(() => {
  store.loadJobs();
});
</script>
