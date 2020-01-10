<template>
    <svg class=" fill-current w-5 h-5 mr-2" viewBox="0 0 25 25">
        <path :d="path" />
    </svg>
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>
