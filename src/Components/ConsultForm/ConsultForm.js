import React from "react";
import './ConsultForm.css'

const ConsultForm = () => {
  return (
    <div className='consult-form'>
      <h2>Consult Form</h2>
      <div className="consult-form-title">
        <h3>Coughs</h3>
      </div>

      <div class="container">
        <form>
          <div class="row">
            <div class="col-25">
              <label for="fname"> How long have you had this?</label>
            </div>
            <div class="col-75">
              <input
                type="text"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="fname">How would yu describe yur cough?</label>
            </div>
            <div class="col-75">
            <label><input type='checkbox' id='check-box' value='Dry' />Dry</label>
            <label><input type='checkbox' id='check-box' value='JWett' />Wet</label>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="fname"> What is the colour of the substance that is coughed out?</label>
            </div>
            <div class="col-75">
              <input
                type="text"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">Is the cough present all through the day?</label>
            </div>
            <div class="col-75">
            <label><input type='checkbox' id='check-box' value='Yes' />Yes</label>
            <label><input type='checkbox' id='check-box' value='No' />No</label>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">When is the cough worse either in frequency or pain(if noticed)?</label>
            </div>
            <div class="col-75">
            <label><input type='checkbox' id='check-box' value='Morning' />Morning</label>
            <label><input type='checkbox' id='check-box' value='Afternoon' />Afternoon</label>
            <label><input type='checkbox' id='check-box' value='Night' />Night</label>
            <label><input type='checkbox' id='check-box' value='allsame' />The same all through the day</label>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">Does the cough occur in bouts?</label>
            </div>
            <div class="col-75">
            <label><input type='checkbox' id='check-box' value='Yes' />Yes</label>
            <label><input type='checkbox' id='check-box' value='No' />No</label>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">When is the cough worse either in frequency or pain(if noticed)?</label>
            </div>
            <div class="col-75">
            <label><input type='checkbox' id='check-box' value='Fever' />Fever</label>
            <label><input type='checkbox' id='check-box' value='Chest' />Chest</label>
            <label><input type='checkbox' id='check-box' value='Breathing' />Difficulty in breathing</label>
            <label><input type='checkbox' id='check-box' value='Sweating' />Sweating</label>
            <label><input type='checkbox' id='check-box' value='Headche' />Headache</label>
            <label><input type='checkbox' id='check-box' value='None' />None</label>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">Have you used any medications</label>
            </div>
            <div class="col-75">
            <label><input type='checkbox' id='check-box' value='Yes' />Yes</label>
            <label><input type='checkbox' id='check-box' value='No' />No</label>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="fname">Which medications have you used?</label>
            </div>
            <div class="col-75">
              <input
                type="text"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">Do you any of the following medical conditions</label>
            </div>
            <div class="col-75">
            <label><input type='checkbox' id='check-box' value='Pregnancy' />Pregnancy</label>
            <label><input type='checkbox' id='check-box' value='Sickle Cell' />Sickle Cell</label>
            <label><input type='checkbox' id='check-box' value='Hypertension / High BP' />Hypertension / High BP</label>
            <label><input type='checkbox' id='check-box' value='Hepatitis B/C' />Hepatitis B/C</label>
            <label><input type='checkbox' id='check-box' value='HIV' />HIV</label>
            <label><input type='checkbox' id='check-box' value='Asthma' />Asthma</label>
            <label><input type='checkbox' id='check-box' value='Diabetes Mellitus' />Diabetes Mellitus</label>
            <label><input type='checkbox' id='check-box' value='Tuberculosis' />Tuberculosis</label>
            <label><input type='checkbox' id='check-box' value='Epilepsy' />Epilepsy</label>
            <label><input type='checkbox' id='check-box' value='None' />None</label>
            </div>
          </div>
          <div class="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultForm;