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
            <label>
                <input
                    type='checkbox'
                    v-model='item.checked'
                >{{ item.value }}
            </label>
        </li>
    </ul>
</template>