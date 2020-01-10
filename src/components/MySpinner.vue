<template>
    <div class="my-spinner">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
.my-spinner {
    @apply w-24 h-24 rounded-full border-8 border-gray-300;
    border-top-color: lightgreen;
    animation: spin 500ms linear infinite;
}

@keyframes spin {
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
}
</style>

