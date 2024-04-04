
// 1. Daxil olunan ədədin sadə yoxsa mürəkkəb olduğunu tapın.
let ededd = +prompt("Ədəddi daxil edin: ");
let isPrime = true;

if (ededd <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(ededd); i++) {
    if (ededd % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(ededd + " sadə ədəddir.");
} else {
  console.log(ededd + " mürəkkəb ədəddir.");
}
// 2. Daxil olunan ədədin mükəmməl olub olmadığını tapın.

let eded = +prompt("Ədədi daxil edin: ");
let sum = 0;

for (let i = 1; i <= eded / 2; i++) {
  if (eded % i === 0) {
    sum += i;
  }
}

if (sum === eded && sum !== 0) {
  console.log(eded + " mükəmməl ədəddir.");
} else {
  console.log(eded + " mükəmməl ədəd deyil.");
}

// 3. Daxil olunan 2 ədəd arasındakı mükəmməl ədədləri göstərin.

let eded1 = +prompt("Ededi1 daxil edin: ");
let eded2 = +prompt("Ededi2 daxil edin: ");

console.log(`${eded1} və ${eded2} arasındakı mükəmməl ədədlər: `);

for (let i = eded1; i <= eded2; i++) {
  let sum = 0;
  for (let bolen = 1; bolen < i; bolen++) {
    if (i % bolen === 0) {
      sum += bolen;
    }
  }
  if (sum === i) {
    console.log(i);
  }
}


// 4. Daxil olunan 2 ədəd arasındakı sadə ədədləri göstərin.

let eded3 = +prompt("Ededi3 daxil edin: ");
let eded4 = +prompt("Ededi4 daxil edin: ");

console.log(`${eded1} və ${eded2} arasındakı sadə ədədlər: `);

for (let i = eded3; i <= eded4; i++) {
  let isPrime = true;
  if (i <= 1) {
    isPrime = false;
  } else {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    console.log(i);
  }
}


// 5. Daxil olunan 2 ədəd arasındakı sonu 7 ilə bitən ədədləri göstərin

let eded5 = +prompt("Ededi5 daxil edin: ");
let eded6 = +prompt("Ededi6 daxil edin: ");

console.log(`${eded5} və ${eded6} arasındakı sonu 7 ilə bitən ədədlər: `);

for (let i = eded5; i <= eded6; i++) {
  if (i % 10 === 7) {
    console.log(i);
  }
}