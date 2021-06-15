<template>
    <div>
        <single-top-section :skill="skillData.data" :stretch="stretch"/>
        <div class="users" :class="stretch ? 'stretch' : ''">
            <div class="content">
                <div class="content-users" v-for="user in skillData.data.skill.users" :key="user.id">
                    <SingleUser :user="user"></SingleUser>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import config from '@/config'
import SingleTopSection from '@/components/skills/SingleTopSection/SingleTopSection.vue'
import SingleUser from '@/components/skills/SingleUser/SingleUser.vue'
import SkillNav from '@/components/SkillsPage/SkillNav/SkillNav'


export default {
    name: 'skill-page',
    async asyncData({params}) {
        const url = `${config.api_url}contents/menu/${params.id}`
        const skill = await axios.get(url)
        const skillData = skill.data
        const url2 = `${config.api_url}menus/skills-services`
        const menu = await axios.get(url2)
        const menuData = menu.data
        return {
            skillData: skillData,
            menuData: menuData.data.children.data
        };
    },
    components: {
        SingleTopSection,
        SingleUser,
        SkillNav
    },
    props: {
        showMenu: Boolean
    },
    computed: {
        stretch () {
            return !this.showMenu
        }
    }
}
</script>
<style lang="scss" scoped>
    .users{
        display: flex;
        max-width: calc( 100% - 279px);
        align-items: center;
        align-content: center;
        margin-right: 279px;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        transition: all 0.35s ease-out;
        // @media screen and (max-width: 1260px) {
        //     max-width: 100%;
        //     margin-right: 0;
        // }
        &.stretch {
            max-width: 100%;
            margin-right: 0px;
        }
        .content {
            padding-bottom: 250px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: inherit;
            align-content: center;
            align-items: stretch;
            justify-content: center;
            @media screen and (max-width: 1260px) {
                max-width: 100%;
                margin-right: 0;
            }
            ul, ul li, ol, ol li {
                list-style-type: none!important;
                list-style: none !important;
            }

        }
        .content-users {
            display: flex;
            flex-direction: column;
        }
    }

</style>