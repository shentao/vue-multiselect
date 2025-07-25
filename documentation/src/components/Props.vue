<template>
  <h2 class="typo__h2" id="sub-props" data-section="data-section">Props</h2>
  <div class="grid__row">
    <div class="table__container">
      <table class="table table--full-size table--fixed">
        <thead>
        <tr class="table__tr">
          <th class="table__th" width="100">Name</th>
          <th class="table__th" width="80">Type</th>
          <th class="table__th" width="180">Default</th>
          <th class="table__th" width="200">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr class="table__tr">
          <td class="table__td utils--center" colspan="4"><strong>multiselectMixin.js</strong></td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>id</strong></td>
          <td class="table__td">Integer||String</td>
          <td class="table__td"></td>
          <td class="table__td">Used to identify the component in events.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>options</strong></td>
          <td class="table__td">Array</td>
          <td class="table__td"></td>
          <td class="table__td">
            Array of available options: Objects, Strings or Integers.
            If array of objects, visible label will default to option.label.
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>modelValue</strong></td>
          <td class="table__td">Object||Array||String||Integer</td>
          <td class="table__td"></td>
          <td class="table__td">Presets the selected options.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>multiple</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>false</kbd></td>
          <td class="table__td">Equivalent to the <kbd>multiple</kbd> attribute on a &lt;select&gt; input.
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>trackBy</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"></td>
          <td class="table__td">Used to compare objects.<strong> Only use if options are objects.</strong></td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>label</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"></td>
          <td class="table__td">Label from option Object, that will be visible in the dropdown.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>searchable</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>true</kbd></td>
          <td class="table__td">Add / removes search input.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>clearOnSelect</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>true</kbd></td>
          <td class="table__td">Clear the search input after <kbd>select()</kbd>. Use only when multiple is true.
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>hideSelected</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>false</kbd></td>
          <td class="table__td">Hide already selected options</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>placeholder</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"><kbd>'Select option'</kbd></td>
          <td class="table__td">Equivalent to the <kbd>placeholder</kbd> attribute on a &lt;select&gt; input.
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>allowEmpty</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>true</kbd></td>
          <td class="table__td">Allows to remove all selected values. Otherwise one must be left selected.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>resetAfter</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>false</kbd></td>
          <td class="table__td">Reset <kbd>this.modelValue</kbd>, <kbd>this.search</kbd>, <kbd>this.selected</kbd> after
            <kbd>this.modelValue</kbd> changes.
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>closeOnSelect</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>true</kbd></td>
          <td class="table__td">Enable/disable closing after selecting an option</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>customLabel</strong></td>
          <td class="table__td">Function => String</td>
          <td class="table__td"></td>
          <td class="table__td">Function used to create a custom label</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>taggable</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>false</kbd></td>
          <td class="table__td">Disable / Enable tagging</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>tagPlaceholder</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"><kbd>'Press enter to create a tag'</kbd></td>
          <td class="table__td">String to show when highlighting a potential tag</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>tagPosition</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"><kbd>'top'</kbd></td>
          <td class="table__td">By default new tags will appear above the search results. Changing to
            <kbd>'bottom'</kbd> will revert this behaviour and will proritize the search results
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>max</strong></td>
          <td class="table__td">Number</td>
          <td class="table__td"></td>
          <td class="table__td">Number of allowed selected options.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>optionsLimit</strong></td>
          <td class="table__td">Number</td>
          <td class="table__td">1000</td>
          <td class="table__td">Limits the options displayed in the dropdown to the first X options.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>groupValues</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"></td>
          <td class="table__td">Name of the property containing the group values</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>groupLabel</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"></td>
          <td class="table__td">Name of the property containing the group label</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>groupSelect</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td">false</td>
          <td class="table__td">Allow to select all group values by selecting the group label</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>blockKeys</strong></td>
          <td class="table__td">Array</td>
          <td class="table__td">[]</td>
          <td class="table__td">Array of keyboard key aliases to block when selecting</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>internalSearch</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td">true</td>
          <td class="table__td">
            Decide whether to filter the results internally based on search query.
            Useful for async filtering, where we search through more complex data.
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>preserveSearch</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td">false</td>
          <td class="table__td">If set to true, will preserve the search query when opening/closing the component.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>preselectFirst</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td">false</td>
          <td class="table__td">Selects the first option if initial value is empty</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>preventAutofocus</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td">false</td>
          <td class="table__td">Disabled the search input focusing when the multiselect opens</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>filteringSortFunc</strong></td>
          <td class="table__td">Function => Int</td>
          <td class="table__td"></td>
          <td class="table__td">Allows a custom sorting function when the user searching.
            This function will be the <i>compareFn</i> argument for
            <i><a target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">
              Array.sort()
            </a></i>
            function, so will require two arguments. <br/><b>Added in v3.2.0</b></td>
        </tr>
        <tr class="table__tr">
          <td class="table__td utils--center" colspan="4"><strong>Multiselect.vue</strong></td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>name</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"><kbd>''</kbd></td>
          <td class="table__td">Name attribute to match optional label element</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>selectLabel</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"><kbd>'Press enter to select'</kbd></td>
          <td class="table__td">String to show when pointing to an option</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>selectGroupLabel</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"><kbd>'Press enter to select group'</kbd></td>
          <td class="table__td">String to show when pointing to an option</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>selectedLabel</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"><kbd>'Selected'</kbd></td>
          <td class="table__td">String to show next to selected option</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>deselectLabel</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"><kbd>'Press enter to remove'</kbd></td>
          <td class="table__td">String to show when pointing to an already selected option</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>deselectGroupLabel</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"><kbd>'Press enter to deselect group'</kbd></td>
          <td class="table__td">String to show when pointing to an already selected group</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>showLabels</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>true</kbd></td>
          <td class="table__td">Decide whether to show labels on highlighted options</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>limit</strong></td>
          <td class="table__td">Number</td>
          <td class="table__td"><kbd>99999</kbd></td>
          <td class="table__td">Limit the display of selected options. The rest will be hidden within the limitText
            string.
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>limitText</strong></td>
          <td class="table__td">Function => String</td>
          <td class="table__td"><kbd>count => `and ${count} more`</kbd></td>
          <td class="table__td">Function that process the message shown when selected elements pass the defined limit.
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>loading</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>false</kbd></td>
          <td class="table__td">Show/hide the loading spinner.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>disabled</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>false</kbd></td>
          <td class="table__td">Enable/disable the multiselect.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>maxHeight</strong></td>
          <td class="table__td">Integer</td>
          <td class="table__td"><kbd>300</kbd></td>
          <td class="table__td">Sets max-height style value of the dropdown</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>openDirection</strong></td>
          <td class="table__td">String</td>
          <td class="table__td"><kbd>''</kbd></td>
          <td class="table__td">Fixed opening direction (instead of auto). Options are
            <kbd>"above"</kbd>/<kbd>"top"</kbd> or <kbd>"below"</kbd>/<kbd>"bottom"</kbd></td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>showNoOptions</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>true</kbd></td>
          <td class="table__td">Show the showNoOptions slot if list is empty.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>showNoResults</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>true</kbd></td>
          <td class="table__td">Show the noResult slot if no results are found.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>tabindex</strong></td>
          <td class="table__td">Number</td>
          <td class="table__td"><kbd>0</kbd></td>
          <td class="table__td">Specify the tabindex of the Multiselect component</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>spellcheck</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>false</kbd></td>
          <td class="table__td">Enables search input's browser spellcheck if true.<br /><b>Added in v3.1.0</b></td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>required</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>false</kbd></td>
          <td class="table__td">Passes the Boolean value to the inbuilt <kbd>input</kbd> element.<br /><b>Added in v3.1.0</b></td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>useTeleport</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>false</kbd></td>
          <td class="table__td">Uses Vue Teleport's feature. Teleports the open dropdown to the bottom of the <kbd>body</kbd> element.<br /><b>Added in v3.4.0</b></td>
        </tr>
        <tr class="table__tr">
          <td class="table__td utils--center" colspan="4"><strong>pointerMixin.js</strong></td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>showPointer</strong></td>
          <td class="table__td">Boolean</td>
          <td class="table__td"><kbd>true</kbd></td>
          <td class="table__td">Enable/disable highlighting of the pointed value.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>optionHeight</strong></td>
          <td class="table__td">Number</td>
          <td class="table__td"><kbd>40</kbd></td>
          <td class="table__td">The height of the option element. Required for proper scrolling.</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Props'
}
</script>
