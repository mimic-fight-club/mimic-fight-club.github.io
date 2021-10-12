Vue.component('item-list-item', {
    props:['item'],
    template: `
    <tr>
        <td>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-success btn-sm status-button" v-on:click="$emit('add-normal', item, $event)"><i class="bi bi-shield"></i></button>
            </div >
        </td >
        <td><a :href="item.link" @click.prevent="$emit('open-link', item.link)">{{ item.name }}</a></td >
        <td>{{ item.level }}</td>
        <td>
            <a v-if="item.rarity.link !== ''" :href="getAoNLink(item.rarity)" @click.prevent="$emit('open-link', getAoNLink(item.rarity))">{{ item.rarity.name }}</a>
            <template v-else>
                {{item.rarity.name}}
            </template>
        </td>
        <td>
            <span v-for="(trait, index) in item.traits">  
                <a v-if="trait.link !== ''" :href="getAoNLink(trait)" @click.prevent="$emit('open-link', getAoNLink(trait))">{{ trait.name }}</a>
                <template v-else>
                    {{trait.name}}
                </template>
                <span v-if="index < item.traits.length -1"></span>
            </span>
        </td>
        <td>
            <a v-if="item.category.link !== ''" :href="getAoNLink(item.category)" @click.prevent="$emit('open-link', getAoNLink(item.category))">{{ item.category.name }}</a>
            <template v-else>
                {{item.category.name}}
            </template>
        </td>
        <td>
            <a v-if="item.subcategory.link !== ''" :href="getAoNLink(item.subcategory)" @click.prevent="$emit('open-link', getAoNLink(item.subcategory))">{{ item.subcategory.name }}</a>
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
