<template>
    <BaseForm
        :onSubmit="onSubmit"
        :submitButton="{
            text: 'Submit'
        }"
    >
        <BaseInput name="fullName" labelText="Full Name" rules="required" />
        <BaseInput name="email" labelText="Email" rules="required|email" />
    </BaseForm>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import BaseForm from "@modules/core/components/ui/form-elements/BaseForm.vue";
import BaseInput from "@modules/core/components/ui/form-elements/BaseInput.vue";

@Component({
    components: {
        BaseForm,
        BaseInput
    },
    data() {
        return {};
    },
    methods: {
        async onSubmit() {
            // this only fires if validation passes
            await new Promise(resolve => {
                setTimeout(() => resolve({}), 750);
            });

            console.log("successful mission boys");
        }
    }
})
export default class Home extends Vue {}
</script>
