import { mount } from '@vue/test-utils'
import Multiselect from '@/Multiselect'

describe.skip('Multiselect.vue', () => {
  describe('#selectGroup()', () => {
    test('should do nothing when selecting a group label and groupSelect == FALSE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
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
      wrapper.vm.$children[0].select(wrapper.vm.$children[0].filteredOptions[0])
      expect(wrapper.emitted().input).toEqual(undefined)
    })
    describe('when selecting a group label and groupSelect == TRUE', () => {
      test('should add values to selected array', () => {
        const wrapper = mount(Multiselect, {
          propsData: {
            value: [],
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
        wrapper.vm.$children[0].select(wrapper.vm.$children[0].filteredOptions[0])
        expect(wrapper.emitted().input).toEqual([
          [['Value 1', 'Value 2'], null]
        ])
      })
      test('should add objects to selected array', () => {
        const wrapper = mount(Multiselect, {
          propsData: {
            value: [],
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
        wrapper.vm.$children[0].select(wrapper.vm.$children[0].filteredOptions[0])
        expect(wrapper.emitted().input).toEqual([
          [[{ name: 'Value 1' }, { name: 'Value 2' }], null]
        ])
      })
      test('should remove already selected objects', () => {
        const options = [
          { name: 'Value 1' },
          { name: 'Value 2' },
          { name: 'Value 3' },
          { name: 'Value 4' }
        ]
        const wrapper = mount(Multiselect, {
          propsData: {
            value: [options[0], options[1]],
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
        wrapper.vm.$children[0].select(wrapper.vm.$children[0].filteredOptions[0])
        expect(wrapper.emitted().input).toEqual([[[], null]])
      })
    })
  })
  describe('#removeElement()', () => {
    test('should not do anything if disabled == TRUE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [{ id: '1' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          multiple: true,
          label: 'id',
          trackBy: 'id',
          disabled: true
        }
      })
      wrapper.vm.$children[0].removeElement(wrapper.vm.$children[0].internalValue[0])
      expect(wrapper.emitted().input).toEqual(undefined)
    })

    test('should remove passed element', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [{ id: '1' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          multiple: true,
          label: 'id',
          trackBy: 'id'
        }
      })
      wrapper.vm.$children[0].removeElement(wrapper.vm.$children[0].value[0])
      expect(wrapper.emitted().input).toEqual([[[], null]])
    })

    test('should NOT remove passed element when allowEmpty == FALSE & 1 element is left', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [{ id: '1' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          multiple: true,
          label: 'id',
          trackBy: 'id',
          allowEmpty: false
        }
      })
      wrapper.vm.$children[0].removeElement(wrapper.vm.$children[0].internalValue[0])
      expect(wrapper.emitted().input).toEqual(undefined)
    })
  })

  describe('#removeLastElement()', () => {
    test('should remove last selected element', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [{ id: '1' }, { id: '2' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.$children[0].removeLastElement()
      expect(wrapper.emitted().input).toEqual([[[{ id: '1' }], null]])
    })
    test('should not do anything if "Delete" key is blocked', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [{ id: '1' }, { id: '2' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true,
          blockKeys: ['Delete']
        }
      })
      wrapper.vm.$children[0].removeLastElement()
      expect(wrapper.emitted().input).toEqual(undefined)
    })
  })

  describe('#addPointerElement()', () => {
    test('should select() currently pointed option', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.$children[0].pointer = 2
      wrapper.vm.$children[0].addPointerElement()
      expect(wrapper.emitted().input).toEqual([[[{ id: '3' }], null]])
    })
  })

  describe('#pointerForward()', () => {
    test('should increase the pointer value by 2 if next option is label', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2', $isLabel: true }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.$children[0].pointer = 0
      wrapper.vm.$children[0].pointerForward()
      expect(wrapper.vm.$children[0].pointer).toBe(2)
    })

    test('should increase the pointer value by 1', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.$children[0].activate()
      wrapper.vm.$children[0].pointer = 1
      wrapper.vm.$children[0].pointerForward()
      expect(wrapper.vm.$children[0].pointer).toBe(2)
    })

    test('should NOT increase the pointer value if pointed at last element', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.$children[0].activate()
      wrapper.vm.$children[0].pointer = 2
      wrapper.vm.$children[0].pointerForward()
      expect(wrapper.vm.$children[0].pointer).toBe(2)
    })
  })

  describe('#pointerBackward()', () => {
    test('should increase the pointer value by 1 if the first option is a label', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1', $isLabel: true }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id'
        }
      })
      wrapper.vm.$children[0].pointer = 1
      wrapper.vm.$children[0].pointerBackward()
      expect(wrapper.vm.$children[0].pointer).toBe(1)
    })
    test('should decrease the pointer value by 2 if previous option is label', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2', $isLabel: true }, { id: '3' }],
          label: 'id',
          trackBy: 'id'
        }
      })
      wrapper.vm.$children[0].pointer = 2
      wrapper.vm.$children[0].pointerBackward()
      expect(wrapper.vm.$children[0].pointer).toBe(0)
    })
    test('should decrease the pointer value by 1', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id'
        }
      })
      wrapper.vm.$children[0].activate()
      wrapper.vm.$children[0].pointer = 1
      wrapper.vm.$children[0].pointerBackward()
      expect(wrapper.vm.$children[0].pointer).toBe(0)
    })

    test('should NOT decrease the pointer value if pointed at first element', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.$children[0].activate()
      wrapper.vm.$children[0].pointer = 0
      wrapper.vm.$children[0].pointerBackward()
      expect(wrapper.vm.$children[0].pointer).toBe(0)
    })
  })

  describe('#pointerReset()', () => {
    test('should reset the pointer value to 0', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.$children[0].activate()
      wrapper.vm.$children[0].pointer = 2
      wrapper.vm.$children[0].pointerReset()
      expect(wrapper.vm.$children[0].pointer).toBe(0)
    })
    test('should do nothing when closeOnSelect == FALSE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          label: 'id',
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          trackBy: 'id',
          multiple: true,
          closeOnSelect: false
        }
      })
      wrapper.vm.$children[0].activate()
      wrapper.vm.$children[0].pointer = 2
      wrapper.vm.$children[0].pointerReset()
      expect(wrapper.vm.$children[0].pointer).toBe(2)
    })
  })

  describe('#pointerSet(index)', () => {
    test('should set the pointer value to passed index', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.$children[0].activate()
      wrapper.vm.$children[0].pointer = 2
      wrapper.vm.$children[0].pointerSet(1)
      expect(wrapper.vm.$children[0].pointer).toBe(1)
    })
  })

  describe('#pointerAdjust()', () => {
    test('should adjust the pointer to stay within options', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.$children[0].pointer = 5
      wrapper.vm.$children[0].pointerAdjust()
      expect(wrapper.vm.$children[0].pointer).toBe(2)
    })
    test('should adjust the pointer to the first non-group-label option after changed from empty', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [],
          label: 'id',
          trackBy: 'id',
          multiple: true,
          groupValues: 'group',
          groupLabel: 'groupLabel'
        }
      })

      wrapper.vm.$children[0].source = [
        { group: [{ id: '1' }, { id: '2' }], groupLabel: 'A' }
      ]
      setTimeout(function () {
        expect(wrapper.vm.$children[0].pointer).toBe(1)
      }, 0)
    })
  })

  describe('#watch:value', () => {
    // TODO: Fix this test
    // test('resets value, search and selected when resetAfter is TRUE', () => {
    //   const wrapper = mount(Multiselect, {
    //     propsData: {
    //       options: [{ id: '1' }, { id: '2' }, { id: '3' }],
    //       label: 'id',
    //       trackBy: 'id',
    //       searchable: false,
    //       resetAfter: true
    //     }
    //   })
    //   const comp = wrapper.vm.$children[0]
    //   comp.select(comp.options[2])
    //   expect(wrapper.emitted().input).toEqual([{'id': '3'}, null])
    //   wrapper.update()
    //   expect(wrapper.emitted().input).toEqual([{'id': '3'}, null])
    //   expect(comp.search).toEqual('')
    // })
  })

  describe('#watch:search', () => {
    test('should call @search-change event callback whenever search value changes', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: null,
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          clearOnSelect: false
        }
      })
      wrapper.setData({ search: 'test' })

      expect(wrapper.emitted()['search-change']).toEqual([['test', null]])
    })
  })

  describe('#activate()', () => {
    test('should set isOpen value to true', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.$children[0].isOpen = false
      wrapper.vm.$children[0].activate()
      expect(wrapper.vm.$children[0].isOpen).toBe(true)
    })

    test('should set set the pointer to the first non-group-label option', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          label: 'id',
          trackBy: 'id',
          multiple: true,
          groupValues: 'group',
          groupLabel: 'groupLabel',
          value: [],
          options: [
            { group: [{ id: '1' }, { id: '2' }], groupLabel: 'A' },
            { group: [{ id: '3' }, { id: '4' }], groupLabel: 'B' }
          ]
        }
      })
      wrapper.vm.$children[0].isOpen = false
      wrapper.vm.$children[0].activate()
      expect(wrapper.vm.$children[0].pointer).toBe(1)
    })
  })

  describe('#toggle()', () => {
    test('should set isOpen value to FALSE when it is TRUE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          label: 'id',
          trackBy: 'id',
          searchable: false,
          value: null,
          options: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      })
      wrapper.vm.$children[0].isOpen = false
      wrapper.vm.$children[0].toggle()
      expect(wrapper.vm.$children[0].isOpen).toBe(true)
      wrapper.vm.$children[0].toggle()
      expect(wrapper.vm.$children[0].isOpen).toBe(false)
      wrapper.vm.$children[0].toggle()
      expect(wrapper.vm.$children[0].isOpen).toBe(true)
    })
  })

  describe('#deactivate()', () => {
    test('should set isOpen value to false', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.$children[0].isOpen = true
      wrapper.vm.$children[0].deactivate()
      expect(wrapper.vm.$children[0].isOpen).toBe(false)
    })

    test('should reset search value when multiple == TRUE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      wrapper.vm.$children[0].activate()
      wrapper.vm.$children[0].search = '1'
      expect(wrapper.vm.$children[0].search).toBe('1')
      wrapper.vm.$children[0].deactivate()
      expect(wrapper.vm.$children[0].$refs.search.value).toBe('')
    })
  })

  describe('#isExistingOption()', () => {
    test('should return FALSE when there are no options to look into', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          multiple: true,
          value: null,
          options: []
        }
      })
      expect(wrapper.vm.$children[0].isExistingOption('test')).toBe(false)
    })

    test('should return TRUE only when query has matching option', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          multiple: true,
          value: ['2'],
          options: ['1', '2', '3']
        }
      })
      expect(wrapper.vm.$children[0].isExistingOption('1')).toBe(true)
      expect(wrapper.vm.$children[0].isExistingOption('4')).toBe(false)
    })
  })

  describe('#isSelected()', () => {
    test('should return TRUE when passed option is selected when multiple == TRUE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          multiple: true,
          value: ['1'],
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.vm.$children[0].options[0]
      expect(wrapper.vm.$children[0].isSelected(option)).toBe(true)
    })

    test('should return FALSE when passed option is selected when multiple == TRUE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          multiple: true,
          value: ['1'],
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.vm.$children[0].options[1]
      expect(wrapper.vm.$children[0].isSelected(option)).toBe(false)
    })

    test('should return TRUE when passed option is selected when multiple == FALSE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: '1',
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.vm.$children[0].options[0]
      expect(wrapper.vm.$children[0].isSelected(option)).toBe(true)
    })

    test('should return FALSE when passed option is NOT selected when multiple == FALSE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: '2',
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.vm.$children[0].options[0]
      expect(wrapper.vm.$children[0].isSelected(option)).toBe(false)
    })
  })

  describe('#getOptionLabel()', () => {
    test('should return empty string for undefined option', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          options: ['1', '2', '3']
        }
      })
      expect(wrapper.vm.$children[0].getOptionLabel(undefined)).toBe('')
    })
    test('should return value for passed option when simple value', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          multiple: true,
          value: [],
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.vm.$children[0].options[1]
      expect(wrapper.vm.$children[0].getOptionLabel(option)).toBe('2')
    })

    test('should return option.label for passed option', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      const option = wrapper.vm.$children[0].options[1]
      expect(wrapper.vm.$children[0].getOptionLabel(option)).toBe('2')
    })

    test('should return option’s label when custom label is set', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          multiple: true
        }
      })
      const option = wrapper.vm.$children[0].options[2]
      expect(wrapper.vm.$children[0].getOptionLabel(option)).toBe('3')
    })

    test('should return customLabel’s interpolation if set for objects options', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          label: 'id',
          trackBy: 'id',
          multiple: true,
          customLabel ({ id }) {
            return `${id}+${id}`
          },
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      })
      const option = wrapper.vm.$children[0].options[2]
      expect(wrapper.vm.$children[0].getOptionLabel(option)).toBe('3+3')
    })

    test('should return customLabel’s interpolation if set for primitive options', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          multiple: true,
          customLabel (option) {
            return `${option}+${option}`
          },
          value: [],
          options: [1, 2, 3]
        }
      })
      const option = wrapper.vm.$children[0].options[2]
      expect(wrapper.vm.$children[0].getOptionLabel(option)).toBe('3+3')
    })
  })

  describe('valueKeys', () => {
    test('should return primitive value Array when no :key is provided', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          multiple: true,
          value: [1, 2],
          options: [1, 2, 3]
        }
      })
      expect(wrapper.vm.$children[0].valueKeys).toEqual([1, 2])
    })

    test('should return an Array maped from option[key] values when multiple is TRUE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [{ id: '1' }, { id: '2' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          label: 'id',
          trackBy: 'id',
          searchable: true,
          multiple: true
        }
      })
      expect(wrapper.vm.$children[0].valueKeys).toEqual(['1', '2'])
    })

    test('should return option[key] value when multiple is FALSE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          label: 'id',
          trackBy: 'id',
          searchable: true,
          multiple: false,
          value: { id: '2' },
          options: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      })
      const comp = wrapper.vm.$children[0]
      expect(comp.valueKeys).toEqual(['2'])
    })
  })

  describe('optionKeys', () => {
    test('should return primitive value Array when no :label is provided', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          multiple: true,
          searchable: true,
          value: [1, 2],
          options: [1, 2, 3]
        }
      })
      expect(wrapper.vm.$children[0].optionKeys).toEqual(['1', '2', '3'])
    })

    test('should return an Array maped from option[label] values', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          label: 'id',
          trackBy: 'id',
          searchable: true,
          multiple: true,
          value: [{ id: '1' }, { id: '2' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }]
        }
      })
      expect(wrapper.vm.$children[0].optionKeys).toEqual(['1', '2', '3'])
    })

    test('should return an flat Array maped from option[label] of group values', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
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
      expect(wrapper.vm.$children[0].optionKeys).toEqual(['aa', 'bb1', 'bb2'])
    })

    test('when an option group is empty, return null to prevent formatting a non existent item.', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
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
      expect(wrapper.vm.$children[0].optionKeys).toEqual(['aa', 'bb1', 'bb2', 'cc'])
    })
  })

  describe('filteredOptions', () => {
    describe('when groupValues is passed', () => {
      test('should return a flat options list', () => {
        const wrapper = mount(Multiselect, {
          propsData: {
            groupValues: 'values',
            groupLabel: 'groupLabel',
            searchable: true,
            value: [],
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
        const comp = wrapper.vm.$children[0]
        expect(comp.filteredOptions).toEqual(flatList)
      })
      test('should return a flat options list when options are objects', () => {
        const wrapper = mount(Multiselect, {
          propsData: {
            groupValues: 'values',
            groupLabel: 'groupLabel',
            searchable: true,
            trackBy: 'id',
            label: 'label',
            value: [],
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
        const comp = wrapper.vm.$children[0]
        expect(comp.filteredOptions).toEqual(flatList)
      })
      test('should return a filtered flat options list', () => {
        const wrapper = mount(Multiselect, {
          propsData: {
            groupValues: 'values',
            groupLabel: 'groupLabel',
            searchable: true,
            value: [],
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
        const comp = wrapper.vm.$children[0]
        comp.search = 'Yy'
        expect(comp.filteredOptions).toEqual(flatList)
      })
      test('should remove groups without matching results', () => {
        const wrapper = mount(Multiselect, {
          propsData: {
            groupValues: 'values',
            groupLabel: 'groupLabel',
            searchable: true,
            value: [],
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
        const comp = wrapper.vm.$children[0]
        comp.search = '2'
        expect(comp.filteredOptions).toEqual(flatList)
      })
      test('should filter options objects matching query', () => {
        const wrapper = mount(Multiselect, {
          propsData: {
            groupValues: 'values',
            groupLabel: 'groupLabel',
            searchable: true,
            trackBy: 'value',
            label: 'label',
            value: [],
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
        const comp = wrapper.vm.$children[0]
        comp.search = 'two'
        expect(comp.filteredOptions).toEqual(flatList)
      })
    })
    test('should return matched options according to search value', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          label: 'id',
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          trackBy: 'id',
          searchable: true,
          multiple: true
        }
      })
      const comp = wrapper.vm.$children[0]
      expect(comp.filteredOptions).toEqual([
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ])
      comp.search = '2'
      expect(comp.filteredOptions).toEqual([{ id: '2' }])
    })

    test('should return matched options according to search value', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          label: 'id',
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          trackBy: 'id',
          searchable: true,
          multiple: true
        }
      })
      const comp = wrapper.vm.$children[0]
      expect(comp.filteredOptions).toEqual([
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ])
      comp.search = '2'
      expect(comp.filteredOptions).toEqual([{ id: '2' }])
    })

    test('should return no options when there are no matches with search value', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          label: 'id',
          value: [],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          trackBy: 'id',
          searchable: true,
          multiple: true
        }
      })
      const comp = wrapper.vm.$children[0]
      expect(comp.filteredOptions).toEqual([
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ])
      comp.search = '4'
      expect(comp.filteredOptions).toEqual([])
    })

    test('should hide already selected elements when :hide-selected is set to true', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          label: 'id',
          trackBy: 'id',
          value: [{ id: '2' }],
          options: [{ id: '1' }, { id: '2' }, { id: '3' }],
          searchable: true,
          hideSelected: true,
          multiple: true
        }
      })
      expect(wrapper.vm.$children[0].filteredOptions).toEqual([{ id: '1' }, { id: '3' }])
    })

    test('should add additional option at the begining when search is filled and :taggable is TRUE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          searchable: true,
          multiple: true,
          taggable: true,
          value: [],
          options: [10, 20, 30]
        }
      })
      expect(wrapper.vm.$children[0].filteredOptions).toEqual([10, 20, 30])
      expect(wrapper.vm.$children[0].filteredOptions.length).toBe(3)
      wrapper.vm.$children[0].search = 'test'
      expect(wrapper.vm.$children[0].filteredOptions).toEqual([
        { isTag: true, label: 'test' }
      ])
      expect(wrapper.vm.$children[0].filteredOptions.length).toBe(1)
      wrapper.vm.$children[0].search = '1'
      expect(wrapper.vm.$children[0].filteredOptions).toEqual([
        { isTag: true, label: '1' },
        10
      ])
      expect(wrapper.vm.$children[0].filteredOptions.length).toBe(2)
    })

    test('should not alter the available options when :internal-search is FALSE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          multiple: true,
          internalSearch: false,
          value: [],
          options: [10, 20, 30]
        }
      })
      const comp = wrapper.vm.$children[0]
      expect(comp.filteredOptions).toEqual([10, 20, 30])
      expect(comp.filteredOptions.length).toBe(3)
      comp.search = 'test'
      expect(comp.filteredOptions).toEqual([10, 20, 30])
      expect(comp.filteredOptions.length).toBe(3)
    })

    test('should return only as many options as set in the :options-limit prop.', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          multiple: true,
          optionsLimit: 2,
          value: [],
          options: ['test', 'production', 'testing']
        }
      })
      expect(wrapper.vm.$children[0].filteredOptions).toEqual(['test', 'production'])
      expect(wrapper.vm.$children[0].filteredOptions.length).toBe(2)
      wrapper.vm.$children[0].search = 'test'
      expect(wrapper.vm.$children[0].filteredOptions).toEqual(['test', 'testing'])
      expect(wrapper.vm.$children[0].filteredOptions.length).toBe(2)
    })

    test('should return all the passed options including falsy options', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          value: [],
          options: ['start', undefined, 0, false, null, 'end']
        }
      })
      expect(wrapper.vm.$children[0].filteredOptions).toEqual([
        'start',
        undefined,
        0,
        false,
        null,
        'end'
      ])
      expect(wrapper.vm.$children[0].filteredOptions.length).toBe(6)
    })
  })

  describe('currentOptionLabel', () => {
    test('should return the current option label', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          searchable: false,
          multiple: false,
          value: 0,
          options: [0, '1', '2', '3', '4', '5']
        }
      })
      expect(wrapper.vm.$children[0].currentOptionLabel).toBe(0)
    })
    describe('when MULTIPLE is FALSE', () => {
      test('should return the current option label', () => {
        const wrapper = mount(Multiselect, {
          propsData: {
            searchable: false,
            multiple: false,
            value: '3',
            options: ['1', '2', '3', '4', '5']
          }
        })
        expect(wrapper.vm.$children[0].currentOptionLabel).toBe('3')
      })
    })
    describe('when MULTIPLE is TRUE', () => {
      test('should return the placeholder value', () => {
        const wrapper = mount(Multiselect, {
          propsData: {
            searchable: false,
            multiple: true,
            placeholder: 'Select',
            value: ['1'],
            options: ['1', '2', '3', '4', '5']
          }
        })
        expect(wrapper.vm.$children[0].currentOptionLabel).toBe('Select')
      })
    })
  })

  describe('@tag', () => {
    test('should should push to value and options with default settings and :taggable is TRUE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          searchable: true,
          multiple: true,
          taggable: true,
          value: ['1'],
          options: ['1', '2', '3']
        }
      })
      wrapper.vm.$children[0].search = 'TEST'
      wrapper.vm.$children[0].select(wrapper.vm.$children[0].filteredOptions[0])
      expect(wrapper.emitted().tag).toEqual([['TEST', null]])
    })
  })

  describe('#onTagPosition', () => {
    test("should display new tag above search results by default when tag-position is defaulted to 'top'", () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          label: 'name',
          trackBy: 'name',
          searchable: true,
          taggable: true,
          value: [],
          options: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }]
        }
      })
      const comp = wrapper.vm.$children[0]

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
      const wrapper = mount(Multiselect, {
        propsData: {
          label: 'name',
          trackBy: 'name',
          searchable: true,
          taggable: true,
          tagPosition: 'bottom',
          value: [],
          options: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }]
        }
      })
      const comp = wrapper.vm.$children[0]
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
      const wrapper = mount(Multiselect, {
        propsData: {
          searchable: true,
          multiple: true,
          limit: 2,
          value: ['1', '2', '3'],
          options: ['1', '2', '3', '4', '5']
        }
      })
      wrapper.vm.$children[0].limitText(20)
      expect(wrapper.vm.$children[0].limitText(20)).toBe('and 20 more')
    })
  })

  describe('visibleValues', () => {
    test('should by default interpolate the limit text', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          searchable: true,
          multiple: true,
          limit: 1,
          value: ['1', '2', '3'],
          options: ['1', '2', '3', '4', '5']
        }
      })
      expect(wrapper.vm.$children[0].internalValue.length).toBe(3)
      expect(wrapper.vm.$children[0].visibleValues.length).toBe(1)
    })
  })

  describe('@ready:showLabels', () => {
    beforeEach(() => {
      document.body.insertAdjacentHTML('afterbegin', '<app></app>')
    })
    test('should hide all labels if :show-labels is FALSE', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          searchable: true,
          multiple: true,
          limit: 1,
          showLabels: false,
          value: ['1', '2', '3'],
          options: ['1', '2', '3', '4', '5']
        }
      })
      expect(wrapper.vm.$children[0].selectLabelText).toBe('')
      expect(wrapper.vm.$children[0].deselectLabelText).toBe('')
      expect(wrapper.vm.$children[0].selectedLabelText).toBe('')
    })
  })
  describe('#updateSearch', () => {
    test('should update the search value', () => {
      const wrapper = mount(Multiselect, {
        propsData: {
          searchable: true,
          value: ['1', '2', '3'],
          options: ['1', '2', '3', '4', '5']
        }
      })
      expect(wrapper.vm.$children[0].search).toBe('')
      wrapper.vm.$children[0].updateSearch('test')
      expect(wrapper.vm.$children[0].search).toBe('test')
    })
  })
})
