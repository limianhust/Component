import Vue from 'vue'
import confirm from './confirm.vue'
export default {
    install: function (Vue) {
        const VueConfirm = Vue.extend(confirm)
        const confirmInstance = new VueConfirm()
        const targetBox = document.querySelector('body');
        Vue.prototype.$confirm = function (options) {
            const options = options || {
                title: '标题',
                content: '内容',
                callback: ()=>{}
            }
            const title = options.title || '标题';
            const content = options.content || '内容';
            const callback = options.callback;
            let mDiv = document.createElement("div");
            mDiv.id = 'confirm-box';
            targetBox.appendChild(mDiv);
            confirmInstance.$mount("#confirm-box");
            confirmInstance.$props.title = title;
            confirmInstance.$props.content = content;
            confirmInstance.$props.callback = callback;

        }
    }
}