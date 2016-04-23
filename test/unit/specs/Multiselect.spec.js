import Vue from 'vue'
import Multiselect from 'src/components/Multiselect'

describe('Multiselect.vue', () => {
  describe('Accept options', () => {
    it('should accept options (array of values)', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source"></multiselect>',
        components: { Multiselect },
        data: {
          value: [''],
          source: ['1', '2', '3']
        }
      }).$mount()
      expect(vm.$children[0].options).to.deep.equal(vm.source)
    })

    it('should accept options (array of objects)', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source"></multiselect>',
        components: { Multiselect },
        data: {
          value: [''],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].options).to.deep.equal(vm.source)
    })
  })

  describe('Preselecting values', () => {
    it('should preselect passed simple value', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source"></multiselect>',
        components: { Multiselect },
        data: {
          value: ['1'],
          source: ['1', '2', '3']
        }
      }).$mount()
      expect(vm.$children[0].selected).to.deep.equal(vm.value)
    })

    it('should preselect passed array of values', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source"></multiselect>',
        components: { Multiselect },
        data: {
          value: ['1', '2'],
          source: ['1', '2', '3']
        }
      }).$mount()
      expect(vm.$children[0].selected).to.deep.equal(vm.value)
    })

    it('should preselect passed object', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source"></multiselect>',
        components: { Multiselect },
        data: {
          value: [{ name: '2' }],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].selected).to.deep.equal(vm.value)
    })

    it('should preselect passed array of objects', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source"></multiselect>',
        components: { Multiselect },
        data: {
          value: [{ name: '2' }, { name: '3' }],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].selected).to.deep.equal(vm.value)
    })

    it('should preselect passed array of objects in different order', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source"></multiselect>',
        components: { Multiselect },
        data: {
          value: [{ name: '3' }, { name: '2' }],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].selected).to.deep.equal(vm.value)
    })

    it('should preselect value when multi is false', () => {
      const vm = new Vue({
        template: '<multiselect :selected.sync="value" :multiple="true" :options="source"></multiselect>',
        components: { Multiselect },
        data: {
          value: '1',
          source: ['1', '2', '3']
        }
      }).$mount()
      expect(vm.$children[0].selected).to.deep.equal('1')
      expect(vm.$children[0].$els.tags.querySelector('.dropdown__single').textContent).to.contain('2')
    })

    it('should preselect array of objects when multi is true', () => {
      const vm = new Vue({
        template: '<multiselect :selected.sync="value" :multiple="true" :options="source"></multiselect>',
        components: { Multiselect },
        data: {
          value: ['1', '2'],
          source: ['1', '2', '3']
        }
      }).$mount()
      expect(vm.$children[0].selected).to.deep.equal(['1', '2'])
    })

    it('should create tags for preselected options', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [{ name: '2' }],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].$els.tags.querySelector('.dropdown__tag').textContent).to.contain('2')
    })
  })

  describe('#select()', () => {
    describe('when multiple prop is TRUE', () => {
      it('should add values to selected array', () => {
        const vm = new Vue({
          template: '<multiselect :selected="value" :options="source" :multiple="true"></multiselect>',
          components: { Multiselect },
          data: {
            value: [],
            source: ['1', '2', '3']
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].value).to.deep.equal(['1', '2'])
      })

      it('should add objects to selected array', () => {
        const vm = new Vue({
          template: '<multiselect :selected.sync="value" :options="source" :multiple="true" label="name"></multiselect>',
          components: { Multiselect },
          data: {
            value: [],
            source: [{ name: '1' }, { name: '2' }, { name: '3' }]
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].value).to.deep.equal([{ name: '1' }, { name: '2' }])
      })
    })
  })

  it('should set only 1 object as selected when multiple is false when running #select(option)', () => {
    const vm = new Vue({
      template: '<multiselect :selected.sync="value" :options="source" label="name"></multiselect>',
      components: { Multiselect },
      data: {
        value: [],
        source: [{ name: '1' }, { name: '2' }, { name: '3' }]
      }
    }).$mount()
    vm.$children[0].select(vm.source[0])
    vm.$children[0].select(vm.source[1])
    expect(vm.$children[0].value).to.deep.equal({ name: '2' })
  })

  it('should remove selected tag if already selected when running #select(option)', () => {
    const vm = new Vue({
      template: '<multiselect :selected.sync="value" :options="source" label="name" :multiple="true"></multiselect>',
      components: { Multiselect },
      data: {
        value: [],
        source: [{ name: '1' }, { name: '2' }, { name: '3' }]
      }
    }).$mount()
    vm.$children[0].select(vm.source[0])
    vm.$children[0].select(vm.source[1])
    vm.$children[0].select(vm.source[0])
    expect(vm.$children[0].value).to.deep.equal([{ name: '2' }])
  })

  it('should remove last selected element when running #removeLastElement()', () => {
    const vm = new Vue({
      template: '<multiselect :selected.sync="value" :options="source" label="name" :multiple="true"></multiselect>',
      components: { Multiselect },
      data: {
        value: [],
        source: [{ name: '1' }, { name: '2' }, { name: '3' }]
      }
    }).$mount()
    vm.$children[0].select(vm.source[0])
    vm.$children[0].select(vm.source[1])
    vm.$children[0].select(vm.source[2])
    vm.$children[0].removeLastElement()
    expect(vm.$children[0].value).to.deep.equal([{ name: '1' }, { name: '2' }])
  })

  it('should add currently pointed option when running #addPointerElement() ', () => {
    const vm = new Vue({
      template: '<multiselect :selected.sync="value" :options="source" label="name" :multiple="true"></multiselect>',
      components: { Multiselect },
      data: {
        value: [],
        source: [{ name: '1' }, { name: '2' }, { name: '3' }]
      }
    }).$mount()
    vm.$children[0].pointer = 2
    vm.$children[0].addPointerElement()
    expect(vm.$children[0].value).to.deep.equal([vm.source[2]])
  })

  it('should reduce the filteredOptions when typing inside search field', () => {
    const vm = new Vue({
      template: '<multiselect :selected.sync="value" :searchable="true" :options="source" label="name" :multiple="true"></multiselect>',
      components: { Multiselect },
      data: {
        value: [],
        source: [{ name: '1' }, { name: '2' }, { name: '3' }]
      }
    }).$mount()
    expect(vm.$children[0].filteredOptions).to.deep.equal([{ name: '1' }, { name: '2' }, { name: '3' }])
    vm.$children[0].$set('search', '2')
    expect(vm.$children[0].filteredOptions).to.deep.equal([{ name: '2' }])
  })

  it('should hide already selected elements when :hide-selected is set to true', () => {
    const vm = new Vue({
      template: '<multiselect :selected.sync="value" :searchable="true" :options="source" label="name" :multiple="true" :hide-selected="true"></multiselect>',
      components: { Multiselect },
      data: {
        value: [],
        source: [{ name: '1' }, { name: '2' }, { name: '3' }]
      }
    }).$mount()
    expect(vm.$children[0].filteredOptions).to.deep.equal(vm.source)
    vm.$children[0].select(vm.source[1])
    expect(vm.$children[0].filteredOptions).to.deep.equal([{ name: '1' }, { name: '3' }])
  })
})
