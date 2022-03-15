<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title><a href="/home" class="homelink">Ground Cover Mapper</a></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

      <!-- MODAL CODE -->
      <ion-modal :is-open="modalIsOpen" @didDismiss="closeModal()">
        <map-modal @onClose="closeModal" />
      </ion-modal>


      <ion-button @click="showModal">Your Maps</ion-button>


      <div>
        <slot></slot>

      </div>


    <l-map ref="map" v-model:zoom="zoom" :center="[39.931387, -105.5015614]">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></l-tile-layer>
 
    <l-polygon
      :lat-lngs="[
        [39.931597, -105.5016714],
        [39.931597, -105.5016744],
        [39.931797, -105.5015724],
        [39.931380, -105.5015420],
        [39.931377, -105.5016514],
      ]"
      color="#41b782"
      :fill="true"
      :fillOpacity="0.5"
      fillColor="#41b782"
    />
    </l-map>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonModal,
} from "@ionic/vue";
import MapModal from "../components/MapModal.vue";
import LMap from "../components/LMap.vue";
import LTileLayer from "../components/LTileLayer.vue";
import LPolygon from "../components/LPolygon.vue";

export default defineComponent({
  name: "Map",
  components: {
    IonHeader,
    IonPage,
    IonButton,
    IonButtons,
    IonBackButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonModal,
    MapModal,
    LMap,
    LTileLayer,
    LPolygon,
  },
  data() {
    return {
      zoom: 16,
    };
  },
  setup() {
    const modalIsOpen = ref(false);
    const showModal = () => {
      modalIsOpen.value = true;
    };

    const closeModal = () => {
      modalIsOpen.value = false;
    };
    return {
      showModal,
      closeModal,
      modalIsOpen,
      LMap,
      LTileLayer,
      LPolygon,
    };
  },
});
</script>
<style scoped>
.main-wrapper {
  display: flex;
}
.menu {
  display: flex;
  flex-direction: column;
}
.menu a {
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
}
.menu .router-link-exact-active {
  background-color: lightgray;
}
.map-wrapper {
  height: 75vh;
  width: 100%;
}
</style>
<style scoped>
@import "/node_modules/leaflet/dist/leaflet.css"
</style>

