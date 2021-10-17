Vue.component('item-list-item', {
    props:['item'],
    template: `
    <tr>
        <td>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-success btn-sm status-button" v-on:click="$emit('add-normal', item, $event)"><i class="bi bi-shield"></i></button>
            </div >
        </td >
        <td><a :href="item.link" @click.prevent.exact="$emit('open-link', item.link)" v-on:click.ctrl.exact="$emit('add-filter', [item.name, 'name'])">{{ item.name }}</a></td >
        <td><span v-on:click.ctrl.exact="$emit('add-filter', [item.level, 'level'])">{{ item.level }}</span></td>
        <td>
            <a v-if="item.rarity.link !== ''" :href="getAoNLink(item.rarity)" @click.prevent.exact="$emit('open-link', getAoNLink(item.rarity))" v-on:click.ctrl.exact="$emit('add-filter', [item.rarity.name, 'rarity'])">{{ item.rarity.name }}</a>
            <template v-else>
                {{item.rarity.name}}
            </template>
        </td>
        <td>
            <span v-for="(trait, index) in item.traits">  
                <a v-if="trait.link !== ''" :href="getAoNLink(trait)" @click.prevent.exact="$emit('open-link', getAoNLink(trait))" v-on:click.ctrl.exact="$emit('add-filter', [trait.name, 'trait'])">{{ trait.name }}</a>
                <template v-else>
                    {{trait.name}}
                </template>
                <span v-if="index < item.traits.length -1"></span>
            </span>
        </td>
        <td>
            <a v-if="item.category.link !== ''" :href="getAoNLink(item.category)" @click.prevent.exact="$emit('open-link', getAoNLink(item.category))" v-on:click.ctrl.exact="$emit('add-filter', [item.category.name, 'category'])">{{ item.category.name }}</a>
            <template v-else>
                {{item.category.name}}
            </template>
        </td>
        <td>
            <a v-if="item.subcategory.link !== ''" :href="getAoNLink(item.subcategory)" @click.prevent.exact="$emit('open-link', getAoNLink(item.subcategory))" v-on:click.ctrl.exact="$emit('add-filter', [item.subcategory.name, 'subcategory'])">{{ item.subcategory.name }}</a>
            <template v-else>
                {{item.subcategory.name}}
            </template>
        </td>
        <td>{{ item.bulk }}</td>
        <td>{{ item.price }}</td>
    </tr>
    `,
    methods: {        
        getAoNLink(subItem){
            return "https://2e.aonprd.com/" + subItem.link;
        }
    }
});
