<!-- src/views/ProductList.vue -->
<template>
  <v-container>
    <v-row class="mb-4" style="text-align: center">
      <v-col cols="12" md="6">
        <v-text-field v-model="search" label="Search products" clearable />
        <v-btn class="mt-2" text color="primary" @click="search = ''">
          Reset Search
        </v-btn>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          v-model="categoryFilter"
          :items="categories"
          label="Filter by Category"
          clearable
        />
        <v-btn class="mt-2" text color="primary" @click="categoryFilter = null">
          Reset Category Filter
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="product in filteredProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="3"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ProductList from "@/views/ProductList.vue";
import { ref, computed } from "vue";
import { useProductStore } from "@/stores/productStore";
import ProductCard from "@/components/ProductCard.vue";

const store = useProductStore();
const search = ref("");
const categoryFilter = ref<string | null>(null);

const categories = computed(() => [...new Set(store.products.map((p) => p.category))]);

const filteredProducts = computed(() => {
  return store.products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.value.toLowerCase());
    const matchesCategory = !categoryFilter.value || p.category === categoryFilter.value;
    return matchesSearch && matchesCategory;
  });
});
</script>
