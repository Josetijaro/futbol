const newsData = [
        {
            category: "Mercado",
            title: "¿Mbappé busca nuevos aires en la Premier?",
            excerpt: "Tras la eliminación en Champions, crecen los rumores sobre una posible salida del astro francés hacia el Liverpool o Arsenal.",
            date: "Hace 2 horas",
            img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600"
        },
        {
            category: "Real Madrid",
            title: "Vinícius Jr. rompe récords de asistencias",
            excerpt: "El brasileño cierra una temporada histórica consolidándose como el máximo asistente de las grandes ligas europeas.",
            date: "Hace 5 horas",
            img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=600"
        },
        {
            category: "Fichajes",
            title: "Guardiola insiste por Jamal Musiala",
            excerpt: "El Manchester City prepara una oferta récord para convencer al Bayern de soltar a su joven estrella este verano.",
            date: "Hace 10 horas",
            img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=600"
        },
        {
            category: "Lesiones",
            title: "Alarma por Lamine Yamal",
            excerpt: "El extremo del Barça sufrió una fuerte contusión. Los médicos trabajan a contrarreloj para que llegue a la Eurocopa.",
            date: "Hace 1 día",
            img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=600"
        },
        {
            category: "Estadios",
            title: "El Camp Nou abre al 100% de capacidad",
            excerpt: "El FC Barcelona confirma que las obras han finalizado. El próximo Clásico se jugará en un estadio totalmente renovado.",
            date: "Hace 2 días",
            img: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80&w=600"
        },
        {
            category: "Internacional",
            title: "Haaland y la Bota de Oro 2026",
            excerpt: "El noruego se encamina a su tercer galardón consecutivo tras una cifra goleadora que asusta en la Premier League.",
            date: "Hace 2 días",
            img: "images (1).jpg"
        }
    ];

    function displayNews(filter = "") {
        const grid = document.getElementById('newsGrid');
        grid.innerHTML = "";

        const filtered = newsData.filter(n => 
            n.title.toLowerCase().includes(filter.toLowerCase()) || 
            n.category.toLowerCase().includes(filter.toLowerCase())
        );

        filtered.forEach(news => {
            grid.innerHTML += `
                <div class="news-card" onclick="alert('Cargando artículo completo...')">
                    <div class="news-img-wrapper">
                        <img src="${news.img}" class="news-img" alt="Noticia">
                    </div>
                    <div class="news-content">
                        <span class="news-category">${news.category}</span>
                        <h2 class="news-title">${news.title}</h2>
                        <p class="news-excerpt">${news.excerpt}</p>
                        <div class="news-footer">
                            <span>🕒 ${news.date}</span>
                            <span class="read-more">Leer más →</span>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    function filterNews() {
        const val = document.getElementById('newsSearch').value;
        displayNews(val);
    }
    displayNews();