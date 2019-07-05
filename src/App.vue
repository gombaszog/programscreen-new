<template>
    <div id="app">
        <MainScreen />
    </div>
</template>

<script>
import MainScreen from './components/MainScreen.vue'

export default {
    name: 'app',
    components: {
        MainScreen
    }
}
</script>

<style lang="scss">
    @import "assets/sass/global.scss";
</style>
