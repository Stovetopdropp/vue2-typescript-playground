<template>
    <BaseForm
        :onSubmit="onSubmit"
        :submitButton="{
            text: 'Submit'
        }"
    >
        <ValidationProvider
            name="fullName"
            rules="required"
            v-slot="{ errors }"
        >
            <input type="text" v-model="fullName" />
            <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <!-- <BaseInput
            name="name"
            type="text"
            label="Full Name"
            placeholder="Your Name"
            success-message="Wow good job entering your name bud!!"
        /> -->
    </BaseForm>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ValidationProvider } from "vee-validate";

import BaseForm from "@modules/core/components/ui/form-elements/BaseForm.vue";

@Component({
    components: {
        BaseForm,
        ValidationProvider
    },
    data() {
        return {
            fullName: ""
        };
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
