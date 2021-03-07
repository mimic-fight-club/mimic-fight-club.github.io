Vue.component('multi-select', {
    props: ['options', 'name'],
    data: function(){
        return {
            isHidden: true
        }
    },
    methods:{
        toggleHidden: function(event){
            this.isHidden = !this.isHidden;
            if(this.isHidden === true){
                this.$emit('closed');
            }
        },
        unselectAll: function(){
            this.options.forEach((el, index) =>{
                if(el.selected === true)
                    this.$emit('selected', index);
            })
        }
    },
    computed:{
        selectedOptions: function(){
            return this.options.filter((el) => { return el.selected === true;} ).map((el) => { return el.displayName}).sort();
        },
        id:function(){
            return 'option-' + this.name;
        }
    },
    template: `
    <div class="multi-select">
        <div>
            <div class="multi-select-input form-control" @click.self="toggleHidden($event)">
                <template v-if="selectedOptions.length > 0">
                    ({{selectedOptions.length}}) {{selectedOptions.join(', ')}}
                    <div class="multi-select-close" @click="unselectAll"><i class="bi bi-x"></i></div>
                </template>
                <template v-else>All</template>
                
            </div>
            <div class="multi-select-options" :class="{hidden: isHidden}">
                <div v-for="(option, index) in options" class="form-check form-switch multi-select-option">
                    <input class="form-check-input" type="checkbox" :id="id + '-' + index" :checked="option.selected" @change="$emit('selected', index)"/>
                    <label class="form-check-label" :for="id + '-' + index">{{option.displayName}}</label>
                </div>
            </div>
        </div>
    </div>
    `
})