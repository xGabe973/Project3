import React from "react";
import "./style.css";

function calculateBmi() {
    var weight = document.bmiForm.weight.value
    var height = document.bmiForm.height.value
    if(weight > 0 && height > 0){	
    var finalBmi = weight/(height/100*height/100)
    document.bmiForm.bmi.value = finalBmi
    if(finalBmi < 18.5){
    document.bmiForm.meaning.value = "That you are too thin."
    }
    if(finalBmi > 18.5 && finalBmi < 25){
    document.bmiForm.meaning.value = "That you are healthy."
    }
    if(finalBmi > 25){
    document.bmiForm.meaning.value = "That you have overweight."
    }
    }
    else{
    alert("Please Fill in everything correctly")
    }
    }
    
function Form(props) {
    return (
        <div>
        <form className="bmiForm">
            <div className="form-group">
                <label htmlFor="weight">Weight:</label>
                <input
                onChange={props.handleInputChange}
                value={ props.weight }
                name="weight"
                type="integer"
                className="form-control"
                placeholder="Enter your weight (kg)"
                id="weight"
                />
                <label htmlFor="height">Height:</label>
                <input
                onChange={props.handleInputChange}
                value={ props.height }
                name="height"
                type="integer"
                className="form-control"
                placeholder="Enter your height (cm)"
                id="height"
                />
                <button type="submit" onClick={ calculateBmi } className="btn btn-success">
                    Calculate
                </button>
                </div>
                </form>
                <form name ="bmiForm">
            Your BMI: <input type="text" name="bmi" size="10"/><br />
            This Means: <input type="text" name="meaning" size="25"/><br />
            <input type="reset" value="Reset" />
            </form>
            </div> 




    )
}
    
export default Form;