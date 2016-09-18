import Vue from 'vue'
import Multiselect from 'src/Multiselect'

describe('Multiselect.vue', () => {
  describe('Events emitting', () => {
    describe('@update', () => {
      it('should be called whenever the value changes passing the new value and id', () => {
        let eventsLog = []
        let calledId = null

        const vmSingle = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                selected: this.value,
                options: this.source,
                id: 'single'
              },
              on: {
                update: this.onUpdate
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
                selected: this.value,
                options: this.source,
                multiple: true,
                id: 'multi'
              },
              on: {
                update: this.onUpdate
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
                selected: this.value,
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
                selected: this.value,
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
                selected: this.value,
                options: this.source,
                multiple: true,
                id: '1'
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
                selected: this.value,
                options: this.source,
                id: '1'
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
                  selected: this.value,
                  options: this.source,
                  id: '1'
                },
                on: {
                  open: this.onOpen
                }
              }),
              h(Multiselect, {
                props: {
                  selected: this.value,
                  options: this.source,
                  id: '2'
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
              selected: this.value,
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
              selected: this.value,
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
                  selected: this.value,
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
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$refs.tags.querySelector('.multiselect__tag').textContent).to.contain('1')
        })

        it('should preselect passed array of objects', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  selected: this.value,
                  options: this.source,
                  label: 'id',
                  key: 'id',
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
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$refs.tags.querySelector('.multiselect__tag').textContent).to.contain('2')
        })

        it('should preselect passed array of objects in different order', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  selected: this.value,
                  options: this.source,
                  label: 'id',
                  key: 'id',
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
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$refs.tags.querySelector('.multiselect__tag').textContent).to.contain('3')
        })
        it('should set value to [] when passing null as selected', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  selected: this.value,
                  options: this.source,
                  label: 'id',
                  key: 'id',
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
          expect(vm.$children[0].value).to.deep.equal([])
          expect(vm.$children[0].$refs.tags.querySelector('.multiselect__tag')).to.equal(null)
        })
      })

      describe('when multiple == FALSE', () => {
        it('should preselect passed simple value', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  selected: this.value,
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
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$refs.tags.querySelector('input').value).to.contain('1')
        })

        it('should preselect passed object', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  selected: this.value,
                  options: this.source,
                  label: 'id',
                  key: 'id'
                }
              })
            },
            components: { Multiselect },
            data: {
              value: { id: '2' },
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].selected).to.deep.equal(vm.value)
          expect(vm.$children[0].$refs.tags.querySelector('input').value).to.contain('2')
        })

        it('should set value to null when passing null as selected', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  selected: this.value,
                  options: this.source,
                  label: 'id',
                  key: 'id'
                }
              })
            },
            components: { Multiselect },
            data: {
              value: null,
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].value).to.deep.equal(null)
          expect(vm.$children[0].$refs.tags.querySelector('.multiselect__tag')).to.equal(null)
        })

        it('should set search value to equal to passed object label', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  selected: this.value,
                  options: this.source,
                  label: 'id',
                  key: 'id'
                }
              })
            },
            components: { Multiselect },
            data: {
              value: { id: '1' },
              source: [{ id: '1' }, { id: '2' }, { id: '3' }]
            }
          }).$mount()
          expect(vm.$children[0].search).to.equal('1')
          expect(vm.$children[0].$refs.search.value).to.equal('1')
        })

        it('should set search value to equal to passed value', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  selected: this.value,
                  options: this.source,
                  label: 'id',
                  key: 'id'
                }
              })
            },
            components: { Multiselect },
            data: {
              value: 2,
              source: [1, 2, 3]
            }
          }).$mount()
          expect(vm.$children[0].search).to.equal(2)
          expect(vm.$children[0].$refs.search.value).to.equal('2')
        })
        it('if selected is null should set search value to empty string', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  selected: this.value,
                  options: this.source,
                  label: 'id',
                  key: 'id',
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
          expect(vm.$children[0].search).to.equal(null)
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
                selected: this.value,
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
        expect(vm.$children[0].selected).to.deep.equal(vm.value)
        expect(vm.$children[0].$refs.tags.querySelector('.multiselect__single').textContent).to.contain('1')
      })

      it('should preselect passed object', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                selected: this.value,
                options: this.source,
                label: 'id',
                key: 'id',
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
        expect(vm.$children[0].selected).to.deep.equal(vm.value)
        expect(vm.$children[0].$refs.tags.querySelector('.multiselect__single').textContent).to.contain('2')
      })
    })
  })

  describe('#select()', () => {
    it('should reset search input when clearOnSelect == TRUE', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
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
      Vue.nextTick(function () {
        expect(vm.$children[0].$refs.tags.querySelector('input').value).to.equal('')
        done()
      })
    })

    it('should keep search input when clearOnSelect == FALSE', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              multiple: true,
              clearOnSelect: false
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
      Vue.nextTick(function () {
        expect(vm.$children[0].$refs.tags.querySelector('input').value).to.equal('test')
        done()
      })
    })

    describe('when multiple == TRUE', () => {
      it('should add values to selected array', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                selected: this.value,
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
        expect(vm.$children[0].value).to.deep.equal(['1', '2'])
      })

      it('should add objects to selected array', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                selected: this.value,
                options: this.source,
                label: 'id',
                key: 'id',
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
        expect(vm.$children[0].value).to.deep.equal([{ id: '1' }, { id: '2' }])
      })

      it('should remove already selected object', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                selected: this.value,
                options: this.source,
                label: 'id',
                key: 'id',
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
        expect(vm.$children[0].value).to.deep.equal([{ id: '1' }, { id: '2' }])
        vm.$children[0].select(vm.source[0])
        expect(vm.$children[0].value).to.deep.equal([{ id: '2' }])
      })
      describe('and when max == 3', () => {
        it('should prevent from adding more than 3 elements', () => {
          const vm = new Vue({
            render (h) {
              return h(Multiselect, {
                props: {
                  selected: this.value,
                  options: this.source,
                  label: 'id',
                  key: 'id',
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
          expect(vm.$children[0].value).to.deep.equal([{ id: '1' }, { id: '2' }, { id: '3' }])
          vm.$children[0].removeLastElement()
          vm.$children[0].select(vm.source[3])
          expect(vm.$children[0].value).to.deep.equal([{ id: '1' }, { id: '2' }, { id: '4' }])
        })
      })
    })
    describe('when multiple == FALSE', () => {
      it('should change selected value to new one', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                selected: this.value,
                options: this.source,
                label: 'id',
                key: 'id'
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
        expect(vm.$children[0].value).to.deep.equal({ id: '1' })
        vm.$children[0].select(vm.source[1])
        expect(vm.$children[0].value).to.deep.equal({ id: '2' })
      })
    })
    describe('when closeOnSelect == FALSE', () => {
      it('should not close the dropdown', () => {
        const vm = new Vue({
          render (h) {
            return h(Multiselect, {
              props: {
                selected: this.value,
                options: this.source,
                label: 'id',
                key: 'id',
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
        })
      })
    })
  })

  describe('#removeElement()', () => {
    it('should remove passed element', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id'
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
      vm.$children[0].removeElement(vm.$children[0].value[0])
      expect(vm.$children[0].value).to.deep.equal([{ id: '2' }])
      vm.$children[0].removeElement(vm.$children[0].value[0])
      expect(vm.$children[0].value).to.deep.equal([{ id: '2' }])
    })
  })

  describe('#removeLastElement()', () => {
    it('should remove last selected element', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
      expect(vm.$children[0].value).to.deep.equal([{ id: '1' }])
    })
  })

  describe('#addPointerElement()', () => {
    it('should select() currently pointed option', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
      expect(vm.$children[0].value).to.deep.equal([vm.source[2]])
    })
  })

  describe('#pointerForward()', () => {
    it('should increase the pointer value by 1', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
      Vue.nextTick(function () {
        vm.$children[0].pointerForward()
        expect(vm.$children[0].pointer).to.equal(2)
        done()
      })
    })

    it('should NOT increase the pointer value if pointed at last element', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
    it('should decrease the pointer value by 1', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
  })

  describe('#pointerSet(index)', () => {
    it('should set the pointer value to passed index', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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

  describe('#watch:selected', () => {
    it('updates multiselect private value when parent selected changes to a different value than private value', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.sel,
              options: this.source,
              label: 'id',
              key: 'id',
              multiple: false,
              searchable: false
            },
            on: {
              update: this.addMore
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
              searchable: false
            },
            on: {
              update: this.afterSelect
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
        expect(vm.$children[0].selected).to.deep.equal(null)
        done()
      })
    })

    it('not changing changes the selected value with no @update event listener', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
        expect(vm.$children[0].selected).to.deep.equal(null)
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
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
              searchable: false,
              resetAfter: true
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
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
              searchable: true,
              clearOnSelect: true
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
      vm.$children[0].select(vm.$children[0].options[2])
      Vue.nextTick(function () {
        expect(vm.$children[0].search).to.deep.equal('3')
        done()
      })
    })
  })

  describe('#watch:search', () => {
    it('should call @search-change event callback wheneer search value changes', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
              clearOnSelect: false
            },
            on: {
              'search-change': this.afterSearch
            }
          })
        },
        template: '<multiselect :selected="value" :options="source" label="id" key="id" @search-change="afterSearch" :clear-on-select="false"></multiselect>',
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
  })

  describe('#activate()', () => {
    it('should set isOpen value to true', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
  })

  describe('#toggle()', () => {
    it('should set isOpen value to FALSE when it is TRUE', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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

    it('should reset search value when multiple == TRUE', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
      vm.$children[0].deactivate()
      Vue.nextTick(function () {
        expect(vm.$children[0].search).to.equal('')
        done()
      })
    })

    it('should set the search value to selected value when multiple == FALSE', (done) => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
      Vue.nextTick(function () {
        expect(vm.$children[0].search).to.equal('2')
        done()
      })
    })
  })

  describe('#isExistingOption()', () => {
    it('should return FALSE when there are no options to look into', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
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
              selected: this.value,
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
              selected: this.value,
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
              selected: this.value,
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
              selected: this.value,
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
              selected: this.value,
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
    it('should return value for passed option when simple value', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
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
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
              multiple: true
            }
          })
        },
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
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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

    it('should return customLabel’s interpolation if set', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
  })

  describe('valueKeys', () => {
    it('should return primitive value Array when no :key is provided', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
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
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
      expect(vm.$children[0].valueKeys).to.deep.equal('2')
    })
  })

  describe('optionKeys', () => {
    it('should return primitive value Array when no :label is provided', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
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
      expect(vm.$children[0].optionKeys).to.deep.equal([1, 2, 3])
    })

    it('should return an Array maped from option[label] values', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
  })

  describe('filteredOptions', () => {
    it('should return matched options according to search value', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
      expect(vm.$children[0].filteredOptions).to.deep.equal([{ id: '1' }, { id: '2' }, { id: '3' }])
      vm.$children[0].$set('search', '2')
      expect(vm.$children[0].filteredOptions).to.deep.equal([{ id: '2' }])
    })

    it('should return no options when there are no matches with search value', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
      expect(vm.$children[0].filteredOptions).to.deep.equal([{ id: '1' }, { id: '2' }, { id: '3' }])
      vm.$children[0].$set('search', '4')
      expect(vm.$children[0].filteredOptions).to.deep.equal([])
    })

    it('should hide already selected elements when :hide-selected is set to true', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
              options: this.source,
              label: 'id',
              key: 'id',
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
              selected: this.value,
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
    
    it('should not alter the available options when :local-search is FALSE', () => {
      const vm = new Vue({
        template: '<multiselect :selected="value" :options="source" :multiple="true" :local-search="false"></multiselect>',
        components: { Multiselect },
        data: {
          value: [],
          source: [10, 20, 30]
        }
      }).$mount()
      expect(vm.$children[0].filteredOptions).to.deep.equal([10, 20, 30])
      expect(vm.$children[0].filteredOptions.length).to.equal(3)
      vm.$children[0].search = 'test'
      expect(vm.$children[0].filteredOptions).to.deep.equal([10, 20, 30])
      expect(vm.$children[0].filteredOptions.length).to.equal(3)
    })
  })

  describe('#onTag', () => {
    it('should should push to value and options with default settings and :taggable is TRUE', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
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
      vm.$children[0].search = 'test'
      vm.$children[0].select(vm.$children[0].filteredOptions[0])
      expect(vm.$children[0].options.length).to.equal(4)
      expect(vm.$children[0].options).to.deep.equal(['1', '2', '3', 'test'])
      expect(vm.$children[0].selected.length).to.equal(2)
      expect(vm.$children[0].selected).to.deep.equal(['1', 'test'])
    })
  })

  describe('#limitText', () => {
    it('should by default interpolate the limit text', () => {
      const vm = new Vue({
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
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
              selected: this.value,
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
        render (h) {
          return h(Multiselect, {
            props: {
              selected: this.value,
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
      expect(vm.$children[0].selectLabel).to.equal('')
      expect(vm.$children[0].deselectLabel).to.equal('')
      expect(vm.$children[0].selectedLabel).to.equal('')
    })
  })
})
