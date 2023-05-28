let menu = ['Kadhai paneer', 'Butter chicken', 'Fish curry', 'Sandwich', 'Chicken Momos', 'Gulab jamun',
    'malai chaap', 'mutton', 'chicken biryani', 'pulao', 'grilled chicken'];


let vegMenu = menu.filter(isVeg);

// let nonVegMenu=[];

function isVeg(item) {
    if (item.toLowerCase().indexOf('chicken') != -1 ||
        item.toLowerCase().indexOf('mutton') != -1 ||
        item.toLowerCase().indexOf('egg') != -1 ||
        item.toLowerCase().indexOf('fish') != -1 ) {
        return false;
    }
    else {
        return true;
    }
}


console.log(vegMenu);