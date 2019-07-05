<template>
    <div class="main-screen-component">
        <basic-header v-if="showHeader" />
        <!-- Screens -->
        <global-screen v-show="stepState === 1" />
        <progress-screen :step="3" v-show="stepState === 3" />
        <progress-screen :longPrograms="true" :step="5" v-show="stepState === 5" />
        <kocsma-first-screen v-show="stepState === 2" />
        <kocsma-second-screen v-show="stepState === 6" />
        <location-screen :location="location" :step="4" v-show="stepState === 4" />
        <custom-screen :url="artisanHtml" v-show="stepState === 7" />
    </div>
</template>

<script>
import config from '@/plugins/config.js'
import { hasUrlQuery, getUrlQuery } from '@/plugins/helpers.js'

import { mapGetters } from 'vuex'

import BasicHeader from '../components/BasicHeader.vue'
import GlobalScreen from '../components/screens/GlobalScreen.vue'
import ProgressScreen from '../components/screens/ProgressScreen.vue'
import KocsmaFirstScreen from '../components/screens/KocsmaFirstScreen.vue'
import KocsmaSecondScreen from '../components/screens/KocsmaSecondScreen.vue'
import LocationScreen from '../components/screens/LocationScreen.vue'
import CustomScreen from '../components/screens/CustomScreen.vue'

export default {
    name: 'MainScreen',

    data() {
        return {
            stepState: 1,
            maxStep: 6,
            location: null,
            artisanHtml: null
        }
    },

    watch: {
        actualPrograms: function() {
            this.stepState = 1
            let that = this
            setTimeout(function(){that.$store.commit('setScreenStep', that.stepState)}, 100)
        }
    },

    mounted() {
        this.$store.dispatch('FETCH_PROGRAMS').then((res) => {
            if (res) {
                this.location = getUrlQuery('location')
                if (this.location === null || !(this.actualLocations.includes(this.location))) {
                    this.$store.commit('addToSkipped', 4) // skip location screen when no programs
                }

                this.artisanHtml = getUrlQuery('artisan')
                if (this.artisanHtml !== null) {
                    this.maxStep = 7
                }

                if(!hasUrlQuery('kocsma')) {
                    this.$store.commit('addToSkipped', 2)
                    this.$store.commit('addToSkipped', 6)
                }

                this.checkSum()
                this.changeScreens()
            }
        })
        
    },  

    methods: {
        checkSum() {
            let that = this
            setInterval(function(){
                that.$store.dispatch('CHECK_SUM')
            }, config.CHECK_PROGRAM_EVERY); // from plugins/config.js
        },

        changeScreens() {
            let that = this
            setInterval(function(){
                that.stepState = that.countStep(that.stepState)
                that.$store.commit('setScreenStep', that.stepState)

                if(that.stepState > that.maxStep) {
                    that.stepState = 1
                }

            }, config.CHANGE_SCREEN_EVERY); // from plugins/config.js
        },

        countStep(step) {
            step++
            if(this.skippedScreens.includes(step)) {
                return this.countStep(step)
            } else {
                return step
            }
        }
    },  
    
    computed: {
        ...mapGetters(['actualPrograms', 'actualLocations', 'skippedScreens']),

        showHeader() {
            return !hasUrlQuery('noheader')
        }
    },

    components: {
        BasicHeader,
        GlobalScreen,
        ProgressScreen,
        KocsmaFirstScreen,
        KocsmaSecondScreen,
        LocationScreen,
        CustomScreen
    }
}
</script>

<style lang="scss" scoped>
    .main-screen-component {
        width: 100%;
        height: 100vh;
    }
</style>
