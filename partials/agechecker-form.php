<div id="form-wrapper--dob">

  <p>Please enter your date of birth:<p>
  
  <div class="form-wrapper--dob__item">
    <input class="month" name="month" value="" type="number" min="1" max="12" placeholder="MM" id="dob_mm" maxlength="2">
  </div>

  <div class="form-wrapper--dob__item">
     <input class="day" name="day" value="" type="number" min="1" max="31" placeholder="DD" id="dob_dd" maxlength="2">
  </div>

  <div class="form-wrapper--dob__item">
     <input class="year" name="year" value="" type="number" min="1800" max="<?php echo date("Y"); ?>"placeholder="YYYY" id="dob_yyyy" maxlength="4">
  </div>

  <p>You must be of legal age to enter<p>

  <button id="submit-age">Enter</button>

</div>

