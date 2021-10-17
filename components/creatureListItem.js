Vue.component('creature-list-item', {
    props:['creature'],
    template: `
    <tr>
        <td>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-success status-button" v-on:click="$emit('add-weak', creature)"><i class="bi bi-shield-slash"></i></button>
                <button type="button" class="btn btn-success btn-sm status-button" v-on:click="$emit('add-normal', creature, $event)"><i class="bi bi-shield"></i></button>
                <button type="button" class="btn btn-success status-button" v-on:click="$emit('add-elite', creature)"><i class="bi bi-shield-plus"></i></button>
            </div >
        </td >
        <td><a :href="creature.name.link" @click.prevent.exact="$emit('open-link', creature.name.link)" v-on:click.ctrl.exact="$emit('add-filter', [creature.name.name, 'name'])">{{ creature.name.name }}</a></td >
        <td><span v-on:click.ctrl.exact="$emit('add-filter', [creature.level, 'level'])">{{ creature.level }}</span></td>
        <td>
            <a v-if="creature.family.link !== ''" :href="creature.family.link" @click.prevent.exact="$emit('open-link', creature.family.link)" v-on:click.ctrl.exact="$emit('add-filter', [creature.family.name, 'family'])">{{ creature.family.name }}</a>
            <template v-else>
                {{creature.family.name}}
            </template>
        </td>
        <td><span v-on:click.ctrl.exact="$emit('add-filter', [creature.alignment, 'alignment'])">{{ creature.alignment }}</span></td>
        <td>
            <span v-for="(type, index) in creature.types">  
                <a v-if="type.link !== ''" :href="type.link" @click.prevent.exact="$emit('open-link', type.link)" v-on:click.ctrl.exact="$emit('add-filter', [type.name, 'type'])">{{ type.name }}</a>
                <template v-else>
                    {{type.name}}
                </template>
                <span v-if="index < creature.types.length -1"></span>
            </span>
            {{ creature.type }}
        </td>
        <td><span v-on:click.ctrl.exact="$emit('add-filter', [creature.size, 'size'])">{{ creature.size }}</span></td>
        <td>
            <span v-for="(trait, index) in creature.traits">  
                <a v-if="trait.link !== ''" :href="trait.link" @click.prevent.exact="$emit('open-link', trait.link)" v-on:click.ctrl.exact="$emit('add-filter', [trait.name, 'trait'])">{{ trait.name }}</a>
                <template v-else>
                    {{trait.name}}
                </template>
                <span v-if="index < creature.traits.length -1"></span>
            </span>
            {{ creature.type }}
        </td>
    </tr>
    `
});