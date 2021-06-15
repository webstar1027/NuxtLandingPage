<template>
    <div class="absoulute-skill" :class="[left ? 'left' : '', right ? 'right': '']">
        <article>
            <h2>{{skill.title}}</h2>
            <h3>{{skill.sub_title}}</h3>
            <br>
            <p v-html="skill.content"></p>
            <ul v-if="skill.list.length > 1">
                <li v-for="(item, index) in skill.list" :key="index">{{item}}</li>
            </ul>
        </article>
    </div>
</template>
<script>
export default {
    name: 'SkillDescAbsolute',
    props: ['skill', 'left', 'right']
}
</script>
<style lang="scss" scoped>
    .absoulute-skill {
        position: absolute;
        bottom: -140px;
        &.left{
            right: 60%;
        }
        &.right{
            right: 12%;
        }
        article{
            display: flex;
            max-width: 641px;
            flex-direction: column;
            padding: 46px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 20px 50px 50px #42375B12;
            border: 1px solid #F5F4F4;
            border-radius: 25px;
            opacity: 1;
            
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
        @media screen and(max-width: 1200px) {
            position: relative;
            top: -500px;
            display: flex;
            flex-direction: column;
            &.left{
                left: 20px;
            }
            &.right{
                left: 20px;
            }
            article {
                max-width: 50%;
                padding: 25px;
                margin-left: 10px;
                margin-right: 10px;
            }
        }
        @media screen and(max-width: 768px) {
            position: relative;
            bottom: 50px;
            &.left{
            right: 0px;
            }
            &.right{
                right: 0px;
            }
            article {
                max-width: 100%;
                padding: 25px;
                margin-left: 10px;
                margin-right: 10px;
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