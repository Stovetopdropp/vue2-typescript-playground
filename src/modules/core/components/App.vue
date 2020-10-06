<template>
    <component :is="layout"><router-view /></component>
</template>

<script lang="ts">
import { get } from "lodash";
import { Component, Vue } from "vue-property-decorator";

import LayoutDefault from "@modules/core/components/layouts/LayoutDefault.vue";

@Component
export default class App extends Vue {
    public get layout() {
        return get(this.$route.meta, "layout", LayoutDefault);
    }
}
</script>

<style lang="scss">
@import "@scss/index.scss";
</style>

<style lang="scss">
* {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
