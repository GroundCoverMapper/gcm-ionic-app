<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title><a href="/home" class="homelink">GCM</a> - Manager tools</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
    <ion-row>
    <ion-col class="ion-padding">

	<ul align=left>
              <ion-button @click="showModal">Open Modal</ion-button>
<BR/><BR/>


	<li> Add Jobs </li>
	<li> Add plots and sampling instructions </li>
	<li> Add transects to plots </li>
	<li> Sampling density for plots</li>
	<li> Manage teams assignments</li>
	<li> Export KML map data</li>

	</ul>
 
    </ion-col>
    <ion-col class="ion-padding">
	<BR/><BR/>
	<ion-img src="manager.png"></ion-img>
    </ion-col>
    </ion-row>
      <!-- MODAL CODE -->
      <ion-modal :is-open="modalIsOpen" @didDismiss="closeModal()">
        <about-modal @onClose="closeModal" />
      </ion-modal>

  

  <!-- Custom Icon -->
  <ion-accordion-group>
    <ion-accordion value="colors" :toggle-icon="arrowDownCircle">
      <ion-item slot="header">
        <ion-label>Jobs</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item>
          <ion-label>plot1 - transect1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>plot1 - transect2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>plot2 - transect1</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
    <ion-accordion value="shapes" :toggle-icon="arrowDownCircle">
      <ion-item slot="header">
        <ion-label>Plots</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item>
          <ion-label>Circle</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Triangle</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Square</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
    <ion-accordion value="numbers" :toggle-icon="arrowDownCircle">
      <ion-item slot="header">
        <ion-label>Transects</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item v-for="item of mapPoints" :key="item.id">
          <ion-label>{{ item.targetSpecies }}</ion-label>   <ion-label>{{ item.lat }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
  </ion-accordion-group>






       <div class="spacer"><BR/><BR/><BR/><BR/></div>


      <ion-item v-for="item of items" :key="item.id">
        <ion-label>{{ item.value }}</ion-label>
      </ion-item>
 

       <div class="spacer"><BR/><BR/><BR/><BR/></div>



      <ion-item v-for="item of mapPoints" :key="item.id">
        <ion-label>{{ item.targetSpecies }}</ion-label>   <ion-label>{{ item.lat }}</ion-label>
      </ion-item>
 



    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";



import { arrowDownCircle } from 'ionicons/icons';
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
  IonAccordion, 
  IonAccordionGroup,
  IonLabel,
} from "@ionic/vue";
import AboutModal from "../components/AboutModal.vue";

export default defineComponent({
  name: "Howto",
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
    AboutModal,
    IonAccordion, 
    IonAccordionGroup,
    IonLabel,
  },
  setup() {
    const accordionGroup = ref();
    const logAccordionValue = () => {
      if (accordionGroup.value) {
      console.log(accordionGroup.value.$el.value);
      }
    }
    const closeAccordion = () => {
      if (accordionGroup.value) {
        accordionGroup.value.$el.value = undefined;
      }
    }

    const items = ref([
     { id: 0, value: 'Item 0' },
     { id: 1, value: 'Item 1' },
     { id: 2, value: 'Item 2' }
    ]);
 
    const mapPoints = ref([
     { id: 0, speciesDensity: '', targetSpecies: 'Knappweed', label: 'Item 0', lat: '39.931387', long: '-105.5015614', posteby: 'greg', postdate: 'Wed 02 Mar 2022 07:36:45 PM MST' },
     { id: 1, speciesDensity: '', targetSpecies: 'Mistletoe', label: 'Item 1', lat: '39.931387', long: '-105.5015614', posteby: 'tanya', postdate: 'Wed 02 Mar 2022 07:36:45 PM MST' },
     { id: 2, speciesDensity: '', targetSpecies: 'Yellow Toadflax', label: 'Item 2', lat: '39.931387', long: '-105.5015614', posteby: 'carrie', postdate: 'Wed 02 Mar 2022 07:36:45 PM MST' }
    ]);
 
    const Jobs = ref([
     { id: 0, jobName: 'job1', manager: '001', team: 'Team 1', updated: 'Wed 02 Mar 2022 07:36:45 PM MST' },
     { id: 1, jobName: 'job2', manager: '001', team: 'Team 1', updated: 'Wed 02 Mar 2022 07:36:45 PM MST' }

    ]);
 

    const Teams = ref([
     { id: 0, teamName: 'Team 1', teamContact: '1', updated: 'Wed 02 Mar 2022 07:36:45 PM MST' },
     { id: 1, teamName: 'job2', manager: '001', team: 'Team 1', updated: 'Wed 02 Mar 2022 07:36:45 PM MST' }

    ]);
    const TeamMembers = ref([
     { id: 0, jobName: 'job1', manager: '001', team: 'Team 1', updated: 'Wed 02 Mar 2022 07:36:45 PM MST' },
     { id: 1, jobName: 'job2', manager: '001', team: 'Team 1', updated: 'Wed 02 Mar 2022 07:36:45 PM MST' }
    ]);

    const TeamAssignments = ref([
     { id: 0, teamId: 0, manager: '001', team: 'Team 1', updated: 'Wed 02 Mar 2022 07:36:45 PM MST' },
     { id: 1, teamId: 1, manager: '001', team: 'Team 1', updated: 'Wed 02 Mar 2022 07:36:45 PM MST' }
    ]);




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
      accordionGroup,
      arrowDownCircle,
      closeAccordion,
      logAccordionValue,
      items,
      mapPoints
    };
  },
});
</script>
