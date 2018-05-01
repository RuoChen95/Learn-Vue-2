<template>
    <div>
        <Anchor :level="1" title="特性1">特性1</Anchor>
        <Anchor :level="2" title="特性2">特性2</Anchor>
        <Anchor :level="3" title="特性3">特性3</Anchor>
    </div>
</template>
<script>
    import Anchor from '../components/anchor.vue'
    export default {
        components: {Anchor},
        props: {},
        data () {
            return {};
        },
        computed: {},
        methods: {}
    }
</script>