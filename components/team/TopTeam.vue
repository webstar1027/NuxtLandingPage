<template>
    <div class="top-section-team">
        <h5>OUR CORE</h5>
        <h1>Team Members</h1>
    </div>
</template>

<script>
    export default {
        name: "topTeam",
    }
</script>

<style lang="scss" scoped>
    .top-section-team {
        text-align: center;
        margin: 0;
        // height: 627px;
        padding-top: 5%;
        padding-bottom: 5%;
        h5 {
            color: #D84166;
            font-weight: 900;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2.57px;
        }
        h1 {
            margin-bottom: 15px;
            font-size: 40px;
            letter-spacing: 0;
            color: #382A57;
            font-weight: 900;
        }
        .regular-text {
            letter-spacing: -0.5px;
            color: #382A57;
            font-size: 14px;
            font-weight: 600;
            font-family: Montserrat, sans-serif;
            
        }
        button {
            margin-top: 60px;
            padding: 10px 25px;
            background: #00D857 0% 0% no-repeat padding-box;
            outline: none;
            color: #ffffff;
            border: none;
            cursor: pointer;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 15px;
            font-family: Montserrat, sans-serif;
        }
         @media screen and (max-width: 768px){
            padding-top: 60px;
            // height: 90vh;
             h5 {
            font-size: 0.7em;
            }
            h1 {
                font-size: 1.9em;
            }
            .regular-text {
                font-size: 0.8em;
                font-weight: 500;
            }
        }
    }
</style>