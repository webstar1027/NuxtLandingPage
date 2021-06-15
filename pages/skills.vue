<template>
    <div class="skill-page">
        <skill-nav :nav="menuData" v-if="menuData" @menuActive="showMenu = true" @menuDeactive="showMenu = false" class="is-hidden-tablet"/>
        <div v-if='!$route.params.id'>
            <skills-top-container :showMenu="showMenu"/>
            <skill-professional :showMenu="showMenu"/>
            <client-only>
                <skills-desc :showMenu="showMenu" v-if="skillData[0]" :skill="skillData[0]" :right="true" :img="require('@/assets/skills/Group 3537.svg')"/>
                <skills-desc :showMenu="showMenu" v-if="skillData[1]" :skill="skillData[1]" :left="true" :img="require('@/assets/skills/Group 3276.svg')"/>
                <skills-desc :showMenu="showMenu" v-if="skillData[2]" :skill="skillData[2]" :right="true" :img="require('@/assets/skills/Group 3587.svg')"/>
                <div class="content-absolute" v-if="skillData[5] && skillData[4]">
                    <article class="back-drop">
                        <skill-desc-absolute :showMenu="showMenu" v-if="skillData[5]" :skill="skillData[5]" :left="true"/>
                        <skill-desc-absolute :showMenu="showMenu" v-if="skillData[4]" :skill="skillData[4]" :right="true"/>
                    </article>
                </div>
                <skills-desc :lastChild='true' :showMenu="showMenu" v-if="skillData[6]" :skill="skillData[6]" :left="true" :img="require('@/assets/skills/Group 3640.svg')"/>
            </client-only>
        </div>
        <nuxt-child :key="$route.params.id" :showMenu="showMenu" v-else></nuxt-child>
        <skill-nav :nav="menuData" v-if="menuData" @menuActive="showMenu = true" @menuDeactive="showMenu = false" class="is-hidden-mobile"/>
    </div>
</template>
<script>
import axios from 'axios'
import config from '@/config'
import SkillsTopContainer from '../components/SkillsPage/SkillsTopContainer/SkillsTopContainer'
import SkillProfessional from '../components/SkillsPage/SkillProfessional/SkillProfessional'
import SkillsDesc from '../components/SkillsPage/SkillsDesc/SkillsDesc'
import SkillDescAbsolute from '../components/SkillsPage/SkillsDesc/SkillDescAbsolute'
import SkillNav from '../components/SkillsPage/SkillNav/SkillNav'
export default {
    name: 'skills-page',
    async asyncData() {
        const url = `${config.api_url}contents?search=location:skills-services`
        const skill = await axios.get(url)
        const skillData = skill.data
        const url2 = `${config.api_url}menus/skills-services`
        const menu = await axios.get(url2)
        const menuData = menu.data
        return {
            skillData: skillData.data,
            menuData: menuData.data.children.data

        };
    },
    mounted() {
        console.log('skilldata', this.skillData)
    },
    data () {
        return {
            showMenu: true
        }
    },
    components: {
        SkillsTopContainer,
        SkillProfessional,
        SkillsDesc,
        SkillDescAbsolute,
        SkillNav
    }
}
</script>
<style lang="scss" scoped>
.skill-page{
    position: relative;
}
    .content-absolute{
        position: relative;
        margin: 0;
        padding: 0;
        article.back-drop{
            margin: 420px 0 250px auto;
            width: 1502px;
            height: 716px;
            background: #42375B 0% 0% no-repeat padding-box;
            border-radius: 100px 0px 0px 100px;
            opacity: 1;
            @media screen and(max-width: 768px) {
                margin: 120px 0 100px auto;
                width: 100%;
                height: auto;
                background: transparent;
            }
        }
    }
</style>