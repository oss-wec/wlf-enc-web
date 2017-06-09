<template lang="html">
  <div class="container">

    <form>
      <!-- encounter -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('encounter')">Encounter Module</h4>
        <div class="card-block" v-if="modules.encounter.show">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">NDOW ID</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="modules.animal.model.animal_id">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>enter the NDOW ID for this animal</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Species</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="modules.animal.model.species_id">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select a species from the dropdown</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Sex</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="modules.animal.model.sex">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select a sex from the dropdown</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Status</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="modules.encounter.model.status">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select the life status of the animal</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Age</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="modules.encounter.model.age">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select a categorical age from the dropdown</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="modules.encounter.model.event_date">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select the date of the encounter</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Encounter Method</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="modules.encounter.model.enc_method">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select the method used to observe the animal</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Encounter Reason</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="modules.encounter.model.enc_reason">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select the reason for the encounter</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Easting</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="modules.encounter.model.x">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>the NAD83 Easting of the encounter</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Northing</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="modules.encounter.model.y">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>the NAD83 Northing of the encounter</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Comments</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" v-model="modules.encounter.model.comments">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>any miscellaneous notes for the encounter</small></p>
            </div>
          </div>
        </div>
      </div>
      <!-- end encounter -->

      <legend>Supplemental Data</legend>
      <hr>

      <!-- supplemental switches -->
      <div class="row container">
        <div class="form-group col-sm-3" v-for="(module, index) in modules">
          <label class="d-block"><strong>{{ sentenceCase(module.name) }}</strong></label>
          <toggle-button :value="module.value"
                         :width="75"
                         :labels="{checked: 'Yes', unchecked: 'No'}"
                         :color="{checked: '#80C780', unchecked: '#D9534F'}"
                         @change="toggleModule(module.name)"/>
        </div>
      </div>

      <!-- marks -->
      <div class="card" v-if="modules.marks.value">
        <h4 class="card-header" @click="toggleVisibility('marks')">
          Marks Module
        </h4>
        <div class="card-block" v-if="modules.marks.show">

          <div class="p-card" v-for="(mark, index) in modules.marks.model" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
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
      <!-- end marks -->

      <!-- devices -->
      <div class="card"  v-if="modules.devices.value">
        <h4 class="card-header" @click="toggleVisibility('devices')">
          Devices Module
        </h4>
        <div class="card-block" v-if="modules.devices.show">
          <div class="p-card" v-for="(device, index) in modules.devices.model" :class="{ 'p-card-odd': oddIndex(index) }">

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
      <!-- end devices -->

      <!-- biometrics -->
      <div class="card" v-if="modules.biometrics.value">
        <h4 class="card-header" @click="toggleVisibility('biometrics')">
          Biometrics Module
        </h4>
        <div class="card-block" v-if="modules.biometrics.show">
          <div class="p-card" v-for="(biometric, index) in modules.biometrics.model" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
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
      <div class="card" v-if="modules.vitals.value">
        <h4 class="card-header" @click="toggleVisibility('vitals')">
          Vitals Module
        </h4>
        <div class="card-block" v-if="modules.vitals.show">
          <div class="p-card" v-for="(vital, index) in modules.vitals.model" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
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
      <div class="card" v-if="modules.samples.value">
        <h4 class="card-header" @click="toggleVisibility('samples')">
          Samples Module
        </h4>
        <div class="card-block" v-if="modules.samples.show">
          <div class="p-card" v-for="(sample, index) in modules.samples.model" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
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
      <div class="card" v-if="modules.medications.value">
        <h4 class="card-header" @click="toggleVisibility('medications')">
          Medications Module
        </h4>
        <div class="card-block" v-if="modules.medications.show">
          <div class="p-card" v-for="(med, index) in modules.medications.model" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
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
      <div class="card"  v-if="modules.injuries.value">
        <h4 class="card-header" @click="toggleVisibility('injuries')">
          Injuries Module
        </h4>
        <div class="card-block" v-if="modules.injuries.show">
          <div class="p-card" v-for="(injury, index) in modules.injuries.model" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
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
      <div class="card" v-if="modules.mortality.value">
        <h4 class="card-header" @click="toggleVisibility('mortality')">
          Mortalities Module
        </h4>
        <div class="card-block" v-if="modules.mortality.show">
          <div class="p-card">
            <div class="p-card-block">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Cause of Death</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="modules.mortality.model.cause_of_death">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what is the cause of death</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Carcass Age</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="modules.mortality.model.carcass_age">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>days since the animal died</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Femur Index</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="modules.mortality.model.femur_index">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what is the femur index</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Diagnoses</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="modules.mortality.model.final_diagnoses">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>the preliminary diagnoses for death</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Histological Diagnoses</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="modules.mortality.model.hist_diagnoses">
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
      <div class="card" v-if="modules.necropsy.value">
        <h4 class="card-header" @click="toggleVisibility('necropsy')">
          Necropsy Module
        </h4>
        <div class="card-block" v-if="modules.necropsy.show">
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
import { sentenceCase } from '../utils/utils'

export default {
  data () {
    return {
      modules: {
        animal: {
          name: 'animal',
          model: {
            animal_id: null,
            species_id: null, // TODO: select component
            sex: null // TODO: select
          }
        },
        encounter: {
          name: 'encounter',
          show: true,
          model: {
            status: null,
            age: null,
            event_date: null,
            x: null,
            y: null,
            enc_method: null,
            enc_reason: null,
            comments: null
          }
        },
        marks: {
          name: 'marks',
          value: false,
          show: false,
          model: [{
            mark_type: null,
            mark_id: null,
            mark_color: null,
            mark_location: null,
            date_given: null,
            date_removed: null
          }]
        },
        devices: {
          name: 'devices',
          value: false,
          show: false,
          model: [{
            type: null,
            serial_num: null,
            frequency: null,
            inservice: null,
            outservice: null
          }]
        },
        biometrics: {
          name: 'biometrics',
          value: false,
          show: false,
          model: [{
            measurement: null,
            value: null,
            units: null,
            notes: null
          }]
        },
        vitals: {
          name: 'vitals',
          value: false,
          show: false,
          model: [{
            time_rec: null,
            measurement: null,
            value: null,
            interval: null,
            notes: null
          }]
        },
        samples: {
          name: 'samples',
          value: false,
          show: false,
          model: [{
            sample: null,
            destination: null,
            notes: null
          }]
        },
        medications: {
          name: 'medications',
          value: false,
          show: false,
          model: [{
            medication: null,
            med_time: null,
            med_dose: null,
            med_unit: null,
            med_method: null,
            med_notes: null
          }]
        },
        injuries: {
          name: 'injuries',
          value: false,
          show: false,
          model: [{
            injury_type: null,
            injury_location: null,
            injury_description: null,
            injury_treatment: null
          }]
        },
        mortality: {
          name: 'mortality',
          value: false,
          show: false,
          model: {
            cause_of_death: null,
            carcass_age: null,
            femur_index: null,
            final_diagnoses: null,
            hist_diagnoses: null
          }
        },
        necropsy: {
          name: 'necropsy',
          value: false,
          show: false,
          model: {}
        }
      }
    }
  },

  methods: {
    jsonData (data) {
      return JSON.stringify(data, true, 2)
    },

    submitAnimal () {
      const animal = JSON.stringify(this.animal)
      console.log(animal)

      axios.post('http://localhost:1313/events/test', this.animal)
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data))
    },

    toggleVisibility (toggle) {
      this.modules[toggle].show = !this.modules[toggle].show
    },

    addDynElement (el) {
      this.modules[el].model.push(this.emptyModel(el))
    },

    deleteDynElement (el, index) {
      this[el].splice(index, 1)
    },

    oddIndex (index) {
      return index % 2 !== 0
    },

    toggleModule (module) {
      this.modules[module].value = !this.modules[module].value
    },

    sentenceCase (string) {
      return sentenceCase(string)
    },

    emptyModel (model) {
      const obj = Object.assign({}, this.modules[model].model[0])
      console.log(obj)
      for (let k in obj) {
        obj[k] = null
      }
      return obj
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
