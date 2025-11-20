<!-- src/components/ProductCard.vue -->
<template>
  <v-card class="ma-2 mx-auto" max-width="300">
    <v-img :src="product.image" height="180" />
    <v-card-title style="white-space: pre-line; text-align: center">{{
      product.name
    }}</v-card-title>
    <v-card-subtitle style="white-space: pre-line; text-align: center">{{
      product.category
    }}</v-card-subtitle>
    <!-- <v-card-text>{{ product.description }}</v-card-text> -->
    <v-card-actions>
      <v-spacer />
      <v-btn icon @click="toggleCompare">
        <v-icon>{{
          isInCompare ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline"
        }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Product } from "@/data/products";
import { useProductStore } from "@/stores/productStore";

const props = defineProps<{ product: Product }>();
const store = useProductStore();

const isInCompare = computed(() =>
  store.compareList.some((p) => p.id === props.product.id)
);

function toggleCompare() {
  isInCompare.value
    ? store.removeFromCompare(props.product.id)
    : store.addToCompare(props.product);
}
</script>
