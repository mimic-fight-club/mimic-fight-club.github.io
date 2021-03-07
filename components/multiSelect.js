Vue.component('multi-select', {
    props: ['options', 'name'],
    data: function(){
        return {
            isHidden: true,
            search: "",
        }
    },
    methods:{
        toggleHidden: function(){
            this.isHidden = !this.isHidden;
            if(this.isHidden === true){
                this.$emit('closed');
            }else{
                this.$nextTick(() =>
                    this.$refs.searchInput.focus()
                );
            }
        },
        switchFiltered: function(switchTo){
            this.filteredOptions.forEach((el) => {
                if (el.selected === !switchTo) {
                    this.$emit('selected', el.index);
                }
            })

        },
        unselectAll: function(){
            let changed = false;
            this.options.forEach((el, index) =>{
                if(el.selected === true){
                    this.$emit('selected', index);
                    changed = true;
                }
            })
            if(changed === true){
                this.$emit('closed');
            }
        },
        toggleOption: function(index){
            this.$emit('selected', index)
        },
        refocus: function(){
            if (this.isHidden === false){
                this.$refs.searchInput.focus();
            }
        },
        preventDefault: function(event){
            event.stopImmediatePropagation();
        }
    },
    computed:{
        filteredOptions: function(){
            let opt = this.options.map((el, index) => {
                el.index = index;
                return el;
            })

            if(this.search === "")
                return opt;
            
            return opt.filter((el) =>{ 
                return el.displayName.toLowerCase().includes(this.search); 
            });
        },
        selectedOptions: function(){
            return this.options.filter((el) => { return el.selected === true;} ).map((el) => { return el.displayName}).sort();
        },
        id:function(){
            return 'option-' + this.name;
        }
    },
    template: `
    <div class="multi-select">
        <div @click="refocus()">
            <div v-if="isHidden" class="multi-select-input form-control" @click.self="toggleHidden()">
                <template v-if="selectedOptions.length > 0">
                    ({{selectedOptions.length}}) {{selectedOptions.join(', ')}}
                    <div class="multi-select-close" @click="unselectAll"><i class="bi bi-x"></i></div>
                </template>
                <template v-else>All</template>
            </div>
            <div v-else class="input-group">
                <input class="multi-select-input form-control" v-model="search" ref="searchInput" @keydown.esc="toggleHidden()" @keydown.enter="switchFiltered(true)" @keydown.enter.ctrl="switchFiltered(false)"/>
                <button class="btn btn-primary" type="button" @click="toggleHidden()"><i class="bi bi-check2-circle"></i></button>
            </div>
            
            <div class="multi-select-option-list" :class="{hidden: isHidden}">
                <template v-if="filteredOptions.length > 0">
                    <div class="input-group w-100 pb-2">
                        <button class="btn btn-dark w-50" @click="switchFiltered(true)">Select</button>
                        <button class="btn btn-dark w-50" @click="switchFiltered(false)">Clear</button>
                    </div>
                    <div class="options">
                        <div v-for="option in filteredOptions" class="form-check form-switch multi-select-option">
                            <input class="form-check-input" type="checkbox" :id="id + '-' + option.index" :checked="option.selected" @change="toggleOption(option.index)"/>
                            <label class="form-check-label" :for="id + '-' + option.index">{{option.displayName}}</label>
                        </div>
                    </div>
                </template>
                <div v-else style="text-align: center">Nothing matches your search</div>
            </div>
        </div>
    </div>
    `
})