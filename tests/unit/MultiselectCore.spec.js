import { shallowMount } from '@vue/test-utils'
import MultiselectCore from '@/MultiselectCore'

describe('MultiselectCore.js', () => {
  describe('Preselecting values', () => {
    describe('when multiple == TRUE', () => {
      test('should preselect passed array of values', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: ['1', '2'],
            options: ['1', '2', '3'],
            multiple: true
          }
        })
        expect(wrapper.vm.internalValue).toEqual(['1', '2'])
      })

      test('should preselect passed array of objects', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: [{ id: '3' }, { id: '2' }],
            options: [{ id: '1' }, { id: '2' }, { id: '3' }],
            label: 'id',
            trackBy: 'id',
            multiple: true
          }
        })
        expect(wrapper.vm.internalValue).toEqual([{ id: '3' }, { id: '2' }])
      })

      test('should set value to [] when passing null as selected', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: null,
            options: [{ id: '1' }, { id: '2' }, { id: '3' }],
            label: 'id',
            trackBy: 'id',
            multiple: true
          }
        })
        expect(wrapper.vm.internalValue).toEqual([])
      })
    })

    describe('when multiple == FALSE', () => {
      test('should work when initial value is null', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: null,
            options: [{ val: 1, label: '1' }, { val: 2, label: '2' }]
          }
        })
        expect(wrapper.vm.internalValue).toEqual([])
      })

      test('should preselect passed simple value', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: '1',
            options: ['1', '2', '3']
          }
        })
        expect(wrapper.vm.internalValue).toEqual(['1'])
      })

      test('should preselect passed object', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: { id: '2' },
            options: [{ id: '1' }, { id: '2' }, { id: '3' }],
            label: 'id',
            trackBy: 'id'
          }
        })
        expect(wrapper.vm.internalValue).toEqual([{ id: '2' }])
      })
    })

    describe(':preselectFirst', () => {
      test('should update the search value', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            searchable: true,
            value: [],
            options: ['1', '2', '3', '4', '5'],
            preselectFirst: true
          }
        })
        expect(wrapper.emitted().input).toEqual([['1', null]])
      })
    })
  })

  describe('Methods', () => {
    describe('#select()', () => {
      test('should do nothing when DISABLED == true', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: [],
            options: ['1', '2', '3'],
            multiple: true,
            disabled: true
          }
        })
        wrapper.vm.select(wrapper.vm.options[0])
        expect(wrapper.emitted().input).toEqual(undefined)
      })

      test('should do nothing when selecting a group label', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: [],
            options: [{ id: 0, $isLabel: true }, '2', '3'],
            multiple: true,
            disabled: true
          }
        })
        wrapper.vm.select(wrapper.vm.options[0])
        expect(wrapper.emitted().input).toBe(undefined)
      })

      test('should reset search input when clearOnSelect == TRUE', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: [],
            options: ['1', '2', '3'],
            multiple: true
          }
        })
        wrapper.vm.activate()
        wrapper.vm.search = 'test'
        wrapper.vm.select(wrapper.vm.options[0])
        expect(wrapper.vm.search).toBe('')
      })

      test('should keep search input when clearOnSelect == FALSE', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: [],
            options: ['1', '2', '3'],
            multiple: true,
            clearOnSelect: false,
            closeOnSelect: false
          }
        })
        wrapper.vm.activate()
        wrapper.vm.search = 'test'
        wrapper.vm.select(wrapper.vm.options[0])
        expect(wrapper.vm.search).toBe('test')
      })

      describe('when multiple == TRUE', () => {
        test('should add values to selected array', () => {
          const wrapper = shallowMount(MultiselectCore, {
            scopedSlots: {
              default: () => null
            },
            propsData: {
              multiple: true,
              value: ['1'],
              options: ['1', '2', '3'],
              id: 'id'
            }
          })
          wrapper.vm.select(wrapper.vm.options[1])
          expect(wrapper.emitted().input).toEqual([[['1', '2'], 'id']])
        })

        test('should add objects to selected array', () => {
          const wrapper = shallowMount(MultiselectCore, {
            scopedSlots: {
              default: () => null
            },
            propsData: {
              value: [{ id: '1' }],
              options: [{ id: '1' }, { id: '2' }, { id: '3' }],
              label: 'id',
              trackBy: 'id',
              multiple: true,
              id: 'id'
            }
          })
          wrapper.vm.select(wrapper.vm.options[1])
          expect(wrapper.emitted().input).toEqual([
            [[{ id: '1' }, { id: '2' }], 'id']
          ])
        })

        test('should remove already selected object', () => {
          const wrapper = shallowMount(MultiselectCore, {
            scopedSlots: {
              default: () => null
            },
            propsData: {
              value: [{ id: '2' }],
              options: [{ id: '1' }, { id: '2' }, { id: '3' }],
              label: 'id',
              trackBy: 'id',
              multiple: true,
              id: 'id'
            }
          })
          wrapper.vm.select(wrapper.vm.options[1])
          expect(wrapper.emitted().input).toEqual([[[], 'id']])
        })

        test('should NOT remove already selected object when called with Tab key', () => {
          const wrapper = shallowMount(MultiselectCore, {
            scopedSlots: {
              default: () => null
            },
            propsData: {
              value: [{ id: '2' }],
              options: [{ id: '1' }, { id: '2' }, { id: '3' }],
              label: 'id',
              trackBy: 'id',
              multiple: true,
              id: 'id'
            }
          })
          wrapper.vm.select(wrapper.vm.options[1], 'Tab')
          expect(wrapper.emitted().input).toEqual(undefined)
        })
        describe('and when max == 3', () => {
          test('should prevent from adding more than 3 elements', () => {
            const wrapper = shallowMount(MultiselectCore, {
              scopedSlots: {
                default: () => null
              },
              propsData: {
                value: [{ id: '1' }, { id: '2' }, { id: '3' }],
                options: [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }],
                label: 'id',
                trackBy: 'id',
                multiple: true,
                id: 'id',
                max: 3
              }
            })
            wrapper.vm.select(wrapper.vm.options[3])
            expect(wrapper.emitted().input).toEqual(undefined)
          })
        })
      })
      describe('when multiple == FALSE', () => {
        test('should not deselect a value when called with Tab key', () => {
          const wrapper = shallowMount(MultiselectCore, {
            scopedSlots: {
              default: () => null
            },
            propsData: {
              value: [{ id: '2' }],
              options: [{ id: '1' }, { id: '2' }, { id: '3' }],
              label: 'id',
              trackBy: 'id',
              id: 'id'
            }
          })
          wrapper.vm.select(wrapper.vm.options[1], 'Tab')
          expect(wrapper.emitted().input).toEqual(undefined)
        })
      })
      describe('when closeOnSelect == FALSE', () => {
        test('should not close the dropdown', () => {
          const wrapper = shallowMount(MultiselectCore, {
            scopedSlots: {
              default: () => null
            },
            propsData: {
              value: [{ id: '2' }],
              options: [{ id: '1' }, { id: '2' }, { id: '3' }],
              label: 'id',
              trackBy: 'id',
              closeOnSelect: false,
              id: 'id'
            }
          })
          wrapper.vm.activate()
          wrapper.vm.select(wrapper.vm.options[0])
          expect(wrapper.vm.isOpen).toEqual(true)
        })
      })
    })
  })

  describe('Events', () => {
    describe('@input', () => {
      test('should be called whenever the value changes passing the new value and id', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: ['3'],
            options: ['1', '2', '3'],
            id: 'id',
            multiple: true
          }
        })

        wrapper.vm.select(wrapper.vm.options[0])
        expect(wrapper.emitted().input).toEqual([[['3', '1'], 'id']])
      })
    })

    describe('@select', () => {
      test('should be called after each select passing the selected option and id', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: null,
            options: ['1', '2', '3'],
            id: 'id'
          }
        })

        wrapper.vm.select(wrapper.vm.options[0])
        expect(wrapper.emitted().select).toEqual([['1', 'id']])
      })
    })

    describe('@remove', () => {
      test('should be called after removing an option, passing the removed option and id', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => null
          },
          propsData: {
            value: ['3'],
            options: ['1', '2', '3'],
            id: 'id'
          }
        })

        wrapper.vm.select(wrapper.vm.options[2])
        expect(wrapper.emitted().remove).toEqual([['3', 'id']])
      })
    })

    describe('@close', () => {
      test('should be called after closing the dropdown with the current value and id', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => ({ render: h => h('div') })
          },
          propsData: {
            value: ['2'],
            options: ['1', '2', '3'],
            id: 'id'
          }
        })

        wrapper.vm.activate()
        wrapper.vm.deactivate()
        expect(wrapper.emitted().close).toEqual([['2', 'id']])
      })
    })

    describe('@open', () => {
      test('should be called after opening the dropdown passing the id', () => {
        const wrapper = shallowMount(MultiselectCore, {
          scopedSlots: {
            default: () => ({ render: h => h('div') })
          },
          propsData: {
            value: ['2'],
            options: ['1', '2', '3'],
            id: 'id'
          }
        })

        wrapper.vm.activate()
        expect(wrapper.emitted().open).toEqual([['id']])
      })
    })
  })
})
