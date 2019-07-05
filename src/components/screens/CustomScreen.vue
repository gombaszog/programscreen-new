<template>
    <div class="custom-screen-component">
        <iframe ref="customIframe"></iframe>
    </div>
</template>

<script>

export default {
    name: 'CustomScreen',
    props: ['url'],

    watch: {
        url: function() {
            let el = this.$refs.customIframe
            el.setAttribute('src', '/artisan/' + this.url +'.html')
        }
    },
}
</script>

<style lang="scss" scoped>
    .custom-screen-component {
        height: 100%;

        iframe {
            width: 100%;
            height: 100%;
            border: 0;
        }
    }
</style>
