Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <!-- ͨ��tab��������ȷ����class -->
                    <li v-for="tab in tabs" :class="{'is-active':tab.isActive}">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="tabs-details">
                <!-- ����������� this.$children -->
                <slot></slot>
            </div>
            
            <br>
            
            <h1>what we want: </h1>
            
            <div class="tabs">
              <ul>
                <li class="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
              </ul>
            </div>
        </div>
    `,
    methods: {

        // �������е�tag��ѡ����ȷ��tag����������
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    },

    // �������ڲ��ԣ�������ʽ
    mounted() {
        console.log(this.$children)
    },
    data() {
        return { tabs: [] }
    },
    created() {
        this.tabs = this.$children;
    }
});

Vue.component('tab', {

    // ֻ��ʾ��Ӧ������ֵ
    template:`
        <div v-show="isActive"><slot></slot></div>
    `,
    props: {
        name: { required: true },
        selected: { default: false}
    },
    //ͨ��ĳ���Լ���ĳ���������
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    data() {
        return {
            isActive: false
        };
    },
    mounted() {
        this.isActive = this.selected;
    }
});

new Vue({
    el: '#root',
    data: {
        showModal: false
    }
});