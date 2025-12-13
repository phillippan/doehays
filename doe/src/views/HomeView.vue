<template>
  <input v-model="location" placeholder="Search location..." @click="clearLocation"/>
  <button @click="getOpenStreetGeocode">Show Address</button>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 600px"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="0"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>
    <ol-interaction-pointer
      @down="log('⬇️ down', $event)"
    />
    <ol-geo-location :projection="projection" @change:position="geoLocChange">
      <template>
        <ol-vector-layer :zIndex="2">
          <ol-source-vector>
            <ol-feature ref="positionFeature">
              <ol-geom-point :coordinates="position"></ol-geom-point>
              <!-- <ol-style>
                <ol-style-icon :src="hereIcon" :scale="0.1"></ol-style-icon>
              </ol-style> -->
            </ol-feature>
          </ol-source-vector>
        </ol-vector-layer>
      </template>
    </ol-geo-location>
  </ol-map>
</template>

<script setup lang="ts">
// import hereIcon from "@/assets/location-here.png";
import type { MapBrowserEvent } from "ol";
import { ref } from "vue";

import type { Map, View } from "ol";
import type { ObjectEvent } from "ol/Object";

const center = ref([150.93780582947406, -33.693469306436384]);
const projection = ref("EPSG:4326");
const zoom = ref(12);
const view = ref<View>();
const map = ref<Map>();
const position = ref([]);
const location = ref(null);

const geoLocChange = (event: ObjectEvent) => {
  position.value = event.target.getPosition();
  view.value?.setCenter(event.target?.getPosition());
  view.value?.setZoom(18);
};

const clearLocation = () => {
  location.value = null;
};

const getOpenStreetGeocode = async () => {
  console.log("Searching for", location.value);
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${location.value}`
  );
  const data = await response.json();
  if (data && data.length > 0) {
    const firstResult = data[0];
    const lat = parseFloat(firstResult.lat);
    const lon = parseFloat(firstResult.lon);
    center.value = [lon, lat];
    view.value?.setCenter([lon, lat]);
  }
};

const log = async (type: string, event: MapBrowserEvent<UIEvent>) =>{
  console.log(type, event);
  const data = event.coordinate;
  try {
    const response = await fetch(`http://localhost:3000/api/doe`, {
      method: 'POST', // Specify the method
      headers: {
        'Content-Type': 'application/json' // Declare the data type
      },
      body: JSON.stringify({'lat': data[0], 'lon': data[1]}) // Convert the JavaScript object to a JSON string
    });

    // Check if the request was successful (status in the 2xx range)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json(); // Parse the JSON response
    return responseData;
  } catch (error) {
    console.error('Error posting data:', error);
  }
};
</script>