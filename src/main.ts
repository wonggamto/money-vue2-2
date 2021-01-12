import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {tagListModel} from '@/models/tagListModel';
import {recordListModel} from '@/models/recordListModel';

Vue.config.productionTip = false;
Vue.use(ElementUI);

//record store
window.recordList = recordListModel.fetch();
window.createRecord = (record: RecordItem) => recordListModel.create(record);
//tag store
window.tagList = tagListModel.fetch();
window.findTag = (id: string) => {
  return window.tagList.filter(t => t.id === id)[0];
};
window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === 'duplicated') {
    window.alert('标签名重复，请重新输入');
  } else if (message === 'success') {
    window.alert('标签添加成功');
  }
};
window.removeTag = (id: string) => {
  return tagListModel.remove(id);
};
window.updateTag = (id: string, name: string) => {
  return tagListModel.update(id, name);
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
