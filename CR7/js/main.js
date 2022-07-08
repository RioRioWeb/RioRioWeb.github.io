'use strict'

{
  const titleSelectItems = document.querySelectorAll('.titleSelect li');
  const teamTitlesContents = document.querySelectorAll('.content');

  titleSelectItems.forEach(item => {
    item.addEventListener('click', () => {
      titleSelectItems.forEach(item => {
        item.classList.remove('active');
      });
      item.classList.add('active');

      teamTitlesContents.forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('appear');
      });
      document.getElementById(item.dataset.id).classList.remove('hidden');
      document.getElementById(item.dataset.id).classList.add('appear');
    });
  });



  const eraItems = document.querySelectorAll('.era');

  eraItems.forEach(item => {
    item.addEventListener('click', () => {
      item.nextElementSibling.classList.toggle('hidden');
      item.nextElementSibling.classList.toggle('slideIn');
      item.classList.toggle('active');
    });
  });



  const imageChange = document.querySelector('.imageChange');

  imageChange.addEventListener('click', () => {
    document.getElementById('backImage1').src="../CR7/image/real_img.png"
  });



  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const menu = document.querySelector('.navMenu');

  open.addEventListener('click', () => {
    menu.classList.add('active');
  });

  close.addEventListener('click', () => {
    menu.classList.remove('active');
  });
}