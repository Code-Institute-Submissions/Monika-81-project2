/**
 * Quiz questions. Flag source credit: https://flagpedia.net/
 */
//Easy level questions, 30 in total.
const easyQuestions = [ 
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/cn.png" alt="China"></picture> `,
      a: "China", b: "Italy", c: "India", d: "Peru", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/in.png" alt="India"></picture> `,
      a: "Norway", b: "Israel", c: "India", d: "Sri Lanka", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/au.png" alt="Australia"></picture> `,
      a: "Sweden", b: "Cuba", c: "South Africa", d: "Australia",answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/us.png" alt="United States"></picture> `,
      a: "United States", b: "Canada", c: "Malaysia", d: "Belgium", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ie.png" alt="Ireland"></picture> `,
      a: "France", b: "Ireland", c: "Netherlands", d: "Jamaica", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ua.png" alt="Ukraine"></picture> `,
      a: "Spain", b: "Ukraine", c: "South Korea", d: "Kenya", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/it.png" alt="Italy"></picture> `,
      a: "Portugal", b: "Bahamas", c: "Italy", d: "Malaysia", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/es.png" alt="Spain"></picture> `,
      a: "Mexico", b: "Ireland", c: "Egypt", d: "Spain", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/jp.png" alt="Japan"></picture> `,
      a: "Japan", b: "Taiwan", c: "Georgia", d: "Honduras", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ca.png" alt="Canada"></picture> `,
      a: "Japan", b: "Canada", c: "New Zealand", d: "Germany", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/br.png" alt="Brazil"></picture> `,
      a: "Austria", b: "Guatemala", c: "Brazil", d: "Germany", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ar.png" alt="Argentina"></picture> `,
      a: "Argentina", b: "Panama", c: "Singapore", d: "Finland", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/dk.png" alt="Denmark"></picture> `,
      a: "Poland", b: "Israel", c: "Denmark", d: "Serbia", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/fr.png" alt="France"></picture> `,
      a: "Laos", b: "El Salvador", c: "Slovakia", d: "France", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/de.png" alt="Germany"></picture> `,
      a: "Germany", b: "Chile", c: "Mauritius", d: "Iceland", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/se.png" alt="Sweden"></picture> `,
      a: "Portugal", b: "Sweden", c: "Peru", d: "China", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/gb.png" alt="United Kingdom"></picture> `,
      a: "Spain", b: "United Kingdom", c: "Japan", d: "Nigera", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/gr.png" alt="Greece"></picture> `,
      a: "Venezuela", b: "Indonesia", c: "Greece", d: "Canada", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/za.png" alt="South Africa"></picture> `,
      a: "Vietnam", b: "Denmark", c: "France", d: "South Africa", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/mx.png" alt="Mexico"></picture> `,
      a: "Mexico", b: "Burma", c: "Iran", d: "Ghana", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/il.png" alt="Israel"></picture> `,
      a: "Japan", b: "Israel", c: "Switzerland", d: "Australia", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/tr.png" alt="Turkey"></picture> `,
      a: "Thailand", b: "Bolivia", c: "Turkey", d: "Romania", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/cl.png" alt="Chile"></picture> `,
      a: "Chile", b: "Italy", c: "Pakistan", d: "Spain", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/be.png" alt="Belgium"></picture> `,
      a: "Norway", b: "Bangladesh", c: "Belgium", d: "Indonesia", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/pt.png" alt="Portugal"></picture> `,
      a: "France", b: "Brazil", c: "South Africa", d: "Portugal", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/fi.png" alt="Finland"></picture> `,
      a: "Finland", b: "Colombia", c: "Malaysia", d: "Tanzania", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/no.png" alt="Norway"></picture> `,
      a: "France", b: "Norway", c: "Turkey", d: "Nicaragua", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/th.png" alt="Thailand"></picture> `,
      a: "Bulgaria", b: "Thailand", c: "South Korea", d: "Namibia", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/sa.png" alt="Saudi Arabia"></picture> `,
      a: "United Kingdom", b: "Aruba", c: "Saudi Arabia", d: "Cambodia", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/kr.png" alt="South Korea"></picture> `,
      a: "Poland", b: "Ireland", c: "Kazakhstan", d: "South Korea", answer: 'd'}
    ]; 
//Medium level questions, 30 in total.
  const mediumQuestions = [
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/eg.png" alt="Egypt"></picture> `,
      a: "Egypt", b: "Azerbaijan", c: "Nepal", d: "Peru", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/tz.png" alt="Tanzania"></picture> `,
      a: "Iran", b: "Moldova", c: "Tanzania", d: "Sri Lanka", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ke.png" alt="Kenya"></picture> `,
      a: "Iceland", b: "Cyprus", c: "Guam", d: "Kenya", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/dz.png" alt="Algeria"></picture> `,
      a: "Algeria", b: "Haiti", c: "Albania", d: "San Marino", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ma.png" alt="Morocco"></picture> `,
      a: "Hungary", b: "Morocco", c: "Angola", d: "Fiji", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/mu.png" alt="Mauritius"></picture> `,
      a: "Qatar", b: "Mauritius", c: "Honduras", d: "Andorra", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/tn.png" alt="Tunisia"></picture> `,
      a: "Puerto Rico", b: "Slovakia", c: "Tunisia", d: "Malaysia", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ly.png" alt="Libya"></picture> `,
      a: "Venezuela", b: "Cambodia", c: "Pakistan", d: "Libya", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/hu.png" alt="Hungary"></picture> `,
      a: "Hungary", b: "Romania", c: "Maldives", d: "Algeria", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/bg.png" alt="Bulgaria"></picture> `,
      a: "Greenland", b: "Bulgaria", c: "Paraguay", d: "Czechia", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/at.png" alt="Austria"></picture> `,
      a: "Uruguay", b: "Monaco", c: "Austria", d: "Myanmar", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/rs.png" alt="Serbia"></picture> `,
      a: "Serbia", b: "Panama", c: "Latvia", d: "Mali", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/al.png" alt="Albania"></picture> `,
      a: "Sudan", b: "Jordan", c: "Albania", d: "Mauritius", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/mk.png" alt="North Macedonia"></picture> `,
      a: "Burundi", b: "El Salvador", c: "Lichtenstein", d: "North Macedonia", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/cy.png" alt="Cyprus"></picture> `,
      a: "Cyprus", b: "Indonesia", c: "Madagascar", d: "Iceland", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/nz.png" alt="New Zealand"></picture> `,
      a: "Ecuador", b: "New Zealand", c: "Singapore", d: "Philippines", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/id.png" alt="Indonesia"></picture> `,
      a: "Malta", b: "Indonesia", c: "Uruguay", d: "Estonia", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/pk.png" alt="Pakistan"></picture> `,
      a: "Colombia", b: "Syria", c: "Pakistan", d: "Senegal", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/vn.png" alt="Vietnam"></picture> `,
      a: "Rwanda", b: "HongKong", c: "Togo", d: "Vietnam", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ir.png" alt="Iran"></picture> `,
      a: "Iran", b: "Laos", c: "Albania", d: "Bulgaria", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/my.png" alt="Malaysia"></picture> `,
      a: "French Polynesia", b: "Malaysia", c: "Luxembourg", d: "Costa Rica", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/bt.png" alt="Bhutan"></picture> `,
      a: "Nepal", b: "Uruguay", c: "Bhutan", d: "Lesotho", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/kh.png" alt="Cambodia"></picture> `,
      a: "Cambodia", b: "Chad", c: "Mauritana", d: "Suriname", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/lk.png" alt="Sri Lanka"></picture> `,
      a: "Tonga", b: "Guyana", c: "Sri Lanka", d: "Seychelles", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/kz.png" alt="Kazakhstan"></picture> `,
      a: "Armenia", b: "Mongolia", c: "Burnei", d: "Kazakhstan", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/jm.png" alt="Jamaica"></picture> `,
      a: "Jamaica", b: "Colombia", c: "Malawi", d: "Tanzania", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/cu.png" alt="Cuba"></picture> `,
      a: "Uganda", b: "Cuba", c: "Mozambique", d: "Belize", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/is.png" alt="Iceland"></picture> `,
      a: "Norway", b: "Iceland", c: "Georgia", d: "Montenegro", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ro.png" alt="Romania"></picture> `,
      a: "Moldova", b: "Colombia", c: "Romania", d: "Lithuania", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/cz.png" alt="Czechia"></picture> `,
      a: "Slovakia", b: "Panama", c: "North Korea", d: "Czechia", answer: 'd'}
    ];
//Hard level questions, 30 in total.  
const hardQuestions = [
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/bi.png" alt="Burundi"></picture> `,
      a: "Burundi", b: "Moldova", c: "San Marino", d: "Guam", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/bf.png" alt="Burkina Faso"></picture> `,
      a: "Guyana", b: "Palau", c: "Burkina Faso", d: "Angola", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/et.png" alt="Ethiopia"></picture> `,
      a: "Bhutan", b: "Belize", c: "Eritrea", d: "Ethiopia", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/gh.png" alt="Ghana"></picture> `,
      a: "Ghana", b: "Haiti", c: "Uzbekistan", d: "Colombia", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ls.png" alt="Lesotho"></picture> `,
      a: "Sint Maarten", b: "Lesotho", c: "Liberia", d: "Fiji", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/rw.png" alt="Rwanda"></picture> `,
      a: "Turkmenistan", b: "Rwanda", c: "Solomon Islands", d: "Mozambique", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ug.png" alt="Uganda"></picture> `,
      a: "Zimbabwe", b: "Venezuela", c: "Uganda", d: "Oman", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ao.png" alt="Angola"></picture> `,
      a: "Tajikistan", b: "Haiti", c: "Kuwait", d: "Angola", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/lr.png" alt="Liberia"></picture> `,
      a: "Liberia", b: "Bermuda", c: "Belize", d: "Kiribati", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/om.png" alt="Oman"></picture> `,
      a: "Rwanda", b: "Oman", c: "Afghanistan", d: "DR Congo", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/bs.png" alt="Bahamas"></picture> `,
      a: "Suriname", b: "Botswana", c: "Bahamas", d: "Myanmar", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/bz.png" alt="Belize"></picture> `,
      a: "Belize", b: "Grenada", c: "Cook Islands", d: "Cameron", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/hn.png" alt="Honduras"></picture> `,
      a: "Djibouti", b: "Micronesia", c: "Honduras", d: "Mauritius", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/gt.png" alt="Guatemala"></picture> `,
      a: "Saint Lucia", b: "Nicaragua", c: "Lichtenstein", d: "Guatemala", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/dm.png" alt="Dominica"></picture> `,
      a: "Dominica", b: "Cura??ao", c: "Madagascar", d: "Papua New Guinea", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/az.png" alt="Azerbaijan"></picture> `,
      a: "Kyrgyzstan", b: "Azerbaijan", c: "Haiti", d: "Gambia", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/qa.png" alt="Qatar"></picture> `,
      a: "Senegal", b: "Qatar", c: "Uruguay", d: "Brunei", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/uz.png" alt="Uzbekistan"></picture> `,
      a: "Azerbaijan", b: "Timor-leste", c: "Uzbekistan", d: "Comoros", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ye.png" alt="Yemen"></picture> `,
      a: "Kuwait", b: "Dominican Republic", c: "Afghanistan", d: "Yemen", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/jo.png" alt="Jordan"></picture> `,
      a: "Jordan", b: "Laos", c: "Malawi", d: "Sudan", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/gp.png" alt="Guadeloupe"></picture> `,
      a: "French Polynesia", b: "Guadeloupe", c: "Eswatini", d: "Gabon", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ws.png" alt="Samoa"></picture> `,
      a: "Seychelles", b: "R??union", c: "Samoa", d: "Tuvalu", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/pg.png" alt="Papua New Guinea"></picture> `,
      a: "Papua New Guinea", b: "Mongolia", c: "Mauritana", d: "Tonga", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/vu.png" alt="Vanuatu"></picture> `,
      a: "Oman", b: "Guyana", c: "Vanuatu", d: "Togo", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/fj.png" alt="Fiji"></picture> `,
      a: "Namibia", b: "Martinique", c: "Anguilla", d: "Fiji", answer: 'd'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/gy.png" alt="Guyana"></picture> `,
      a: "Guyana", b: "Sierra Leone", c: "Nauru", d: "Saint Kitts and Nevis", answer: 'a'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/sr.png" alt="Suriname"></picture> `,
      a: "Guinea", b: "Suriname", c: "Puerto Rico", d: "Belize", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/ad.png" alt="Andorra"></picture> `,
      a: "Tokelau", b: "Andorra", c: "New Caledonia", d: "Moldova", answer: 'b'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/uy.png" alt="Uruguay"></picture> `,
      a: "Sint Maarten", b: "Nicaragua", c: "Uruguay", d: "Rwanda", answer: 'c'},
    { question: ` <picture><img type="image/png" src="./assets/image/quiz/tt.png" alt="Trinidad and Tobago"></picture> `,
      a: "C??te d'Ivoire", b: "Montenegro", c: "Uganda", d: "Trinidad and Tobago", answer: 'd'}
    ];