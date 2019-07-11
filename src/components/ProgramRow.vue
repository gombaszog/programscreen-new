<template>
    <div class="program-row-component row" :class="[{'even' : isEven}, {'coming' : programData.coming}]">
        <div class="time-box col-xs-12 col-sm-4 col-md-2">
            <span class="start">{{getProgramTime(programData.start)}}</span>&nbsp;
            <span>- {{getProgramTime(programData.end)}}</span>
            
        </div>
        <div class="main-box col-xs-12 col-sm-6 col-md-7">
            <div class="title">{{programData.name}}</div>
            <div class="description-container" v-show="programData.description && showDescription" ref="descriptionContainer">
                <div class="description-content">{{programData.description}}</div>
            </div>
        </div>
        <div class="location-box col-xs-12 col-sm-2 col-md-3" v-show="screenStep !== 6">
            <div class="title">{{programData.location}}</div>
            <div v-if="programData.partner" class="partner">{{programData.partner}}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { hasUrlQuery } from '@/plugins/helpers.js'

export default {
    name: 'ProgramRow',
    props: ['programData', 'isEven'],

    watch: {
        screenStep: function() {
            let el = this.$refs.descriptionContainer
            if (typeof el !== 'undefined') {
                let parentHeight = el.offsetHeight
                let descrContent = el.children[0]

                if(descrContent.offsetHeight > parentHeight) {
                    if(!descrContent.classList.contains('slide')) {
                        descrContent.classList.add('slide')
                    }
                }
            }
        }
    },

    methods: {
        getProgramTime(value) {
            const thisDate = new Date(value)
            return this.fillZeros(thisDate.getHours()) + ':' + this.fillZeros(thisDate.getMinutes())
        },

        fillZeros(st){
            if((st.toString().length) < 2) {
                return '0' + st.toString()
            }
            return st;
        }
    },

    computed: {
        ...mapGetters(['screenStep']),

        showDescription() {
            return !hasUrlQuery('nodescription')
        }
    }
}
</script>

<style lang="scss" scoped>
    .program-row-component {
        padding: 10px 0;
        background: rgba(192,192,192,0.8);
        align-items: center;
        opacity: 1;

        @media screen and (max-width: 991px) {
            flex-direction: column;
        }

        &.even {
            background: rgba(255,255,255,0.9);
        }

        &.coming {
            animation: blinking 1s linear infinite;
        }

        .time-box,
        .location-box {
            text-align: center;
        }

        .time-box {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.7rem;

            @media screen and (max-width: 1700px) {
                font-size: 1.6rem;
            }

            @media screen and (max-width: 1365px) {
                font-size: 1.4rem;
            }

            @media screen and (max-width: 991px) {
                margin-bottom: 7px;
            }

            @media screen and (max-width: 700px) {
                font-size: 1rem;
            }

            .start {
                font-weight: bold;
                font-size: 2.2rem;

                @media screen and (max-width: 1700px) {
                    font-size: 2.1rem;
                }

                @media screen and (max-width: 1365px) {
                    font-size: 1.8rem;
                }

                @media screen and (max-width: 700px) {
                    font-size: 1.2rem;
                }
            }
        }

        .main-box {
            @media screen and (max-width: 991px) {
                margin-bottom: 7px;
            }

            .title {
                font-size: 1.8rem;
                font-weight: 600;
                margin-bottom: 5px;

                @media screen and (max-width: 1700px) {
                    font-size: 1.7rem;
                }

                @media screen and (max-width: 1365px) {
                    font-size: 1.6rem;
                }

                @media screen and (max-width: 700px) {
                    font-size: 1.2rem;
                    text-align: center;
                    padding: 0 5px;
                }
            }

            .description-container {
                font-size: 19px;
                line-height: 22px;
                max-height: 66px;
                overflow: hidden;

                @media screen and (max-width: 1365px) {
                    font-size: 17px;
                }

                @media screen and (max-width: 991px) {
                    display: none;
                }

                .description-content.slide {
                    animation: movetext 30s linear infinite;
                }
            }
        }

        .location-box {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            font-size: 1.6rem;
            font-weight: 600;

            @media screen and (max-width: 1700px) {
                font-size: 1.5rem;
            }

            @media screen and (max-width: 1365px) {
                font-size: 1.3rem;
            }

            @media screen and (max-width: 700px) {
                font-size: 1rem;
            }

            .partner {
                margin-top: 5px;
                font-size: 1.1rem;

                @media screen and (max-width: 1700px) {
                    font-size: 1rem;
                }

                @media screen and (max-width: 700px) {
                    display: none;
                }
            }
        }
    }

    @keyframes movetext {
        10% {transform: translateY(0);}
        100% {transform: translateY(-85%);}
    }

    @keyframes blinking {
        50% { opacity: .6; }
    }
</style>
