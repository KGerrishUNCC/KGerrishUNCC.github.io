function scriptTest()
{
    alert("My script is running!");
}
function TimeAndDate()
{
    var current = new Date();
    var monthNumber = current.getMonth() + 1;
    var day = current.getDay();
    var year = current.getFullYear();  
    var date = current.getDate();
    var hour = current.getHours();
    var minute = current.getMinutes();
    var dayOrNight;

    var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var dayOfTheWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

    if(hour >= 12)
    {
        hour %= 12;
        dayOrNight = "pm";
    }
    else
    {
        dayOrNight = "am";
    }

    let fullTimeDate = "Today is " + hour + ":" + minute + dayOrNight + " on " + dayOfTheWeek[day] + ", " + date + " " + monthName[monthNumber] + " " + year;
    document.getElementById("timeoutput").innerHTML = fullTimeDate;
}
function welcome()
{
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let fullWelcome = "The Keen Gorilla welcomes you, " + name + "! We're glad you are doing " + feeling + "!";
    document.getElementById("welcomeoutput").innerHTML = fullWelcome;
}
function websiteperstore()
{
    var amountofwebsite = prompt("Enter the number of websites that you want!"); 
    amountofwebsite = parseFloat(amountofwebsite); 
    var amountofcompanies = prompt("Enter the number of companies the websites are for!"); 
    amountofcompanies = parseFloat(amountofcompanies); 
    var amount = amountofwebsite/amountofcompanies; 
    amount = parseInt(amount); 
    alert("Websites per company is = " + amount); 
}
function averageboughtwebsite()
{
    var input; 
    var averagesale; 
    var total = 0; 

    input = prompt("Enter amount for first website!"); 
    input = parseInt(input);
    var cost1 = input; 
    total = total + cost1; 
    input = prompt("Enter amount for second website!"); 
    input = parseInt(input);
    var cost2 = input; 
    total = total + cost2; 
    input = prompt("Enter amount for third website!"); 
    input = parseInt(input);
    var cost3 = input; 
    total = total + cost3; 
    
    averagesale = parseInt(total/3);
    alert("Average website cost = " + averagesale);
}
function costperwebsite()
{
    var features= prompt("Enter the number of features you want on the website!"); 
    features = parseFloat(features);
    var amwebsite = prompt("Enter the number of websites that you want!"); 
    var costwebsite = prompt("How much do you want the website to cost?"); 
    var totalCost = amwebsite * costwebsite;  
    alert("Cost of creation of website for " + features + " features = $" + totalCost); 
}
function datepublish()
{
    var publish= prompt("When do you want the website to be published?(amount of days from receiving the job, choose between 5 to 10 days)");
    publish = parseFloat(publish);
    var maxpublish = publish;
    alert("The creation of the website will take us " + maxpublish + " days");
}
function comments()
{
    var comment= prompt("Enter a comment on your website");
    var fix= prompt("Enter what you want us to fix about the website");
    alert("Thank you for your response '" + comment + "', '" + fix +"' we will fix the website to your request");
}