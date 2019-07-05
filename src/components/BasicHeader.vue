<template>
    <div class="basic-header-component row">
        <div class="time-box col-xs-12 col-sm-3">{{currentHours}}<span class="dots">:</span>{{currentMinutes}}</div>
        <div class="logo-box col-xs-12 col-sm-6">
            <img src="../../static/images/gombaszog-logo.png">
        </div>
        <div class="date-box col-xs-12 col-sm-3">
            <div class="weekday">{{currentDay}}</div>
            <div class="date">{{currentDate}}</div>
        </div>
        <div class="divider col-xs-12">
            <img src="../../static/images/divider.png">
        </div>
    </div>
</template>

<script>

import { getCurrentTime } from '@/plugins/helpers.js'

export default {
    name: 'BasicHeader',

    data() {
        return {
            currentHours: '--',
            currentMinutes: '--',
            currentDay: '---',
            currentDate: '---'
        }
    },

    mounted() {
        this.initLiveTimeMaintainer()
    },

    methods: {
        initLiveTimeMaintainer(){
            let now = getCurrentTime()
            let t = (60000 - (now.getSeconds() * 1000)) / 2

            this.currentHours = this.fillZeros(now.getHours())
            this.currentMinutes = this.fillZeros(now.getMinutes())
            this.currentDay = this.day(now.getDay())
            this.currentDate = now.getFullYear() + ". " + this.month(now.getMonth()) + " " +  + now.getDate() + "."

            let timeout = setTimeout(this.initLiveTimeMaintainer, t)
        },

        fillZeros(st){
            if((st.toString().length)<2) {
                return "0" + st.toString()
            }
            return st;
        },

        month(cmonth){
            const monthNames = ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"]
            return monthNames[cmonth]
        },

        day(cday){
            const days = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"]
            return days[cday];
        }
    }
}
</script>

<style lang="scss" scoped>
    .basic-header-component {
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 2rem;
        align-items: center;

        .time-box {
            font-size: 5rem;
            text-align: center;

            @media screen and (max-width: 767px) {
                display: none;
            }

            .dots {
                animation: blinker 2s linear infinite;
            }
        }

        .logo-box {
            text-align: center;
            
            img {
                max-height: 80px;
                width: auto;

                @media screen and (max-width: 767px) {
                    max-width: 90%;
                }
            }
        }

        .date-box {
            text-align: center;
            font-size: 1.8rem;

            @media screen and (max-width: 1100px) {
                font-size: 1.4rem;
            }

            .weekday {
                font-weight: bold;
                font-size: 2rem;

                @media screen and (max-width: 1100px) {
                    font-size: 1.8rem;
                }
            }

            .date {
                line-height: 1.2;
            }
        }

        .divider {
            line-height: .6;
        }

    }

    @keyframes blinker {  
        15% { opacity: 0; };
        30% { opacity: 1; };
    }
</style>
