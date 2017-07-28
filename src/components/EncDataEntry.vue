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
            <label class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-6">
              <input type="date" class="form-control" v-model="modules.encounter.model.event_date">
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select the date of the encounter</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Status</label>
            <div class="col-sm-6">
              <select class="form-control" v-model="modules.encounter.model.status">
                <option value=""></option>
                <option value="alive">Alive</option>
                <option value="mortality">Mortality</option>
                <option value="hunter harvest">Hunter Harvest</option>
              </select>
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select the life status of the animal</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Sex</label>
            <div class="col-sm-6">
              <select class="form-control" v-model="modules.animal.model.sex">
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select a sex from the dropdown</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Age</label>
            <div class="col-sm-6">
              <select class="form-control" v-model="modules.encounter.model.age">
                <option value=""></option>
                <option value="neonate">Neonate</option>
                <option value="juvenile">Juvenile</option>
                <option value="adult">Adult</option>
              </select>
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select a categorical age from the dropdown</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Encounter Method</label>
            <div class="col-sm-6">
              <select class="form-control" v-model="modules.encounter.model.enc_method">
                <option value=""></option>
                <option value="basecamp">Basecamp</option>
                <option value="capture crew">Capture Crew</option>
                <option value="marked observation">Marked Observation</option>
                <option value="unmarked observation">Unmarked Observation</option>
                <option value="marked mortality">Marked Mortality</option>
                <option value="unmarked mortality">Unmarked Mortality</option>
              </select>
            </div>
            <div class="col-sm-4">
              <p class="form-text text-muted"><small>select the method used to observe the animal</small></p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Encounter Reason</label>
            <div class="col-sm-6">
              <select class="form-control" v-model="modules.encounter.model.enc_reason">
                <option value=""></option>
                <option value="disease surveilance">Disease Surveilance</option>
                <option value="population monitoring">Population Monitoring</option>
                <option value="translocation">Translocation</option>
              </select>
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
              <textarea rows="8" class="form-control" v-model="modules.encounter.model.comments"></textarea>
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
          <label class="d-block"><strong>{{ sentenceCase(module.display) }}</strong></label>
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
                  <select class="form-control" v-model="mark.mark_type">
                    <option value=""></option>
                    <option value="ear tag">Ear Tag</option>
                    <option value="band">Band</option>
                    <option value="collar">Collar</option>
                    <option value="pit tag">PIT Tag</option>
                    <option value="tattoo">Tattoo</option>
                  </select>
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
                  <select class="form-control" v-model="mark.mark_color">
                    <option value=""></option>
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                    <option value="gray">Gray</option>
                    <option value="green">Green</option>
                    <option value="lavender">Lavender</option>
                    <option value="light blue">Light Blue</option>
                    <option value="orange">Orange</option>
                    <option value="pink">Pink</option>
                    <option value="purple">Purple</option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                    <option value="yellow">Yellow</option>
                  </select>
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
                  <input type="date" class="form-control" v-model="mark.date_given">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>date mark was given to animal</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Removed</label>
                <div class="col-sm-6">
                  <input type="date" class="form-control" v-model="mark.date_removed">
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
                  <p class="form-text text-muted"><small>radio frequency of the device</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Type</label>
                <div class="col-sm-6">
                  <select class="form-control" v-model="device.type">
                    <option value=""></option>
                    <option value="gps">GPS</option>
                    <option value="vhf">VHF</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>is the device GPS or VHF</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Inservice</label>
                <div class="col-sm-6">
                  <input type="date" class="form-control" v-model="device.inservice">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what date was the device deployed</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Outservice</label>
                <div class="col-sm-6">
                  <input type="date" class="form-control" v-model="device.outservice">
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
                  <select class="form-control" v-model="biometric.measurement">
                    <option value=""></option>
                    <option value="age numeric">Age - Numeric</option>
                    <option value="b. femoris">B. femoris</option>
                    <option value="bcs (qual)">BCS - Qualitative</option>
                    <option value="bcs (quant)">BCS - Quantitative</option>
                    <option value="body length">Body Length</option>
                    <option value="chest girth">Chest Girth</option>
                    <option value="fat thickness">Fat Thickness</option>
                    <option value="incisors">Incisors</option>
                    <option value="jaw length">Jaw Length</option>
                    <option value="l. dorsi">L. dorsi</option>
                    <option value="leg length">Leg Length</option>
                    <option value="neck circumfrence">Neck Circumfrence</option>
                    <option value="weight">Weight</option>
                  </select>
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
                  <select class="form-control" v-model="biometric.units">
                    <option value=""></option>
                    <option value="in">in</option>
                    <option value="cm">cm</option>
                    <option value="lbs">lbs</option>
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="oz">oz</option>
                    <option value="days">days</option>
                    <option value="weeks">weekds</option>
                    <option value="months">months</option>
                    <option value="years">years</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what are the units of the measurement</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Notes</label>
                <div class="col-sm-6">
                  <textarea rows="3" class="form-control" v-model="biometric.notes"></textarea>
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
                  <input type="time" class="form-control" v-model="vital.time_rec">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what time was the vital sign recorded</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Measurement</label>
                <div class="col-sm-6">
                  <select class="form-control" v-model="vital.measurement">
                    <option value=""></option>
                    <option value="heart rate">Heart Rate</option>
                    <option value="resp rate">Respiratory Rate</option>
                    <option value="temp">Temperature</option>
                  </select>
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
                  <textarea rows="3" class="form-control" v-model="vital.notes"></textarea>
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
                  <select class="form-control" v-model="sample.sample">
                    <option value=""></option>
                    <option value="bladder">Bladder</option>
                    <option value="blood - blue top">Blood - Blue Top</option>
                    <option value="blood - purple top">Blood - Purple Top</option>
                    <option value="blood - tiger top">Blood - Tiger Top</option>
                    <option value="bones">Bones</option>
                    <option value="brain">Brain</option>
                    <option value="bullae">Bullae</option>
                    <option value="bullae swab">Bullae Swab</option>
                    <option value="carcass">Carcass</option>
                    <option value="ear">Ear</option>
                    <option value="eye">Eye</option>
                    <option value="fecal">Fecal</option>
                    <option value="hair">Hair</option>
                    <option value="head">Head</option>
                    <option value="heart">Heart</option>
                    <option value="intestine">Intestine</option>
                    <option value="kidney">Kidney</option>
                    <option value="limbs">Limbs</option>
                    <option value="liver">Liver</option>
                    <option value="lymph nodes">Lymph Nodes</option>
                    <option value="muscle">Muscle</option>
                    <option value="nasal swab">Nasal Swab</option>
                    <option value="obex">Obex</option>
                    <option value="parasite">Parasite</option>
                    <option value="pharyngeal swab">Pharyngeal Swab</option>
                    <option value="sinus">Sinus</option>
                    <option value="sinus swab">Sinus Swab</option>
                    <option value="spleen">Spleen</option>
                    <option value="teeth">Teeth</option>
                    <option value="tonsil">Tonsil</option>
                    <option value="tonsil swab">Tonsil Swab</option>
                    <option value="trachea">Trachea</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what sample was taken</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Destination</label>
                <div class="col-sm-6">
                  <select class="form-control" v-model="sample.destination">
                    <option value=""></option>
                    <option value="archive">Archive</option>
                    <option value="ISU">ISU</option>
                    <option value="osu">OSU</option>
                    <option value="waddl">WADDL</option>
                  </select>
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

      <!-- labids  -->
      <div class="card" v-if="modules.labids.value">
        <h4 class="card-header" @click="toggleVisibility('labids')">
          Lab IDs
        </h4>
        <div class="card-block" v-if="modules.labids.show">
          <div class="p-card">

            <div class="p-card-block">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Lab IDs</label>
                <div class="col-sm-6">
                  <!-- <input type="text" class="form-control" v-model="modules.labids.model.lab_id"> -->
                  <textarea rows="3" class="form-control" v-model="modules.labids.model.lab_id"
                            placeholder="17-123, 1ab93v, 20170701-1462"
                  ></textarea>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>comma separated list of IDs that are sent to the lab</small></p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <!-- end labids -->

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
                  <select class="form-control" v-model="med.medication">
                    <option value=""></option>
                    <option value="aluspray">Aluspray</option>
                    <option value="atipamezole">Atipamezole</option>
                    <option value="azaperone">Azaperone</option>
                    <option value="bam">BAM</option>
                    <option value="BoSe">BoSe</option>
                    <option value="butorphanol">Butorphanol</option>
                    <option value="catron">Catron</option>
                    <option value="draxxin">Draxxin</option>
                    <option value="e300">E300</option>
                    <option value="eprinectin">Eprinectin</option>
                    <option value="exede">Exede</option>
                    <option value="haloperidol">Haloperidol</option>
                    <option value="ivomec">Ivomec</option>
                    <option value="ketamine">Ketamine</option>
                    <option value="lidocaine 2%">Lidocaine 2%</option>
                    <option value="longrange">Longrange</option>
                    <option value="midazolam">Midazolam</option>
                    <option value="naltrexone">Naltrexone</option>
                    <option value="normasol ph 7.4">Normasol pH 7.4</option>
                    <option value="NuFlor">NuFlor</option>
                    <option value="oxygen">Oxygen</option>
                    <option value="pentobarbitol">Pentobarbitol</option>
                    <option value="plasmalyte">Plasmalyte</option>
                    <option value="saline">Saline</option>
                    <option value="telazol">Telazol</option>
                    <option value="xylazine">Xylazine</option>
                    <option value="zactran">Zactran</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what medication was administered</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Time Administered</label>
                <div class="col-sm-6">
                  <input type="time" class="form-control" v-model="med.med_time">
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
                  <select class="form-control" v-model="med.med_unit">
                    <option value=""></option>
                    <option value="cc">cc</option>
                    <option value="L">L</option>
                    <option value="L/min">L/min</option>
                    <option value="mg">mg</option>
                    <option value="ml">ml</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what unit is the dose</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Method</label>
                <div class="col-sm-6">
                  <select class="form-control" v-model="med.med_method">
                    <option value=""></option>
                    <option value="im">IM</option>
                    <option value="iv">IV</option>
                    <option value="sq">SQ</option>
                    <option value="topical">Topical</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>how was the medication administered</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Notes</label>
                <div class="col-sm-6">
                  <textarea class="form-control" v-model="med.med_notes" rows="3"></textarea>
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
                <label class="col-sm-2 col-form-label">Side</label>
                <div class="col-sm-6">
                  <select class="form-control" v-model="injury.injury_side">
                    <option value=""></option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>on which side of the body is the injury</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Location</label>
                <div class="col-sm-6">
                  <select class="form-control" v-model="injury.injury_location">
                    <option value=""></option>
                    <option value="head">Head</option>
                    <option value="neck">Neck</option>
                    <option value="front leg">Front Leg</option>
                    <option value="torso">Torso</option>
                    <option value="hind leg">Hind Leg</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>where was the injury</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Type</label>
                <div class="col-sm-6">
                  <select class="form-control" v-model="injury.injury_type">
                    <option value=""></option>
                    <option value="abrasion">Abrasion</option>
                    <option value="contusion">Contusion</option>
                    <option value="facture">Fracture</option>
                    <option value="laceration">Laceration</option>
                    <option value="puncture">Puncture</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>select the type of injury</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-6">
                  <textarea class="form-control" v-model="injury.injury_description" rows="3"></textarea>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>detailed description of the injury</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Treatment</label>
                <div class="col-sm-6">
                  <textarea class="form-control" v-model="injury.injury_treatment" rows="3"></textarea>
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
                <label class="col-sm-2 col-form-label">Investigator</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="modules.mortality.model.investigator">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>who investigated the mortality</small></p>
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
                <label class="col-sm-2 col-form-label">Cause of Death</label>
                <div class="col-sm-6">
                  <select class="form-control" v-model="modules.mortality.model.cause_of_death">
                    <option value=""></option>
                    <option value="capture related">Capture Related</option>
                    <option value="disease">Disease</option>
                    <option value="euthanasia">Euthanasia</option>
                    <option value="harvest">Harvest</option>
                    <option value="malnutrition">Malnutrition</option>
                    <option value="predation - bear">Predation - Bear</option>
                    <option value="predation - bobcat">Predation - Bobcat</option>
                    <option value="predation - coyote">Predation - Coyote</option>
                    <option value="predation - lion">Predation - Lion</option>
                    <option value="roadkill">Roadkill</option>
                    <option value="toxicity">Toxicity</option>
                    <option value="trauma">Trauma</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what is the cause of death</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Certainty of Cause</label>
                <div class="col-sm-6">
                  <select class="form-control" v-model="modules.mortality.model.certainty_of_cause">
                    <option value=""></option>
                    <option value="0">0% - Unknown</option>
                    <option value="20">20% - Unknown</option>
                    <option value="40">40% - Possible</option>
                    <option value="60">60% - Possible</option>
                    <option value="80">80% - Probable</option>
                    <option value="100">100% - Certnain</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>how certain is investigator about cause of death</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Femur Index</label>
                <div class="col-sm-6">
                  <select class="form-control" v-model="modules.mortality.model.femur_index">
                    <option value=""></option>
                    <option value="1">1 - White, hard, and waxy</option>
                    <option value="2">2 - Pink to red, and firm</option>
                    <option value="3">3 - Pink to red, and soft</option>
                    <option value="4">4 - Deep red, and gelatinous</option>
                  </select>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what is the femur index</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Gross Diagnosis</label>
                <div class="col-sm-6">
                  <textarea class="form-control" v-model="modules.mortality.model.gross_diagnoses" rows="3"></textarea>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>the gross necropsy diagnoses for death</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Histological Diagnosis</label>
                <div class="col-sm-6">
                  <textarea class="form-control" v-model="modules.mortality.model.histological_diagnoses" rows="3"></textarea>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>histological diagnoses from lab</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Description of Mortality</label>
                <div class="col-sm-6">
                  <textarea rows="8" class="form-control" v-model="modules.mortality.model.description"></textarea>
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>detailed description of the mortality/animal history. This includes the description of evidence, body condition notes, and predation evidence</small></p>
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

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Necropsy Date</label>
            <div class="col-sm-10">
              <input type="date" v-model="modules.necropsy.model.necropsy_date" class="form-control">
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">General Condition</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.general_condition" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Integument</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.integument" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Musculoskeletal</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.musculoskeletal" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Body Cavities</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.body_cavities" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Hemolymphatic</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.hemolymphatic" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Respiratory</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.respiratory" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Cardiovascular</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.cardiovascular" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Digestive</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.digestive" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Urinary</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.urinary" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Reproductive</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.reproductive" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Endocrine</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.endocrine" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Nervous</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.nervous" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Sensory</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.sensory" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Lab Studies</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="modules.necropsy.model.studies" rows="3"></textarea>
            </div>
          </div>

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
            <hr>
            <pre><code>{{ structure }}</code></pre>
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
          display: 'animal',
          value: true,
          model: {
            animal_id: null,
            species_id: null, // TODO: select component
            sex: null // TODO: select
          }
        },
        encounter: {
          name: 'encounter',
          display: 'encounter',
          value: true,
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
          display: 'marks',
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
          display: 'devices',
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
          display: 'biometrics',
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
          display: 'vitals',
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
          display: 'samples',
          value: false,
          show: false,
          model: [{
            sample: null,
            destination: null,
            notes: null
          }]
        },
        labids: {
          name: 'labids',
          display: 'lab IDs',
          value: false,
          show: false,
          model: {
            lab_id: null
          }
        },
        medications: {
          name: 'medications',
          display: 'medications',
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
          display: 'injuries',
          value: false,
          show: false,
          model: [{
            injury_side: null,
            injury_type: null,
            injury_location: null,
            injury_description: null,
            injury_treatment: null
          }]
        },
        mortality: {
          name: 'mortality',
          display: 'mortality',
          value: false,
          show: false,
          model: {
            investigator: null,
            cause_of_death: null,
            certainty_of_cause: null,
            carcass_age: null,
            femur_index: null,
            gross_diagnoses: null,
            histological_diagnoses: null,
            description: null
          }
        },
        necropsy: {
          name: 'necropsy',
          display: 'necropsy',
          value: false,
          show: false,
          model: {
            necropsy_date: null,
            general_condition: null,
            integument: null,
            musculoskeletal: null,
            body_cavities: null,
            hemolymphatic: null,
            respiratory: null,
            cardiovascular: null,
            digestive: null,
            urinary: null,
            reproductive: null,
            endocrine: null,
            nervous: null,
            sensory: null,
            studies: null
          }
        }
      }
    }
  },

  methods: {
    jsonData (data) {
      return JSON.stringify(data, true, 2)
    },

    submitAnimal () {
      // const animal = JSON.stringify(this.structure)

      axios.post('http://localhost:1313/events/test', this.structure)
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
      this.modules[el].model.splice(index, 1)
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
  },

  computed: {
    parsedLabIds () {
      const str = this.modules.labids.model.lab_id

      if (str) {
        let ids = str.split(', ')
        ids = ids.map(id => {
          return { lab_id: id }
        })

        return ids
      } else {
        return null
      }
    },

    structure () {
      const animal = this.modules.animal.model
      const encounter = this.modules.encounter.model
      const structure = {
        animal_id: animal.animal_id,
        species_id: animal.species_id,
        sex: animal.sex,
        Encounters: {
          status: encounter.status,
          age: encounter.age,
          event_date: encounter.event_date,
          x: encounter.x,
          y: encounter.y,
          enc_method: encounter.enc_method,
          enc_reason: encounter.enc_reason,
          comments: encounter.comments
        }
      }

      if (this.modules.marks.value === true) structure.Marks = this.modules.marks.model
      if (this.modules.devices.value === true) structure.Devices = this.modules.devices.model
      if (this.modules.biometrics.value === true) structure.Encounters.Biometrics = this.modules.biometrics.model
      if (this.modules.vitals.value === true) structure.Encounters.Vitals = this.modules.vitals.model
      if (this.modules.samples.value === true) structure.Encounters.Samples = this.modules.samples.model
      if (this.modules.labids.value === true) structure.Encounters.LabIds = this.parsedLabIds
      if (this.modules.medications.value === true) structure.Encounters.Medications = this.modules.medications.model
      if (this.modules.injuries.value === true) structure.Encounters.Injuries = this.modules.injuries.model
      if (this.modules.mortality.value === true) structure.Encounters.Mortality = this.modules.mortality.model
      if (this.modules.necropsy.value === true) structure.Encounters.Necropsy = this.modules.necropsy.model

      return structure
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
