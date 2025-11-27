<!-- src/components/MapSection.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" class="mx-auto">
        <h3 class="text-h6 mb-2" style="text-align: center">Our Location</h3>

        <div class="map-wrapper">
          <!-- Replace the src with your Google Maps share/embed URL -->
          <iframe
            :src="embedUrl"
            width="100%"
            height="400"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Our location on Google Maps"
          ></iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const embedUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d180.2146307257044!2d72.92215504892144!3d20.614047148130698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1764184202160!5m2!1sen!2sin"; // paste your place embed URL here
</script>

<style scoped>
.map-wrapper iframe {
  border-radius: 6px;
  min-height: 250px;
}
</style>
