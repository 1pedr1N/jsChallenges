var presidents = [
  {
    firstName: "Barak",
    lastName: "Obama",
    termLength: "8 years",
    party: "Democratic",
    yearsOfPresidency: "2009-Present",
  },
  {
    firstName: "George W.",
    lastName: "Bush",
    termLength: "8 years",
    party: "Republican",
    yearsOfPresidency: "2001-2009",
  },
  {
    firstName: "Bill",
    lastName: "Clinton",
    termLength: "8 years",
    party: "Democratic",
    yearsOfPresidency: "1993-2001",
  },
  {
    firstName: "George H. W.",
    lastName: "Bush",
    termLength: "4 years",
    party: "Repuplican",
    yearsOfPresidency: "1989-19934",
  },
  {
    firstName: "Ronald",
    lastName: "Reagan",
    termLength: "8 years",
    party: "Republican",
    yearsOfPresidency: "1981-1989",
  },
];

// 1. for ... of inteirar

for (let item of presidents) {
  //console.log(item.termLength);
}
//2. for each
presidents.forEach((item, index) => {
  //  console.log(`${index + 1} + ${item.firstName} + ${item.yearsOfPresidency}`);
});

//3. map
let names = presidents.map((item) => {
  item.presidents + "" + item.termLength;
});

//4. filter
let republican = presidents.filter((item) => item.party == "Republican");

//5. find

let findPresident = presidents.find((item) => item.firstName == "George H. W.");

//6. sort
let sort = presidents.sort((a, b) => {
  if (a.termLength < b.termLength) {
    return -1;
  } else if (a.termLength > b.termLength) {
    return 1;
  } else {
    return 0;
  }
});
