function skillsMember() {
  const skills = document.getElementById('skills');
  const skillsMember = document.getElementById('skillsMember');

  if (skillsMember.style.display === 'none') {
    skillsMember.style.display = 'block';
    skills.innerHTML = 'Skills &#9650';
  } else {
    skillsMember.style.display = 'none';
    skills.innerHTML = 'Skills &#9660';
  }
}