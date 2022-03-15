<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-row>
          <ion-col>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title><a href="/home" class="homelink">GCM</a> - How to use Ground Cover Mapper</ion-title>
        </ion-col>
     
      <template src="./components/HeaderIcons.html" />
  

       </ion-row>
      </ion-toolbar>

    </ion-header>
GCM - How to use Ground Cover Mapper
    <ion-content class="ion-padding">
    <ion-row>
    <ion-col class="ion-padding">

	<ul align=left>

    <ul><b>Using GCM as a job manager</b></ul>

	<li> Add proposed transects to plots </li>
	<li> Add transects to plots </li>
	<li> Add team members</li>
	<li> Assign jobs & plots to team members</li>
	<li> Set a grid for plot sampling density</li>
	<li> Set special instructions per job/plot/transect</li>
	<li> Export KML map data</li>

	</ul>

	<ul align=left>

    <ul><b>Mapping weed density in the field</b></ul>

	<li> Add an observation
    <ul>
    <li>Choose density</li>
    <li>Density reference</li>
    </ul>
     </li>
    <li>Add a photo</li>
    <li>Add a note</li>
    <li>Tag</li>
	<li> Display your positioning on the map</li>
	<li> notification of being at next obsevation point</li>

	</ul>
	


    </ion-col>
    <ion-col class="ion-padding">
	<BR/><BR/>
	<ion-img src="gcm_mapicon21.svg"></ion-img>
    </ion-col>
    </ion-row>
      <!-- MODAL CODE -->
      <ion-modal :is-open="modalIsOpen" @didDismiss="closeModal()">
        <about-modal @onClose="closeModal" />
      </ion-modal>
      <ion-button @click="showModal">Open Modal</ion-button>
<template>
  <!-- Basic -->
  <ion-accordion-group>
    <ion-accordion value="colors">
      <ion-item slot="header">
        <ion-label>Colors</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item>
          <ion-label>Red</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Green</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Blue</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
    <ion-accordion value="shapes">
      <ion-item slot="header">
        <ion-label>Shapes</ion-label>
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
    <ion-accordion value="numbers">
      <ion-item slot="header">
        <ion-label>Numbers</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item>
          <ion-label>1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>3</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
  </ion-accordion-group>

  <!-- Custom Icon -->
  <ion-accordion-group>
    <ion-accordion value="colors" :toggle-icon="arrowDownCircle">
      <ion-item slot="header">
        <ion-label>Colors</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item>
          <ion-label>Red</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Green</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Blue</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
    <ion-accordion value="shapes" :toggle-icon="arrowDownCircle">
      <ion-item slot="header">
        <ion-label>Shapes</ion-label>
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
        <ion-label>Numbers</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item>
          <ion-label>1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>3</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
  </ion-accordion-group>

  <!-- Open Accordion -->
  <ion-accordion-group value="colors">
    <ion-accordion value="colors">
      <ion-item slot="header">
        <ion-label>Colors</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item>
          <ion-label>Red</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Green</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Blue</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
    <ion-accordion value="shapes">
      <ion-item slot="header">
        <ion-label>Shapes</ion-label>
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
    <ion-accordion value="numbers">
      <ion-item slot="header">
        <ion-label>Numbers</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item>
          <ion-label>1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>3</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
  </ion-accordion-group>

  <!-- Multiple Accordions -->
  <ion-accordion-group :multiple="true" :value="['colors', 'numbers']">
    <ion-accordion value="colors">
      <ion-item slot="header">
        <ion-label>Colors</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item>
          <ion-label>Red</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Green</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Blue</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
    <ion-accordion value="shapes">
      <ion-item slot="header">
        <ion-label>Shapes</ion-label>
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
    <ion-accordion value="numbers">
      <ion-item slot="header">
        <ion-label>Numbers</ion-label>
      </ion-item>

      <ion-list slot="content">
        <ion-item>
          <ion-label>1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>3</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
  </ion-accordion-group>
  
  <!-- Getting and setting the state of the accordion group -->
  <ion-accordion-group value="numbers" ref="accordionGroup">
    <ion-accordion value="colors">
      <ion-item slot="header">
        <ion-label>Colors</ion-label>
      </ion-item>
  
      <ion-list slot="content">
        <ion-item>
          <ion-label>Red</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Green</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Blue</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
    <ion-accordion value="shapes">
      <ion-item slot="header">
        <ion-label>Shapes</ion-label>
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
    <ion-accordion value="numbers">
      <ion-item slot="header">
        <ion-label>Numbers</ion-label>
      </ion-item>
  
      <ion-list slot="content">
        <ion-item>
          <ion-label>1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>3</ion-label>
        </ion-item>
      </ion-list>
    </ion-accordion>
  </ion-accordion-group>
  
    <ion-button @click="logAccordionValue()">Log Value of Accordion Group</ion-button>
    <ion-button @click="closeAccordion()">Close All Accordions</ion-button>
</template>
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
      logAccordionValue
    };
  },
});
</script>
