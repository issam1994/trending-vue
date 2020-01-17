<template>
  <div class="container mx-auto my-8">
    <RepoRow v-for="r in repos" :key="r.id" :repo="r" />
    <MySpinner v-if="isLoading" class="mx-auto my-2" />
  </div>
</template>

<script>
//importing some utilties
import {
  hasScrolledToTheEndOfList,
  thirtyDaysBeforeToday
} from "@/components/utils.js";
//importing the repo component
import RepoRow from "@/components/RepoRow";
import MySpinner from "@/components/MySpinner";
// importing axios
import axios from "axios";

export default {
  name: "RepoList",
  components: {
    RepoRow,
    MySpinner
  },
  // lifesycle methods
  mounted() {
    this.getDataFromApi();
  },
  destroyed() {
    this.stopListeningToScrolling();
  },
  // state
  data() {
    return {
      repos: [],
      isLoading: true,
      currentPage: 0
    };
  },
  // methods
  methods: {
    //spinner control
    toggleSpinner() {
      this.isLoading = !this.isLoading;
    },
    // data controls
    async getDataFromApi() {
      try {
        console.log("getting repos..");
        let { currentPage } = this;
        let apiUrl = `https://api.github.com/search/repositories?q=created:>${thirtyDaysBeforeToday()}&sort=stars&order=desc${"&page=" +
          (currentPage + 1)}`;
        let data = (await axios.get(apiUrl)).data;
        return this.extractReposFromFetchedData(data);
      } catch (e) {
        //retry fetching data
        return this.getDataFromApi();
      }
    },
    // ..
    loadNextPage() {
      if (hasScrolledToTheEndOfList()) {
        this.stopListeningToScrolling();
        this.toggleSpinner();
        this.getDataFromApi();
      }
    },
    // ..
    extractReposFromFetchedData(data) {
      console.log("extracting repos..");
      let { items: newRepos } = data;
      this.updateRepos(newRepos);
      this.listenToScrolling();
    },
    // ..
    updateRepos(fetchedRepos) {
      console.log("updating repos..");
      let { repos, currentPage } = this;
      this.repos = [...repos, ...fetchedRepos];
      this.toggleSpinner();
      this.currentPage = currentPage + 1;
    },
    //scroll controls
    listenToScrolling() {
      return window.addEventListener("scroll", this.loadNextPage);
    },
    // ..
    stopListeningToScrolling() {
      return window.removeEventListener("scroll", this.loadNextPage);
    }
  }
};
</script>

<style>
</style>
