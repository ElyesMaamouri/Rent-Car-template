const openBtn = document.getElementById('open-filters');
  const closeBtn = document.getElementById('close-filters');
  const filtersMenu = document.getElementById('filtersMenu');

  openBtn.addEventListener('click', () => {
    filtersMenu.classList.add('active');
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    filtersMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
  });

  
  document.addEventListener('click', (e) => {
    if (
      filtersMenu.classList.contains('active') &&
      !filtersMenu.contains(e.target) &&
      !openBtn.contains(e.target)
    ) {
      filtersMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
  });