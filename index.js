// Author: Harsh Vyapari  
// Github ID: https://github.com/harshv1741
// mark 2: To create any quiz app according to your taste

// Intro: For my mark 2 task solution, I'll be borrowing some code from my mark 1, But I'll make sure to add my own spin in this code and improve my mark 2 'CLI' app

// 👇 Below line import packages from npm to read input from the user
var rls = require('readline-sync')

// 👇 Below line import packages from npm for colorful alerts
const alerts = require('cli-alerts')

// 👇 Ladies and Gentlemen!! Here comes the question paper with their solutions 
var question_sheets = [
    // Q1
    {
        question: "Linux is...\n 1. a kernel\n 2. a shell\n 3. a terminal\n 4. a distribution",
        answer: "a kernel",
        info: "\nLinux is actually a kernel which helps in communication with your hardware and your operating system."
    },

    // Q2
    {
        question: "Who is the founder of Linux?\n 1. Guido Van Rossum \n 2. Richard Stallman \n 3. Linus Trovalds \n 4. James Gosling",
        answer: "Linus Trovalds",
        info: "\nLinus Trovalds is an american software engineer, who created for which I fell in love, 'Linux Kernel!!' which is now became a foundational backbone of many innovation. \'Fun Fact\' He is also the founder of github."
    },

    // Q3
    {
        question: "..... is the command to list the currently running linux processes and their PID(\'Process ID's\')\n 1. ps \n 2. cp \n 3. mv \n 4. rm",
        answer: "ps",
        info: "\nps command is really useful when user needs to quickly check currently running processes."
    },

    // Q4
    {
        question: "Which command is used to add user in linux?\n 1. useradd\n 2. adduser\n 3. both 1 and 2\n 4. None of the Above.",
        answer: "useradd and adduser",
        info: "\nThe fun fact about linux is, \'It has 10 different ways to do same task!!\'.\n The useradd and add user can perform the same task."
    },

    // Q5
    {
        question: "In which file the newly created alias for a command in linux is stored? \n 1. \'.bashrc\' \n 2. \'.vimrc\' \n 3. \'.bash_aliases\'\n 4. \'.Both 1 and 3\' ",
        answer: ".bashrc and .bash_aliases",
        info: "\nIn Linux, we can store the alias in both .bashrc and .bash_alias file."
    },

    // Q6
    {
        question: "Which command is used for adding user to add into a particular group in linux?\n 1. groupadd \n 2. addgroup \n 3. Both 1 and 2 \n 4. None of the above",
        answer: "groupadd and addgroup",
        info: "\nIn Linux, both addgroup and groupadd function is used to add user in a new group."
    },

    // Q7
    {
        question: "The \'cat\' command is:\n 1. Utility Command \n 2. Alias Command \n 3. Both 1 and 2 \n 4. None of the Above ",
        answer: "Utility Command",
        info: "\n The \'cat\' command helps in displaying the contents of a file without actually opening the file."
    },

    // Q8
    {
        question: "Who is the parent distro of openSUSE?\n 1. Debian \n 2. Arch Linux \n 3. Red Hat Linux \n 4. SUSE linux",
        answer: "SUSE linux",
        info: "\n SUSE linux is the most adaptable linux distro the distro family has to offer."
    },

    // Q9
    {
        question: "Which linux distro is most popular among Penetration Tester? \n 1. openSUSE \n 2. Linux Mint \n 3. Kali Linux \n 4. Raspberry Pi ",
        answer: "Kali Linux",
        info: "\n Kali Linux which is created by offensive security, is the world's most popular distro in cybersecurity community because of it's wide range of tools available for hacking, penetration testing, OSINT (Open Source Intelligence),etc."
    },

    // Q10
    {
        question: "..... command is used to restart the machine from shell. \n 1. shutdown -r now \n 2. shutdown -h \n 3. shutdown -s \n 4. shutdown -n \n",
        answer: "shutdown -r now",
        info: "\n After executing the following command, The linux will immediately go to restart state."
    },
]

// 🪝 If I need to update my quiz, I just need to change this values
//    and store new questions in question_sheets
const answer_key = [1, 3, 1, 3, 4, 3, 1, 4, 3, 1] // 👈 The answer key of the quiz
const points = 2 // 👈 Variable for storing points for total quiz
// 🪝

var quizScore = 0;// 👈 Storing correct answer points

// 👇 Taking username
var userName = rls.question("Username: ")

// 👇 Welcoming your user
var quizWelcomeMessage = "********* Welcome \''" + userName + "\'' to 'Linux' CLI quiz *********";

// 👇 Introducing user to the quiz
var quizIntro = "\n Hello Everyone! This quiz is based on my hobby i.e. linux. This quiz contains total of" + answer_key.length + "questions which test about how well do you know about linux.";

alerts(
    {
        type: 'info',
        msg: quizWelcomeMessage + quizIntro
    }
)
// 👇 Menu Options
var menu = "Select your option\n 1. Enter \n 2. Display your score \n 3. Info \n 4. Exit";

function quizStart() {
    // 👇 This function checks the answer 
    function ansCheck(index) {
        var ans = Number(rls.question("\nAnswer: "))

        // 👇 Checking if your entered option is correct or not
        if (ans == 1 || ans == 2 || ans == 3 || ans == 4) {

            //🪝 If corrct 
            if (ans == answer_key[index]) {
                alerts({ type: 'success', msg: 'Correct' })
                alerts(
                    {
                        type: 'info',
                        msg: currentQuestion.info
                    }
                )
                // Incrementing scores
                quizScore += points
            }

            // 🪝 wrong 
            else {
                alerts({ type: 'error', msg: 'Wrong' })
                alerts(
                    {
                        type: 'info',
                        msg: ("Correct answer is " + currentQuestion.answer + "\n" + currentQuestion.info)
                    }
                )
            }

        }
        //🪝 If another input 
        else {
            alerts({ type: 'warning', msg: 'You\'ve entered another value' })
        }
        return quizScore
    }

    function quizResult() {
        alerts({ type: 'info', msg: 'Your total score is: \'' + quizScore + '\'/' + (question_sheets.length * points) })
    }

    // 🪝 This for loop will handle quiz question and answer
    for (var i = 0; i < question_sheets.length; i++) {
        var currentQuestion = question_sheets[i]
        console.log((i + 1) + ". " + currentQuestion.question)
        console.log("Username: " + userName + " Score(Upto Previous Question): " + ansCheck(i) + "\n")
    }
    // 🪝 

    quizResult()

    return quizScore

}




//🪝 Program Entry Point 

// 👇 ❕💻 Menu starts from here
var menuFlag = 0// 👈 Set the flag for the menu
while (menuFlag != 1) {
    // 👇 ❕💻 Prints the menu 
    console.log(menu)

    let option = 0 // 👈 Store your choice
    // 👇 ❕💻 Takes user's choice as input
    option = Number(rls.question('\n\nChoice: '))
    switch (option) {
        case 1:
            alerts(
                {
                    type: 'info',
                    msg: 'You selected option ' + option + 'of the program.'
                }
            )
            quizStart()
            break;

        case 2:
            alerts(
                {
                    type: 'info',
                    msg: 'You Selected option ' + option + ' of the app.....'
                }
            )
            alerts
                (
                    {
                        type: 'info',
                        msg: ("\nUsername: " + userName + "\nScore: " + quizScore)
                    }
                )
            break;

        case 3:

            var quizInfo = ("\n1. While Entering your choice/answer, please select only numbers.\n2. There is no negative marking in this quiz.\n3.Total points for this quiz is " + (question_sheets.length * points) + "points \n4. Each correct answer for the quiz is for " + points + " points\n 5.If you enter character other than option in the quiz, the by default score for this quiz will be zero")

            alerts(
                {
                    type: 'info',
                    msg: quizInfo
                }
            )
            break

        case 4:
            alerts(
                {
                    type: 'info',
                    msg: 'You Selected option ' + option + ' of the app.....'
                }
            )
            alerts(
                {
                    type: 'success',
                    msg: 'Thank You !!!!!'
                }
            )
            menuFlag = 1;
            break;

        default:
            alerts(
                {
                    type: 'warning',
                    msg: 'Please enter the correct option'
                }
            )
            break;
    }
}