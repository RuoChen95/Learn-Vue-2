Vue.component('tabs', {
    template: `
        
    `,
    props: {
        XX: { required: true },
        XXX: { default: false}
    },
    methods: {
        functionName(parameter) {

        }
    },
    //ͨ��ĳ���Լ���ĳ���������
    computed: {
        attributeName() {
            return attributeValue;
        }
    },
    mounted() {

    },
    data() {
        return {
            xx: []
        }
    },
    //�������������ʱ�������Է����ı䣯����ĳ���¼�Event.$on
    created() {

    }
});

new Vue({
    el: '#root',
    data: {
        xx: false
    }
});