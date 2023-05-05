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
        const response = await axios.get('/api/');
        this.jobs = response.data.data;
        console.log(this.jobs);
        console.log(response.data.data);
      } catch (error) {
        console.error('An error has occurred', error);
      }
    },
  },
});
