<template>
    <div class="tabbar_item"
         v-on:click="onClickItem">
        <span class="iconfont"
              v-bind:class="{'show':!active,'notShow':active}"
              v-html="icon_not_focus"></span>
        <span class="iconfont"
              v-bind:class="{'show':active,'notShow':!active}"
              v-html="icon_focus"></span>
        <span class="iconfont">{{ name }}</span>
    </div>
</template>

<script>
    export default {
        name: "tabbar_item",
        props: {
            item_data: Object,
        },
        data() {
            return {
                icon_not_focus: this.item_data.icon,
                icon_focus: this.item_data.icon_focus,
                name: this.item_data.name,
                //这里的data不是响应式的，需要用computed实现响应式
                // active:this.item_data.focus
            }
        },
        computed: {
            active() {
                return this.item_data.focus
            }
        },
        methods: {
            onClickItem() {
                // console.log("this.item_data.focus:"+this.item_data.focus)
                // console.log("this.active:"+this.active);
                this.$emit("emitChildClick", this.item_data);
            }
        }
    }
</script>

<style scoped>
    .tabbar_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .iconfont {
        font-size: 23px;
    }

    .show {
        display: block;
    }

    .notShow {
        display: none;
    }
</style>