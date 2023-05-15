<template>
  <section class="pt-2" style="width: 571px">
    <b-autocomplete
      v-model="name"
      ref="autocomplete"
      :data="filteredDataArray"
      :keep-first="keepFirst"
      :open-on-focus="openOnFocus"
      placeholder="Find movie"
      @select="(option) => (selected = option)"
      @select-header="showTerm"
      :selectable-header="selectable"
      class="search-header"
    >
      <template #empty>No results for {{ name }}</template>
    </b-autocomplete>
  </section>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      data: [
        "Wonder Women 1984",
        "Wonder Women",
        "Wonder",
        "Wonder Women: Bloodlines",
        "Wonder Park",
        "Wonder Boys",
        "Space Sweepers",
        "Scooby Doo",
      ],
      name: "",
      selected: null,
      keepFirst: false,
      openOnFocus: false,
      selectable: false,
    };
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
  methods: {
    showTerm() {
      this.$buefy.dialog.prompt({
        message: `Movie`,
        inputAttrs: {
          placeholder: "e.g. Wonder Women",
          maxlength: 20,
          value: this.name,
        },
        onConfirm: (value) => {
          this.data.push(value);
          this.$refs.autocomplete.setSelected(value);
        },
      });
    },
  },
};
</script>

<style>
.taginput .taginput-container.is-focusable, .textarea, .input {
  background: rgba(0, 0, 0, 0.13);
  border-radius: 4px;
}
</style>
