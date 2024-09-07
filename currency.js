let curr = () => {
  const from1 = document.getElementById("from").value;
  const to1 = document.getElementById("to").value;
  if (from1 === to1) {
    alert("From and To currency cannot be same");
    return;
  }
  console.log("To currency is: " + to1);
  console.log("Base currency is: " + from1);
  const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_EY35TNv5SDJOHsb95ncqHSx5VIHoL4MFOdmFvo2G&base_currency=${from1}`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res.data[to1].value);
      document.getElementById("para1").innerText =
        res.data[to1].value * document.getElementById("amt").value;
    });
};
for (const code in countryList) {
  const option = document.createElement("option");
  option.value = code;
  option.text = code;
  document.getElementById("from").add(option);

  const option2 = document.createElement("option");
  option2.value = code;
  option2.text = code;
  document.getElementById("to").appendChild(option2);
}

document.getElementById("btn").addEventListener("click", () => {
  curr();
});

const select1 = document.getElementById("from");
select1.addEventListener("change", (evt) => {
  flag(evt.target);
});

const select2 = document.getElementById("to");
select2.addEventListener("change", (evt2) => {
  flag2(evt2.target);
});

let dropdown = document.getElementById("from");
dropdown.value = "INR";
document.getElementById("img1").src = `https://flagsapi.com/IN/shiny/32.png`;
const flag = (element1) => {
  let code = element1.value;
  let cod = countryList[code];
  let newSrc1 = `https://flagsapi.com/${cod}/shiny/32.png`;
  let img1 = document.getElementById("img1");
  img1.src = newSrc1;
};
let dropdown2 = document.getElementById("to");
dropdown2.value = "USD";
document.getElementById("img2").src = `https://flagsapi.com/US/shiny/32.png`;
const flag2 = (element2) => {
  let code2 = element2.value;
  let cod2 = countryList[code2];
  let newSrc2 = `https://flagsapi.com/${cod2}/shiny/32.png`;
  let img2 = document.getElementById("img2");
  img2.src = newSrc2;
};
flag();
flag2();
