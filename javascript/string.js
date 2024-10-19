function StringMethod()
{ 
    let StrText = "JavaScript is the world's most popular programming language";
    let TrimValue = "   JavaScript Language   ";
    let paddVal = "2";
    let concatText = "In the Current";
    var replaceText = "JavaScript is the world's most popular programming language and most useful language";   
    var arrayMethod = "HTML , CSS, JS | REACT";
    

    console.log("CharAt Method : ",StrText.charAt(5));

    console.log("At Method : ",StrText.at(-5));
   
    console.log("CharCodeAt Method : ",StrText.charCodeAt(5));
     
    console.log("Using Property access array : ",StrText[4]);
    
    console.log("Slice Method : ",StrText.slice(18,25));

    console.log("Slice Method : ",StrText.slice(14));

    console.log("Slice Method : ",StrText.slice(-21, -9));

    console.log("SubString Method : ",StrText.substring(18,25));

    console.log("SubString Method : ",StrText.substring(-16,11));
    
    console.log("SubStr Method : ",StrText.substr(25, 34));
 
    console.log("Concatenation of Two Strings Method 1 : ", StrText+ " "+concatText)
    
    console.log("Concatenation of Two Strings Method 2 : ", StrText.concat(" ",concatText))
        
    console.log("Concatenation of Two Strings Method 3 : ", `${StrText} ${concatText}`);
    
    console.log("Upper Case Method : ", StrText.toUpperCase());
    
    console.log("Lower Case Method : ", StrText.toLowerCase());
     
    console.log("TrimStart Method :",TrimValue.trimStart());
    
    console.log("TrimEnd Method :",TrimValue.trimEnd());
    
    console.log("Trim Method :",TrimValue.trim());
    
    console.log("Padd Starting Method with 0 : ",paddVal.padStart(4,'0'));
    
    console.log("Padd Starting Method with x : ",paddVal.padStart(4,'x'));
    
    console.log("Padd Ending Method with 0 : ",paddVal.padEnd(5,'0'));
    
    console.log("Padd Ending Method with x : ",paddVal.padEnd(5,'x'));
        
    console.log("Repeating Method : ",TrimValue.repeat(5))
    
    console.log("Replace Method : ", replaceText.replace('most','Very'));
    
    console.log("Replace Method using insensitive : ", replaceText.replace(/most/i,'Very'));
    
    console.log("Replace Method using global match : ", replaceText.replace(/most/g,'Very'));
     
    console.log("ReplaceAll Method : ", replaceText.replaceAll('most','Very'));
    
    console.log("ReplaceAll Method : ", replaceText.replaceAll(/most/g,'Very'));
    
    console.log("Split Method using no space : ",arrayMethod.split(""))

    console.log("Split Method using space : ",arrayMethod.split(" "))
    
    console.log("Split Method using comma : ",arrayMethod.split(","))
    
    console.log("Split Method using pipe : ",arrayMethod.split("|"))
    
    console.log("IndexOF Method : ",replaceText.indexOf("most"))
    
    console.log("IndexOF Method : ",replaceText.indexOf("most", 27))
        
    console.log("lastIndexOF Method : ",replaceText.lastIndexOf("most"))
    
    console.log("lastIndexOF Method : ",replaceText.lastIndexOf("most", 42));
    
    console.log("Search Method : ",replaceText.search("the"));
    
    console.log("Match Method : ",replaceText.match("most"));
    
    matchvalue = replaceText.matchAll("most")
    console.log("MatchAll Method using spread operator : ",...matchvalue);

    console.log("starts with Method : ",StrText.startsWith("JavaScript"));
    
    console.log("starts with Method : ",StrText.startsWith("is"));
    
    console.log("ends with Method : ",StrText.endsWith("language"));
    
    console.log("ends with Method : ",StrText.endsWith("programming"));
    
    console.log("Includes Method : ",StrText.includes("programming"));
}
StringMethod();