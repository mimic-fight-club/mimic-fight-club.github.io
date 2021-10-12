Vue.component('coins-display', {
    props:['coins', 'use_platinum_conversion'],
    template: `
    <span>
        <span v-if="coins.pp != 0 || (use_platinum_conversion && coins.gp == 0 && coins.sp == 0 && coins.cp == 0)">{{coins.pp}}pp</span>
        <span v-if="coins.gp != 0 || (!use_platinum_conversion && coins.pp == 0 && coins.sp == 0 && coins.cp == 0)">{{coins.gp}}gp</span>
        <span v-if="coins.sp != 0">{{coins.sp}}sp</span>
        <span v-if="coins.cp != 0">{{coins.cp}}cp</span>
    </span>
    `
});