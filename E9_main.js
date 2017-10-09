Vue.component('message', {
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}
                <button @click="hideModal" class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,

    //���÷�����������ʽ��ʹ��"�������ݵķ���"
    //����˼�����ݵİ�����
    methods: {
        hideModal() {
            this.isVisible = false;
        }
    },

    //ʹ��props���ԣ�������ʽ�������ݲ���
    props: ['title', 'body'],
    //Ҳ����������
    props: {
        'title':{},
        'body':{}
    },

    //��������Ҫ������, ������ʽ
    data() {
        return {
            isVisible: true
        };
    }
});


// ����������
new Vue({
    el: '#root'
});

