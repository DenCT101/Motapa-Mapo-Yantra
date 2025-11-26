const calcbtn = document.getElementById('calc');
const clearbtn = document.getElementById('clear');
const height = document.getElementById('ht');
const weight = document.getElementById('wt');
const result = document.getElementById('result');
const age = document.getElementById('age');
const radiobtn = document.getElementsByName('Gender')
calcbtn.addEventListener("click",()=>{
    const heightVal = parseFloat(height.value);
    const weightVal = parseFloat(weight.value);
    const ageVal = parseFloat(age.value);
    if (isNaN(ageVal)||ageVal<2||ageVal>100){
        result.textContent = "Please input valid age"
        return;
    }
    const selectedGender = document.querySelector('input[name="Gender"]:checked');
    if (!selectedGender) {
        result.textContent = "Please select a gender.";
        return;
    }
    const genderVal = selectedGender.value;

    if (!heightVal || !weightVal || heightVal <= 0 || weightVal <= 0) {
        result.textContent = "Please enter valid height (cm) and weight (kg).";
        return;
    }
    const bmi = (weightVal/(heightVal*heightVal))*10000;
    result.textContent = "Your BMI value is "+bmi;
})

clearbtn.addEventListener("click",()=>{
    height.value = "";
    weight.value = "";
    age.value = "";
    result.textContent = "";
})