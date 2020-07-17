import React from 'react';
import './Skills.css';

//SCHOOL INFORMATION
const workExperience = [
  {
    name: 'Missouri State University',
    degree: 'B.S. Marketing / Advertising',
    location: 'Springfield, MO'
  },
  {
    name: 'University of Washington PCE',
    degree: 'Certificate - HTML 5, CSS 3, Javascript for Responsive Web Design',
    location: 'Online'
  },
  {
    name: 'Red Rocks Community College',
    degree: 'Certificate - Revit Architecture',
    location: 'Golden, CO'
  },
];

const techSkills = [
  {
    skill: 'HTML5',
    level: 3,
    school: 'UW'
  },
  {
    skill: 'CSS3',
    level: 3,
    school: 'UW'
  },
  {
    skill: 'Javascript',
    level: 3,
    school: 'UW / Self'
  },
  {
    skill: 'React JS',
    level: 2,
    school: 'Udemy / Self'
  },
  {
    skill: 'PHP',
    level: 1,
    school: 'Udemy'
  },
  {
    skill: 'MySQL',
    level: 1,
    school: 'Udemy'
  },
  {
    skill: 'Microsoft Office',
    level: 3,
    school: 'MSU'
  },
  {
    skill: 'Adobe Photoshop',
    level: 2,
    school: 'Self'
  }
];

const starFill = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>

const starEmpty = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>

let displaySchool = workExperience.map(school => {
  return(
    <ul className='school'>
      <li>
        {school.name}
      </li>
      <li>
        {school.degree}
      </li>
    </ul>
  )
});

let displaySkills = techSkills.map(skill => {

  let starsLevel = [];
  for(let i=0; i<4; i++) {
    i < skill.level ? starsLevel.push(starFill) : starsLevel.push(starEmpty);
  }

  return(
    <p className='skill_item'>
      {skill.skill}
      <p className='skill_item_sub_menu'>
        <span>Skill: {skill.skill}</span>
        <span>{starsLevel}</span>
        <span>Where: {skill.school}</span>
      </p>
    </p>

  )
})

export function Skills(props) {

  return(
    <article id='skills' className='site_article'>
      <h2>Where and what I've learned.</h2>
      <header id='skills_header'>
        <h3> Where I've Learned</h3>
        <h3> What I know </h3>
      </header>
      <section className='skills_row'>
        <section className='education'>
          {displaySchool}
        </section>
        <aside className='tech_skills'>
          <h3>What I know</h3>
          <section className='tech_skill_items'>
            {displaySkills}
          </section>
        </aside>
      </section>
    </article>
  )
}
