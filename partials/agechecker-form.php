<div id="age-overlay" class="grid-row justify-center">

  <form id="age-checker-form" class="grid-column align-items-center justify-center grid-item item-s-10 item-m-6 item-l-4">

    <div class="padding-bottom-basic">
      <?php get_template_part('partials/logo') ?></a>
    </div>

    <p>Enter your email address to recieve updates:</p>

    <div class="grid-row">
      <input id="mailchimp-email" type="email" placeholder="EMAIL" name="EMAIL" class="item-s-12">
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
        <input id="birthday-year" name="year" value="" type="number" min="1900" max="<?php echo date("Y"); ?>"placeholder="YYYY">
      </div>
    </div>

    <p id="age-form-response">You must be of legal age to enter<p>

    <button id="submit-age">Enter</button>

  </form>

</div>
