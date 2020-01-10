<template>
  <!-- repo row -->
  <div class="flex items-center px-2 py-4 rounded-lg shadow bg-white mb-4">
    <img class="w-32 h-32 mx-4 rounded-full object-cover border" :src="ownerAvatar" alt="avatar" />
    <div class="px-2">
      <div class="text-3xl font-bold tracking-wide">{{repoName}}</div>
      <div class="font-medium pb-2">{{repoDescription}}</div>
      <div class="flex items-center">
        <div class="flex-none flex items-center shadow-sm rounded-lg bg-gray-200 font-semibold px-2 py-1 mr-2">
          <MySvg :path="starIcon" />
          <div class="">
          Stars:
          <span class="font-normal">{{repoStars | displayStarsAndIssuesAppropriately}}</span>
          </div>
        </div>
        <div class="flex-none flex items-center shadow-sm rounded-lg bg-gray-200 font-semibold px-2 py-1 mr-2">
          <MySvg :path="issueIcon" />
          <div class="">
            Issues:
          <span class="font-normal">{{repoIssues | displayStarsAndIssuesAppropriately}}</span>
          </div>
        </div>
        <div class="text-gray-500">
          <span>Submitted </span>
          <span>{{timeInterval | convertAndDisplayTimePassedWithAppropriateUnit}} </span>
          <span>by {{repoOwner}} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// importing svg component that will accept a path as a prop
import MySvg from '@/components/MySvg.vue'
// importing some icons/svg paths
import {mdiStar, mdiAlertCircleOutline} from '@mdi/js'
//importing formatters
import {
  timePassedSincePushed,
  hasADayOrMorePassedSincePushed,
  hasAnHourOrMorePassedSincePushed,
  timePassedSincePushedInDays,
  timePassedSincePushedInHours,
  timePassedSincePushedInMinutes,
  convertTimePassedToMinutes,
  convertTimePassedToHours,
  convertTimePassedToDays
} from "@/components/utils.js";

export default {
  name: "RepoRow",
  props: {
    repo: {
      type: Object,
      required: true
    }
  },
  components: {
    MySvg
  },
  data(){
    return {
      starIcon: mdiStar,
      issueIcon: mdiAlertCircleOutline
    }
  },
  computed: {
    ownerAvatar() {
      return this.repo.owner.avatar_url;
    },
    repoName() {
      return this.repo.name;
    },
    repoDescription() {
      return this.repo.description;
    },
    repoStars() {
      return this.repo.stargazers_count;
    },
    repoIssues() {
      return this.repo.open_issues_count;
    },
    timeInterval() {
      return this.repo.created_at;
    },
    repoOwner() {
      return this.repo.owner.login;
    }
  },
  filters: {
    //
    convertAndDisplayTimePassedWithAppropriateUnit(created_at) {
      if (hasADayOrMorePassedSincePushed(created_at))
        return timePassedSincePushedInDays(created_at) + " day(s) ago";
      else if (hasAnHourOrMorePassedSincePushed(created_at))
        return timePassedSincePushedInHours(created_at) + " hour(s) ago";
      else return timePassedSincePushedInMinutes(created_at) + " minute(s) ago";
    },
    //
    displayStarsAndIssuesAppropriately(starsOrIsssues) {
      if (starsOrIsssues > 1000) {
        return (starsOrIsssues / 1000).toFixed(1) + "k";
      } else {
        return starsOrIsssues;
      }
    }
  }
};
</script>

<style>
</style>
