<style module src='@/app/styles/components/atoms/list.sass'></style>

<script>
import Vue from 'vue'

export default Vue.extend ({
    data: () => {
        return {
            items: []
        }
    },
    methods: {
        add(value) {
            this.items.push ({
                value: value,
                checked: false
            })
        },
        delete() {
            this.items = this.items.filter((item) => {
                return item.checked === false
            })
        }
    }
})
</script>

<template>
    <ul>
        <li v-for='(item, index) in items' :key='index'>
            <label :class='$style.label'>
                <div :class='$style.wrapper'>
                    <input
                        :class='$style.input'
                        type='checkbox'
                        v-model='item.checked'
                    >
                </div>
                <div
                    :class='$style.item'
                >{{ item.value }}</div>
            </label>
        </li>
    </ul>
</template>