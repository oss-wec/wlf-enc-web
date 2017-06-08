<template lang="html">
  <div class="container">

    <form>
      <!-- start encounter module -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showEncounter')">Encounter Module</h4>
        <div class="card-block" v-if="showEncounter">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">NDOW ID</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="animal.animal_id">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>enter the NDOW ID for this animal</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Species</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="animal.species_id">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select a species from the dropdown</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Sex</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="animal.sex">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select a sex from the dropdown</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Status</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="animal.Encounters.status">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select the life status of the animal</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Age</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="animal.Encounters.age">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select a categorical age from the dropdown</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="animal.Encounters.event_date">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select the date of the encounter</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Encounter Method</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="animal.Encounters.enc_method">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select the method used to observe the animal</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Encounter Reason</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="animal.Encounters.enc_reason">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select the reason for the encounter</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Easting</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="animal.Encounters.x">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>the NAD83 Easting of the encounter</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Northing</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="animal.Encounters.y">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>the NAD83 Northing of the encounter</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Comments</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="animal.Encounters.comments">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>any miscellaneous notes pertaining to the encounter</small></p>
            </div>
          </div>
        </div>
      </div>
      <!-- end encounter module -->

      <!-- start marks data entry module -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showMarks')">
          Marks Module
        </h4>
        <div class="card-block" v-if="showMarks">

          <div class="p-card" v-for="(mark, index) in marks" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
            <div class="p-card-header">
              <button type="button" class="close" @click="deleteDynElement('marks', index)">
                <span>&times;</span>
              </button>

              <h5>Mark {{ index + 1 }}</h5>
            </div>
            <div class="p-card-block">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Mark Type</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mark.mark_type">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what type of mark was used</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Mark ID</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mark.mark_id">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what is the ID of the mark</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Mark Color</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mark.mark_color">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what color is the mark</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Mark Location</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mark.mark_location">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>where was the mark applied</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Given</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mark.date_given">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>date mark was given to animal</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Removed</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mark.date_removed">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>date mark was removed from animal</small></p>
                </div>
              </div>
            </div>
          </div>

          <button type="button" name="button" class="btn btn-primary" @click="addDynElement('marks')">Add Mark</button>
        </div>
      </div>
      <!-- end marks data entry module -->

      <!-- start devices data entry module -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showDevices')">
          Devices Module
        </h4>
        <div class="card-block" v-if="showDevices">
          <div class="p-card" v-for="(device, index) in devices" :class="{ 'p-card-odd': oddIndex(index) }">

            <div class="p-card-header">
              <button type="button" class="close" @click="deleteDynElement('devices', index)">
                <span>&times;</span>
              </button>
              <h5>Device {{ index + 1 }}</h5>
            </div>

            <div class="p-card-block">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Device ID</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="device.serial_num">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>the ID of the device</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Frequency</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="device.frequency">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small></small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Type</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="device.type">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>is the device GPS or VHF</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Inservice</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="device.inservice">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what date was the device deployed</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Outservice</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="device.outservice">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what date was the device removed</small></p>
                </div>
              </div>
            </div>

          </div>
          <button type="button" class="btn btn-primary" @click="addDynElement('devices')">Add Device</button>
        </div>
      </div>
      <!-- end devices data entry module -->

      <!-- biometrics -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showBiometrics')">
          Biometrics Module
        </h4>
        <div class="card-block" v-if="showBiometrics">
          <div class="p-card" v-for="(biometric, index) in biometrics" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
            <div class="p-card-header">
              <button type="button" class="close" @click="deleteDynElement('biometrics', index)">
                <span>&times;</span>
              </button>
              <h5> Measurement {{ index + 1 }}</h5>
            </div>

            <div class="p-card-block">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Measurement</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="biometric.measurement">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what measurement was recorded</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Value</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="biometric.value">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what is the value of the measurement</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Units</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="biometric.units">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small></small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Notes</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="biometric.notes">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>any miscellaneous notes about this measurement</small></p>
                </div>
              </div>
            </div>
          </div>

          <button type="button" name="button" class="btn btn-primary" @click="addDynElement('biometrics')">Add Measurment</button>
        </div>
      </div>
      <!-- end biometrics -->

      <!-- vitals -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showVitals')">
          Vitals Module
        </h4>
        <div class="card-block" v-if="showVitals">
          <div class="p-card" v-for="(vital, index) in vitals" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
            <div class="p-card-header">
              <button type="button" class="close" @click="deleteDynElement('vitals', index)">
                <span>&times;</span>
              </button>
              <h5> Vital Sign {{ index + 1 }}</h5>
            </div>

            <div class="p-card-block">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Time Recorded</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="vital.time_rec">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what time was the vital sign recorded</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Measurement</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="vital.measurement">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what vital sign was recorded</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Value</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="vital.value">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what is the value of the vital sign</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Interval</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="vital.interval">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>at which interval was this vital sign recorded</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Notes</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="vital.notes">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>miscellaneous notes associated with this vital sign</small></p>
                </div>
              </div>
            </div>
          </div>

          <button type="button" name="button" class="btn btn-primary" @click="addDynElement('vitals')">Add Vital Sign</button>
        </div>
      </div>
      <!-- end vitals -->

      <!-- samples -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showSamples')">
          Samples Module
        </h4>
        <div class="card-block" v-if="showSamples">
          <div class="p-card" v-for="(sample, index) in samples" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
            <div class="p-card-header">
              <button type="button" class="close" @click="deleteDynElement('samples', index)">
                <span>&times;</span>
              </button>
              <h5> Sample {{ index + 1 }}</h5>
            </div>

            <div class="p-card-block">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Sample</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="sample.sample">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what sample was taken</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Destination</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="sample.destination">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>where was the sample sent/stored</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Notes</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="sample.notes">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>miscellaneous notes associated with this sample</small></p>
                </div>
              </div>
            </div>
          </div>

          <button type="button" name="button" class="btn btn-primary" @click="addDynElement('samples')">Add Sample</button>
        </div>
      </div>
      <!-- end samples -->

      <!-- medications -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showMeds')">
          Medications Module
        </h4>
        <div class="card-block" v-if="showMeds">
          <div class="p-card" v-for="(med, index) in medications" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
            <div class="p-card-header">
              <button type="button" class="close" @click="deleteDynElement('medications', index)">
                <span>&times;</span>
              </button>
              <h5> Medication {{ index + 1 }}</h5>
            </div>

            <div class="p-card-block">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Medication</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="med.medication">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what medication was administered</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Time Administered</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="med.med_time">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what time was the medication given</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Dose</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="med.med_dose">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what dose was administered</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Units</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="med.med_unit">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what unit is the dose</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Method</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="med.med_method">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>how was the medication administered</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Notes</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="med.med_notes">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>miscellaneous notes about this medication</small></p>
                </div>
              </div>
            </div>
          </div>

          <button type="button" name="button" class="btn btn-primary" @click="addDynElement('medications')">Add Medication</button>
        </div>
      </div>
      <!-- end medications -->

      <!-- injury -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showInjuries')">
          Injuries Module
        </h4>
        <div class="card-block" v-if="showInjuries">
          <div class="p-card" v-for="(injury, index) in injuries" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
            <div class="p-card-header">
              <button type="button" class="close" @click="deleteDynElement('injuries', index)">
                <span>&times;</span>
              </button>
              <h5>Injury {{ index + 1 }}</h5>
            </div>

            <div class="p-card-block">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Type</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="injury.injury_type">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>select the type of injury</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Location</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="injury.injury_location">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>where was the injury</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="injury.injury_description">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>detailed description of the injury</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Treatment</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="injury.injury_treatment">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>detailed description about the treatment</small></p>
                </div>
              </div>
            </div>
          </div>

          <button type="button" name="button" class="btn btn-primary" @click="addDynElement('injuries')">Add Injury</button>
        </div>
      </div>
      <!-- end injury -->

      <!-- mortality -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showMortalities')">
          Mortalities Module
        </h4>
        <div class="card-block" v-if="showMortalities">
          <div class="p-card">
            <div class="p-card-block">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Cause of Death</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mortality.cause_of_death">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what is the cause of death</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Carcass Age</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mortality.carcass_age">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>days since the animal died</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Femur Index</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mortality.femur_index">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what is the femur index</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Diagnoses</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mortality.final_diagnoses">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>the preliminary diagnoses for death</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Histological Diagnoses</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mortality.hist_diagnoses">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>histological diagnoses from lab</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end mortality -->

      <!-- necropsy -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showNecropsy')">
          Necropsy Module
        </h4>
        <div class="card-block" v-if="showNecropsy">
          necropsies
        </div>
      </div>
      <!-- end necropsy -->

      <button type="button" name="button" v-on:click="submitAnimal">Submit Data</button>
    </form>

    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header">
            <h4>Model</h4>
          </div>
          <div>
            <pre><code>{{ $data }}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      animal: {
        animal_id: null,
        species_id: null, // TODO: select component
        sex: null, // TODO: select
        Encounters: {
          status: null, // TODO: select
          age: null,
          event_date: null, // TODO: calander
          x: null,
          y: null,
          enc_method: null, // TODO: select
          enc_reason: null, // TODO: select
          comments: null // TODO: textarea
        }
      },
      marks: [{
        mark_type: null,
        mark_id: null,
        mark_color: null,
        mark_location: null,
        date_given: null,
        date_removed: null
      }],
      devices: [{
        type: 'GPS',
        serial_num: '1234',
        frequency: '111.111',
        inservice: '2017-01-01',
        outservice: '2017-01-01'
      }],
      biometrics: [{
        measurement: null,
        value: null,
        units: null,
        notes: null
      }],
      vitals: [{
        time_rec: null,
        measurement: null,
        value: null,
        interval: null,
        notes: null
      }],
      samples: [{
        sample: null,
        destination: null,
        notes: null
      }],
      medications: [{
        medication: null,
        med_time: null,
        med_dose: null,
        med_unit: null,
        med_method: null,
        med_notes: null
      }],
      injuries: [{
        injury_type: null,
        injury_location: null,
        injury_description: null,
        injury_treatment: null
      }],
      mortality: {
        cause_of_death: null,
        carcass_age: null,
        femur_index: null,
        final_diagnoses: null,
        hist_diagnoses: null
      },
      showEncounter: true,
      showMarks: false,
      showDevices: false,
      showBiometrics: false,
      showVitals: false,
      showSamples: false,
      showMeds: false,
      showInjuries: false,
      showMortalities: false,
      showNecropsy: false,
      emptyData: {
        marks: {
          mark_type: null,
          mark_id: null,
          mark_color: null,
          mark_location: null,
          date_given: null,
          date_removed: null
        },
        devices: {
          serial_num: null,
          frequency: null,
          type: null,
          inservice: null,
          outservice: null
        },
        biometrics: {
          measurement: null,
          value: null,
          units: null,
          notes: null
        },
        vitals: {
          time_rec: null,
          measurement: null,
          value: null,
          interval: null,
          notes: null
        },
        samples: {
          sample: null,
          destination: null,
          notes: null
        },
        medications: {
          medication: null,
          med_time: null,
          med_dose: null,
          med_unit: null,
          med_method: null,
          med_notes: null
        },
        injuries: {
          injury_type: null,
          injury_location: null,
          injury_description: null,
          injury_treatment: null
        }
      }
    }
  },

  methods: {
    jsonData: function (data) {
      return JSON.stringify(data, true, 2)
    },

    submitAnimal: function () {
      const animal = JSON.stringify(this.animal)
      console.log(animal)

      axios.post('http://localhost:1313/events/test', this.animal)
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data))
    },

    toggleVisibility (toggle) {
      this[toggle] = !this[toggle]
    },

    addDynElement (el) {
      this[el].push(this.emptyData[el])
    },

    addMark () {
      this.animal.Marks.push({
        type: '',
        id: '',
        color: '',
        location: ''
      })
    },

    deleteDynElement (el, index) {
      this[el].splice(index, 1)
    },

    deleteMark (id) {
      this.animal.Marks.splice(id, 1)
    },

    oddIndex (index) {
      return index % 2 !== 0
    }
  }
}
</script>

<style lang="css" scoped>
.card {
  margin-bottom: 5px;
}

.p-card {
  padding: 5px 15px 0 15px;
  border-radius: 5px;
}

.p-card-header {
  padding-top: 5px;
  padding-bottom: 5px;
  /*border-bottom: 1px solid lightgrey;*/
  margin-bottom: 10px;
}

.p-card-odd {
  background-color: #F7F7F9;
}
</style>
