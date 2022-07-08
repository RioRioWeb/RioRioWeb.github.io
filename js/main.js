'use strict';
{
  const real = document.querySelector('header img');

  real.addEventListener('click', () => {
    document.getElementById('backImg').src = "../image/real_img.png";
  });

  const open = document.getElementById('open');

  open.addEventListener('mouseenter', () => {
    open.classList.add('show');
  });

  open.addEventListener('mouseleave', () => {
    open.classList.remove('show');
  });

  const navMenu = document.querySelector('.navMenu');

  open.addEventListener('click', () => {
    navMenu.classList.add('show');
  });


  const close = document.getElementById('close');

  close.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });

  const titleSelects = document.querySelectorAll('.titleSelect li');

  titleSelects.forEach(titleSelect => {
    titleSelect.addEventListener('click', () => {
      titleSelects.forEach(titleSelect => {
        titleSelect.classList.remove('active');
      });
      titleSelect.classList.add('active');

      titleSelects.forEach(titleSelect => {
        document.getElementById(titleSelect.dataset.id).classList. add('hidden');
      });
      document.getElementById(titleSelect.dataset.id).classList.remove('hidden');
      document.getElementById(titleSelect.dataset.id).classList.add('active');
    });
  });
  
  const eras = document.querySelectorAll('.era');

  eras.forEach(era => {
      era.addEventListener('click', ()=> {
        console.log(era.nextElementSibling);
        era.nextElementSibling.classList.toggle('hidden');
        era.classList.toggle('active');
      });
  });
}

 