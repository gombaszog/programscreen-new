<template>
    <div class="progress-screen-component">
        <div class="program-list-label">Éppen zajlik<template v-if="longPrograms"> - egész napos</template></div>
        <program-row
            v-for="(prog, index) in screenPrograms"
            :key="index"
            :programData="prog"
            :isEven="index % 2 === 0"/>
    </div>
</template>

<script>
import { getCurrentTime, getDatesDiff } from '@/plugins/helpers.js'

import { mapGetters } from 'vuex'
import ProgramRow from '../../components/ProgramRow.vue'

export default {
    name: 'ProgressScreen',
    props: ['longPrograms', 'step'],

    data() {
        return {
            screenPrograms: []
        }
    },

    watch: {
        actualPrograms: function() {
            this.screenPrograms = this.inProgressPrograms()
        }
    },

    methods: {
        inProgressPrograms () {
            let currentTime = getCurrentTime()
            let programs = []

            if(this.longPrograms === true) {
                programs = this.actualPrograms.filter(prog => ( currentTime >= new Date(prog.start) && currentTime <= new Date(prog.end) && getDatesDiff(new Date(prog.start), new Date(prog.end)) > 239 ) )

                if(programs.length < 1) {
                    this.$store.commit('addToSkipped', this.step)
                } else {
                    this.$store.commit('removeFromSkipped', this.step)
                }

                return programs
            }

            programs = this.actualPrograms.filter(prog => ( currentTime >= new Date(prog.start) && currentTime <= new Date(prog.end) && getDatesDiff(new Date(prog.start), new Date(prog.end)) < 240 ) )

            if(programs.length < 1) {
                this.$store.commit('addToSkipped', this.step)
            } else {
                this.$store.commit('removeFromSkipped', this.step)
            }

            return programs
        }
    },

    computed: {
        ...mapGetters(['actualPrograms'])
    },

    components: { ProgramRow }
}
</script>

<style lang="scss" scoped>
    .progress-screen-component {
        .coming {
            // animation: none;
            color: #333;
        }
    }
</style>
