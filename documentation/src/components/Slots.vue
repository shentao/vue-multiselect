<template>
  <h2 class="typo__h2" id="sub-slots" data-section="data-section">Slots</h2>
  <div class="grid__row">
    <div class="table__container">
      <table class="table table--full-size table--fixed">
        <thead>
        <tr class="table__tr">
          <th class="table__th" width="200">Name</th>
          <th class="table__th">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr class="table__tr">
          <td class="table__td"><strong>option</strong></td>
          <td class="table__td">Slot for custom option template. See <a class="typo__link"
                                                                        href="#sub-custom-option-template">example.</a><br/><strong>
            Default: Shows option label</strong><br/>Slot-scope
            <ul>
              <li><code>option</code> – option</li>
              <li><code>search</code> – current search value</li>
            </ul>
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>maxElements</strong></td>
          <td class="table__td">Shows when the maximum options have been selected. Defaults to string:<br/><strong>
            Default: Maximum of &lt;max&gt; options selected. First remove a selected option to select another.</strong>
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>noResult</strong></td>
          <td class="table__td">Shows when no elements match the search query. Defaults to string:<br/><strong> Default:
            No elements found. Consider changing the search query.</strong></td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>noOptions</strong></td>
          <td class="table__td">Shows when no elements in options empty. Defaults to string:<br/><strong> Default: List
            is empty.</strong></td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>beforeList</strong></td>
          <td class="table__td">Shows before the list, when dropdown is open.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>afterList</strong></td>
          <td class="table__td">Shows after the list, when dropdown is open.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>caret</strong></td>
          <td class="table__td">Element for opening and closing the dropdown.<br/>Slot-scope
            <ul>
              <li><code>toggle: Function</code> – toggles the dropdown.</li>
            </ul>
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>singleLabel</strong></td>
          <td class="table__td">Slot for custom label template for single select</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>placeholder</strong></td>
          <td class="table__td">Slot for the placeholder (is not displayed when the dropdown is open and `searchable` is
            true)
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>limit</strong></td>
          <td class="table__td">Slot to display when the number of selected options is greater than `optionsLimit`.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>clear</strong></td>
          <td class="table__td">Slot located before the tags<br/>Slot-scope
            <ul>
              <li><code>search</code> – the search value</li>
            </ul>
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>tag</strong></td>
          <td class="table__td">Slot that is used for each selected option (tags)<br/>Slot-scope
            <ul>
              <li><code>option</code> – selected option</li>
              <li><code>search</code> – the search value</li>
              <li><code>remove</code> – method to remove the slot (pass the option)</li>
            </ul>
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>selection</strong></td>
          <td class="table__td">Slot that can be used to show all selected tags. The main different between the<code>selection</code>slot
            and the<code>tag</code>slot is that the<code>tag</code>slot renders per tag, however this slot renders just
            once, leaving the display of each
            tag to you (if you wish to display each one)<br/>Slot-scope
            <ul>
              <li><code>search</code> – the search value</li>
              <li><code>removeElement</code> – method to remove the slot (pass the option)</li>
              <li><code>values</code> – Array of selected values</li>
              <li><code>is-open</code> – Boolean if the select is open</li>
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slots'
}
</script>
