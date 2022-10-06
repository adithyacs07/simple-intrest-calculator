const amount = document.getElementById("amount")
const intrestRate = document.getElementById("intrest-rate")
const years = document.getElementById("years")
const calculate = document.getElementById("calculate")
const result = document.getElementById("result")

calculate.addEventListener("click", () => {
    const simpleInterest = (amount.value * intrestRate.value * years.value)/100
    result.innerHTML=`
    <p>If you deposit ${amount.value}</p>
    <p>at an interest rate of ${intrestRate.value}%</p>
    <p>You will receive an amount of ${simpleInterest}</p>
    <p>In the year ${2022 + parseInt(years.value)}</p>`
})