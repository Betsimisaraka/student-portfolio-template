import photograf from '../assets/photograf.png';
import birthdayApp from '../assets/birthday-app-sm.webp';
import countryQuiz from '../assets/right-answer-sm.webp';

const projects =[
    {
        "title": "Photograph",
        "description": "A website about a quality of many kind of photos",
        "photo": photograf,
        "solution": " https://betsimisaraka.github.io/front-end-finals/",
        "demo": "https://github.com/Betsimisaraka/front-end-finals",
        "type": "responsive"
    },
    {
        "title": "Birthday app",
        "description": "Showing lists of people with their birth date sorted be the sooner birthday this year",
        "photo": birthdayApp,
        "solution": "https://birthday-app-anita.netlify.app/",
        "demo": "https://github.com/Betsimisaraka/birthday-app",
        "type": "Vanila"
    },
    {
        "title": "Coutry Quiz",
        "description": "Fetching coutry from an API and displaying the quiz randomly two question",
        "photo": countryQuiz,
        "solution": "https://country-quiz-betsimisaraka.netlify.app/",
        "demo": "https://github.com/Betsimisaraka/country-quiz",
        "type": "react",
    }
]

export default projects;