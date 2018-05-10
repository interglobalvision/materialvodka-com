<div class="overlay-position" id="age-overlay">

  <div class="container-overlay grid-row justify-center">

    <form id="age-checker-form" class="grid-column align-items-center justify-center grid-item item-s-4">
      
      <div class="padding-bottom-basic">
        <?php get_template_part('partials/logo') ?></a>
      </div>

      <p>Please enter your date of birth:<p>
      
      <div class="grid-row justify-center padding-bottom-small">
        <div>
          <input id="birthday-month" name="month" value="" type="number" min="1" max="12" placeholder="MM">
        </div>

        <div>
           <input id="birthday-day" name="day" value="" type="number" min="1" max="31" placeholder="DD">
        </div>

        <div>
           <input id="birthday-year" name="year" value="" type="number" min="1800" max="<?php echo date("Y"); ?>"placeholder="YYYY">
        </div>
      </div>

      <p>You must be of legal age to enter<p>

      <button id="submit-age">Enter</button>

    </form>

  </div>

</div>


