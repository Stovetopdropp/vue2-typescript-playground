<template>
    <div class="c-form__field-container">
        <div
            :class="{
                'c-form__input-container--error': hasError,
                'c-form__input-container--dirty': value
            }"
            class="c-form__input-container"
        >
            <div class="c-form__label c-form__label--dynamic">
                {{ labelText + (isRequired ? "*" : "") }}
            </div>
            <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
                <input type="text" v-model="inputValue" />
                <span>{{ errors[0] }}</span>
            </ValidationProvider>
        </div>
    </div>
</template>

<script>

import { ValidationProvider } from "vee-validate";

export default {
    name: "BaseInput",
    components: {
        ValidationProvider
    },
    props: {
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            default: ""
        },
        rules: {
            type: String,
            default: ""
        },
        labelText: {
            type: String,
            default: ""
        },
        errorText: {
            type: String,
            default: ""
        },
        inputType: {
            type: String,
            default: "text"
        },
        successText: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            inputValue: this.value
        };
    },
    computed: {
        hasError() {
            return this.errorText !== "";
        },
        isRequired() {
            return this.rules.indexOf("required") >= 0;
        }
    }
};
</script>

<style lang="scss"></style>
