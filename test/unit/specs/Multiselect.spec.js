import Vue from 'vue/dist/vue.js'
import Multiselect from 'src/Multiselect'

describe('Multiselect.vue', () => {
  describe('v-model', () => {
    it('should update value after any change to selection', () => {
      const vm = new Vue({
        template: `<div><multiselect
            v-model="value"
            :options="source"
            :multiple="true"
            id="multi">
          </multiselect></div>
        `,
        components: { Multiselect },
        data: {
          value: [],
          source: ['1', '2', '3']
        }
      }).$mount()

      const comp = vm.$children[0]

      comp.select(vm.source[0])
      expect(vm.value).to.deep.equal(['1'])
      comp.select(vm.source[0])
      expect(vm.value).to.deep.equal([])
    })
  })
  describe(':value', () => {
    it('should work when initial value is null', () => {
      const vm = new Vue({
        template: `<div><multiselect
            v-model="value"
            :options="source"
            track-by="val"
            label="label"
          >
          </multiselect></div>
        `,
        components: { Multiselect },
        data: {
          value: null,
          source: [{ val: 1, label: '1' }, { val: 2, label: '2' }]
        },
        methods: {
          resetValue () {
            this.value = null
          }
        }
      }).$mount()

      const comp = vm.$children[0]

      expect(comp.internalValue).to.deep.equal([])
    })
  })
  describe('Events emitting', () => {
    describe('@input', () => {
      it('should be called whenever the value changes passing the new value and id', () => {
        let eventsLog = []
        let calledId = null

        const vmSingle = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                id: 'single'
              },
              on: {
                input: this.onUpdate
              }
            })
          },
          components: { Multiselect },
          data: {
            value: null,
            source: ['1', '2', '3']
          },
          methods: {
            onUpdate (value, id) {
              calledId = id
              eventsLog.push(value)
            }
          }
        }).$mount()

        const vmMulti = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                multiple: true,
                id: 'multi'
              },
              on: {
                input: this.onUpdate
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            source: ['1', '2', '3']
          },
          methods: {
            onUpdate (value, id) {
              calledId = id
              eventsLog.push(value)
            }
          }
        }).$mount()

        vmSingle.$children[0].select(vmSingle.source[0])
        expect(eventsLog[0]).to.deep.equal('1')
        expect(calledId).to.deep.equal('single')
        vmSingle.$children[0].select(vmSingle.source[1])
        expect(eventsLog[1]).to.deep.equal('2')
        vmSingle.$children[0].select(vmSingle.source[0])
        expect(eventsLog[2]).to.deep.equal('1')
        vmMulti.$children[0].select(vmMulti.source[0])
        expect(calledId).to.deep.equal('multi')
        expect(eventsLog[3]).to.deep.equal(['1'])
        vmMulti.$children[0].select(vmMulti.source[1])
        expect(eventsLog[4]).to.deep.equal(['1', '2'])
        vmMulti.$children[0].select(vmMulti.source[0])
        expect(eventsLog[5]).to.deep.equal(['2'])
        vmMulti.$children[0].select(vmMulti.source[2])
        vmMulti.$children[0].removeLastElement()
        expect(eventsLog[7]).to.deep.equal(['2'])

        expect(eventsLog.length).to.equal(8)
      })
    })

    describe('@select', () => {
      it('should be called after each select passing the selected option and id', () => {
        let eventsLog = []
        let calledId = null

        const vmSingle = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                id: 'single'
              },
              on: {
                select: this.onSelect
              }
            })
          },
          components: { Multiselect },
          data: {
            value: null,
            source: ['1', '2', '3']
          },
          methods: {
            onSelect (option, id) {
              calledId = id
              eventsLog.push(option)
            }
          }
        }).$mount()

        const vmMulti = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                id: 'multi',
                multiple: true
              },
              on: {
                select: this.onSelect
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            source: ['1', '2', '3']
          },
          methods: {
            onSelect (option, id) {
              calledId = id
              eventsLog.push(option)
            }
          }
        }).$mount()

        vmSingle.$children[0].select(vmSingle.source[0])
        expect(eventsLog[0]).to.deep.equal('1')
        expect(calledId).to.deep.equal('single')
        vmSingle.$children[0].select(vmSingle.source[1])
        expect(eventsLog[1]).to.deep.equal('2')
        vmSingle.$children[0].select(vmSingle.source[0])
        expect(eventsLog[2]).to.deep.equal('1')
        vmMulti.$children[0].select(vmMulti.source[0])
        expect(calledId).to.deep.equal('multi')
        expect(eventsLog[3]).to.deep.equal('1')
        vmMulti.$children[0].select(vmMulti.source[1])
        expect(eventsLog[4]).to.deep.equal('2')
        vmMulti.$children[0].select(vmMulti.source[0])
        vmMulti.$children[0].select(vmMulti.source[1])
        expect(eventsLog.length).to.equal(5)
        vmMulti.$children[0].select(vmMulti.source[2])
        expect(eventsLog[5]).to.deep.equal('3')
        vmMulti.$children[0].select(vmMulti.source[2])
        vmMulti.$children[0].removeLastElement()
        vmMulti.$children[0].select(vmMulti.source[2])
        expect(eventsLog[6]).to.deep.equal('3')

        expect(eventsLog.length).to.equal(7)
      })
    })

    describe('@remove', () => {
      it('should be called after removing an option, passing the removed option and id', () => {
        let eventsLog = []
        let calledId = null

        const vmMulti = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                multiple: true,
                id: 1
              },
              on: {
                remove: this.onRemove
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            source: ['1', '2', '3']
          },
          methods: {
            onRemove (option, id) {
              eventsLog.push(option)
              calledId = id
            }
          }
        }).$mount()

        vmMulti.$children[0].select(vmMulti.source[0])
        vmMulti.$children[0].select(vmMulti.source[1])
        vmMulti.$children[0].select(vmMulti.source[0])
        expect(eventsLog[0]).to.deep.equal('1')
        vmMulti.$children[0].select(vmMulti.source[1])
        expect(eventsLog[1]).to.deep.equal('2')
        expect(eventsLog.length).to.equal(2)
        vmMulti.$children[0].select(vmMulti.source[1])
        vmMulti.$children[0].removeLastElement()
        expect(eventsLog[2]).to.deep.equal('2')
        expect(eventsLog.length).to.equal(3)
        expect(calledId).to.equal(1)
      })
    })

    describe('@close', () => {
      it('should be called after closing the dropdown with the current value and id', () => {
        let eventsLog = []
        let calledId = null

        const vmMulti = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                id: 1
              },
              on: {
                close: this.onClose
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            source: ['1', '2', '3']
          },
          methods: {
            onClose (option, id) {
              eventsLog.push(option)
              calledId = id
            }
          }
        }).$mount()

        vmMulti.$children[0].activate()
        vmMulti.$children[0].select(vmMulti.source[1])
        vmMulti.$children[0].select(vmMulti.source[0])
        vmMulti.$children[0].deactivate()
        expect(eventsLog[0]).to.deep.equal('2')
        vmMulti.$children[0].activate()
        vmMulti.$children[0].select(vmMulti.source[2])
        vmMulti.$children[0].deactivate()
        expect(eventsLog[1]).to.deep.equal('3')
        expect(eventsLog.length).to.equal(2)
        expect(calledId).to.equal(1)
      })
    })

    describe('@open', () => {
      it('should be called after opening the dropdown passing the id', () => {
        let idLogs = []

        const vmMulti = new Vue({
          render (h) {
            return h('div', [
              h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source,
                  id: 1
                },
                on: {
                  open: this.onOpen
                }
              }),
              h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source,
                  id: 2
                },
                on: {
                  open: this.onOpen
                }
              })
            ])
          },
          components: { Multiselect },
          data: {
            value: [],
            source: ['1', '2', '3']
          },
          methods: {
            onOpen (id) {
              idLogs.push(id)
            }
          }
        }).$mount()

        vmMulti.$children[0].activate()
        vmMulti.$children[1].activate()
        vmMulti.$children[0].activate()
        vmMulti.$children[1].activate()
        expect(idLogs[0]).to.equal(1)
        expect(idLogs[1]).to.equal(2)
        expect(idLogs.length).to.equal(2)
        vmMulti.$children[0].deactivate()
        vmMulti.$children[0].activate()
        expect(idLogs[2]).to.equal(1)
        expect(idLogs.length).to.equal(3)
      })
    })
  })

  describe('Accept options', () => {
    it('should accept options (array of values)', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source
            }
          })
        },
        components: { Multiselect },
        data: {
          value: null,
          source: ['1', '2', '3']
        }
      }).$mount()
      expect(vm.$children[0].options).to.deep.equal(vm.source)
    })

    it('should accept options (array of objects)', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source
            }
          })
        },
        components: { Multiselect },
        data: {
          value: null,
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
            render (h) {
              return h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source,
                  multiple: true
                }
              })
            },
            components: { Multiselect },
            data: {
              value: ['1', '2'],
              source: ['1', '2', '3']
            }
          }).$mount()
          expect(vm.$children[0].internalValue).to.deep.equal(vm.value)
          expect(vm.$children[0].$refs.tags.querySelector('.multiselect__tag').textContent).to.contain('1')
        })

        it('should preselect passed array of objects', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source,
                  label: 'id',
                  trackBy: 'id',
                  multiple: true
                }
              })
            },
            components: { Multiselect },
            data: {
              value: [{ id: '2' }, { id: '3' }],
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].internalValue).to.deep.equal(vm.value)
          expect(vm.$children[0].$refs.tags.querySelector('.multiselect__tag').textContent).to.contain('2')
        })

        it('should preselect passed array of objects in different order', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source,
                  label: 'id',
                  trackBy: 'id',
                  multiple: true
                }
              })
            },
            components: { Multiselect },
            data: {
              value: [{ id: '3' }, { id: '2' }],
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].internalValue).to.deep.equal(vm.value)
          expect(vm.$children[0].$refs.tags.querySelector('.multiselect__tag').textContent).to.contain('3')
        })
        it('should set value to [] when passing null as selected', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source,
                  label: 'id',
                  trackBy: 'id',
                  multiple: true
                }
              })
            },
            components: { Multiselect },
            data: {
              value: null,
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].internalValue).to.deep.equal([])
          expect(vm.$children[0].$refs.tags.querySelector('.multiselect__tag')).to.equal(null)
        })
      })

      describe('when multiple == FALSE', () => {
        it('should preselect passed simple value', (done) => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source
                }
              })
            },
            components: { Multiselect },
            data: {
              value: '1',
              source: ['1', '2', '3']
            }
          }).$mount()
          setTimeout(function () {
            expect(vm.$children[0].internalValue).to.deep.equal([vm.value])
            expect(vm.$children[0].$refs.search.value).to.contain('1')
            done()
          }, 201)
        })

        it('should preselect passed object', (done) => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source,
                  label: 'id',
                  trackBy: 'id'
                }
              })
            },
            components: { Multiselect },
            data: {
              value: { id: '2' },
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          setTimeout(function () {
            expect(vm.$children[0].internalValue).to.deep.equal([vm.value])
            expect(vm.$children[0].$refs.tags.querySelector('input').value).to.contain('2')
            done()
          }, 201)
        })

        it('should set value to null when passing null as selected', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source,
                  label: 'id',
                  trackBy: 'id'
                }
              })
            },
            components: { Multiselect },
            data: {
              value: null,
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].internalValue).to.deep.equal([])
          expect(vm.$children[0].$refs.tags.querySelector('.multiselect__tag')).to.equal(null)
        })

        it('should set search-input value to equal to passed object label', (done) => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source,
                  label: 'id',
                  trackBy: 'id'
                }
              })
            },
            components: { Multiselect },
            data: {
              value: { id: '1' },
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          setTimeout(function () {
            expect(vm.$children[0].$refs.search.value).to.equal('1')
            done()
          }, 201)
        })

        it('should set search value to equal to passed value', (done) => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source
                }
              })
            },
            components: { Multiselect },
            data: {
              value: 2,
              source: [1, 2, 3]
            }
          }).$mount()
          setTimeout(() => {
            expect(vm.$children[0].$refs.search.value).to.equal('2')
            done()
          }, 201)
        })
        it('if selected is null should set search value to empty string', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source,
                  label: 'id',
                  trackBy: 'id',
                  taggable: true
                }
              })
            },
            components: { Multiselect },
            data: {
              value: null,
              source: [1, 2, 3]
            }
          }).$mount()
          expect(vm.$children[0].search).to.equal('')
          expect(vm.$children[0].$refs.search.value).to.equal('')
        })
      })
    })
    describe('when searchable == FALSE', () => {
      it('should preselect passed simple value', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                searchable: false
              }
            })
          },
          components: { Multiselect },
          data: {
            value: '1',
            source: ['1', '2', '3']
          }
        }).$mount()
        expect(vm.$children[0].internalValue).to.deep.equal([vm.value])
        expect(vm.$children[0].$refs.tags.querySelector('.multiselect__single').textContent).to.contain('1')
      })

      it('should preselect passed object', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                label: 'id',
                trackBy: 'id',
                searchable: false
              }
            })
          },
          components: { Multiselect },
          data: {
            value: { id: '2' },
            source: [{ id: '1' }, { id: '2' }, { id: '3' }]
          }
        }).$mount()
        expect(vm.$children[0].internalValue).to.deep.equal([vm.value])
        expect(vm.$children[0].$refs.tags.querySelector('.multiselect__single').textContent).to.contain('2')
      })
    })
  })

  describe('#select()', () => {
    it('should do nothing when DISABLED == true', () => {
      const onSelect = sinon.spy()
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true,
              disabled: true
            },
            on: {
              select: onSelect
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: ['1', '2', '3']
        }
      }).$mount()
      vm.$children[0].select(vm.source[0])
      expect(onSelect.called).to.equal(false)
    })

    it('should do nothing when selecting a group label', () => {
      const onSelect = sinon.spy()
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true,
              disabled: true
            },
            on: {
              select: onSelect
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: 0, $isLabel: true }, '2', '3']
        }
      }).$mount()
      vm.$children[0].select(vm.source[0])
      expect(onSelect.called).to.equal(false)
    })

    it('should reset search input when clearOnSelect == TRUE', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: ['1', '2', '3']
        }
      }).$mount()
      vm.$children[0].$refs.search.focus()
      vm.$children[0].search = 'test'
      vm.$children[0].select(vm.source[0])
      expect(vm.$children[0].search).to.equal('')
    })

    it('should keep search input when clearOnSelect == FALSE', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true,
              clearOnSelect: false,
              closeOnSelect: false
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: ['1', '2', '3']
        }
      }).$mount()
      vm.$children[0].isOpen = true
      vm.$children[0].search = 'test'
      vm.$children[0].select(vm.source[0])
      expect(vm.$children[0].search).to.equal('test')
    })

    describe('when multiple == TRUE', () => {
      it('should add values to selected array', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                multiple: true
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            source: ['1', '2', '3']
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].internalValue).to.deep.equal(['1', '2'])
      })

      it('should add objects to selected array', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                label: 'id',
                trackBy: 'id',
                multiple: true
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            source: [{ id: '1' }, { id: '2' }, { id: '3' }]
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].internalValue).to.deep.equal([{ id: '1' }, { id: '2' }])
      })

      it('should remove already selected object', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                label: 'id',
                trackBy: 'id',
                multiple: true
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            source: [{ id: '1' }, { id: '2' }, { id: '3' }]
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].internalValue).to.deep.equal([{ id: '1' }, { id: '2' }])
        vm.$children[0].select(vm.source[0])
        expect(vm.$children[0].internalValue).to.deep.equal([{ id: '2' }])
      })

      it('should NOT remove already selected object when called with Tab key', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                label: 'id',
                trackBy: 'id',
                multiple: true
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            source: [{ id: '1' }, { id: '2' }, { id: '3' }]
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].internalValue).to.deep.equal([{ id: '1' }, { id: '2' }])
        vm.$children[0].select(vm.source[0], 'Tab')
        expect(vm.$children[0].internalValue).to.deep.equal([{ id: '1' }, { id: '2' }])
      })
      describe('and when max == 3', () => {
        it('should prevent from adding more than 3 elements', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  value: this.value,
                  options: this.source,
                  label: 'id',
                  trackBy: 'id',
                  multiple: true,
                  max: 3
                }
              })
            },
            components: { Multiselect },
            data: {
              value: [],
              source: [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
            }
          }).$mount()
          vm.$children[0].select(vm.source[0])
          vm.$children[0].select(vm.source[1])
          vm.$children[0].select(vm.source[2])
          vm.$children[0].select(vm.source[3])
          expect(vm.$children[0].internalValue).to.deep.equal([{ id: '1' }, { id: '2' }, { id: '3' }])
          vm.$children[0].removeLastElement()
          vm.$children[0].select(vm.source[3])
          expect(vm.$children[0].internalValue).to.deep.equal([{ id: '1' }, { id: '2' }, { id: '4' }])
        })
      })
    })
    describe('when multiple == FALSE', () => {
      it('should change selected value to new one', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                label: 'id',
                trackBy: 'id'
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            source: [{ id: '1' }, { id: '2' }, { id: '3' }]
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        expect(vm.$children[0].internalValue).to.deep.equal([{ id: '1' }])
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].internalValue).to.deep.equal([{ id: '2' }])
      })
      it('should not deselect a value when called with Tab key', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                label: 'id',
                trackBy: 'id'
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            source: [{ id: '1' }, { id: '2' }, { id: '3' }]
          }
        }).$mount()
        vm.$children[0].select(vm.source[0])
        expect(vm.$children[0].internalValue).to.deep.equal([{ id: '1' }])
        vm.$children[0].select(vm.source[0], 'Tab')
        expect(vm.$children[0].internalValue).to.deep.equal([{ id: '1' }])
      })
    })
    describe('when closeOnSelect == FALSE', () => {
      it('should not close the dropdown', (done) => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                label: 'id',
                trackBy: 'id',
                closeOnSelect: false
              }
            })
          },
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
          done()
        })
      })
    })
  })

  describe('#removeElement()', () => {
    it('should not do anything if disabled == TRUE', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true,
              label: 'id',
              trackBy: 'id',
              disabled: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [{ id: '1' }],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      const comp = vm.$children[0]
      comp.removeElement(comp.value[0])
      expect(comp.internalValue).to.deep.equal([{ id: '1' }])
    })

    it('should remove passed element', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true,
              label: 'id',
              trackBy: 'id'
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [{ id: '1' }],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      const comp = vm.$children[0]
      comp.removeElement(comp.value[0])
      expect(comp.internalValue).to.deep.equal([])
    })

    it('should NOT remove passed element when allowEmpty == FALSE & 1 element is left', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true,
              label: 'id',
              trackBy: 'id',
              allowEmpty: false
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [{ id: '1' }, { id: '2' }],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].removeElement(vm.$children[0].internalValue[0])
      expect(vm.$children[0].internalValue).to.deep.equal([{ id: '2' }])
      vm.$children[0].removeElement(vm.$children[0].internalValue[0])
      expect(vm.$children[0].internalValue).to.deep.equal([{ id: '2' }])
    })
  })

  describe('#removeLastElement()', () => {
    it('should remove last selected element', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [{ id: '1' }, { id: '2' }],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].removeLastElement()
      expect(vm.$children[0].internalValue).to.deep.equal([{ id: '1' }])
    })
    it('should not do anything if "Delete" key is blocked', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true,
              blockKeys: ['Delete']
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [{ id: '1' }, { id: '2' }],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].removeLastElement()
      expect(vm.$children[0].internalValue).to.deep.equal([{ id: '1' }, { id: '2' }])
    })
  })

  describe('#addPointerElement()', () => {
    it('should select() currently pointed option', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].pointer = 2
      vm.$children[0].addPointerElement()
      expect(vm.$children[0].internalValue).to.deep.equal([vm.source[2]])
    })
  })

  describe('#pointerForward()', () => {
    it('should increase the pointer value by 2 if next option is label', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2', $isLabel: true }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].pointer = 0
      vm.$children[0].pointerForward()
      expect(vm.$children[0].pointer).to.equal(2)
    })

    it('should increase the pointer value by 1', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].activate()
      vm.$children[0].pointer = 1
      vm.$children[0].pointerForward()
      expect(vm.$children[0].pointer).to.equal(2)
    })

    it('should NOT increase the pointer value if pointed at last element', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
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
    it('should increase the pointer value by 1 if the first option is a label', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id'
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1', $isLabel: true }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].pointer = 1
      vm.$children[0].pointerBackward()
      expect(vm.$children[0].pointer).to.equal(1)
    })
    it('should decrease the pointer value by 2 if previous option is label', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id'
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2', $isLabel: true }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].pointer = 2
      vm.$children[0].pointerBackward()
      expect(vm.$children[0].pointer).to.equal(0)
    })
    it('should decrease the pointer value by 1', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id'
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
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
    it('should do nothing when closeOnSelect == FALSE', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true,
              closeOnSelect: false
            }
          })
        },
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
        expect(vm.$children[0].pointer).to.equal(2)
        done()
      })
    })
  })

  describe('#pointerSet(index)', () => {
    it('should set the pointer value to passed index', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
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

  describe('#pointerAdjust()', () => {
    it('should adjust the pointer to stay within options', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].pointer = 5
      vm.$children[0].pointerAdjust()
      expect(vm.$children[0].pointer).to.equal(2)
    })
  })

  describe('#watch:value', () => {
    it('updates multiselect private value when parent selected changes to a different value than private value', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.sel,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: false,
              searchable: false
            }
          })
        },
        components: { Multiselect },
        data: {
          sel: { id: '2' },
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].internalValue[0].id).to.deep.equal('2')
      vm.sel = vm.source[0]
      Vue.nextTick(() => {
        expect(vm.$children[0].internalValue[0].id).to.deep.equal('1')
        done()
      })
    })
  })

  describe('#watch:value', () => {
    it('calls onChange(option) callback when onChange prop is set', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              searchable: false
            },
            on: {
              input: this.afterSelect
            }
          })
        },
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
        expect(vm.$children[0].value).to.deep.equal(null)
        done()
      })
    })

    it('not changing changes the selected value with no @input event listener', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              searchable: false
            }
          })
        },
        components: { Multiselect },
        data: {
          value: null,
          source: [{ id: '1' }, { id: '2' }, { id: '3' }],
          newValue: null
        }
      }).$mount()
      vm.$children[0].select(vm.$children[0].options[0])
      Vue.nextTick(function () {
        expect(vm.$children[0].value).to.deep.equal(null)
        expect(vm.newValue).to.deep.equal(null)
        expect(vm.value).to.deep.equal(null)
        done()
      })
    })

    it('resets value, search and selected when resetAfter is TRUE', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              options: this.source,
              label: 'id',
              trackBy: 'id',
              searchable: false,
              resetAfter: true
            }
          })
        },
        components: { Multiselect },
        data: {
          source: [{ id: '1' }, { id: '2' }, { id: '3' }],
          newValue: null
        }
      }).$mount()
      const comp = vm.$children[0]
      comp.select(comp.options[2])
      Vue.nextTick(function () {
        expect(comp.value).to.deep.equal([])
        expect(comp.search).to.deep.equal('')
        done()
      })
    })
  })

  describe('#watch:search', () => {
    it('should call @search-change event callback whenever search value changes', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              clearOnSelect: false
            },
            on: {
              'search-change': this.afterSearch
            }
          })
        },
        components: { Multiselect },
        data: {
          value: null,
          source: [{ id: '1' }, { id: '2' }, { id: '3' }],
          query: ''
        },
        methods: {
          afterSearch (query) {
            expect(query).to.equal('test')
          }
        }
      }).$mount()
      vm.$children[0].search = 'test'
    })
  })

  describe('#activate()', () => {
    it('should set isOpen value to true', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
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

    it('should set set the pointer to the first non-group-label option', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true,
              groupValues: 'group',
              groupLabel: 'groupLabel'
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ group: [{ id: '1' }, { id: '2' }], groupLabel: 'A' }, { group: [{ id: '3' }, { id: '4' }], groupLabel: 'B' }]
        }
      }).$mount()
      vm.$children[0].isOpen = false
      vm.$children[0].activate()
      expect(vm.$children[0].pointer).to.equal(1)
    })
  })

  describe('#toggle()', () => {
    it('should set isOpen value to FALSE when it is TRUE', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              searchable: false
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
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

    it('should reset search value when multiple == TRUE', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].activate()
      vm.$children[0].search = '1'
      expect(vm.$children[0].search).to.equal('1')
      vm.$children[0].deactivate()
      expect(vm.$children[0].$refs.search.value).to.equal('')
    })

    it('should restore value to selected value when multiple == FALSE', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: false
            }
          })
        },
        components: { Multiselect },
        data: {
          value: { id: '2' },
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      vm.$children[0].activate()
      vm.$children[0].search = '1'
      vm.$children[0].deactivate()
      expect(vm.$children[0].$refs.search.value).to.equal('2')
    })
  })

  describe('#isExistingOption()', () => {
    it('should return FALSE when there are no options to look into', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source
            }
          })
        },
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
    it('should return empty string for undefined option', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              options: this.source
            }
          })
        },
        components: { Multiselect },
        data: {
          source: ['1', '2', '3']
        }
      }).$mount()
      expect(vm.$children[0].getOptionLabel(undefined)).to.equal('')
    })
    it('should return value for passed option when simple value', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      const option = vm.$children[0].options[1]
      expect(vm.$children[0].getOptionLabel(option)).to.equal('2')
    })

    it('should return option’s label when custom label is set', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      const option = vm.$children[0].options[2]
      expect(vm.$children[0].getOptionLabel(option)).to.equal('3')
    })

    it('should return customLabel’s interpolation if set for objects options', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              multiple: true,
              customLabel: this.idWithId
            }
          })
        },
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

    it('should return customLabel’s interpolation if set for primitive options', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true,
              customLabel: this.idWithId
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [1, 2, 3],
          idWithId (option) {
            return `${option}+${option}`
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              searchable: true,
              multiple: true
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              searchable: true,
              multiple: false
            }
          })
        },
        components: { Multiselect },
        data: {
          value: { id: '2' },
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      const comp = vm.$children[0]
      expect(comp.valueKeys).to.deep.equal(['2'])
    })
  })

  describe('optionKeys', () => {
    it('should return primitive value Array when no :label is provided', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true,
              searchable: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [1, 2],
          source: [1, 2, 3]
        }
      }).$mount()
      expect(vm.$children[0].optionKeys).to.deep.equal(['1', '2', '3'])
    })

    it('should return an Array maped from option[label] values', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              searchable: true,
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [{ id: '1' }, { id: '2' }],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      expect(vm.$children[0].optionKeys).to.deep.equal(['1', '2', '3'])
    })

    it('should return an flat Array maped from option[label] of group values', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'label',
              trackBy: 'id',
              groupValues: 'values',
              groupLabel: 'groupLabel',
              searchable: true,
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          source: [
            {
              groupLabel: 'group1',
              values: [
                { label: 'aa', id: '1' }
              ]
            },
            {
              groupLabel: 'group2',
              values: [
                { label: 'bb1', id: '2' },
                { label: 'bb2', id: '3' }
              ]
            }
          ]
        }
      }).$mount()
      expect(vm.$children[0].optionKeys).to.deep.equal(['aa', 'bb1', 'bb2'])
    })

    it('when an option group is empty, return null to prevent formatting a non existent item.', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'label',
              trackBy: 'id',
              groupValues: 'values',
              groupLabel: 'groupLabel',
              searchable: true,
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          source: [
            {
              groupLabel: 'group1',
              values: [
                { label: 'aa', id: '1' }
              ]
            },
            {
              groupLabel: 'group2',
              values: [
                { label: 'bb1', id: '2' },
                { label: 'bb2', id: '3' }
              ]
            },
            {
              groupLabel: 'group3',
              values: [
              ]
            },
            {
              groupLabel: 'group4',
              values: [
                { label: 'cc', id: '4' }
              ]
            }
          ]
        }
      }).$mount()
      expect(vm.$children[0].optionKeys).to.deep.equal(['aa', 'bb1', 'bb2', 'cc'])
    })
  })

  describe('filteredOptions', () => {
    describe('when groupValues is passed', () => {
      it('should return a flat options list', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.groups,
                groupValues: 'values',
                groupLabel: 'groupLabel',
                searchable: true
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            groups: [
              {
                groupLabel: 'GroupX',
                values: ['1', '1x', '1y']
              },
              {
                groupLabel: 'GroupY',
                values: ['2', '2x', '2y']
              }
            ]
          }
        }).$mount()
        const flatList = [
          { $groupLabel: 'GroupX', $isLabel: true },
          '1',
          '1x',
          '1y',
          { $groupLabel: 'GroupY', $isLabel: true },
          '2',
          '2x',
          '2y'
        ]
        const comp = vm.$children[0]
        expect(comp.filteredOptions).to.deep.equal(flatList)
      })
      it('should return a flat options list when options are objects', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.groups,
                groupValues: 'values',
                groupLabel: 'groupLabel',
                searchable: true,
                trackBy: 'id',
                label: 'label'
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            groups: [
              {
                groupLabel: 'GroupX',
                values: [
                  { label: 'aa', id: '1' }
                ]
              },
              {
                groupLabel: 'GroupY',
                values: [
                  { label: 'bb1', id: '2' },
                  { label: 'bb2', id: '3' }
                ]
              }
            ]
          }
        }).$mount()
        const flatList = [
          { $groupLabel: 'GroupX', $isLabel: true },
          { label: 'aa', id: '1' },
          { $groupLabel: 'GroupY', $isLabel: true },
          { label: 'bb1', id: '2' },
          { label: 'bb2', id: '3' }
        ]
        const comp = vm.$children[0]
        expect(comp.filteredOptions).to.deep.equal(flatList)
      })
      it('should return a filtered flat options list', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.groups,
                groupValues: 'values',
                groupLabel: 'groupLabel',
                searchable: true
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            groups: [
              {
                groupLabel: 'GroupX',
                values: ['1', '1xYY', '1yXx', '2z']
              },
              {
                groupLabel: 'GroupY',
                values: ['2', '2x', '2yY', '1z']
              }
            ]
          }
        }).$mount()
        const flatList = [
          { $groupLabel: 'GroupX', $isLabel: true },
          '1xYY',
          { $groupLabel: 'GroupY', $isLabel: true },
          '2yY'
        ]
        const comp = vm.$children[0]
        comp.search = 'Yy'
        expect(comp.filteredOptions).to.deep.equal(flatList)
      })
      it('should remove groups without matching results', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.groups,
                groupValues: 'values',
                groupLabel: 'groupLabel',
                searchable: true
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            groups: [
              {
                groupLabel: 'GroupX',
                values: ['1', '1x', '1y']
              },
              {
                groupLabel: 'GroupY',
                values: ['2', '2x', '2y']
              }
            ]
          }
        }).$mount()
        const flatList = [
          { $groupLabel: 'GroupY', $isLabel: true },
          '2',
          '2x',
          '2y'
        ]
        const comp = vm.$children[0]
        comp.search = '2'
        expect(comp.filteredOptions).to.deep.equal(flatList)
      })
      it('should filter options objects matching query', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.groups,
                groupValues: 'values',
                groupLabel: 'groupLabel',
                searchable: true,
                trackBy: 'value',
                label: 'label'
              }
            })
          },
          components: { Multiselect },
          data: {
            value: [],
            groups: [
              {
                groupLabel: 'GroupX',
                values: [
                  { value: 1, label: 'One' },
                  { value: 2, label: 'Two' },
                  { value: 3, label: 'Three' }
                ]
              },
              {
                groupLabel: 'GroupY',
                values: [
                  { value: 4, label: 'OneTwo' },
                  { value: 5, label: 'TwoThree' },
                  { value: 6, label: 'ThreeFour' }
                ]
              }
            ]
          }
        }).$mount()
        const flatList = [
          { $groupLabel: 'GroupX', $isLabel: true },
          { value: 2, label: 'Two' },
          { $groupLabel: 'GroupY', $isLabel: true },
          { value: 4, label: 'OneTwo' },
          { value: 5, label: 'TwoThree' }
        ]
        const comp = vm.$children[0]
        comp.search = 'two'
        expect(comp.filteredOptions).to.deep.equal(flatList)
      })
    })
    it('should return matched options according to search value', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              searchable: true,
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      const comp = vm.$children[0]
      expect(comp.filteredOptions).to.deep.equal([{ id: '1' }, { id: '2' }, { id: '3' }])
      comp.search = '2'
      expect(comp.filteredOptions).to.deep.equal([{ id: '2' }])
    })

    it('should return matched options according to search value', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              searchable: true,
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      const comp = vm.$children[0]
      expect(comp.filteredOptions).to.deep.equal([{ id: '1' }, { id: '2' }, { id: '3' }])
      comp.search = '2'
      expect(comp.filteredOptions).to.deep.equal([{ id: '2' }])
    })

    it('should return no options when there are no matches with search value', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              searchable: true,
              multiple: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      }).$mount()
      const comp = vm.$children[0]
      expect(comp.filteredOptions).to.deep.equal([{ id: '1' }, { id: '2' }, { id: '3' }])
      comp.search = '4'
      expect(comp.filteredOptions).to.deep.equal([])
    })

    it('should hide already selected elements when :hide-selected is set to true', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'id',
              trackBy: 'id',
              searchable: true,
              hideSelected: true,
              multiple: true
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              searchable: true,
              multiple: true,
              taggable: true
            }
          })
        },
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

    it('should not alter the available options when :internal-search is FALSE', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true,
              internalSearch: false
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [10, 20, 30]
        }
      }).$mount()
      const comp = vm.$children[0]
      expect(comp.filteredOptions).to.deep.equal([10, 20, 30])
      expect(comp.filteredOptions.length).to.equal(3)
      comp.search = 'test'
      expect(comp.filteredOptions).to.deep.equal([10, 20, 30])
      expect(comp.filteredOptions.length).to.equal(3)
    })

    it('when :internal-search is FALSE and options groups are present then custom search should work', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.filteredSource,
              label: 'label',
              trackBy: 'id',
              groupValues: 'values',
              groupLabel: 'groupLabel',
              searchable: true,
              multiple: true,
              internalSearch: false
            },
            on: {
              'search-change': this.afterSearch
            }
          })
        },
        components: { Multiselect },
        data: {
          source: [
            {
              groupLabel: 'group1',
              values: [
                { label: 'aa', id: '1' }
              ]
            },
            {
              groupLabel: 'group2',
              values: [
                { label: 'bb1', id: '2' },
                { label: 'bb2', id: '3' }
              ]
            }
          ],
          filteredSource: []
        },
        mounted () {
          this.filteredSource = this.source
        },
        methods: {
          afterSearch (query) {
            // Search by groupLabel
            let newOptions = this.source.slice()
            newOptions = newOptions.filter(option => option.groupLabel.toLowerCase().indexOf(query.toLowerCase()) > -1)
            this.filteredSource = newOptions
          }
        }
      }).$mount()
      Vue.nextTick(() => {
        const comp = vm.$children[0]
        expect(comp.filteredOptions).to.deep.equal([{$groupLabel: 'group1', $isLabel: true}, {
          label: 'aa',
          id: '1'
        }, {$groupLabel: 'group2', $isLabel: true}, {label: 'bb1', id: '2'}, {label: 'bb2', id: '3'}])
        comp.search = 'group2'
        Vue.nextTick(() => {
          expect(comp.filteredOptions).to.deep.equal([{$groupLabel: 'group2', $isLabel: true}, {
            label: 'bb1',
            id: '2'
          }, {label: 'bb2', id: '3'}])
          done()
        })
      })
    })

    it('should return only as many options as set in the :options-limit prop.', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              multiple: true,
              optionsLimit: 2
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: ['test', 'production', 'testing']
        }
      }).$mount()
      expect(vm.$children[0].filteredOptions).to.deep.equal(['test', 'production'])
      expect(vm.$children[0].filteredOptions.length).to.equal(2)
      vm.$children[0].search = 'test'
      expect(vm.$children[0].filteredOptions).to.deep.equal(['test', 'testing'])
      expect(vm.$children[0].filteredOptions.length).to.equal(2)
    })

    it('should return all the passed options including falsy options', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: ['start', undefined, 0, false, null, 'end']
        }
      }).$mount()
      expect(vm.$children[0].filteredOptions).to.deep.equal(['start', undefined, 0, false, null, 'end'])
      expect(vm.$children[0].filteredOptions.length).to.equal(6)
    })
  })

  describe('currentOptionLabel', () => {
    it('should return the current option label', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              searchable: false,
              multiple: false
            }
          })
        },
        components: { Multiselect },
        data: {
          value: 0,
          source: [0, '1', '2', '3', '4', '5']
        }
      }).$mount()
      expect(vm.$children[0].currentOptionLabel).to.equal(0)
    })
    describe('when MULTIPLE is FALSE', () => {
      it('should return the current option label', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                searchable: false,
                multiple: false
              }
            })
          },
          components: { Multiselect },
          data: {
            value: '3',
            source: ['1', '2', '3', '4', '5']
          }
        }).$mount()
        expect(vm.$children[0].currentOptionLabel).to.equal('3')
      })
    })
    describe('when MULTIPLE is TRUE', () => {
      it('should return the placeholder value', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                value: this.value,
                options: this.source,
                searchable: false,
                multiple: true,
                placeholder: 'Select'
              }
            })
          },
          components: { Multiselect },
          data: {
            value: ['1'],
            source: ['1', '2', '3', '4', '5']
          }
        }).$mount()
        expect(vm.$children[0].currentOptionLabel).to.equal('Select')
      })
    })
  })

  describe('#onTag', () => {
    it('should should push to value and options with default settings and :taggable is TRUE', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              searchable: true,
              multiple: true,
              taggable: true
            },
            on: {
              tag: this.addTag
            }
          })
        },
        components: { Multiselect },
        data () {
          return {
            value: ['1'],
            source: ['1', '2', '3']
          }
        },
        methods: {
          addTag (newTag) {
            this.source.push(newTag)
            this.value.push(newTag)
          }
        }
      }).$mount()
      vm.$children[0].search = 'TEST'
      vm.$children[0].select(vm.$children[0].filteredOptions[0])
      expect(vm.$children[0].options.length).to.equal(4)
      expect(vm.$children[0].options).to.deep.equal(['1', '2', '3', 'TEST'])
      expect(vm.$children[0].value.length).to.equal(2)
      expect(vm.$children[0].value).to.deep.equal(['1', 'TEST'])
    })
  })

  describe('#onTagPosition', () => {
    it('should display new tag above search results by default when tag-position is defaulted to \'top\'', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'name',
              trackBy: 'name',
              searchable: true,
              taggable: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }]
        }
      }).$mount()
      const comp = vm.$children[0]

      expect(comp.filteredOptions).to.deep.equal([{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }])
      comp.search = 'Ban'
      expect(comp.filteredOptions).to.deep.equal([{ isTag: true, label: 'Ban' }, { name: 'Banana' }])
    })

    it('should display new tag below search results when tag-position is set to \'bottom\'', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              label: 'name',
              trackBy: 'name',
              searchable: true,
              taggable: true,
              tagPosition: 'bottom'
            }
          })
        },
        components: { Multiselect },
        data: {
          value: [],
          source: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }]
        }
      }).$mount()
      const comp = vm.$children[0]
      expect(comp.filteredOptions).to.deep.equal([{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }])
      comp.search = 'Ban'
      expect(comp.filteredOptions).to.deep.equal([{ name: 'Banana' }, { isTag: true, label: 'Ban' }])
    })
  })

  describe('#limitText', () => {
    it('should by default interpolate the limit text', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              searchable: true,
              multiple: true,
              limit: 2
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              searchable: true,
              multiple: true,
              limit: 1
            }
          })
        },
        components: { Multiselect },
        data: {
          value: ['1', '2', '3'],
          source: ['1', '2', '3', '4', '5']
        }
      }).$mount()
      expect(vm.$children[0].internalValue.length).to.equal(3)
      expect(vm.$children[0].visibleValue.length).to.equal(1)
    })
  })

  describe('@ready:showLabels', () => {
    beforeEach(function () {
      document.body.insertAdjacentHTML('afterbegin', '<app></app>')
    })
    it('should hide all labels if :show-labels is FALSE', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              value: this.value,
              options: this.source,
              searchable: true,
              multiple: true,
              limit: 1,
              showLabels: false
            }
          })
        },
        el: 'App',
        components: { Multiselect },
        data: {
          value: ['1', '2', '3'],
          source: ['1', '2', '3', '4', '5']
        }
      })
      expect(vm.$children[0].selectLabelText).to.equal('')
      expect(vm.$children[0].deselectLabelText).to.equal('')
      expect(vm.$children[0].selectedLabelText).to.equal('')
    })
  })
  describe('#updateSearch', () => {
    it('should update the search value', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              options: this.source,
              searchable: true
            }
          })
        },
        components: { Multiselect },
        data: {
          value: ['1', '2', '3'],
          source: ['1', '2', '3', '4', '5']
        }
      }).$mount()
      expect(vm.$children[0].search).to.equal('')
      vm.$children[0].updateSearch('test')
      expect(vm.$children[0].search).to.equal('test')
    })
  })
  describe('#getInternalValue', () => {
    describe('when multiple == TRUE', () => {
      it('should return the external value', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                options: this.source,
                value: this.value,
                multiple: true
              }
            })
          },
          components: { Multiselect },
          data: {
            value: ['1', '2', '3'],
            source: ['1', '2', '3', '4', '5']
          }
        }).$mount()
        expect(vm.$children[0].getInternalValue(vm.value)).to.deep.equal(['1', '2', '3'])
      })
    })
    describe('when multiple == FALSE', () => {
      describe('and an option is selected', () => {
        it('should return the exernal value in an array', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  options: this.source,
                  value: this.value,
                  multiple: false
                }
              })
            },
            components: { Multiselect },
            data: {
              value: '1',
              source: ['1', '2', '3', '4', '5']
            }
          }).$mount()
          expect(vm.$children[0].getInternalValue(vm.value)).to.deep.equal(['1'])
        })
      })
      describe('and the selection is empty', () => {
        it('should return an empty array', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  options: this.source,
                  value: this.value,
                  multiple: false
                }
              })
            },
            components: { Multiselect },
            data: {
              value: null,
              source: ['1', '2', '3', '4', '5']
            }
          }).$mount()
          expect(vm.$children[0].getInternalValue()).to.deep.equal([])
        })
      })
    })
  })
})
