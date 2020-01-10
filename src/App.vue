<template>
<div class="bg-gray-200 py-6">
  <div class="container mx-auto">
    <RepoList />
  </div>
</div>
</template>

<script>
import RepoList from '@/components/RepoList.vue'

export default {
  name: 'app',
  components: {
    RepoList
  }
}
</script>

<style>

</style>
