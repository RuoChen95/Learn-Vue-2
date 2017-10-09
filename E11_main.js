Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <!-- 通过tab的属性来确定其class -->
                    <li v-for="tab in tabs" :class="{'is-active':tab.isActive}">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="tabs-details">
                <!-- 组件的子内容 this.$children -->
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

        // 过滤所有的tag，选择正确的tag设置其属性
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    },

    // 可以用于测试，函数形式
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

    // 只显示相应的属性值
    template:`
        <div v-show="isActive"><slot></slot></div>
    `,
    props: {
        name: { required: true },
        selected: { default: false}
    },
    //通过某属性计算某不变的属性
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