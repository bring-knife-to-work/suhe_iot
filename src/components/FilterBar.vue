<template>
  <div class="filter-bar flex flex-wrap justify-center gap-4 mb-12">
    <button
      v-for="item in items"
      :key="item"
      :class="[
        'filter-btn px-6 py-2 rounded-md font-medium transition-all',
        value === item ? 'filter-active' : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
      ]"
      @click="$emit('input', item)"
    >
      {{ labelMap[item] || item }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  props: {
    items: { type: Array, required: true },
    value: { type: String, required: true },
    labelMap: { type: Object, default: () => ({}) },
  },
};
</script>
