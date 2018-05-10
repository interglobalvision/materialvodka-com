<form id="age-checker-form">

  <p>Please enter your date of birth:<p>
  
  <div class="birthday-month">
    <input class="month" name="month" value="" type="number" min="1" max="12" placeholder="MM" id="dob_mm">
  </div>

  <div class="birthday-day">
     <input class="day" name="day" value="" type="number" min="1" max="31" placeholder="DD" id="dob_dd">
  </div>

  <div class="birthday-year">
     <input class="year" name="year" value="" type="number" min="1800" max="<?php echo date("Y"); ?>"placeholder="YYYY" id="dob_yyyy">
  </div>

  <p>You must be of legal age to enter<p>

  <button id="submit-age">Enter</button>

</form>

