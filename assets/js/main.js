/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

    document.getElementById('instagram').addEventListener('click', function() {
      window.open('https://www.instagram.com/addanki.bharadwaj/', '_blank');
    });

    document.getElementById('linkedin').addEventListener('click', function() {
      window.open('https://www.linkedin.com/in/addanki-bharadwaj-39940b219/', '_blank');
    });

    document.getElementById('github').addEventListener('click', function() {
      window.open('https://github.com/addankibharadwaj', '_blank');
    });

    document.getElementById('instagramfoot').addEventListener('click', function() {
      window.open('https://www.instagram.com/addanki.bharadwaj/', '_blank');
    });

    document.getElementById('linkedinfoot').addEventListener('click', function() {
      window.open('https://www.linkedin.com/in/addanki-bharadwaj-39940b219/', '_blank');
    });

    document.getElementById('githubfoot').addEventListener('click', function() {
      window.open('https://github.com/addankibharadwaj', '_blank');
    });

    document.querySelectorAll('.download-btn').forEach(button => {
      button.addEventListener('click', function() {
          window.location.href = 'assets/files/myresume.docx';
      });
    });

    document.getElementById('sendemailtome').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the form values
        const name = document.getElementById('sendername').value.trim();;
        const email = document.getElementById('senderemail').value.trim();;
        const sendmessage = document.getElementById('sendermsg').value.trim();;

        if (!name || !email || !sendmessage) {
            alert('Oops..! Please fill in all fields and hit send.');
            return;
        }

        // Create the mailto link
        const subject = encodeURIComponent('You are Reaching out..!');
        const body = encodeURIComponent(`Hi Bharadwaj,\n\n${sendmessage}\n\nRegards,\n${name}\n${email}`);

        // Open the email client with pre-filled information
        window.location.href = `mailto:bharadwaj.addanki555@gmail.com?subject=${subject}&body=${body}`;
    });



/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Integration Developer.","Project Engineer."],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)