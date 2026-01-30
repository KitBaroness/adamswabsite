document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sms-form');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const commentInput = document.getElementById('comment');
  const defaultRecipient = '+13608241850';

  if (!form || !nameInput || !phoneInput || !commentInput) return;

  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const comment = commentInput.value.trim();

    if (!name || !phone || !comment) {
      alert('Please complete all fields before sending.');
      return;
    }

    const bodyParts = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Message: ${comment}`
    ];
    const body = encodeURIComponent(bodyParts.join('\n'));
    window.location.href = `sms:${defaultRecipient}?body=${body}`;
  });
});

