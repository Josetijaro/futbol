
    const data = [
        { name: "Real Madrid", pj: 37, v: 28, dg: 45, pts: 89, class: "z-ucl" },
        { name: "FC Barcelona", pj: 37, v: 26, dg: 38, pts: 84, class: "z-ucl" },
        { name: "Atlético Madrid", pj: 37, v: 23, dg: 25, pts: 78, class: "z-ucl" },
        { name: "Real Sociedad", pj: 37, v: 21, dg: 18, pts: 72, class: "z-ucl" },
        { name: "Athletic Club", pj: 37, v: 19, dg: 12, pts: 65, class: "z-uel" },
        { name: "Villarreal CF", pj: 37, v: 18, dg: 10, pts: 63, class: "z-uel" },
        { name: "Real Betis", pj: 37, v: 17, dg: 5, pts: 59, class: "z-uecl" },
        { name: "Girona FC", pj: 37, v: 16, dg: 3, pts: 55, class: "" },
        { name: "Sevilla FC", pj: 37, v: 14, dg: -1, pts: 50, class: "" },
        { name: "Valencia CF", pj: 37, v: 13, dg: -2, pts: 48, class: "" },
        { name: "RC Celta", pj: 37, v: 8, dg: -12, pts: 32, class: "z-desc" },
        { name: "Getafe CF", pj: 37, v: 7, dg: -18, pts: 30, class: "z-desc" },
        { name: "Granada CF", pj: 37, v: 6, dg: -28, pts: 25, class: "z-desc" }
    ];

    function loadTable() {
        const body = document.getElementById('table-content');
        body.innerHTML = data.map((eq, i) => `
            <tr class="${eq.class}">
                <td class="pos">${i + 1}</td>
                <td class="team-name">${eq.name}</td>
                <td class="hide-mobile">${eq.pj}</td>
                <td class="hide-mobile">${eq.v}</td>
                <td class="hide-mobile">${eq.dg > 0 ? '+' + eq.dg : eq.dg}</td>
                <td class="pts-col">${eq.pts}</td>
            </tr>
        `).join('');
    }

    loadTable();
