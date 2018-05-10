<form id="age-checker-form">

  <p>Please enter your date of birth:<p>
  
  <div>
    <input id="birthday-month" name="month" value="" type="number" min="1" max="12" placeholder="MM">
  </div>

  <div>
     <input id="birthday-day" name="day" value="" type="number" min="1" max="31" placeholder="DD">
  </div>

  <div>
     <input id="birthday-year" name="year" value="" type="number" min="1800" max="<?php echo date("Y"); ?>"placeholder="YYYY">
  </div>

  <p>You must be of legal age to enter<p>

  <button id="submit-age">Enter</button>

</form>

