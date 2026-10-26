'use strict';
const portfolioEvents = [
  {
    "title": "Florida College System Cybersecurity Competition",
    "description": "My first Florida College System Cybersecurity Competition—putting Digital Forensics & Incident Response (DFIR) and Blue Team skills into practice alongside my Valencia College teammates.",
    "url": "https://www.linkedin.com/feed/update/urn:li:activity:7520256538125586433/",
    "credit": "Photos from my competition post on LinkedIn.",
    "photos": [
      {
        "file": "fcs-team.jpg",
        "alt": "Our team together in front of the Florida College System Cybersecurity Competition backdrop",
        "caption": "The team behind the challenge.",
        "width": 480,
        "height": 360
      },
      {
        "file": "fcs-badge.jpg",
        "alt": "Tyree Payne’s competition badge representing Valencia College and team SunSec",
        "caption": "Representing Valencia College and SunSec.",
        "width": 480,
        "height": 640
      }
    ]
  },
  {
    "title": "Hack@UCF’s Horse Plinko Cyber Challenge",
    "description": "A day of hands-on cyber defense, problem-solving, and teamwork at Hack@UCF’s Horse Plinko Cyber Challenge.",
    "url": "https://www.linkedin.com/feed/update/urn:li:activity:7518000153165725697/",
    "credit": "Photos from Ioannis Xenofontos’s post, shared on my LinkedIn.",
    "photos": [
      {
        "file": "horse-plinko-team.jpg",
        "alt": "Team 29 working together at laptops during the Horse Plinko Cyber Challenge",
        "caption": "Team 29 getting to work.",
        "width": 480,
        "height": 640
      },
      {
        "file": "horse-plinko-scoreboard.jpg",
        "alt": "Projected service-status board showing challenge services in red and green",
        "caption": "Keeping an eye on the challenge’s service-status board.",
        "width": 480,
        "height": 360
      }
    ]
  }
];
function renderEvents(escapeText){
return '<h2>Events &amp; photos</h2><p class="section-lead">Learning beyond the lab: cybersecurity competitions, community, and a few moments along the way.</p><p class="content-tip">Select a photo to open the full image in a new tab.</p>'+portfolioEvents.map((event,i)=>'<section class="event-card" aria-labelledby="event-'+i+'"><span class="event-label">FIELD NOTES / 0'+(i+1)+'</span><h3 id="event-'+i+'">'+escapeText(event.title)+'</h3><p>'+escapeText(event.description)+'</p><div class="event-photos">'+event.photos.map(photo=>'<figure><a href="assets/events/'+photo.file+'" target="_blank" rel="noopener noreferrer" aria-label="View full photo: '+escapeText(photo.alt)+' (opens in a new tab)"><img src="assets/events/'+photo.file+'" alt="'+escapeText(photo.alt)+'" width="'+photo.width+'" height="'+photo.height+'" loading="lazy"><span class="photo-action">View photo ↗</span></a><figcaption>'+escapeText(photo.caption)+'</figcaption></figure>').join('')+'</div><p class="event-credit">'+escapeText(event.credit)+'</p><a class="event-source" href="'+event.url+'" target="_blank" rel="noopener noreferrer">Read the event post on LinkedIn ↗</a></section>').join('');
}
