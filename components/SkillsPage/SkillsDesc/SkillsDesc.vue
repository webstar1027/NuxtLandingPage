<template>
    <div class="desc-container" :class="[left ? 'left' : '', right ? 'right': '', stretch ? 'stretch' : '', lastChild ? 'last' : '']" >
        <div v-if="img && left">
            <img :src="img" alt="" v-if="img && left">
        </div>
        <article :class="[left ? 'left' : '', right ? 'right': '']">
            <h2>{{skill.title}}</h2>
            <h3>{{skill.sub_title}}</h3>
            <br>
            <p v-html="skill.content"></p>
            <ul v-if="skill.list.length > 1">
                <li v-for="(item, index) in skill.list" :key="index">{{item}}</li>
            </ul>
        </article>
        <div v-if="img && right">
            <img :src="img" alt="" v-if="img && right">
        </div>
    </div>
</template>
<script>
export default {
    name: 'SkillsDesc',
    props: ['skill', 'left', 'right', 'img', 'showMenu', 'lastChild'],
    computed: {
        stretch () {
            return !this.showMenu
        }
    }
}
</script>
<style lang="scss" scoped>
    .desc-container{
        display: flex;
        max-width: calc( 100% - 420px );
        flex-direction: row;
        align-self: flex-start;
        width: 100%;
        margin-bottom: 150px;
        margin-left: 141px;
        align-items: center;
        transition: all 0.35s ease-out;
        justify-content: center;
        &.stretch {
            margin-left: 2px;
            max-width: 100%;
            // text-align: center;
            // justify-content: center;
            transition: all 0.35s ease-in-out;
        }
        @media screen and(max-width: 1200px) {
            &.last {
                padding-top: 250px;
            }
        }
        
        div{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            max-width: 757px;
        }
        article{
            display: flex;
            max-width: 673px;
            flex-direction: column;
            padding-right: 67px;
            
            h2{
                text-align: left;
                font-weight: bold;
                font-size: 27px;
                font-family: Gibbs;
                letter-spacing: 0;
                color: #382A57;
                opacity: 1;
                margin-bottom: 50px;
            }
            h3{
                text-align: left;
                font-weight: bold;
                font-size: 16px;
                font-family: Montserrat, sans-serif;
                letter-spacing: 0;
                color: #D84166;
                text-transform: uppercase;
            } 
            p {
                text-align: left;
                font-weight: normal;
                font-size: 16px;
                font-family: Montserrat, sans-serif;
                letter-spacing: 0;
                color: #42375B;
            }
            ul {
                margin-top: 40px;
                list-style-type: disc;
                margin-left: 20px;
                li{
                    padding-left: 10px;
                    margin-bottom: 10px;
                    text-align: left;
                    font-weight: bold;
                    font-size: 16px;
                    font-family: Montserrat, sans-serif;
                    letter-spacing: 0;
                    color: #42375B;
                    opacity: 1;
                }
            }
        }
        @media screen and(max-width: 768px) {
            max-width: 100%;
            width: 100%;
            // margin-bottom: 150px;
            margin-left: 0px;
            margin-right: 0px;
            align-items: center;
            flex-direction: column;
            img {
                max-height: 250px;
            }
            &.left {
                flex-direction: column-reverse;
            }
            article {
                max-width: 100%;
                padding-right: 25px;
                padding-left: 25px;
                h2 {
                font-size: 1.9em !important;
                line-height: 30px;
                font-weight: 800;
                }
                h3 {
                    font-size: 0.9em !important;
                }
                p {
                    font-size: 1em !important;
                    font-weight: 400 !important;
                    padding-bottom: 50px;
                }
            }
        }
    }
</style>