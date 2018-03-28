(function ($, window, document, undefined) {

  'use strict';
  var hasErrors = false;

  $( document ).ready(function() {

    $('#contactForm').submit(function(e){
      e.preventDefault();
      validate();
      if(!hasErrors){
        var $form = $(this);
        var $inputs = $form.find('input, select, button, textarea');
        var name = $('#name').val();
        var email = $('#email').val();
        var content = $('#message').val();
        var subject = $('#subject').val();
        var dataString = 'name='+ name + '&email='+ email + '&content='+ content + '&subject='+ subject + '&g-recaptcha-response=' + grecaptcha.getResponse();

        $inputs.prop('disabled', true);

        var request = $.ajax({
          url: '../assets/php/handle-post.php',
          type: 'post',
          data: dataString
        });
        request.success(function(){
          // Set the message text.
          $('#buttonHelp').text('Thanks! I will get back to you as soon as possible.').fadeOut(3000);
          // Clear the form.
          $('#name').val('');
          $('#email').val('');
          $('#message').val('');
          $inputs.prop('disabled', false);
        });
        request.fail(function (data){
          // Set the message text.
          if (data.message !== '') {
            $('buttonHelp').text(data.message);
          } else {
            $('#buttonHelp').text('Oops! An error occured and your message could not be sent.');
          }
        });
        request.always(function () {
          $inputs.prop('disabled', false);
        });
      }
    });
  });

  $(function () {
 
  });

  function validate() {

    hasErrors = false;

    $('#nameHelp').text('');
    $('#emailHelp').text('');
    $('#messageHelp').text('');
    $('#captchaHelp').text('');

    $('#name').removeClass('invalid');
    $('#email').removeClass('invalid');
    $('#message').removeClass('invalid');

    if ($('#name').val().length === 0){
      $('#nameHelp').text('Please enter your name');
      $('#nameHelp').css('color', 'red');
      $('#name').addClass('invalid');
      hasErrors = true;
    }

    var email = $('#email').val();
    if (!validateEmail(email)) {
      $('#emailHelp').text('Please enter a valid email address');
      $('#emailHelp').css('color', 'red');
      $('#email').addClass('invalid');
      hasErrors = true;
    }

    if ($('#message').val().length === 0){
      $('#messageHelp').text('Please enter a message');
      $('#messageHelp').css('color', 'red');
      $('#message').addClass('invalid');
      hasErrors = true;
    }

    var v = grecaptcha.getResponse();
    if (v.length === 0){
      $('#captchaHelp').text('Please complete the reCAPTCHA');
      $('#captchaHelp').css('color', 'red');
      hasErrors = true;
    }
  }

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  $( window ).load(function() {
    window.sr = new ScrollReveal();
    /* Personal Skill Progress Circles */
    var circleP1 = new ProgressBar.Circle('#pskill-1', {
      color: '#2F4F4F',
      text:{
        value: 'Creativity'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleP2 = new ProgressBar.Circle('#pskill-2', {
      color: '#2F4F4F',
      text:{
        value: 'Organization'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleP3 = new ProgressBar.Circle('#pskill-3', {
      color: '#2F4F4F',
      text:{
        value: 'Team Player'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleP4 = new ProgressBar.Circle('#pskill-4', {
      color: '#2F4F4F',
      text:{
        value: 'Communication'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleP5 = new ProgressBar.Circle('#pskill-5', {
      color: '#2F4F4F',
      text:{
        value: 'Problem Solving'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleP6 = new ProgressBar.Circle('#pskill-6', {
      color: '#2F4F4F',
      text:{
        value: 'Adaptability'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });


    /* Skill Circle Progress Circles */
    var circleS1 = new ProgressBar.Circle('#skill-1', {
      color: '#2F4F4F',
      text:{
        value: 'JavaEE',
        autoStyle:true
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleS2 = new ProgressBar.Circle('#skill-2', {
      color: '#2F4F4F',
      text:{
        value: 'Spring'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleS3 = new ProgressBar.Circle('#skill-3', {
      color: '#2F4F4F',
      text:{
        value: 'Maven/Gradle'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleS4 = new ProgressBar.Circle('#skill-4', {
      color: '#2F4F4F',
      text:{
        value: 'HTML5/CSS3'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleS5 = new ProgressBar.Circle('#skill-5', {
      color: '#2F4F4F',
      text:{
        value: 'Javascript'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleS6 = new ProgressBar.Circle('#skill-6', {
      color: '#2F4F4F',
      text:{
        value: 'Python'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleS7 = new ProgressBar.Circle('#skill-7', {
      color: '#2F4F4F',
      text:{
        value: 'C/C++'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleS8 = new ProgressBar.Circle('#skill-8', {
      color: '#2F4F4F',
      text:{
        value: 'SQL'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleS9 = new ProgressBar.Circle('#skill-9', {
      color: '#2F4F4F',
      text:{
        value: 'Android'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleS10 = new ProgressBar.Circle('#skill-10', {
      color: '#2F4F4F',
      text:{
        value: 'Git/SVN'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleS11 = new ProgressBar.Circle('#skill-11', {
      color: '#2F4F4F',
      text:{
        value: 'Lean'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });
    var circleS12 = new ProgressBar.Circle('#skill-12', {
      color: '#2F4F4F',
      text:{
        value: 'Agile'
      },
      strokeWidth: 3,
      trailWidth: 3,
      trailColor: '#ddd',
      duration: 3000,
      easing: 'easeInOut'
    });

    var normalReveal = {
      distance : '90px',
      easing   : 'ease-in-out',
      scale    : 1.1
    };

    var skillsReveal = {
      distance : '90px',
      easing   : 'ease-in-out',
      scale    : 1.1,
      afterReveal: function () {
        circleS1.animate(0.95);
        circleS2.animate(0.90);
        circleS3.animate(0.60);
        circleS4.animate(0.90);
        circleS5.animate(0.90);
        circleS6.animate(0.55);
        circleS7.animate(0.75);
        circleS8.animate(0.75);
        circleS9.animate(0.40);
        circleS10.animate(0.90);
        circleS11.animate(0.80);
        circleS12.animate(0.95);
      }
    };

    var profReveal = {
      distance : '90px',
      easing   : 'ease-in-out',
      scale    : 1.1,
      afterReveal: function () {
        circleP1.animate(0.85);
        circleP2.animate(0.80);
        circleP3.animate(0.90);
        circleP4.animate(0.95);
        circleP5.animate(0.90);
        circleP6.animate(0.85);
      }
    };

    sr.reveal('#intro', normalReveal);
    sr.reveal('#profile', profReveal);
    sr.reveal('#edu', normalReveal);
    sr.reveal('#skills', skillsReveal);
    sr.reveal('#exp', normalReveal);
    sr.reveal('#contact', normalReveal);
  });
})(jQuery, window, document);
