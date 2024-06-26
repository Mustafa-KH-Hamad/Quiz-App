$(document).ready(function() {
    $("#display3").hide();
    
    
    $("#btn-start").on("click",function(){
        
        $("#display2").fadeOut(0);
        $("#display").fadeIn(1500);

    });


    var count = 0;
    var right=0;
    


    const Questions = [
        {
            question: "مرۆڤ چەند چاوی هەیە ؟",
            A: "Hyper Transfer Markup Language",
            B: "Hyper Text Markup Language",
            C: "High Technical Markup Language",
            D: "Hyperlink and Text Markup Language",
            correct: "B"
        },
        {
            question: "Which programming language is often used for creating dynamic and interactive websites?",
            A: "Python",
            B: "Java",
            C: "HTML",
            D: "JS (JavaScript)",
            correct: "D"
        },
        {
            question:"In Java, what is the purpose of the static keyword when used with a method?",
            A: "It indicates that the method can't be overridden.",
            B: "It indicates that the method can be accessed without creating an instance of the class.",
            C: " It indicates that the method is thread-safe.",
            D: " It indicates that the method is not allowed to use any variables.",
            correct: "B"
        },
        {
            question: "Which of the following is NOT a feature of Object-Oriented Programming (OOP)?",
            A: "Inheritance",
            B: "Polymorphism",
            C: "Encapsulation",
            D: "Global Variables",
            correct: "D"
        },
        {
            question: "What is the capital city of France?",
            A: "London",
            B: "Berlin",
            C: "Paris",
            D: "Madrid",
            correct: "C"
        },
        {
            question: "Who painted the Mona Lisa?",
            A: "Pablo Picasso",
            B: "Leonardo da Vinci",
            C: "Vincent van Gogh",
            D: "Michelangelo",
            correct: "B"
        },
        {
            question: "Which planet is known as the 'Red Planet'",
            A: "Venus",
            B: "Mars",
            C: "Jupiter",
            D: "Saturn",
            correct: "B"
        },
        {
            question: "Which famous scientist developed the theory of relativity?",
            A: " Isaac Newton",
            B: "Albert Einstein",
            C: "Marie Curie",
            D: "Galileo Galilei",
            correct: "B"
        },
        {
            question: "The Great Barrier Reef is located in which ocean?",
            A: "Indian Ocean",
            B: "Atlantic Ocean",
            C: "Pacific Ocean",
            D: "Arctic Ocean",
            correct: "C"
        },
        {
            question: "Erbil, also known as Hawler, is one of the oldest continuously inhabited cities in the world. What historical event is the city often associated with?",
            A: "The signing of the Treaty of Versailles",
            B: "The establishment of the Silk Road trade route",
            C: "The invention of the printing press",
            D: "The Battle of Gaugamela between Alexander the Great and Darius III",
            correct: "C"
        },
        {
            question: "How does a computer get drunk?",
            A: "It drinks too many root beers.",
            B: "It takes screenshots of its desktop.",
            C: "It downloads too many 'wine' programs.",
            D: "It gets too many 'byte'-sized drinks.",
            correct: "C"
        },
        {
            question: "Why did the web developer go broke ?",
            A: "Because he lost his domain name.",
            B: "Because he spent all his cache.",
            C: "Because he couldn't find his mouse pointer.",
            D: "Because he couldn't get out of the loop.",
            correct: "A"
        },{
            question: "Which of the following is NOT a valid JavaScript data type?",
            A: "String",
            B: "Boolean",
            C: "Float",
            D: "Array",
            correct: "C"
        },
        {
            question: "What does CSS stand for in web development?",
            A: "Cascading Style Sheets",
            B: "Creative Style Selection",
            C: "Computer Style Scripts",
            D: "Customizable Styling System",
            correct: "A"
        },
        {
            question: "Who is the CEO of Tesla and SpaceX?",
            A: "Elon Musk",
            B: "Bill Gates",
            C: "Jeff Bezos",
            D: "Mark Zuckerberg",
            correct: "A"
        },
        {
            question: "Which of the following is a front-end JavaScript framework?",
            A: "Angular",
            B: "Django",
            C: "Express",
            D: "Flask",
            correct: "A"
        },
        {
            question: "What is the chemical symbol for water?",
            A: "H2O",
            B: "CO2",
            C: "NaCl",
            D: "CH4",
            correct: "A"
        },
        {
            question: "marewan  chand sala ",
            A: "22",
            B: "23",
            C: "10",
            D: "13",
            correct: "A"
        }
        

    ];


    $("#Mquestion").html(Questions[count].question);

    $("#qA").html(Questions[count].A);
    $("#qB").html(Questions[count].B);
    $("#qC").html(Questions[count].C);
    $("#qD").html(Questions[count].D);
    

            
    
    $("#submit-button").on("click", function(e) {

        

        if($("input[name='radios']:checked").val() == "on"){

            if(count < Questions.length){
                if($("input[name='radios']:checked").attr('id') == Questions[count].correct){
                    right++;
                
                }
        
        count++;  
                if(count < Questions.length){

                    $("#Mquestion").html(Questions[count].question);
                    $("#qA").html(Questions[count].A);
                    $("#qB").html(Questions[count].B);
                    $("#qC").html(Questions[count].C);
                    $("#qD").html(Questions[count].D);

                }else{

                    $("#display").fadeOut(0);
                    $("#display3").fadeIn(1500);
                    $("#result").html("congrats you scored " + right + " out of " + Questions.length);
    
    
            }}
        }
        $(".radios").prop("checked",false); 
       
    });
    
    



});
