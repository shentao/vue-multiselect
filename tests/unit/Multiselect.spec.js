import { shallowMount } from '@vue/test-utils'
import Multiselect from '@/Multiselect.vue'

describe('Multiselect.vue', () => {
  describe(':value', () => {
    test('should work when initial value is null', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: null,
          options: [{ val: 1, label: '1' }, { val: 2, label: '2' }]
        }
      })
      expect(wrapper.vm.internalValue).toEqual([])
    })
  })
  describe('Events emitting', () => {
    describe('@update:modelValue', () => {
      test('should be called whenever the value changes passing the new value and id', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: ['3'],
            options: ['1', '2', '3'],
            id: 'id',
            multiple: true
          }
        })

        wrapper.vm.select(wrapper.vm.options[0])
        expect(wrapper.emitted()['update:modelValue']).toEqual([[['3', '1']]])
      })
    })

    describe('@select', () => {
      test('should be called after each select passing the selected option and id', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: null,
            options: ['1', '2', '3'],
            id: 'id'
          }
        })

        wrapper.vm.select(wrapper.vm.options[0])
        expect(wrapper.emitted().select).toEqual([['1', 'id']])
      })
    })

    describe('@remove', () => {
      test('should be called after removing an option, passing the removed option and id', async () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: ['3'],
            options: ['1', '2', '3'],
            id: 'id'
          }
        })

        wrapper.vm.select(wrapper.vm.options[2])
        expect(wrapper.emitted().remove).toEqual([['3', 'id']])
      })
    })

    describe('@close', () => {
      test('should be called after closing the dropdown with the current value and id', async () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: ['2'],
            options: ['1', '2', '3'],
            id: 'id'
          }
        })

        wrapper.vm.activate()
        await wrapper.vm.$nextTick()
        wrapper.vm.deactivate()
        expect(wrapper.emitted().close).toEqual([['2', 'id']])
      })
    })

    describe('@open', () => {
      test('should be called after opening the dropdown passing the id', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: ['2'],
            options: ['1', '2', '3'],
            id: 'id'
          }
        })

        wrapper.vm.activate()
        expect(wrapper.emitted().open).toEqual([['id']])
      })
    })
  })

  describe('Preselecting values', () => {
    describe('when searchable == TRUE', () => {
      describe('when multiple == TRUE', () => {
        test('should preselect passed array of values', () => {
          const wrapper = shallowMount(Multiselect, {
            props: {
              modelValue: ['1', '2'],
              options: ['1', '2', '3'],
              multiple: true
            }
          })
          expect(wrapper.vm.internalValue).toEqual(['1', '2'])
          expect(
            wrapper
              .findAll('.multiselect__tag')[0]
              .text()
          ).toContainEqual('1')
          expect(
            wrapper
              .findAll('.multiselect__tag')[1]
              .text()
          ).toContainEqual('2')
        })

        test('should preselect passed array of objects', () => {
          const wrapper = shallowMount(Multiselect, {
            props: {
              modelValue: [{ id: '3' }, { id: '2' }],
              options: [{ id: '1' }, { id: '2' }, { id: '3' }],
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
          expect(wrapper.vm.internalValue).toEqual([{ id: '3' }, { id: '2' }])
          expect(
            wrapper
              .findAll('.multiselect__tag')[0]
              .text()
          ).toContainEqual('3')
          expect(
            wrapper
              .findAll('.multiselect__tag')[1]
              .text()
          ).toContainEqual('2')
        })

        test('should set value to [] when passing null as selected', () => {
          const wrapper = shallowMount(Multiselect, {
            props: {
              modelValue: null,
              options: [{ id: '1' }, { id: '2' }, { id: '3' }],
              label: 'id',
              trackBy: 'id',
              multiple: true
            }
          })
          expect(wrapper.vm.internalValue).toEqual([])
          expect(wrapper.findAll('.multiselect__tag').length).toEqual(0)
        })
      })

      describe('when multiple == FALSE', () => {
        test('should preselect passed simple value', () => {
          const wrapper = shallowMount(Multiselect, {
            props: {
              modelValue: '1',
              options: ['1', '2', '3']
            }
          })
          expect(wrapper.vm.internalValue).toEqual(['1'])
          expect(wrapper.find('.multiselect__single').text()).toContainEqual(
            '1'
          )
        })

        test('should preselect passed object', () => {
          const wrapper = shallowMount(Multiselect, {
            props: {
              modelValue: { id: '2' },
              options: [{ id: '1' }, { id: '2' }, { id: '3' }],
              label: 'id',
              trackBy: 'id'
            }
          })
          expect(wrapper.vm.internalValue).toEqual([{ id: '2' }])
          expect(wrapper.find('.multiselect__single').text()).toContainEqual(
            '2'
          )
        })
      })
    })
    describe('when searchable == FALSE', () => {
      test('should preselect passed simple value', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: '1',
            options: ['1', '2', '3'],
            searchable: false
          }
        })
        expect(wrapper.vm.internalValue).toEqual(['1'])
        expect(wrapper.find('.multiselect__single').text()).toContainEqual('1')
      })

      test('should preselect passed object', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: { id: '2' },
            options: [{ id: '1' }, { id: '2' }, { id: '3' }],
            label: 'id',
            trackBy: 'id',
            searchable: false
          }
        })
        expect(wrapper.vm.internalValue).toEqual([{ id: '2' }])
        expect(wrapper.find('.multiselect__single').text()).toContainEqual('2')
      })
    })
  })

  describe('#select()', () => {
    test('should do nothing when DISABLED == true', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: ['1', '2', '3'],
          multiple: true,
          disabled: true
        }
      })
      wrapper.vm.select(wrapper.vm.options[0])
      expect(wrapper.emitted()['update:modelValue']).toEqual(undefined)
    })

    test('should do nothing when selecting a group label', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: 0, $isLabel: true }, '2', '3'],
          multiple: true,
          disabled: true
        }
      })
      wrapper.vm.select(wrapper.vm.options[0])
      expect(wrapper.emitted()['update:modelValue']).toBe(undefined)
    })

    test('should reset search input when clearOnSelect == TRUE', async () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: ['1', '2', '3'],
          multiple: true
        }
      })
      await wrapper.vm.$nextTick()
      wrapper.vm.$refs.search.focus()
      await wrapper.vm.$nextTick()
      wrapper.vm.search = 'test'
      await wrapper.vm.$nextTick()
      wrapper.vm.select(wrapper.vm.options[0])
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.search).toBe('')
      await wrapper.vm.$nextTick()
    })

    test('should keep search input when clearOnSelect == FALSE', async () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: ['1', '2', '3'],
          multiple: true,
          clearOnSelect: false,
          closeOnSelect: false
        }
      })
      wrapper.vm.$refs.search.focus()
      await wrapper.vm.$nextTick()
      wrapper.vm.search = 'test'
      wrapper.vm.select(wrapper.vm.options[0])
      expect(wrapper.vm.search).toBe('test')
    })

    describe('when multiple == TRUE', () => {
      test('should add values to selected array', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            multiple: true,
            modelValue: ['1'],
            options: ['1', '2', '3'],
            id: 'id'
          }
        })
        wrapper.vm.select(wrapper.vm.options[1])
        expect(wrapper.emitted()['update:modelValue']).toEqual([[['1', '2']]])
      })

      test('should add objects to selected array', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: [{ id: '1' }],
            options: [{ id: '1' }, { id: '2' }, { id: '3' }],
            label: 'id',
            trackBy: 'id',
            multiple: true,
            id: 'id'
          }
        })
        wrapper.vm.select(wrapper.vm.options[1])
        expect(wrapper.emitted()['update:modelValue']).toEqual([
          [[{ id: '1' }, { id: '2' }]]
        ])
      })

      test('should remove already selected object', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: [{ id: '2' }],
            options: [{ id: '1' }, { id: '2' }, { id: '3' }],
            label: 'id',
            trackBy: 'id',
            multiple: true,
            id: 'id'
          }
        })
        wrapper.vm.select(wrapper.vm.options[1])
        expect(wrapper.emitted()['update:modelValue']).toEqual([[[]]])
      })

      test('should NOT remove already selected object when called with Tab key', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: [{ id: '2' }],
            options: [{ id: '1' }, { id: '2' }, { id: '3' }],
            label: 'id',
            trackBy: 'id',
            multiple: true,
            id: 'id'
          }
        })
        wrapper.vm.select(wrapper.vm.options[1], 'Tab')
        expect(wrapper.emitted()['update:modelValue']).toEqual(undefined)
      })
      describe('and when max == 3', () => {
        test('should prevent from adding more than 3 elements', () => {
          const wrapper = shallowMount(Multiselect, {
            props: {
              modelValue: [{ id: '1' }, { id: '2' }, { id: '3' }],
              options: [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }],
              label: 'id',
              trackBy: 'id',
              multiple: true,
              id: 'id',
              max: 3
            }
          })
          wrapper.vm.select(wrapper.vm.options[3])
          expect(wrapper.emitted()['update:modelValue']).toEqual(undefined)
        })
      })
    })
    describe('when multiple == FALSE', () => {
      test('should not deselect a value when called with Tab key', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: [{ id: '2' }],
            options: [{ id: '1' }, { id: '2' }, { id: '3' }],
            label: 'id',
            trackBy: 'id',
            id: 'id'
          }
        })
        wrapper.vm.select(wrapper.vm.options[1], 'Tab')
        expect(wrapper.emitted()['update:modelValue']).toEqual(undefined)
      })
    })
    describe('when closeOnSelect == FALSE', () => {
      test('should not close the dropdown', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: [{ id: '2' }],
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
  describe('#selectGroup()', () => {
    test('should do nothing when selecting a group label and groupSelect == FALSE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [
            {
              label: 'Label 1',
              values: [{ name: 'Value 1' }, { name: 'Value 2' }]
            },
            {
              label: 'Label 2',
              values: [{ name: 'Value 3' }, { name: 'Value 4' }]
            }
          ],
          multiple: true,
          groupValues: 'values',
          groupLabel: 'label',
          id: 'id'
        }
      })
      wrapper.vm.select(wrapper.vm.filteredOptions[0])
      expect(wrapper.emitted()['update:modelValue']).toEqual(undefined)
    })
    describe('when selecting a group label and groupSelect == TRUE', () => {
      test('should add values to selected array', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: [],
            options: [
              { label: 'Label 1', values: ['Value 1', 'Value 2'] },
              { label: 'Label 2', values: ['Value 3', 'Value 4'] }
            ],
            multiple: true,
            groupValues: 'values',
            groupLabel: 'label',
            groupSelect: true
          }
        })
        wrapper.vm.select(wrapper.vm.filteredOptions[0])
        expect(wrapper.emitted()['update:modelValue']).toEqual([
          [['Value 1', 'Value 2']]
        ])
      })
      test('should add objects to selected array', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: [],
            options: [
              {
                label: 'Label 1',
                values: [{ name: 'Value 1' }, { name: 'Value 2' }]
              },
              {
                label: 'Label 2',
                values: [{ name: 'Value 3' }, { name: 'Value 4' }]
              }
            ],
            multiple: true,
            trackBy: 'name',
            groupValues: 'values',
            groupLabel: 'label',
            groupSelect: true
          }
        })
        wrapper.vm.select(wrapper.vm.filteredOptions[0])
        expect(wrapper.emitted()['update:modelValue']).toEqual([
          [[{ name: 'Value 1' }, { name: 'Value 2' }]]
        ])
      })
      test('should remove already selected objects', () => {
        const options = [
          { name: 'Value 1' },
          { name: 'Value 2' },
          { name: 'Value 3' },
          { name: 'Value 4' }
        ]
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: [options[0], options[1]],
            options: [
              {
                label: 'Label 1',
                values: [options[0], options[1]]
              },
              {
                label: 'Label 2',
                values: [options[2], options[3]]
              }
            ],
            multiple: true,
            trackBy: 'name',
            groupValues: 'values',
            groupLabel: 'label',
            groupSelect: true
          }
        })
        wrapper.vm.select(wrapper.vm.filteredOptions[0])
        expect(wrapper.emitted()['update:modelValue']).toEqual([[[]]])
      })
      test('should not add duplicate values to selected array', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: ['Value 1'],
            options: [
              { label: 'Label 1', values: ['Value 1', 'Value 2'] },
              { label: 'Label 2', values: ['Value 3', 'Value 4'] }
            ],
            multiple: true,
            groupValues: 'values',
            groupLabel: 'label',
            groupSelect: true
          }
        })
        wrapper.vm.select(wrapper.vm.filteredOptions[0])
        expect(wrapper.emitted()['update:modelValue']).toEqual([
          [['Value 1', 'Value 2']]
        ])
      })
    })
    describe('when selecting a group label, groupSelect == TRUE and $isDisabled == TRUE', () => {
      test('should add values to selected array except disabled values', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            modelValue: [],
            options: [
              {
                label: 'Label 1',
                values: [
                  { key: 'Value 1', value: 'Value 1' },
                  { key: 'Value 2', value: 'Value 2', $isDisabled: true }
                ]
              },
              {
                label: 'Label 2',
                values: [
                  { key: 'Value 3', value: 'Value 3' },
                  { key: 'Value 4', value: 'Value 4' }
                ]
              }
            ],
            multiple: true,
            groupValues: 'values',
            groupLabel: 'label',
            groupSelect: true
          }
        })
        wrapper.vm.select(wrapper.vm.filteredOptions[0])
        expect(wrapper.emitted()['update:modelValue']).toEqual([
          [[{ key: 'Value 1', value: 'Value 1' }]]
        ])
      })
    })
  })
  describe('#removeElement()', () => {
    test('should not do anything if disabled == TRUE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [{ id: '1' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          multiple: true,
          label: 'id',
          trackBy: 'id',
          disabled: true
        }
      })
      wrapper.vm.removeElement(wrapper.vm.internalValue[0])
      expect(wrapper.emitted()['update:modelValue']).toEqual(undefined)
    })

    test('should remove passed element', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [{ id: '1' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          multiple: true,
          label: 'id',
          trackBy: 'id'
        }
      })
      wrapper.vm.removeElement(wrapper.vm.modelValue[0])
      expect(wrapper.emitted()['update:modelValue']).toEqual([[[]]])
    })

    test('should NOT remove passed element when allowEmpty == FALSE & 1 element is left', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [{ id: '1' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          multiple: true,
          label: 'id',
          trackBy: 'id',
          allowEmpty: false
        }
      })
      wrapper.vm.removeElement(wrapper.vm.internalValue[0])
      expect(wrapper.emitted()['update:modelValue']).toEqual(undefined)
    })
  })

  describe('#removeLastElement()', () => {
    test('should remove last selected element', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [{ id: '1' }, { id: '2' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.removeLastElement()
      expect(wrapper.emitted()['update:modelValue']).toEqual([[[{ id: '1' }]]])
    })
    test('should not do anything if "Delete" key is blocked', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [{ id: '1' }, { id: '2' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true,
          blockKeys: ['Delete']
        }
      })
      wrapper.vm.removeLastElement()
      expect(wrapper.emitted()['update:modelValue']).toEqual(undefined)
    })
  })

  describe('#addPointerElement()', () => {
    test('should select() currently pointed option', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.pointer = 2
      wrapper.vm.addPointerElement()
      expect(wrapper.emitted()['update:modelValue']).toEqual([[[{ id: '3' }]]])
    })
  })

  describe('#pointerForward()', () => {
    test('should increase the pointer value by 2 if next option is label', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2', $isLabel: true }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.pointer = 0
      wrapper.vm.pointerForward()
      expect(wrapper.vm.pointer).toBe(2)
    })

    test('should increase the pointer value by 1', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.activate()
      wrapper.vm.pointer = 1
      wrapper.vm.pointerForward()
      expect(wrapper.vm.pointer).toBe(2)
    })

    test('should NOT increase the pointer value if pointed at last element', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.activate()
      wrapper.vm.pointer = 2
      wrapper.vm.pointerForward()
      expect(wrapper.vm.pointer).toBe(2)
    })
  })

  describe('#pointerBackward()', () => {
    test('should increase the pointer value by 1 if the first option is a label', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1', $isLabel: true }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id'
        }
      })
      wrapper.vm.pointer = 1
      wrapper.vm.pointerBackward()
      expect(wrapper.vm.pointer).toBe(1)
    })
    test('should decrease the pointer value by 2 if previous option is label', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2', $isLabel: true }, { id: '3' }],
          label: 'id',
          trackBy: 'id'
        }
      })
      wrapper.vm.pointer = 2
      wrapper.vm.pointerBackward()
      expect(wrapper.vm.pointer).toBe(0)
    })
    test('should decrease the pointer value by 1', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id'
        }
      })
      wrapper.vm.activate()
      wrapper.vm.pointer = 1
      wrapper.vm.pointerBackward()
      expect(wrapper.vm.pointer).toBe(0)
    })

    test('should NOT decrease the pointer value if pointed at first element', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.activate()
      wrapper.vm.pointer = 0
      wrapper.vm.pointerBackward()
      expect(wrapper.vm.pointer).toBe(0)
    })
  })

  describe('#pointerReset()', () => {
    test('should reset the pointer value to 0', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.activate()
      wrapper.vm.pointer = 2
      wrapper.vm.pointerReset()
      expect(wrapper.vm.pointer).toBe(0)
    })
    test('should do nothing when closeOnSelect == FALSE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'id',
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          trackBy: 'id',
          multiple: true,
          closeOnSelect: false
        }
      })
      wrapper.vm.activate()
      wrapper.vm.pointer = 2
      wrapper.vm.pointerReset()
      expect(wrapper.vm.pointer).toBe(2)
    })
  })

  describe('#pointerSet(index)', () => {
    test('should set the pointer value to passed index', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.activate()
      wrapper.vm.pointer = 2
      wrapper.vm.pointerSet(1)
      expect(wrapper.vm.pointer).toBe(1)
    })
  })

  describe('#pointerAdjust()', () => {
    test('should adjust the pointer to stay within options', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.pointer = 5
      wrapper.vm.pointerAdjust()
      expect(wrapper.vm.pointer).toBe(2)
    })
    test('should adjust the pointer to the first non-group-label option after changed from empty', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [],
          label: 'id',
          trackBy: 'id',
          multiple: true,
          groupValues: 'group',
          groupLabel: 'groupLabel'
        }
      })

      wrapper.vm.source = [
        { group: [{ id: '1' }, { id: '2' }], groupLabel: 'A' }
      ]
      setTimeout(function () {
        expect(wrapper.vm.pointer).toBe(1)
      }, 0)
    })
  })

  describe('#watch:value', () => {
    // TODO: Fix this test
    // test('resets value, search and selected when resetAfter is TRUE', () => {
    //   const wrapper = shallowMount(Multiselect, {
    //     props: {
    //       options: [{ id: '1' }, { id: '2' }, { id: '3' }],
    //       label: 'id',
    //       trackBy: 'id',
    //       searchable: false,
    //       resetAfter: true
    //     }
    //   })
    //   const comp = wrapper.vm
    //   comp.select(comp.options[2])
    //   expect(wrapper.emitted()['update:modelValue']).toEqual([{'id': '3'}, null])
    //   wrapper.update()
    //   expect(wrapper.emitted()['update:modelValue']).toEqual([{'id': '3'}, null])
    //   expect(comp.search).toEqual('')
    // })
  })

  describe('#watch:search', () => {
    test('should call @search-change event callback whenever search value changes', async () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: null,
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          clearOnSelect: false
        }
      })
      await wrapper.setData({ search: 'test' })

      expect(wrapper.emitted()['search-change']).toEqual([['test']])
    })
  })

  describe('#activate()', () => {
    test('should set isOpen value to true', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.isOpen = false
      wrapper.vm.activate()
      expect(wrapper.vm.isOpen).toBe(true)
    })

    test('should set set the pointer to the first non-group-label option', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'id',
          trackBy: 'id',
          multiple: true,
          groupValues: 'group',
          groupLabel: 'groupLabel',
          modelValue: [],
          options: [
            { group: [{ id: '1' }, { id: '2' }], groupLabel: 'A' },
            { group: [{ id: '3' }, { id: '4' }], groupLabel: 'B' }
          ]
        }
      })
      wrapper.vm.isOpen = false
      wrapper.vm.activate()
      expect(wrapper.vm.pointer).toBe(1)
    })
  })

  describe('#toggle()', () => {
    test('should set isOpen value to FALSE when it is TRUE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'id',
          trackBy: 'id',
          searchable: false,
          modelValue: null,
          options: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      })
      wrapper.vm.isOpen = false
      wrapper.vm.toggle()
      expect(wrapper.vm.isOpen).toBe(true)
      wrapper.vm.toggle()
      expect(wrapper.vm.isOpen).toBe(false)
      wrapper.vm.toggle()
      expect(wrapper.vm.isOpen).toBe(true)
    })
  })

  describe('#deactivate()', () => {
    test('should set isOpen value to false', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.isOpen = true
      wrapper.vm.deactivate()
      expect(wrapper.vm.isOpen).toBe(false)
    })

    test('should reset search value when multiple == TRUE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.activate()
      wrapper.vm.search = '1'
      expect(wrapper.vm.search).toBe('1')
      wrapper.vm.deactivate()
      expect(wrapper.vm.$refs.search.value).toBe('')
    })
  })

  describe('#isExistingOption()', () => {
    test('should return FALSE when there are no options to look into', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          modelValue: null,
          options: []
        }
      })
      expect(wrapper.vm.isExistingOption('test')).toBe(false)
    })

    test('should return TRUE only when query has matching option', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          modelValue: ['2'],
          options: ['1', '2', '3']
        }
      })
      expect(wrapper.vm.isExistingOption('1')).toBe(true)
      expect(wrapper.vm.isExistingOption('4')).toBe(false)
    })
  })

  describe('#isSelected()', () => {
    test('should return TRUE when passed option is selected when multiple == TRUE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          modelValue: ['1'],
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.vm.options[0]
      expect(wrapper.vm.isSelected(option)).toBe(true)
    })

    test('should return FALSE when passed option is selected when multiple == TRUE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          modelValue: ['1'],
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.vm.options[1]
      expect(wrapper.vm.isSelected(option)).toBe(false)
    })

    test('should return TRUE when passed option is selected when multiple == FALSE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: '1',
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.vm.options[0]
      expect(wrapper.vm.isSelected(option)).toBe(true)
    })

    test('should return FALSE when passed option is NOT selected when multiple == FALSE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: '2',
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.vm.options[0]
      expect(wrapper.vm.isSelected(option)).toBe(false)
    })
  })

  describe('#getOptionLabel()', () => {
    test('should return empty string for undefined option', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          options: ['1', '2', '3']
        }
      })
      expect(wrapper.vm.getOptionLabel(undefined)).toBe('')
    })
    test('should return value for passed option when simple value', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          modelValue: [],
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.vm.options[1]
      expect(wrapper.vm.getOptionLabel(option)).toBe('2')
    })

    test('should return option’s label when custom label is set', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      const option = wrapper.vm.options[2]
      expect(wrapper.vm.getOptionLabel(option)).toBe('3')
    })

    test('should return customLabel’s interpolation if set for objects options', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'id',
          trackBy: 'id',
          multiple: true,
          customLabel ({ id }) {
            return `${id}+${id}`
          },
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      })
      const option = wrapper.vm.options[2]
      expect(wrapper.vm.getOptionLabel(option)).toBe('3+3')
    })

    test('should return customLabel’s interpolation if set for primitive options', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          customLabel (option) {
            return `${option}+${option}`
          },
          modelValue: [],
          options: [1, 2, 3]
        }
      })
      const option = wrapper.vm.options[2]
      expect(wrapper.vm.getOptionLabel(option)).toBe('3+3')
    })
  })

  describe('#getOptionTrackBy()', () => {
    test('should return the passed primitive option when no trackBy is set', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          modelValue: [],
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.vm.options[1]
      expect(wrapper.vm.getOptionTrackBy(option)).toBe('2')
    })

    test('should return the passed object option when no trackBy is set', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          modelValue: [],
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.vm.options[1]
      expect(wrapper.vm.getOptionTrackBy(option)).toBe(option)
    })

    test('should return option[trackBy] when specified', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      const option = wrapper.vm.options[1]
      expect(wrapper.vm.getOptionTrackBy(option)).toBe('2')
    })

    test('should return customTrackBy’s interpolation if set for objects options', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'id',
          trackBy: 'id',
          multiple: true,
          customTrackBy (option, trackBy) {
            return `${trackBy}=${option.id}`
          },
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      })
      const option = wrapper.vm.options[2]
      expect(wrapper.vm.getOptionTrackBy(option)).toBe('id=3')
    })

    test('should return customTrackBy’s interpolation if set for primitive options', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          customTrackBy (option) {
            return `${option}+${option}`
          },
          modelValue: [],
          options: [1, 2, 3]
        }
      })
      const option = wrapper.vm.options[2]
      expect(wrapper.vm.getOptionTrackBy(option)).toBe('3+3')
    })
  })

  describe('valueKeys', () => {
    test('should return primitive value Array when no :key is provided', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          modelValue: [1, 2],
          options: [1, 2, 3]
        }
      })
      expect(wrapper.vm.valueKeys).toEqual([1, 2])
    })

    test('should return an Array maped from option[key] values when multiple is TRUE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [{ id: '1' }, { id: '2' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          searchable: true,
          multiple: true
        }
      })
      expect(wrapper.vm.valueKeys).toEqual(['1', '2'])
    })

    test('should return option[key] value when multiple is FALSE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'id',
          trackBy: 'id',
          searchable: true,
          multiple: false,
          modelValue: { id: '2' },
          options: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      })
      const comp = wrapper.vm
      expect(comp.valueKeys).toEqual(['2'])
    })

    test('should return an Array mapped from customTrackBy when multiple is TRUE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [{ id: '1' }, { id: '2' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          customTrackBy: (option) => '~' + option.id,
          searchable: true,
          multiple: true
        }
      })
      expect(wrapper.vm.valueKeys).toEqual(['~1', '~2'])
    })

    test('should return customTrackBy(option) value when multiple is FALSE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'id',
          customTrackBy: (option) => '~' + option.id,
          searchable: true,
          multiple: false,
          modelValue: { id: '2' },
          options: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      })
      const comp = wrapper.vm
      expect(comp.valueKeys).toEqual(['~2'])
    })
  })

  describe('optionKeys', () => {
    test('should return primitive value Array when no :label is provided', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          searchable: true,
          modelValue: [1, 2],
          options: [1, 2, 3]
        }
      })
      expect(wrapper.vm.optionKeys).toEqual(['1', '2', '3'])
    })

    test('should return an Array maped from option[label] values', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'id',
          trackBy: 'id',
          searchable: true,
          multiple: true,
          modelValue: [{ id: '1' }, { id: '2' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      })
      expect(wrapper.vm.optionKeys).toEqual(['1', '2', '3'])
    })

    test('should return an flat Array maped from option[label] of group values', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'label',
          trackBy: 'id',
          groupValues: 'values',
          groupLabel: 'groupLabel',
          searchable: true,
          multiple: true,
          options: [
            {
              groupLabel: 'group1',
              values: [{ label: 'aa', id: '1' }]
            },
            {
              groupLabel: 'group2',
              values: [{ label: 'bb1', id: '2' }, { label: 'bb2', id: '3' }]
            }
          ]
        }
      })
      expect(wrapper.vm.optionKeys).toEqual(['aa', 'bb1', 'bb2'])
    })

    test('when an option group is empty, return null to prevent formatting a non existent item.', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'label',
          trackBy: 'id',
          groupValues: 'values',
          groupLabel: 'groupLabel',
          searchable: true,
          multiple: true,
          options: [
            {
              groupLabel: 'group1',
              values: [{ label: 'aa', id: '1' }]
            },
            {
              groupLabel: 'group2',
              values: [{ label: 'bb1', id: '2' }, { label: 'bb2', id: '3' }]
            },
            {
              groupLabel: 'group3',
              values: []
            },
            {
              groupLabel: 'group4',
              values: [{ label: 'cc', id: '4' }]
            }
          ]
        }
      })
      expect(wrapper.vm.optionKeys).toEqual(['aa', 'bb1', 'bb2', 'cc'])
    })
  })

  describe('filteredOptions', () => {
    describe('when groupValues is passed', () => {
      test('should return a flat options list', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            groupValues: 'values',
            groupLabel: 'groupLabel',
            searchable: true,
            modelValue: [],
            options: [
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
        })
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
        const comp = wrapper.vm
        expect(comp.filteredOptions).toEqual(flatList)
      })
      test('should return a flat options list when options are objects', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            groupValues: 'values',
            groupLabel: 'groupLabel',
            searchable: true,
            trackBy: 'id',
            label: 'label',
            modelValue: [],
            options: [
              {
                groupLabel: 'GroupX',
                values: [{ label: 'aa', id: '1' }]
              },
              {
                groupLabel: 'GroupY',
                values: [{ label: 'bb1', id: '2' }, { label: 'bb2', id: '3' }]
              }
            ]
          }
        })
        const flatList = [
          { $groupLabel: 'GroupX', $isLabel: true },
          { label: 'aa', id: '1' },
          { $groupLabel: 'GroupY', $isLabel: true },
          { label: 'bb1', id: '2' },
          { label: 'bb2', id: '3' }
        ]
        const comp = wrapper.vm
        expect(comp.filteredOptions).toEqual(flatList)
      })
      test('should return a filtered flat options list', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            groupValues: 'values',
            groupLabel: 'groupLabel',
            searchable: true,
            modelValue: [],
            options: [
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
        })
        const flatList = [
          { $groupLabel: 'GroupX', $isLabel: true },
          '1xYY',
          { $groupLabel: 'GroupY', $isLabel: true },
          '2yY'
        ]
        const comp = wrapper.vm
        comp.search = 'Yy'
        expect(comp.filteredOptions).toEqual(flatList)
      })
      test('should remove groups without matching results', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            groupValues: 'values',
            groupLabel: 'groupLabel',
            searchable: true,
            modelValue: [],
            options: [
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
        })
        const flatList = [
          { $groupLabel: 'GroupY', $isLabel: true },
          '2',
          '2x',
          '2y'
        ]
        const comp = wrapper.vm
        comp.search = '2'
        expect(comp.filteredOptions).toEqual(flatList)
      })
      test('should filter options objects matching query', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            groupValues: 'values',
            groupLabel: 'groupLabel',
            searchable: true,
            trackBy: 'value',
            label: 'label',
            modelValue: [],
            options: [
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
        })
        const flatList = [
          { $groupLabel: 'GroupX', $isLabel: true },
          { value: 2, label: 'Two' },
          { $groupLabel: 'GroupY', $isLabel: true },
          { value: 4, label: 'OneTwo' },
          { value: 5, label: 'TwoThree' }
        ]
        const comp = wrapper.vm
        comp.search = 'two'
        expect(comp.filteredOptions).toEqual(flatList)
      })
    })
    test('should return matched options according to search value', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'id',
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          trackBy: 'id',
          searchable: true,
          multiple: true
        }
      })
      const comp = wrapper.vm
      expect(comp.filteredOptions).toEqual([
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ])
      comp.search = '2'
      expect(comp.filteredOptions).toEqual([{ id: '2' }])
    })

    test('should return matched options according to search value', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'id',
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          trackBy: 'id',
          searchable: true,
          multiple: true
        }
      })
      const comp = wrapper.vm
      expect(comp.filteredOptions).toEqual([
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ])
      comp.search = '2'
      expect(comp.filteredOptions).toEqual([{ id: '2' }])
    })

    test('should return no options when there are no matches with search value', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'id',
          modelValue: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          trackBy: 'id',
          searchable: true,
          multiple: true
        }
      })
      const comp = wrapper.vm
      expect(comp.filteredOptions).toEqual([
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ])
      comp.search = '4'
      expect(comp.filteredOptions).toEqual([])
    })

    test('should hide already selected elements when :hide-selected is set to true', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'id',
          trackBy: 'id',
          modelValue: [{ id: '2' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          searchable: true,
          hideSelected: true,
          multiple: true
        }
      })
      expect(wrapper.vm.filteredOptions).toEqual([{ id: '1' }, { id: '3' }])
    })

    test('should add additional option at the begining when search is filled and :taggable is TRUE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          searchable: true,
          multiple: true,
          taggable: true,
          modelValue: [],
          options: [10, 20, 30]
        }
      })
      expect(wrapper.vm.filteredOptions).toEqual([10, 20, 30])
      expect(wrapper.vm.filteredOptions.length).toBe(3)
      wrapper.vm.search = 'test'
      expect(wrapper.vm.filteredOptions).toEqual([
        { isTag: true, label: 'test' }
      ])
      expect(wrapper.vm.filteredOptions.length).toBe(1)
      wrapper.vm.search = '1'
      expect(wrapper.vm.filteredOptions).toEqual([
        { isTag: true, label: '1' },
        10
      ])
      expect(wrapper.vm.filteredOptions.length).toBe(2)
    })

    test('should not alter the available options when :internal-search is FALSE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          internalSearch: false,
          modelValue: [],
          options: [10, 20, 30]
        }
      })
      const comp = wrapper.vm
      expect(comp.filteredOptions).toEqual([10, 20, 30])
      expect(comp.filteredOptions.length).toBe(3)
      comp.search = 'test'
      expect(comp.filteredOptions).toEqual([10, 20, 30])
      expect(comp.filteredOptions.length).toBe(3)
    })

    test('should return only as many options as set in the :options-limit prop.', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          multiple: true,
          optionsLimit: 2,
          modelValue: [],
          options: ['test', 'production', 'testing']
        }
      })
      expect(wrapper.vm.filteredOptions).toEqual(['test', 'production'])
      expect(wrapper.vm.filteredOptions.length).toBe(2)
      wrapper.vm.search = 'test'
      expect(wrapper.vm.filteredOptions).toEqual(['test', 'testing'])
      expect(wrapper.vm.filteredOptions.length).toBe(2)
    })

    test('should return all the passed options including falsy options', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: ['start', undefined, 0, false, null, 'end']
        }
      })
      expect(wrapper.vm.filteredOptions).toEqual([
        'start',
        undefined,
        0,
        false,
        null,
        'end'
      ])
      expect(wrapper.vm.filteredOptions.length).toBe(6)
    })
  })

  describe('currentOptionLabel', () => {
    test('should return the current option label', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          searchable: false,
          multiple: false,
          modelValue: 0,
          options: [0, '1', '2', '3', '4', '5']
        }
      })
      expect(wrapper.vm.currentOptionLabel).toBe(0)
    })
    test('should display selected value even when is the number zero', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: 0,
          options: [0, 1, 2, 3, 4, 5]
        }
      })

      expect(wrapper.vm.isSingleLabelVisible).toBe(true)
      expect(wrapper.find('.multiselect__single').text()).toContainEqual(
        '0'
      )
    })
    describe('when MULTIPLE is FALSE', () => {
      test('should return the current option label', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            searchable: false,
            multiple: false,
            modelValue: '3',
            options: ['1', '2', '3', '4', '5']
          }
        })
        expect(wrapper.vm.currentOptionLabel).toBe('3')
      })
    })
    describe('when MULTIPLE is TRUE', () => {
      test('should return the placeholder value', () => {
        const wrapper = shallowMount(Multiselect, {
          props: {
            searchable: false,
            multiple: true,
            placeholder: 'Select',
            modelValue: ['1'],
            options: ['1', '2', '3', '4', '5']
          }
        })
        expect(wrapper.vm.currentOptionLabel).toBe('Select')
      })
    })
  })

  describe('#onTag', () => {
    test('should should push to value and options with default settings and :taggable is TRUE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          searchable: true,
          multiple: true,
          taggable: true,
          modelValue: ['1'],
          options: ['1', '2', '3']
        }
      })
      wrapper.vm.search = 'TEST'
      wrapper.vm.select(wrapper.vm.filteredOptions[0])
      expect(wrapper.emitted().tag).toEqual([['TEST', null]])
    })
  })

  describe('#onTagPosition', () => {
    test("should display new tag above search results by default when tag-position is defaulted to 'top'", () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'name',
          trackBy: 'name',
          searchable: true,
          taggable: true,
          modelValue: [],
          options: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }]
        }
      })
      const comp = wrapper.vm

      expect(comp.filteredOptions).toEqual([
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Orange' }
      ])
      comp.search = 'Ban'
      expect(comp.filteredOptions).toEqual([
        { isTag: true, label: 'Ban' },
        { name: 'Banana' }
      ])
    })

    test("should display new tag below search results when tag-position is set to 'bottom'", () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          label: 'name',
          trackBy: 'name',
          searchable: true,
          taggable: true,
          tagPosition: 'bottom',
          modelValue: [],
          options: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }]
        }
      })
      const comp = wrapper.vm
      expect(comp.filteredOptions).toEqual([
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Orange' }
      ])
      comp.search = 'Ban'
      expect(comp.filteredOptions).toEqual([
        { name: 'Banana' },
        { isTag: true, label: 'Ban' }
      ])
    })
  })

  describe('#limitText', () => {
    test('should by default interpolate the limit text', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          searchable: true,
          multiple: true,
          limit: 2,
          modelValue: ['1', '2', '3'],
          options: ['1', '2', '3', '4', '5']
        }
      })
      wrapper.vm.limitText(20)
      expect(wrapper.vm.limitText(20)).toBe('and 20 more')
    })
  })

  describe('visibleValues', () => {
    test('should by default interpolate the limit text', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          searchable: true,
          multiple: true,
          limit: 1,
          modelValue: ['1', '2', '3'],
          options: ['1', '2', '3', '4', '5']
        }
      })
      expect(wrapper.vm.internalValue.length).toBe(3)
      expect(wrapper.vm.visibleValues.length).toBe(1)
    })
  })

  describe('@ready:showLabels', () => {
    beforeEach(() => {
      document.body.insertAdjacentHTML('afterbegin', '<app></app>')
    })
    test('should hide all labels if :show-labels is FALSE', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          searchable: true,
          multiple: true,
          limit: 1,
          showLabels: false,
          modelValue: ['1', '2', '3'],
          options: ['1', '2', '3', '4', '5']
        }
      })
      expect(wrapper.vm.selectLabelText).toBe('')
      expect(wrapper.vm.deselectLabelText).toBe('')
      expect(wrapper.vm.selectedLabelText).toBe('')
    })
  })
  describe('#updateSearch', () => {
    test('should update the search value', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          searchable: true,
          modelValue: ['1', '2', '3'],
          options: ['1', '2', '3', '4', '5']
        }
      })
      expect(wrapper.vm.search).toBe('')
      wrapper.vm.updateSearch('test')
      expect(wrapper.vm.search).toBe('test')
    })
  })
  describe('preselectFirst', () => {
    test('should update the search value', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          searchable: true,
          modelValue: [],
          options: ['1', '2', '3', '4', '5'],
          preselectFirst: true
        }
      })
      expect(wrapper.emitted()['update:modelValue']).toEqual([['1']])
    })
  })
  describe('required prop', () => {
    test('should not have required value if required is false', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: ['1', '2', '3', '4', '5'],
          required: false
        }
      })
      expect(wrapper.get('.multiselect__input').attributes('required')).toBeUndefined()
    })
    test('should have required attribute if there is no value', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: ['1', '2', '3', '4', '5'],
          required: true
        }
      })
      expect(wrapper.get('.multiselect__input').attributes('required')).toEqual('')
    })
    test('should not required attribute if there is a value', () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: ['1'],
          options: ['1', '2', '3', '4', '5'],
          required: true
        }
      })
      expect(wrapper.get('.multiselect__input').attributes('required')).toBeUndefined()
    })
    test('should required if a value is removed', async () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: ['1'],
          options: ['1', '2', '3', '4', '5'],
          required: true,
          'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
        }
      })
      expect(wrapper.get('.multiselect__input').attributes('required')).toBeUndefined()
      wrapper.vm.removeElement(wrapper.vm.internalValue[0])
      await wrapper.vm.$nextTick()
      expect(wrapper.get('.multiselect__input').attributes('required')).toBe('')
    })
    test('should not required value if a value is set', async () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options: ['1', '2', '3', '4', '5'],
          required: true,
          'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
        }
      })
      expect(wrapper.get('.multiselect__input').attributes('required')).toBe('')
      wrapper.vm.select(wrapper.vm.options[0])
      await wrapper.vm.$nextTick()
      expect(wrapper.get('.multiselect__input').attributes('required')).toBeUndefined()
    })
  })
  describe('filteringSortFunc prop', () => {
    const options = [
      { name: 'Vue.js', language: 'JavaScript' },
      { name: 'Laravel', language: 'PHP' },
      { name: 'Rails', language: 'Ruby' },
      { name: 'Sinatra', language: 'Ruby' },
      { name: 'Phoenix', language: 'Elixir' }
    ]

    const customLabel = ({ name, language }) => {
      return `${name} — [${language}]`
    }

    test('should use default sorting when no function is provided', async () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options,
          customLabel,
          label: 'name',
          trackBy: 'name'
        },
        data () {
          return {
            search: 'a'
          }
        }
      })

      expect(wrapper.vm.filteredOptions[0].name).toBe('Rails')
      expect(wrapper.vm.filteredOptions[3].name).toBe('Vue.js')
    })
    test('should use custom sorting when function is provided', async () => {
      const wrapper = shallowMount(Multiselect, {
        props: {
          modelValue: [],
          options,
          customLabel,
          label: 'name',
          trackBy: 'name',
          filteringSortFunc: (a, b) => {
            return a.name.length - b.name.length
          }
        },
        data () {
          return {
            search: 'a'
          }
        }
      })
      expect(wrapper.vm.filteredOptions[0].name).toBe('Rails')
      expect(wrapper.vm.filteredOptions[1].name).toBe('Vue.js')
      expect(wrapper.vm.filteredOptions[2].name).toBe('Laravel')
    })
  })
})
