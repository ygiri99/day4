const request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all');

request.send(null);

request.onload = function(){
    const countries = JSON.parse(request.responseText);
   // console.log(countries);
    let i = 1;
    // getting each country data using for of
    for(var country of  countries){     
      // counting each country 
        console.log("\n\n",i++ +":");
        const flagurl = country.flags.png;
        //flagimage url
        console.log(flagurl);   
        //consoling country name, population , region, subregion and also capital , language.  
        const {flag,name:{common},region,subregion,population} = country;
        console.log(flag);
        console.log("Name :",common);
        const capit = country.capital;
        if(Array.isArray(capit) !== false)
        console.log("capital:", capit[0]);
        else
        console.log("capital:", undefined);
        console.log("languages:");
        for (const key in country.languages) {
            console.log(`             ${country.languages[key]}`)
          }  
        console.log("Population :",population);
        console.log("Region :",region," \nSubregion :",subregion);
        }
    
}