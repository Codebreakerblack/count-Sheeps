function countSheeps(list) {
    const count = list.filter(Boolean).length;
        if (count > 0) {
            return `There are ${count} sheep in total`;
        }
        else {
            return `UPS!!! Wolves have eaten the sheep`;
        }
}         

const list1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]
console.log(countSheeps(list1));

const list2 = [ false, false, false ]
console.log(countSheeps(list2));