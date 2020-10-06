<template>
    <div class="c-layout-default">
        <main class="c-layout-default__content-wrapper">
            <slot />
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {}
})
export default class LayoutDefault extends Vue {}
</script>

<style lang="scss"></style>
