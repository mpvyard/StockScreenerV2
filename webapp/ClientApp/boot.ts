import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/companyList', component: require('./components/companyList/companyList.vue.html') },
    { path: '/todayStockReport', component: require('./components/todayStockReport/todayStockReport.vue.html') },
    { path: '/todayVolumeReport', component: require('./components/todayVolumeReport/todayVolumeReport.vue.html') },
    { path: '/todaySectorReport', component: require('./components/todaySectorReport/todaySectorReport.vue.html') },
    { path: '/todayCircuitReport', component: require('./components/todayCircuitReport/todayCircuitReport.vue.html') },
    { path: '/sectorStats', component: require('./components/sectorStats/sectorStats.vue.html') },
    { path: '/stockStats', component: require('./components/stockStats/stockStats.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
