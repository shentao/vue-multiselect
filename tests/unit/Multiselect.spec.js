import { mount } from '@vue/test-utils'
import Multiselect from '@/Multiselect'

describe.skip('Multiselect.vue', () => {
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
})
