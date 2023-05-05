import { defineStore } from 'pinia';
import axios from 'axios';

export const useJobStore = defineStore('jobs', {
  state: () => ({
    jobs: [],
  }),
  getters: {
    getJobs(state) {
      return state.jobs;
    },
  },
  actions: {
    async loadJobs() {
      try {
        const response = await axios.get('https://api.publicapis.org/entries');
        this.jobs = response.data.entries;
        console.log(response.data.entries);
      } catch (error) {
        console.error('An error has occurred', error);
      }
    },
  },
});
