<template>
  <GoogleMap api-key="AIzaSyCH8M9P_g-xTOgnpk5DfdOis133k-C3VAs" style="width: 100%; height: 500px" :center="center"
    :zoom="15">

    <CustomMarker v-for="value in locations" :key="value" :options="value">
      <div style="text-align: center">
        <div style="font-size: 1.125rem;color:#fff">{{ value.title }}</div>
        <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png" width="50" height="50"
          style="margin-top: 8px" />
      </div>
    </CustomMarker>

  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, CustomMarker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, CustomMarker },
  data() {
    return {

      locations: [
      { position:{ lat: 23.7470491, lng: 90.3563781 }, anchorPoint: 'BOTTOM_CENTER', title: 'CodePopular' },
      { position:{ lat: 23.7527122, lng: 90.3504155 }, anchorPoint: 'BOTTOM_CENTER', title:'Dhanmondi'},
      ],

      center: { lat: 23.7470491, lng: 90.3563781 },
     
    }
  },

})
</script>