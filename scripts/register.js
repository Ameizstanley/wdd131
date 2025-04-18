
  document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // stop form from submitting by default


    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const language = document.getElementById('language').value.trim();

    
    if (!fname || !lname || !email || !language) {
      alert('Please fill out all required fields (First Name, Last Name, Email, Language).');
      return;
    }

    // ✅ STORE to LOCALSTORAGE
    const userData = {
      fname,
      lname,
      email,
      dob: document.getElementById('date').value,
      address: document.getElementById('address').value,
      language,
      level: document.getElementById('proficiency-level').value,
      course: document.getElementById('course-type').value,
      schedule: document.getElementById('schedule').value,
      heardFrom: getHeardFrom() // function below
    };

    localStorage.setItem('ameizUser', JSON.stringify(userData));

    
    alert(`Thank you, ${fname}! You have successfully registered for the ${language} course.`);

    
    window.location.href = 'thanks.html';
  });

  
  function getHeardFrom() {
    let sources = [];
    if (document.getElementById('friends').checked) sources.push('Friends');
    if (document.getElementById('family').checked) sources.push('Family');
    if (document.getElementById('referal').checked) sources.push('Referrals');
    return sources.join(', ');
  }