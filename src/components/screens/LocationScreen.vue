<template>
    <div class="location-screen-component">
        <div class="program-list-label">{{decodeURI(location)}}</div>
        <program-row
            v-for="(prog, index) in screenPrograms"
            :key="index"
            :programData="prog"
            :isEven="index % 2 === 0"/>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

import moment from 'moment'

import { getCurrentTime, getDatesDiff } from '@/plugins/helpers.js'

import ProgramRow from '../../components/ProgramRow.vue'

export default {
    name: 'LocationScreen',
    props: ['step', 'location'],

    data() {
        return {
            screenPrograms: []
        }
    },

    watch: {
        actualPrograms: function() {
            this.writePrograms()
        },

        location: function() {
            this.writePrograms()
        }
    },

    methods: {
        locationPrograms () {
            let currentTime = getCurrentTime()
            let locationPrograms = []
            locationPrograms = this.actualPrograms.filter(prog => ( this.location === String(prog.location) && moment(new Date(prog.start)).date() === moment(currentTime).date()  ))

            if(locationPrograms.length < 1) {
                this.$store.commit('addToSkipped', this.step)
            } else {
                this.$store.commit('removeFromSkipped', this.step)
            }

            return locationPrograms
        },

        writePrograms() {
            this.screenPrograms = this.locationPrograms()
        }
    },

    computed: {
        ...mapGetters(['actualPrograms'])
    },

    components: { ProgramRow }
}
</script>

<style lang="scss" scoped>
    .location-screen-component {
        // .coming {
        //     animation: none
        // }
    }
</style>
