<template>
  <div class="container mx-auto my-8">
    <MySpinner class="mx-auto my-2" />
    <RepoRow v-for="r in repos" :key="r.id" :repo="r" />
  </div>
</template>

<script>
//importing some utilties
import {
  hasScrolledToTheEndOfList,
  thirtyDaysBeforeToday
} from '@/components/utils.js'
//importing the repo component
import RepoRow from '@/components/RepoRow'
import MySpinner from '@/components/MySpinner'
//
export default {
  name: 'RepoList',
  components: {
    RepoRow,
    MySpinner
  },
  // lifesycle methods
  mounted() {
    this.getDataFromApi()
  },
  destroyed() {
    this.stopListeningToScrolling()
  },
  data() {
    return {
      repos: [],
      isLoadingFirstPage: true,
      currentPage: 0
    }
  },
  // methods
  methods: {
    // data controls
    getDataFromApi() {
      console.log('getting repos..')
      let { currentPage } = this
      let apiUrl = `https://api.github.com/search/repositories?q=created:>${thirtyDaysBeforeToday()}&sort=stars&order=desc${'&page=' +
        (currentPage + 1)}`
      fetch(apiUrl)
        .then(res => res.json())
        .then(this.extractReposFromFetchedData)
    },
    // ..
    loadNextPage() {
      if (hasScrolledToTheEndOfList()) {
        this.stopListeningToScrolling()
        this.getDataFromApi()
      }
    },
    // ..
    extractReposFromFetchedData(data) {
      console.log('extracting repos..')
      let { items: newRepos } = data
      this.updateRepos(newRepos)
      this.listenToScrolling()
    },
    // ..
    updateRepos(fetchedRepos) {
      console.log('updating repos..')
      let { repos, currentPage } = this
      this.repos = [...repos, ...fetchedRepos]
      this.isLoadingFirstPage = false
      this.currentPage = currentPage + 1
    },
    //scroll controls
    listenToScrolling() {
      return window.addEventListener('scroll', this.loadNextPage)
    },
    // ..
    stopListeningToScrolling() {
      return window.removeEventListener('scroll', this.loadNextPage)
    }
  }
}
</script>

<style>
</style>
