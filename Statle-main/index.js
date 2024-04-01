import countries from "/countries.json"  assert  {type:'json'};
import autoComplete from "/autoComplete.js";



function Game(){

    let lengthOfCountriesList = countries.countrieList.length
    let x = getRandomInt(lengthOfCountriesList)
    let Flag = countries.countrieList[x].Flag;
    
    

    function changeFlag(url){
        document.getElementById("flag").style.backgroundImage = JSON.parse(url)
    } 

    
        
    document.getElementById("autoComplete").disabled = false

    function youLose(){
  
        document.getElementById("autoComplete").disabled = true
        changeFlag(Flag)
    }

    function youWin(){
        changeFlag(Flag)
        
    }
    
    function clearText(idOfElement){
        let Element =  document.getElementById(idOfElement);

        Element.innerText = ""

    }

    function addTextGeneral(idOfElement,Text){
        let Element =  document.getElementById(idOfElement);

        Element.innerText = Text

    }


    let NumberOfCountries = countries.countrieList.length

    let NumberOfIncorrectAnswers = 1

    function incorrectAnswer(NumberOfIncorrectAnswersVar){
        
     if (NumberOfIncorrectAnswersVar < 5){
        NumberOfIncorrectAnswers = NumberOfIncorrectAnswers + 1
        addText(NumberOfIncorrectAnswersVar + 1,UsedFacts)
       }
     else if(NumberOfIncorrectAnswersVar == 6){
        NumberOfIncorrectAnswers = NumberOfIncorrectAnswers + 1
     }
     else {
        console.log("You Lose")
        youLose()

     }
      
    }

    document.getElementById("resetButton").onclick = function(){
        /*Game()*/

        Game()
        console.log("HELLO")
        clearText("Fact-container-2")
        clearText("Fact-container-3")
        clearText("Fact-container-4")
        clearText("Fact-container-5")
        document.getElementById("flag").style.backgroundImage = "url('images/xx.svg')"
    }

    


    function getCountryName(x){
        let countryName = countries.countrieList[x].Country;
        return countryName
    }

    let countryNames = []

    function getCountryNames(NumberOfCountries){


    
    

    for (let i = 0; i < NumberOfCountries; i++){
        let countryName = getCountryName(i)
        

        countryNames.push(countryName)
        
        }
    
    return countryNames
    }

    const autoCompleteJS = new autoComplete(
    {
        placeHolder: "Country Name...",
        data: {
            src:  countryNames
        },
        resultItem: {
            highlight: true,
        }
    }
    );


   

   

    let UsedFacts = []


    let answer;

    function addText(x,array){
    let FactContainer =  document.getElementById("Fact-container-" + x);
    let Fact = getFacts()
    
    if (!array.includes(Fact)){
    
    array.push(Fact)
    FactContainer.innerText = Fact
    return Fact
    }
    else{
        return addText(x,array)

    }

    
    }

    function getAnswer(input){
        input = document.getElementById("autoComplete").value;

        return input

    }




    document.getElementById("submitButton").onclick = function(){
        let CorrectAnswer =  countries.countrieList[x].Country;
        answer = getAnswer(answer);

        if (answer == CorrectAnswer){
            youWin()
        }
        else{
            incorrectAnswer(NumberOfIncorrectAnswers)
        }
        

    
    } 

    function getNumberOfCategories(countryObject) {
        return Object.keys(countryObject).length;
    }
    function getRandomInt(maxOfNumbers){
        

    let randomNumber = Math.floor(Math.random() * maxOfNumbers)
    return randomNumber

    }

    



   


    function getLenghOfaObject(object){
    
    Array = Object.keys(object.countrieList[0])
    let lenghtOfObject = Array.length
    return lenghtOfObject

    


    }

    function getLength(X){
        let LenOfX = X.length
        return LenOfX

    }

    let randomFactIndex;

    function getFacts(){

        let Country = countries.countrieList[x].Country;
        let Population = countries.countrieList[x].Population;
        let GDP = countries.countrieList[x].GDP;
        let Language = countries.countrieList[x].Language;
        let Currency = countries.countrieList[x].Currency;
        let AverageTemperature = countries.countrieList[x]["Average temperature"];
        let Capital = countries.countrieList[x].Capital;
        let MostCommonReligion = countries.countrieList[x]["Most common religion"];
        let Government = countries.countrieList[x].Government;
        let Area = countries.countrieList[x].Area;
        let MajorIndustries = countries.countrieList[x]["Major-industries"];
        let LiteracyRate = countries.countrieList[x]["Literacy-rate"];
        let LifeExpectancy = countries.countrieList[x]["Life-expectancy"];
        let NationalDish = countries.countrieList[x]["National-dish"];


        let CountryTag = "Country";
        let PopulationTag = "Population";
        let GDPTag = "GDP";
        let LanguageTag = "Language";
        let CurrencyTag = "Currency";
        let AverageTemperatureTag = "Average Temperature";
        let CapitalTag = "Capital";
        let MostCommonReligionTag = "Most Common Religion";
        let GovernmentTag = "Government";
        let AreaTag = "Area";
        let MajorIndustriesTag = "Major Industries";
        let LiteracyRateTag = "Literacy Rate";
        let LifeExpectancyTag = "Life Expectancy";
        let NationalDishTag = "National Dish";

        let randomFacts = [Population, GDP, Language, Currency, AverageTemperature, Capital, MostCommonReligion, Government, Area, MajorIndustries, LiteracyRate, LifeExpectancy, NationalDish];
        let randomFactsTag = [PopulationTag, GDPTag, LanguageTag, CurrencyTag, AverageTemperatureTag, CapitalTag, MostCommonReligionTag, GovernmentTag, AreaTag, MajorIndustriesTag, LiteracyRateTag, LifeExpectancyTag, NationalDishTag];

        randomFactIndex = getRandomInt(randomFacts.length)



        

        

        
    
        

    
        let randomFactName = randomFactsTag[randomFactIndex]
        let  RandomFactInfo = randomFacts[randomFactIndex]
        
        let RandomFactReturned = randomFactName + " : " +  RandomFactInfo
        return RandomFactReturned
        

    }

    getFacts()


   





    let randomFactOne = getFacts()
    let randomFactTwo = getFacts()

    /*
    addText("Fact-container-1",UsedFacts)
    addText("Fact-container-2",UsedFacts)
    addText("Fact-container-3",UsedFacts)
    addText("Fact-container-4",UsedFacts)
    addText("Fact-container-5",UsedFacts)*/

    getCountryNames(NumberOfCountries)
    addText(1,UsedFacts)


    

    console.log(Flag)

    console.log(randomFactIndex)


    let listElements = document.getElementsByClassName("Ethan");

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('ListAuto')) 
        
        {
            let userInputAutoComplete = document.getElementById("autoComplete")
            userInputAutoComplete.value =  event.target.textContent
        }  
    });
    

    
}


Game()

