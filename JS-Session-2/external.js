function calculateDaysAlive() {
    var yearOfBirth = document.getElementById('inputBirthYear').value;
    var monthOfBirth = document.getElementById('inputBirthMonth').value;
    var dayOfBirth = document.getElementById('inputBirthDay').value;
    var todaysDate = new Date();
    var birthDate = new Date(`${yearOfBirth}/${monthOfBirth}/${dayOfBirth}`);
    var diffTime = Math.abs(todaysDate.getTime() - birthDate.getTime());
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));    
    document.getElementById('output').innerHTML = `You are ${diffDays} days old!`;
}