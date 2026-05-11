
    const db = [
        { comp: 'UCL', type: 'tag-ucl', teams: 'Real Madrid vs. Man. City', date: '14 Abr 2026', venue: 'Bernabéu', result: '2 - 3', status: 'Finalizado' },
        { comp: 'UCL', type: 'tag-ucl', teams: 'Man. City vs. Real Madrid', date: '22 Abr 2026', venue: 'Etihad', result: '1 - 1', status: 'Finalizado' },
        { comp: 'LaLiga', type: 'tag-liga', teams: 'Real Madrid vs. FC Barcelona', date: '25 Abr 2026', venue: 'Bernabéu', result: '1 - 0', status: 'Finalizado' },
        { comp: 'LaLiga', type: 'tag-liga', teams: 'Atlético vs. Real Madrid', date: '03 May 2026', venue: 'Metropolitano', result: '2 - 2', status: 'Finalizado' },
        { comp: 'UCL', type: 'tag-ucl', teams: 'Arsenal vs. PSG', date: '30 May 2026', venue: 'Budapest', result: 'VS', status: 'FINAL CHAMPIONS' },
        { comp: 'LaLiga', type: 'tag-liga', teams: 'Sevilla FC vs. Real Madrid', date: '17 May 2026', venue: 'Sánchez Pizjuán', result: 'VS', status: 'Próximamente' },
        { comp: 'LaLiga', type: 'tag-liga', teams: 'Real Madrid vs. Real Sociedad', date: '24 May 2026', venue: 'Bernabéu', result: 'VS', status: 'Última Jornada' }
    ];

    let currentFilter = 'all';

    function render() {
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const grid = document.getElementById('grid');
        grid.innerHTML = '';

        const filtered = db.filter(m => {
            const matchesSearch = m.teams.toLowerCase().includes(searchTerm) || m.venue.toLowerCase().includes(searchTerm);
            const matchesComp = currentFilter === 'all' || m.comp === currentFilter;
            return matchesSearch && matchesComp;
        });

        filtered.forEach(m => {
            grid.innerHTML += `
                <div class="match-card">
                    <div class="team-info">
                        <span class="comp-tag ${m.type}">${m.comp}</span>
                        <h3>${m.teams}</h3>
                        <div class="meta-info">
                            <span>📅 ${m.date}</span>
                            <span>📍 ${m.venue}</span>
                        </div>
                    </div>
                    
                    <div class="score-center">
                        <div class="score-box">${m.result}</div>
                        <div class="status-label" style="color: ${m.status.includes('FINAL') ? 'var(--green)' : 'var(--muted)'}">
                            ${m.status}
                        </div>
                    </div>

                    <div style="text-align: right; font-size: 0.8rem; color: var(--muted);" class="hidden-mobile">
                        Previa del encuentro disponible en el canal exclusivo.
                    </div>
                </div>
            `;
        });
    }

    function filterComp(comp) {
        currentFilter = comp;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.innerText.toLowerCase().includes(comp.toLowerCase()) || (comp === 'all' && btn.id === 'btn-all'));
        });
        render();
    }


    render();
