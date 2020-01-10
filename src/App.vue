<template>
<div class="bg-gray-200 py-8">
  <div class="container mx-auto">
    <RepoRow />
  </div>
</div>
</template>

<script>
import RepoRow from '@/components/RepoRow.vue'

export default {
  name: 'app',
  components: {
    RepoRow
  }
}
</script>

<style>

</style>
