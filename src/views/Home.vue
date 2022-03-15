<template>
  <ion-page>
    <ion-header flex-column>
      <ion-toolbar container-fluid>
        <ion-row flex-row >
          <ion-col>hello
              <a href="/map" ><ion-icon :icon="map" size="large" color="#efefe" float-right></ion-icon></a>
              &nbsp; 
              <a href="/polygons" ><ion-icon :icon="analytics" size="large" color="#efefe" float-right></ion-icon></a>
              &nbsp; 
              <a href="/mapping#photo" ><ion-icon :icon="camera" size="large" color="#efefe" float-right></ion-icon></a>
              &nbsp; 
              <a href="/geolocate" ><ion-icon :icon="compass" size="large" color="#efefe" float-right></ion-icon></a>
          </ion-col>
          <ion-col float-right>          
              <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

     


    <section>
      <div
        class="banner-innerpage"
        style="
          background-image: url(background.jpg);
        "
      >
        <div class="container">
          <!-- Row  -->
          <div class="row justify-content-center" style="height:320px">
            <!-- Column -->
            <div>
              <img src="/gcm_1.svg" height="320"></div>
            <div
              class="col-md-6 align-self-center text-center"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              <!-- class="title"  Ground Cover Mapper 0.1 -->
            </div>
            <!-- Column -->
          </div>
        </div>
      </div>
    </section>
      <div class="spacer">

      <ion-button router-link="/map">Maps</ion-button>
      <ion-button router-link="/mapping">Begin Mapping</ion-button>
      <ion-button router-link="/plot">Plots</ion-button>
      <ion-button router-link="/team">Team</ion-button>
      <ion-button router-link="/density">Density Rating</ion-button>
      <ion-button router-link="/howto">How to ..</ion-button>

              <h6 class="subtitle op-8">
                Prepare mapping regions for your team, assign plots to team members, and log observations in real time with your phone.
              </h6> 
              <BR/>

              

      </div>
    <section>
      <div
        class="banner-innerpage"
        style="
          background-image: url(background.jpg);
          filter: sepia(75%);
        "
      >
      <div class="spacer"><BR/></div>
      </div>
    </section>
      <div class="spacer"><BR/></div>
    <section>
      <div
        class="banner-innerpage"
        style="
          background-image: url(background.jpg);
          filter: hue-rotate(90deg);
        "
      >
      <div class="spacer"><BR/></div>
      </div>
    </section>

    <section>
      <div class="spacer">
        <h6 class="subtitle op-8">
          <a href="/manager">Job manager tools</a>: jobs, plots, transects, team roles, reports 
        </h6>
        <BR/>
      </div>
    </section>


    <section>
      <div class="spacer"><BR/></div>
    </section>
    </ion-content>
    <ion-footer collapse="fade">
      <ion-toolbar>
        <ion-title><small>@2022 Ground Cover Mapper</small></ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { 
  IonContent,
  IonButton,
  IonPage,
  IonHeader,
  IonFooter,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
} from "@ionic/vue";
import {
  personCircle,
  heart,
  images,
  map,
  camera,
  compass,
  analytics
} from "ionicons/icons";


export default defineComponent({
  name: "App",
  components: {
    IonHeader,
    IonFooter,
    IonPage,
    IonButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
  },
  setup() {
    return {
	personCircle,
  heart,
  images,
  map,
  camera,
  compass,
  analytics
    };
  },
});
</script>

<style>
.icon {
   font-size: 50px;
}
</style>
