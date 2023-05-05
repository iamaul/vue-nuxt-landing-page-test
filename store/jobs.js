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
        const response = await axios.get(
          'https://arbeitnow.com/api/job-board-api'
        );
        this.jobs = response.data;
        console.log(response);
      } catch (error) {
        console.error('An error has occurred', error);
      }
    },
  },
});
