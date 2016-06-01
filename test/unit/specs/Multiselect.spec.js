import Vue from 'vue'
import Multiselect from 'src/Multiselect'

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
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].options).to.deep.equal(vm.source)
    })
  })

  describe('Preselecting values', () => {
    describe('when searchable == TRUE', () => {
      describe('when multiple == TRUE', () => {
        it('should preselect passed array of values', () => {
          const vm = new Vue({
            template: '<multiselect :selected="value" :options="source" :multiple="true"></multiselect>',
            components: { Multiselect },
            data: {
              value: ['1', '2'],
              source: ['1', '2', '3']
            }
          }).$mount()
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$els.tags.querySelector('.multiselect__tag').textContent).to.contain('1')
        })

        it('should preselect passed array of objects', () => {
          const vm = new Vue({
            template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
            components: { Multiselect },
            data: {
              value: [{ id: '2' }, { id: '3' }],
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$els.tags.querySelector('.multiselect__tag').textContent).to.contain('2')
        })

        it('should preselect passed array of objects in different order', () => {
          const vm = new Vue({
            template: '<multiselect :selected="value" :options="source" :multiple="true" label="id" key="id"></multiselect>',
            components: { Multiselect },
            data: {
              value: [{ id: '3' }, { id: '2' }],
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$els.tags.querySelector('.multiselect__tag').textContent).to.contain('3')
        })
        it('should set value to [] when passing null as selected', () => {
          const vm = new Vue({
            template: '<multiselect :selected="value" :options="source" :multiple="true" label="id" key="id"></multiselect>',
            components: { Multiselect },
            data: {
              value: null,
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].value).to.deep.equal([])
          expect(vm.$children[0].$els.tags.querySelector('.multiselect__tag')).to.equal(null)
        })
      })

      describe('when multiple == FALSE', () => {
        it('should preselect passed simple value', () => {
          const vm = new Vue({
            template: '<multiselect :selected="value" :options="source"></multiselect>',
            components: { Multiselect },
            data: {
              value: '1',
              source: ['1', '2', '3']
            }
          }).$mount()
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$els.tags.querySelector('input').value).to.contain('1')
        })

        it('should preselect passed object', () => {
          const vm = new Vue({
            template: '<multiselect :selected="value" :options="source" label="id" key="id"></multiselect>',
            components: { Multiselect },
            data: {
              value: { id: '2' },
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$els.tags.querySelector('input').value).to.contain('2')
        })

        it('should set value to null when passing null as selected', () => {
          const vm = new Vue({
            template: '<multiselect :selected="value" :options="source" label="id" key="id"></multiselect>',
            components: { Multiselect },
            data: {
              value: null,
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].value).to.deep.equal(null)
          expect(vm.$children[0].$els.tags.querySelector('.multiselect__tag')).to.equal(null)
        })

        it('should set search value to equal to passed object label', () => {
          const vm = new Vue({
            template: '<multiselect :selected="value" :options="source" label="id" key="id"></multiselect>',
            components: { Multiselect },
            data: {
              value: { id: '1' },
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].search).to.equal('1')
          expect(vm.$children[0].$els.search.value).to.equal('1')
        })

        it('should set search value to equal to passed value', () => {
          const vm = new Vue({
            template: '<multiselect :selected="value" :options="source" label="id" key="id"></multiselect>',
            components: { Multiselect },
            data: {
              value: 2,
              source: [1, 2, 3]
            }
          }).$mount()
          expect(vm.$children[0].search).to.equal(2)
          expect(vm.$children[0].$els.search.value).to.equal('2')
        })
      })
    })
    describe('when searchable == FALSE', () => {
      it('should preselect passed simple value', () => {
        const vm = new Vue({
          template: '<multiselect :selected="value" :options="source" :searchable="false"></multiselect>',
          components: { Multiselect },
          data: {
            value: '1',
            source: ['1', '2', '3']
          }
        }).$mount()
        expect(vm.$children[0].selected).to.deep.equal(vm.value)
        expect(vm.$children[0].$els.tags.querySelector('.multiselect__single').textContent).to.contain('1')
      })

      it('should preselect passed object', () => {
        const vm = new Vue({
          template: '<multiselect :selected="value" :options="source" label="id" key="id" :searchable="false"></multiselect>',
          components: { Multiselect },
          data: {
            value: { id: '2' },
            source: [{ id: '1' }, { id: '2' }, { id: '3' }]
          }
        }).$mount()
        expect(vm.$children[0].selected).to.deep.equal(vm.value)
        expect(vm.$children[0].$els.tags.querySelector('.multiselect__single').textContent).to.contain('2')
      })
    })
  })

  describe('#select()', () => {
    it('should reset search input when clearOnSelect == TRUE', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: ['1', '2', '3']
        }
      }).$mount()
      vm.$children[0].$els.search.focus()
      vm.$children[0].search = 'test'
      vm.$children[0].select(vm.source[0])
      Vue.nextTick(function () {
        expect(vm.$children[0].$els.tags.querySelector('input').value).to.equal('')
        done()
      })
    })

    it('should keep search input when clearOnSelect == FALSE', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true" :clear-on-select="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: ['1', '2', '3']
        }
      }).$mount()
      vm.$children[0].$els.search.focus()
      vm.$children[0].search = 'test'
      vm.$children[0].select(vm.source[0])
      Vue.nextTick(function () {
        expect(vm.$children[0].$els.tags.querySelector('input').value).to.equal('test')
        done()
      })
    })

    describe('when multiple == TRUE', () => {
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
          template: '<multiselect :selected="value" :options="source" :multiple="true" label="id" key="id"></multiselect>',
          components: { Multiselect },
          data: {
            value: [],
            source: [{ id: '1' }, { id: '2' }, { id: '3' }]
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].value).to.deep.equal([{ id: '1' }, { id: '2' }])
      })

      it('should remove already selected object', () => {
        const vm = new Vue({
          template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
          components: { Multiselect },
          data: {
            value: [],
            source: [{ id: '1' }, { id: '2' }, { id: '3' }]
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].value).to.deep.equal([{ id: '1' }, { id: '2' }])
        vm.$children[0].select(vm.source[0])
        expect(vm.$children[0].value).to.deep.equal([{ id: '2' }])
      })
    })
    describe('when multiple == FALSE', () => {
      it('should change selected value to new one', () => {
        const vm = new Vue({
          template: '<multiselect :selected="value" :options="source" label="id" key="id"></multiselect>',
          components: { Multiselect },
          data: {
            value: [],
            source: [{ id: '1' }, { id: '2' }, { id: '3' }]
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        expect(vm.$children[0].value).to.deep.equal({ id: '1' })
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].value).to.deep.equal({ id: '2' })
      })
    })
    describe('when closeOnSelect == FALSE', () => {
      it('should not close the dropdown', () => {
        const vm = new Vue({
          template: '<multiselect :selected="value" :options="source" label="id" key="id" :close-on-select="false"></multiselect>',
          components: { Multiselect },
          data: {
            value: [],
            source: [{ id: '1' }, { id: '2' }, { id: '3' }]
          }
        }).$mount()
        const spy = sinon.spy(vm.$children[0], 'deactivate')
        vm.$children[0].activate()
        vm.$children[0].select(vm.source[0])
        Vue.nextTick(function () {
          expect(spy.called).to.equal(false)
        })
      })
    })
  })

  describe('#removeElement()', () => {
    it('should remove passed element', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id"></multiselect>',
        components: { Multiselect },
        data: {
          value: [{ id: '1' }],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].removeElement(vm.$children[0].value[0])
      expect(vm.$children[0].value).to.deep.equal([])
    })

    it('should NOT remove passed element when allowEmpty == FALSE & 1 element is left', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :allow-empty="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: [{ id: '1' }, { id: '2' }],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].removeElement(vm.$children[0].value[0])
      expect(vm.$children[0].value).to.deep.equal([{ id: '2' }])
      vm.$children[0].removeElement(vm.$children[0].value[0])
      expect(vm.$children[0].value).to.deep.equal([{ id: '2' }])
    })
  })

  describe('#removeLastElement()', () => {
    it('should remove last selected element', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [{ id: '1' }, { id: '2' }],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].removeLastElement()
      expect(vm.$children[0].value).to.deep.equal([{ id: '1' }])
    })
  })

  describe('#addPointerElement()', () => {
    it('should select() currently pointed option', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].pointer = 2
      vm.$children[0].addPointerElement()
      expect(vm.$children[0].value).to.deep.equal([vm.source[2]])
    })
  })

  describe('#pointerForward()', () => {
    it('should increase the pointer value by 1', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].activate()
      vm.$children[0].pointer = 1
      Vue.nextTick(function () {
        vm.$children[0].pointerForward()
        expect(vm.$children[0].pointer).to.equal(2)
        done()
      })
    })

    it('should NOT increase the pointer value if pointed at last element', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].activate()
      vm.$children[0].pointer = 2
      Vue.nextTick(function () {
        vm.$children[0].pointerForward()
        expect(vm.$children[0].pointer).to.equal(2)
        done()
      })
    })
  })

  describe('#pointerBackward()', () => {
    it('should decrease the pointer value by 1', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].activate()
      vm.$children[0].pointer = 1
      Vue.nextTick(function () {
        vm.$children[0].pointerBackward()
        expect(vm.$children[0].pointer).to.equal(0)
        done()
      })
    })

    it('should NOT decrease the pointer value if pointed at first element', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].activate()
      vm.$children[0].pointer = 0
      Vue.nextTick(function () {
        vm.$children[0].pointerBackward()
        expect(vm.$children[0].pointer).to.equal(0)
        done()
      })
    })
  })

  describe('#pointerReset()', () => {
    it('should reset the pointer value to 0', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].activate()
      vm.$children[0].pointer = 2
      Vue.nextTick(function () {
        vm.$children[0].pointerReset()
        expect(vm.$children[0].pointer).to.equal(0)
        done()
      })
    })
  })

  describe('#pointerSet(index)', () => {
    it('should set the pointer value to passed index', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].activate()
      vm.$children[0].pointer = 2
      Vue.nextTick(function () {
        vm.$children[0].pointerSet(1)
        expect(vm.$children[0].pointer).to.equal(1)
        done()
      })
    })
  })

  describe('#watch:options', () => {
    it('sets loading to FALSE after options update', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="sel" :options="source" label="id" key="id" :searchable="true" :multiple="false" :on-search-change="onSearch"></multiselect>',
        components: { Multiselect },
        data: {
          sel: { id: '2' },
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        },
        methods: {
          onSearch (query) {
            this.source.push({ id: query })
          }
        }
      }).$mount()
      vm.$children[0].loading = true
      expect(vm.$children[0].loading).to.equal(true)
      vm.$children[0].search = 'test'
      Vue.nextTick(function () {
        expect(vm.$children[0].loading).to.equal(false)
        done()
      })
    })
  })

  describe('#watch:selected', () => {
    it('updates multiselect private value when parent selected changes to a different value than private value', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="sel" :options="source" label="id" key="id" :searchable="false" :on-change="addMore" :multiple="false"></multiselect>',
        components: { Multiselect },
        data: {
          sel: { id: '2' },
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        },
        methods: {
          addMore (option) {
            this.sel = this.source[2]
          }
        }
      }).$mount()
      vm.$children[0].select(vm.$children[0].options[0])
      Vue.nextTick(function () {
        expect(vm.$children[0].value).to.deep.equal(vm.sel)
        done()
      })
    })
  })

  describe('#watch:value', () => {
    it('calls onChange(option) callback when onChange prop is set', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :searchable="false" :on-change="afterSelect"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ id: '1' }, { id: '2' }, { id: '3' }],
          newValue: null
        },
        methods: {
          afterSelect (option) {
            this.newValue = option
          }
        }
      }).$mount()
      vm.$children[0].select(vm.$children[0].options[0])
      vm.$children[0].select(vm.$children[0].options[1])
      Vue.nextTick(function () {
        expect(vm.newValue).to.deep.equal({ id: '2' })
        expect(vm.$children[0].selected).to.deep.equal(null)
        done()
      })
    })

    it('changes the selected value when NO onChange prop is set', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected.sync="value" :options="source" label="id" key="id" :searchable="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ id: '1' }, { id: '2' }, { id: '3' }],
          newValue: null
        }
      }).$mount()
      vm.$children[0].select(vm.$children[0].options[0])
      Vue.nextTick(function () {
        expect(vm.$children[0].selected).to.deep.equal({ id: '1' })
        expect(vm.newValue).to.deep.equal(null)
        expect(vm.value).to.deep.equal({ id: '1' })
        done()
      })
    })

    it('resets value, search and selected when resetAfter is TRUE', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :searchable="false" :reset-after="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ id: '1' }, { id: '2' }, { id: '3' }],
          newValue: null
        }
      }).$mount()
      vm.$children[0].select(vm.$children[0].options[2])
      Vue.nextTick(function () {
        expect(vm.$children[0].selected).to.deep.equal(null)
        expect(vm.$children[0].value).to.deep.equal(null)
        expect(vm.$children[0].search).to.deep.equal(null)
        done()
      })
    })

    it('set search to value after change when clearOnSelect is TRUE and multiple is FALSE and searchable is TRUE', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :searchable="true" :clear-on-select="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ id: '1' }, { id: '2' }, { id: '3' }],
          newValue: null
        }
      }).$mount()
      vm.$children[0].select(vm.$children[0].options[2])
      Vue.nextTick(function () {
        expect(vm.$children[0].search).to.deep.equal('3')
        done()
      })
    })
  })

  describe('#watch:search', () => {
    it('calls onSearchChange(searchQuery) callback when onSearchChange prop is set', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :searchable="true" :on-search-change="afterSearch" :clear-on-select="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ id: '1' }, { id: '2' }, { id: '3' }],
          query: ''
        },
        methods: {
          afterSearch (query) {
            this.query = query
          }
        }
      }).$mount()
      vm.$children[0].search = 'test'
      Vue.nextTick(function () {
        expect(vm.query).to.equal('test')
        done()
      })
    })
    it('sets loading status to TRUE until the options change', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :searchable="true" :on-search-change="afterSearch"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ id: '1' }, { id: '2' }, { id: '3' }],
          query: ''
        },
        methods: {
          afterSearch (query) {
            setTimeout(() => {
              this.source = [{ id: '1' }]
            }, 10)
          }
        }
      }).$mount()
      expect(vm.$children[0].options).to.deep.equal(vm.source)
      vm.$children[0].search = '1'
      Vue.nextTick(function () {
        expect(vm.$children[0].loading).to.equal(true)
      })

      setTimeout(() => {
        expect(vm.$children[0].loading).to.equal(false)
        expect(vm.$children[0].options).to.deep.equal([{ id: '1' }])
        done()
      }, 20)
    })
  })

  describe('#activate()', () => {
    it('should set isOpen value to true', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].isOpen = false
      vm.$children[0].activate()
      Vue.nextTick(function () {
        expect(vm.$children[0].isOpen).to.equal(true)
        done()
      })
    })
  })

  describe('#toggle()', () => {
    it('should set isOpen value to FALSE when it is TRUE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :searchable="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].isOpen = false
      vm.$children[0].toggle()
      expect(vm.$children[0].isOpen).to.equal(true)
      vm.$children[0].toggle()
      expect(vm.$children[0].isOpen).to.equal(false)
      vm.$children[0].toggle()
      expect(vm.$children[0].isOpen).to.equal(true)
    })
  })

  describe('#deactivate()', () => {
    it('should set isOpen value to false', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].isOpen = true
      vm.$children[0].deactivate()
      Vue.nextTick(function () {
        expect(vm.$children[0].isOpen).to.equal(false)
        done()
      })
    })

    it('should set touched value to true', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].activate()
      vm.$children[0].touched = false
      vm.$children[0].deactivate()
      Vue.nextTick(function () {
        expect(vm.$children[0].touched).to.equal(true)
        done()
      })
    })

    it('should reset search value when multiple == TRUE', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].activate()
      vm.$children[0].search = '1'
      vm.$children[0].deactivate()
      Vue.nextTick(function () {
        expect(vm.$children[0].loading).to.equal(false)
        expect(vm.$children[0].search).to.equal('')
        done()
      })
    })

    it('should set the search value to selected value when multiple == FALSE', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="id" key="id" :multiple="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: { id: '2' },
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].activate()
      vm.$children[0].search = '1'
      vm.$children[0].deactivate()
      Vue.nextTick(function () {
        expect(vm.$children[0].loading).to.equal(false)
        expect(vm.$children[0].search).to.equal('2')
        done()
      })
    })
  })

  describe('#isExistingOption()', () => {
    it('should return FALSE when there are no options to look into', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: []
        }
      }).$mount()
      expect(vm.$children[0].isExistingOption('test')).to.equal(false)
    })

    it('should return TRUE only when query has matching option', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: ['2'],
          source: ['1', '2', '3']
        }
      }).$mount()
      expect(vm.$children[0].isExistingOption('1')).to.equal(true)
      expect(vm.$children[0].isExistingOption('4')).to.equal(false)
    })
  })

  describe('#isNotSelected()', () => {
    it('should return FALSE when passed option is selected when multiple == TRUE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: ['2'],
          source: ['1', '2', '3']
        }
      }).$mount()
      const option = vm.$children[0].options[0]
      expect(vm.$children[0].isNotSelected(option)).to.equal(true)
    })

    it('should return TRUE when passed option is NOT selected when multiple == TRUE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: ['1'],
          source: ['1', '2', '3']
        }
      }).$mount()
      const option = vm.$children[0].options[0]
      expect(vm.$children[0].isNotSelected(option)).to.equal(false)
    })

    it('should return FALSE when passed option is NOT selected when multiple == FALSE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source"></multiselect>',
        components: { Multiselect },
        data: {
          value: '2',
          source: ['1', '2', '3']
        }
      }).$mount()
      const option = vm.$children[0].options[1]
      expect(vm.$children[0].isNotSelected(option)).to.equal(false)
    })

    it('should return TRUE when passed option is NOT selected when multiple == FALSE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source"></multiselect>',
        components: { Multiselect },
        data: {
          value: '2',
          source: ['1', '2', '3']
        }
      }).$mount()
      const option = vm.$children[0].options[0]
      expect(vm.$children[0].isNotSelected(option)).to.equal(true)
    })
  })

  describe('#getOptionLabel()', () => {
    it('should return value for passed option when simple value', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: ['1', '2', '3']
        }
      }).$mount()
      const option = vm.$children[0].options[1]
      expect(vm.$children[0].getOptionLabel(option)).to.equal('2')
    })

    it('should return option.label for passed option', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true" label="id" key="id"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ label: '1' }, { label: '2' }, { label: '3' }]
        }
      }).$mount()
      const option = vm.$children[0].options[1]
      expect(vm.$children[0].getOptionLabel(option)).to.equal('2')
    })

    it('should return option’s label when custom label is set', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true" label="id" key="id"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      const option = vm.$children[0].options[2]
      expect(vm.$children[0].getOptionLabel(option)).to.equal('3')
    })

    it('should return customLabel’s interpolation if set', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true" label="id" key="id" :custom-label="idWithId"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }],
          idWithId ({id}) {
            return `${id}+${id}`
          }
        }
      }).$mount()
      const option = vm.$children[0].options[2]
      expect(vm.$children[0].getOptionLabel(option)).to.equal('3+3')
    })
  })

  describe('valueKeys', () => {
    it('should return primitive value Array when no :key is provided', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [1, 2],
          source: [1, 2, 3]
        }
      }).$mount()
      expect(vm.$children[0].valueKeys).to.deep.equal([1, 2])
    })

    it('should return an Array maped from option[key] values when multiple is TRUE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [{ id: '1' }, { id: '2' }],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].valueKeys).to.deep.equal(['1', '2'])
    })

    it('should return option[key] value when multiple is FALSE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" label="id" key="id" :multiple="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: { id: '2' },
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].valueKeys).to.deep.equal('2')
    })
  })

  describe('optionKeys', () => {
    it('should return primitive value Array when no :label is provided', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [1, 2],
          source: [1, 2, 3]
        }
      }).$mount()
      expect(vm.$children[0].optionKeys).to.deep.equal([1, 2, 3])
    })

    it('should return an Array maped from option[label] values', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [{ id: '1' }, { id: '2' }],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].optionKeys).to.deep.equal(['1', '2', '3'])
    })
  })

  describe('filteredOptions', () => {
    it('should return matched options according to search value', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].filteredOptions).to.deep.equal([{ id: '1' }, { id: '2' }, { id: '3' }])
      vm.$children[0].$set('search', '2')
      expect(vm.$children[0].filteredOptions).to.deep.equal([{ id: '2' }])
    })

    it('should return no options when there are no matches with search value', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" label="id" key="id" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].filteredOptions).to.deep.equal([{ id: '1' }, { id: '2' }, { id: '3' }])
      vm.$children[0].$set('search', '4')
      expect(vm.$children[0].filteredOptions).to.deep.equal([])
    })

    it('should hide already selected elements when :hide-selected is set to true', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" label="id" key="id" :multiple="true" :hide-selected="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].filteredOptions).to.deep.equal(vm.source)
      vm.$children[0].select(vm.source[1])
      expect(vm.$children[0].filteredOptions).to.deep.equal([{ id: '1' }, { id: '3' }])
    })

    it('should add additional option at the begining when search is filled and :taggable is TRUE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" :multiple="true" :taggable="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [10, 20, 30]
        }
      }).$mount()
      expect(vm.$children[0].filteredOptions).to.deep.equal([10, 20, 30])
      expect(vm.$children[0].filteredOptions.length).to.equal(3)
      vm.$children[0].search = 'test'
      expect(vm.$children[0].filteredOptions).to.deep.equal([{ isTag: true, label: 'test' }])
      expect(vm.$children[0].filteredOptions.length).to.equal(1)
      vm.$children[0].search = '1'
      expect(vm.$children[0].filteredOptions).to.deep.equal([{ isTag: true, label: '1' }, 10])
      expect(vm.$children[0].filteredOptions.length).to.equal(2)
    })
  })

  describe('#onTag', () => {
    it('should should push to value and options with default settings and :taggable is TRUE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" :multiple="true" :taggable="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: ['1'],
          source: ['1', '2', '3']
        }
      }).$mount()
      vm.$children[0].search = 'test'
      vm.$children[0].select(vm.$children[0].filteredOptions[0])
      expect(vm.$children[0].options.length).to.equal(4)
      expect(vm.$children[0].options).to.deep.equal(['1', '2', '3', 'test'])
      expect(vm.$children[0].value.length).to.equal(2)
      expect(vm.$children[0].value).to.deep.equal(['1', 'test'])
    })
  })

  describe('#limitText', () => {
    it('should by default interpolate the limit text', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" :multiple="true" :limit="2"></multiselect>',
        components: { Multiselect },
        data: {
          value: ['1', '2', '3'],
          source: ['1', '2', '3', '4', '5']
        }
      }).$mount()
      vm.$children[0].limitText(20)
      expect(vm.$children[0].limitText(20)).to.equal('and 20 more')
    })
  })

  describe('visibleValue', () => {
    it('should by default interpolate the limit text', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" :multiple="true" :limit="1"></multiselect>',
        components: { Multiselect },
        data: {
          value: ['1', '2', '3'],
          source: ['1', '2', '3', '4', '5']
        }
      }).$mount()
      expect(vm.$children[0].value.length).to.equal(3)
      expect(vm.$children[0].visibleValue.length).to.equal(1)
    })
  })

  describe('@ready:showLabels', () => {
    beforeEach(function () {
      document.body.insertAdjacentHTML('afterbegin', '<app></app>')
    })
    it('should hide all layers if :show-labels is FALSE', () => {
      const vm = new Vue({
        el: 'App',
        template: '<multiselect :selected="value" :searchable="true" :options="source" :multiple="true" :limit="1" :show-labels="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: ['1', '2', '3'],
          source: ['1', '2', '3', '4', '5']
        }
      })
      expect(vm.$children[0].selectLabel).to.equal('')
      expect(vm.$children[0].deselectLabel).to.equal('')
      expect(vm.$children[0].selectedLabel).to.equal('')
    })
  })
})
