// Use the below info to create HTML using tagged template literal
const abbreviation = {
  HTML: "Hyper Text Markup Language",
  CSS: "Cascading Style Sheets",
  JS: "JavaScript"
};



let body = document.querySelector('body');

function abbrFunction(strings, ...values) {
  console.log(values);
  console.log(strings);
  let abbriviate = values.map(value => {
    return `<abbr title = "${abbreviation[value]}">${value}</abbr>`
  })
  return values;
  console.log(values);
    return strings.reduce((sentence, string, i) => `${sentence}${string}${abbriviate[i] || ''}`, '');


}

let htmlAbbr = abbrFunction `${HTML}, ${CSS},${JS}`;




