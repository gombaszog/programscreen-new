<template>
    <div class="global-screen-component">
        <program-row
            v-for="(prog, index) in screenPrograms"
            :key="index"
            :programData="prog"
            :isEven="index % 2 === 0"/>
    </div>
</template>

<script>
import { getCurrentTime, getDatesDiff, hasUrlQuery } from '@/plugins/helpers.js'

import Vue from 'vue'
import { mapGetters } from 'vuex'

import ProgramRow from '../../components/ProgramRow.vue'
import { constants } from 'crypto';

export default {
    name: 'GlobalScreen',

    data() {
        return {
            screenPrograms: []
        }
    },

    watch: {
        actualPrograms: function() {
            this.screenPrograms = this.processedPrograms()
        }
    },

    methods: {
        processedPrograms() {
            let currentTime = getCurrentTime()
            let processedArray = JSON.parse(JSON.stringify(this.actualPrograms))

            processedArray = processedArray.filter(prog => ( currentTime <= new Date(prog.start) ))

            return processedArray
        }
    },

    computed: {
        ...mapGetters(['actualPrograms']),
    },

    components: { ProgramRow }
}
</script>

<style lang="scss" scoped>
</style>
