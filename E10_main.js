Vue.component('modal', {
    template:`
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>
            
            <!-- click的时候，触发close这一"全局行为" -->
            <button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
        </div>
    `
});

new Vue({

    el: '#root',

    //scope1的变量，用于控制modal是否显示
    data: {
        showModal: false
    }

});