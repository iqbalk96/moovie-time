<template>
  <section>
    <b-autocomplete
      v-model="name"
      ref="autocomplete"
      :data="filteredDataArray"
      :keep-first="keepFirst"
      :open-on-focus="openOnFocus"
      placeholder="Find movie"
      @select="(option) => (selected = option)"
      @select-header="showAddFruit"
      :selectable-header="selectable"
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
    showAddFruit() {
      this.$buefy.dialog.prompt({
        message: `Fruit`,
        inputAttrs: {
          placeholder: "e.g. Watermelon",
          maxlength: 20,
          value: this.name,
        },
        confirmText: "Add",
        onConfirm: (value) => {
          this.data.push(value);
          this.$refs.autocomplete.setSelected(value);
        },
      });
    },
  },
};
</script>
