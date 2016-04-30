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
            template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
            components: { Multiselect },
            data: {
              value: [{ name: '2' }, { name: '3' }],
              source: [{ name: '1' }, { name: '2' }, { name: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$els.tags.querySelector('.multiselect__tag').textContent).to.contain('2')
        })

        it('should preselect passed array of objects in different order', () => {
          const vm = new Vue({
            template: '<multiselect :selected="value" :options="source" :multiple="true" label="name"></multiselect>',
            components: { Multiselect },
            data: {
              value: [{ name: '3' }, { name: '2' }],
              source: [{ name: '1' }, { name: '2' }, { name: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$els.tags.querySelector('.multiselect__tag').textContent).to.contain('3')
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
            template: '<multiselect :selected="value" :options="source" label="name"></multiselect>',
            components: { Multiselect },
            data: {
              value: { name: '2' },
              source: [{ name: '1' }, { name: '2' }, { name: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$els.tags.querySelector('input').value).to.contain('2')
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
          template: '<multiselect :selected="value" :options="source" label="name" :searchable="false"></multiselect>',
          components: { Multiselect },
          data: {
            value: { name: '2' },
            source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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
          template: '<multiselect :selected="value" :options="source" :multiple="true" label="name"></multiselect>',
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

      it('should remove already selected object', () => {
        const vm = new Vue({
          template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
          components: { Multiselect },
          data: {
            value: [],
            source: [{ name: '1' }, { name: '2' }, { name: '3' }]
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].value).to.deep.equal([{ name: '1' }, { name: '2' }])
        vm.$children[0].select(vm.source[0])
        expect(vm.$children[0].value).to.deep.equal([{ name: '2' }])
      })
    })
    describe('when multiple == FALSE', () => {
      it('should change selected value to new one', () => {
        const vm = new Vue({
          template: '<multiselect :selected="value" :options="source" label="name"></multiselect>',
          components: { Multiselect },
          data: {
            value: [],
            source: [{ name: '1' }, { name: '2' }, { name: '3' }]
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        expect(vm.$children[0].value).to.deep.equal({ name: '1' })
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].value).to.deep.equal({ name: '2' })
      })
    })
    describe('when closeOnSelect == FALSE', () => {
      it('should not close the dropdown', () => {
        const vm = new Vue({
          template: '<multiselect :selected="value" :options="source" label="name" :close-on-select="false"></multiselect>',
          components: { Multiselect },
          data: {
            value: [],
            source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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
        template: '<multiselect :selected="value" :options="source" label="name"></multiselect>',
        components: { Multiselect },
        data: {
          value: [{ name: '1' }],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      vm.$children[0].removeElement(vm.$children[0].value[0])
      expect(vm.$children[0].value).to.deep.equal([])
    })

    it('should NOT remove passed element when allowEmpty == FALSE & 1 element is left', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="name" :allow-empty="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: [{ name: '1' }, { name: '2' }],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      vm.$children[0].removeElement(vm.$children[0].value[0])
      expect(vm.$children[0].value).to.deep.equal([{ name: '2' }])
      vm.$children[0].removeElement(vm.$children[0].value[0])
      expect(vm.$children[0].value).to.deep.equal([{ name: '2' }])
    })
  })

  describe('#removeLastElement()', () => {
    it('should remove last selected element', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [{ name: '1' }, { name: '2' }],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      vm.$children[0].removeLastElement()
      expect(vm.$children[0].value).to.deep.equal([{ name: '1' }])
    })
  })

  describe('#addPointerElement()', () => {
    it('should select() currently pointed option', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
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
  })

  describe('#pointerForward()', () => {
    it('should increase the pointer value by 1', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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

  describe('#watch:value', () => {
    it('calls onChange(option) callback when onChange prop is set', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="name" :searchable="false" :on-change="afterSelect"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ name: '1' }, { name: '2' }, { name: '3' }],
          newValue: null
        },
        methods: {
          afterSelect (option) {
            this.newValue = option
          }
        }
      }).$mount()
      vm.$children[0].select(vm.$children[0].options[0])
      Vue.nextTick(function () {
        expect(vm.newValue).to.deep.equal({ name: '1' })
        done()
      })
    })

    it('changes the selected value when NO onChange prop is set', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected.sync="value" :options="source" label="name" :searchable="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ name: '1' }, { name: '2' }, { name: '3' }],
          newValue: null
        },
        methods: {
          afterSelect (option) {
            this.newValue = option
          }
        }
      }).$mount()
      vm.$children[0].select(vm.$children[0].options[0])
      Vue.nextTick(function () {
        expect(vm.$children[0].selected).to.deep.equal({ name: '1' })
        expect(vm.newValue).to.deep.equal(null)
        expect(vm.value).to.deep.equal({ name: '1' })
        done()
      })
    })
  })

  describe('#watch:search', () => {
    it('calls onSearchChange(searchQuery) callback when onSearchChange prop is set', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="name" :searchable="true" :on-search-change="afterSearch"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ name: '1' }, { name: '2' }, { name: '3' }],
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
        template: '<multiselect :selected="value" :options="source" label="name" :searchable="true" :on-search-change="afterSearch"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ name: '1' }, { name: '2' }, { name: '3' }],
          query: ''
        },
        methods: {
          afterSearch (query) {
            setTimeout(() => {
              this.source = [{ name: '1' }]
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
        expect(vm.$children[0].options).to.deep.equal([{ name: '1' }])
        done()
      }, 20)
    })
  })

  describe('#activate()', () => {
    it('should set isOpen value to true', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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

  describe('#tryActivate()', () => {
    it('only calls #activate() when isOpen == FALSE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="name" :searchable="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      vm.$children[0].isOpen = true
      const activate = sinon.spy(vm.$children[0], 'activate')
      vm.$children[0].tryActivate()
      expect(activate.called).to.equal(false)
      vm.$children[0].isOpen = false
      vm.$children[0].tryActivate()
      expect(activate.called).to.equal(true)
    })
  })

  describe('#toggle()', () => {
    it('should set isOpen value to FALSE when it is TRUE and searchable == FALSE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="name" :searchable="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      vm.$children[0].isOpen = false
      vm.$children[0].toggle()
      expect(vm.$children[0].isOpen).to.equal(false)
      vm.$children[0].isOpen = true
      vm.$children[0].toggle()
      expect(vm.$children[0].isOpen).to.equal(false)
    })
  })

  describe('#tryDeactivate()', () => {
    it('only calls #deactivate() when isOpen == TRUE and searchable == FALSE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="name" :searchable="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: null,
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      const deactivate = sinon.spy(vm.$children[0], 'deactivate')
      vm.$children[0].tryDeactivate()
      expect(deactivate.called).to.equal(false)
      vm.$children[0].isOpen = true
      vm.$children[0].tryDeactivate()
      expect(deactivate.called).to.equal(true)
    })
  })

  describe('#deactivate()', () => {
    it('should set isOpen value to false', (done) => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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
        template: '<multiselect :selected="value" :options="source" label="name" :multiple="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: { name: '2' },
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
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

  describe('#isSelected()', () => {
    it('should return TRUE when passed option is selected when multiple == TRUE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: ['1', '2'],
          source: ['1', '2', '3']
        }
      }).$mount()
      const option = vm.$children[0].options[1]
      expect(vm.$children[0].isSelected(option)).to.equal(true)
    })

    it('should return TRUE when passed option is selected when multiple == FALSE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source"></multiselect>',
        components: { Multiselect },
        data: {
          value: '2',
          source: ['1', '2', '3']
        }
      }).$mount()
      const option = vm.$children[0].options[1]
      expect(vm.$children[0].isSelected(option)).to.equal(true)
    })

    it('should return FALSE when passed option is NOT selected', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: ['1'],
          source: ['1', '2', '3']
        }
      }).$mount()
      const option = vm.$children[0].options[1]
      expect(vm.$children[0].isSelected(option)).to.equal(false)
    })
  })

  describe('#isNotSelected()', () => {
    it('should return FALSE when passed option is selected', () => {
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

    it('should return TRUE when passed option is NOT selected', () => {
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
        template: '<multiselect :selected="value" :options="source" :multiple="true" label="name"></multiselect>',
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
        template: '<multiselect :selected="value" :options="source" :multiple="true" label="name"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      const option = vm.$children[0].options[2]
      expect(vm.$children[0].getOptionLabel(option)).to.equal('3')
    })
  })

  describe('filteredOptions', () => {
    it('should return matched options according to search value', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" label="name" :multiple="true"></multiselect>',
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

    it('should return no options when there are no matches with search value', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" label="name" :multiple="true"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: '1' }, { name: '2' }, { name: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].filteredOptions).to.deep.equal([{ name: '1' }, { name: '2' }, { name: '3' }])
      vm.$children[0].$set('search', '4')
      expect(vm.$children[0].filteredOptions).to.deep.equal([])
    })

    it('should hide already selected elements when :hide-selected is set to true', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :searchable="true" :options="source" label="name" :multiple="true" :hide-selected="true"></multiselect>',
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
})
