import { mount, flushPromises } from '@vue/test-utils'
import Multiselect from '@/Multiselect.vue'

describe.each([false, true])('Multiselect ARIA references (useTeleport: %s)', useTeleport => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Multiselect, {
      attachTo: document.body,
      props: {
        id: 'vendor',
        options: ['Henrick Abeler', 'Frieling'],
        useTeleport
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
    document.body.innerHTML = ''
  })

  test('omits popup references while closed', () => {
    expect(document.getElementById('listbox-vendor')).toBeNull()
    expect(wrapper.attributes('aria-expanded')).toBe('false')
    expect(wrapper.attributes('aria-owns')).toBeUndefined()
    expect(wrapper.attributes('aria-activedescendant')).toBeUndefined()
    expect(wrapper.get('.multiselect__input').attributes('aria-controls')).toBeUndefined()
    expect(wrapper.get('.multiselect__input').attributes('aria-activedescendant')).toBeUndefined()
  })

  test('updates popup references when navigating, closing and reopening', async () => {
    const search = wrapper.get('.multiselect__input')

    await search.trigger('focus')
    await flushPromises()

    const listbox = document.getElementById('listbox-vendor')
    expect(listbox).not.toBeNull()
    expect(wrapper.attributes('aria-owns')).toBe(listbox.id)
    expect(search.attributes('aria-controls')).toBe(listbox.id)

    await search.trigger('keydown', { key: 'ArrowDown' })
    await flushPromises()

    const option = document.getElementById('vendor-1')
    expect(option.textContent).toBe('Frieling')
    expect(wrapper.attributes('aria-activedescendant')).toBe(option.id)
    expect(search.attributes('aria-activedescendant')).toBe(option.id)

    await search.trigger('keyup', { key: 'Escape' })
    await flushPromises()

    expect(document.getElementById('listbox-vendor')).toBeNull()
    expect(wrapper.attributes('aria-owns')).toBeUndefined()
    expect(wrapper.attributes('aria-activedescendant')).toBeUndefined()
    expect(search.attributes('aria-controls')).toBeUndefined()
    expect(search.attributes('aria-activedescendant')).toBeUndefined()

    await search.trigger('focus')
    await flushPromises()

    expect(document.getElementById(search.attributes('aria-controls'))).not.toBeNull()
    expect(document.getElementById(search.attributes('aria-activedescendant'))).not.toBeNull()
  })

  test('omits the active descendant when there are no options', async () => {
    await wrapper.setProps({ options: [] })
    await wrapper.get('.multiselect__input').trigger('focus')
    await flushPromises()

    expect(document.getElementById('listbox-vendor')).not.toBeNull()
    expect(wrapper.attributes('aria-activedescendant')).toBeUndefined()
    expect(wrapper.get('.multiselect__input').attributes('aria-activedescendant')).toBeUndefined()
  })

  test('supports a selector without a search input', async () => {
    await wrapper.setProps({ searchable: false })
    await wrapper.trigger('focus')
    await flushPromises()

    expect(document.getElementById(wrapper.attributes('aria-owns'))).not.toBeNull()
    expect(document.getElementById(wrapper.attributes('aria-activedescendant'))).not.toBeNull()

    await wrapper.trigger('keyup', { key: 'Escape' })
    await flushPromises()

    expect(wrapper.attributes('aria-owns')).toBeUndefined()
    expect(wrapper.attributes('aria-activedescendant')).toBeUndefined()
  })
})
