<template>
    <div class="wrapper">
        <v-head></v-head>
        <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
                <router-view></router-view>
            </keep-alive>
        </transition>
        <!--<v-sidebar></v-sidebar>-->
        <!--<div class="content-box" :class="{'content-collapse':collapse}">-->
            <!--<v-tags></v-tags>-->
            <!--<div class="content">-->
               <!---->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import vHead from './Header.vue';

    export default {
        data(){
            return {
                tagsList: [],
                collapse: false
            }
        },
        components:{
            vHead,
        },
        created(){


        }
    }
</script>
