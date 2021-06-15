<template>
    <transition name="bounce">
        <div v-if="modalShow" class="modal-wrapper" @click="modalShow = false">
            <div class="modal-content">
                <span><img src="/img/icon-close.svg"/></span>
                <img v-if="modalData.img" :src="modalData.img" class="modal-img"/>
                <h5 v-if="modalData.message">{{ modalData.message }}</h5>
                <h1 v-if="modalData.title">{{ modalData.title }}</h1>
                <p v-if="modalData.desc && modalData.desc.length > 0" v-for="item in  modalData.desc" class="regular-text">{{ item }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
    import bus from '@/services/bus.js'
    export default {
        name: "modal",
        data () {
            return {
                dataInModal: '',
                modalShow: false
            }
        },
        computed: {
            modalData () {
                return this.dataInModal
            }
        },
        mounted () {
            bus.$on('open-modal', this.setData)
        },
        methods: {
            setData (data) {
                this.dataInModal = data
                this.modalShow = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal-wrapper {
        position: absolute;
        height: 100vh;
        width: 100vw;
        z-index: 99999999999;
        display: flex;
        top: 0;
        opacity: 1;
        backdrop-filter: blur(10px) brightness(0.5);
        -webkit-backdrop-filter: blur(10px) brightness(0.5);
        cursor: pointer;
        transition: 500ms;
    }
    .modal-content {
        margin: auto;
        /*align-self: center;*/
        background: #FFFFFF 0% 0% no-repeat padding-box;
        position: relative;
        text-align: center;
        min-height: 50vh;
        min-width: 35vw;
        width: auto;
        padding: 50px 20px;
        overflow: unset;
        span {
            position: absolute;
            top: -33px;
            right: 0;
            padding: 7px 7px 0 7px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border-bottom: 1px solid #e3e3e3;
            img {
                margin: 0;
                transition: 400ms;
            }
            &:hover img {
                transform: rotate(-90deg);
            }
        }
        .modal-img {
            margin-bottom: 50px;
        }
        h5 {
            text-align: center;
            font: Bold 12px/16px Gibbs;
            letter-spacing: 2px;
            color: #D84166;
            text-transform: uppercase;
        }
        h1 {
            text-align: center;
            font: 700 45px/58px Gibbs;
            letter-spacing: 0;
            color: #42375B;
            margin: 20px 0;
        }
        .regular-text {
            text-align: center;
            font: Normal 14px/25px Montserrat, sans-serif;
            letter-spacing: 0;
            color: #42375B;
            
        }
        @media screen and (max-height: 500px) {
            max-height: calc(100vh - 70px);
            padding: 15px;
            .modal-img {
                margin-bottom: 10px;
                height: 100px;
            }
            h1 {
                margin: 5px;
                font: 700 35px/40px Gibbs;
            }
            .regular-text {
                margin: 5px;
                font: Normal 13px/18px Montserrat, sans-serif;
            }
        }
        @media screen and (max-width: 768px) {
            margin-left: 10px;
            margin-right: 10px;
            h1 {
                font-size: 1.9em;
                line-height: 30px;
                font-weight: 800;
            }
            h5 {
                font-size: 0.9em;
            }
            .regular-text {
                font-size: 1em;
                font-weight: 400;
            }
        }
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>