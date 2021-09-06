let menu = [
    {
      title: 'Appetizers',
      items: ['soup', 'salad'],
    },
    {
      title: 'Entrees',
      items: ['burger', 'pizza', 'sandwich'],
    },
    {
      title: 'Drinks',
      items: ['soda', 'water', 'beer'],
    },
];

let html = "";

for (let i = 0; i < menu.length; i++) {
    let section = menu[i];
    let items = section.items;
    html += `<h3>${section.title}</h3>`;
    html += `<ul>`;
    for (let j = 0; j < items.length; j++) {
      let item = items[j];
      html += `<li>${item}</li>`;
    }
    html += `</ul>`;
}
document.body.innerHTML = html;
