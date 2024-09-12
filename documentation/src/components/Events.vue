<template>
  <h2 class="typo__h2" id="sub-events" data-section="data-section">Events</h2>
  <div class="grid__row">
    <div class="table__container">
      <table class="table table--full-size">
        <thead>
        <tr class="table__tr">
          <th class="table__th" width="150">Name</th>
          <th class="table__th" width="100">Attributes</th>
          <th class="table__th" width="150">Listen to</th>
          <th class="table__th" width="250">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr class="table__tr">
          <td class="table__td"><strong>Update ModelValue</strong></td>
          <td class="table__td"><kbd>(value, id)</kbd></td>
          <td class="table__td"><kbd>@update:modelValue</kbd></td>
          <td class="table__td">Emitted after <kbd>this.modelValue</kbd> changes
          </td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>Select</strong></td>
          <td class="table__td"><kbd>(selectedOption, id)</kbd></td>
          <td class="table__td"><kbd>@select</kbd></td>
          <td class="table__td">Emitted after selecting an option</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>Remove</strong></td>
          <td class="table__td"><kbd>(removedOption, id)</kbd></td>
          <td class="table__td"><kbd>@remove</kbd></td>
          <td class="table__td">Emitted after removing an option</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>SearchChange</strong></td>
          <td class="table__td"><kbd>(searchQuery, id)</kbd></td>
          <td class="table__td"><kbd>@search-change</kbd></td>
          <td class="table__td">Emitted after the search query changes</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>Tag</strong></td>
          <td class="table__td"><kbd>(searchQuery, id)</kbd></td>
          <td class="table__td"><kbd>@tag</kbd></td>
          <td class="table__td">Emitted after user attempts to add a tag</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>Open</strong></td>
          <td class="table__td"><kbd>(id)</kbd></td>
          <td class="table__td"><kbd>@open</kbd></td>
          <td class="table__td">Emitted when the dropdown opens. Useful for detecting when touched.</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td"><strong>Close</strong></td>
          <td class="table__td"><kbd>(value, id)</kbd></td>
          <td class="table__td"><kbd>@close</kbd></td>
          <td class="table__td">Emitted when the dropdown closes</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events'
}
</script>
