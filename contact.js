function sendEmail() {
      var email = 'mathtoriyama@gmail.com';
      var subject = 'Hello';
      var body = 'This is the email body.';

      var mailtoUrl = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = mailtoUrl;
    }