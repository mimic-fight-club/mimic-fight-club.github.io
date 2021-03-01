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
        <td><a :href="creature.link" @click.prevent="$emit('open-link', creature.link)">{{ creature.name }}</a></td >
        <td>{{ creature.level }}</td>
        <td>{{ creature.family }}</td>
        <td>{{ creature.alignment }}</td>
        <td>{{ creature.type }}</td>
        <td>{{ creature.size }}</td>
    </tr>
    `
})