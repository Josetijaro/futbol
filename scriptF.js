 let currentFilter = 'todos';

    function setFilter(status, element) {
      document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
      element.classList.add('active');
      currentFilter = status;
      filterEverything();
    }

    function filterEverything() {
      const searchText = document.getElementById('playerSearch').value.toLowerCase();
      const cards = document.querySelectorAll('.transfer-card');

      cards.forEach(card => {
        const playerName = card.querySelector('.player-name').innerText.toLowerCase();
        const clubNames = card.querySelector('.deal-flow').innerText.toLowerCase();
        const cardStatus = card.getAttribute('data-status');

        const matchesSearch = playerName.includes(searchText) || clubNames.includes(searchText);
        const matchesFilter = (currentFilter === 'todos' || cardStatus === currentFilter);

        if (matchesSearch && matchesFilter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }