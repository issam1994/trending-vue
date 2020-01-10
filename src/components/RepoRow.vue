<template>
  <!-- repo row -->
  <div class="flex items-center px-2 py-4 rounded-lg shadow bg-white mb-4">
    <img class="w-32 h-32 mx-4 rounded-full object-cover border" :src="ownerAvatar" alt="avatar" />
    <div class="px-2">
      <div class="text-4xl font-bold tracking-wide">{{repoName}}</div>
      <div class="font-medium pb-2">{{repoDescription}}</div>
      <div class="flex items-center">
        <div class="flex-none shadow-sm bg-gray-100 font-semibold px-2 py-1 mr-2">
          Stars:
          <span class="font-normal">{{repoStars}}</span>
        </div>
        <div class="flex-none shadow-sm bg-gray-100 font-semibold px-2 py-1 mr-2">
          Issues:
          <span class="font-normal">{{repoIssues}}</span>
        </div>
        <div class="text-gray-500">
          <span>Submitted </span>
          <span>{{timeInterval}} </span>
          <span>by {{repoOwner}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    repo: {
      type: Object,
      required: true
    }
  },
  computed: {
    ownerAvatar() {
      return this.repo.owner.avatar_url
    },
    repoName() {
      return this.repo.name
    },
    repoDescription() {
      return this.repo.description
    },
    repoStars() {
      return this.repo.stargazers_count
    },
    repoIssues() {
      return this.repo.open_issues_count
    },
    timeInterval() {
      return this.repo.pushed_at
    },
    repoOwner() {
      return this.repo.owner.login
    }
  },
}
</script>

<style>
</style>
