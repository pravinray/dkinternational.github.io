<template>
  <base-info-card title="Gallery">
    <v-row dense>
      <v-col
        v-for="n in 6"
        :key="n"
        cols="auto"
      >
        <base-img
          :src="require(`@/assets/dk_img/gallery_section_img/gallery-${n}.jpg`)"
          color="grey lighten-1"
          width="106"
          tile
        />
      </v-col>
    </v-row>
  </base-info-card>
</template>

<script>
  export default {
    name: 'Instagram',
  }
</script>
