# Valorant Quizzes
- Github link for Assignment 2: https://github.com/dlkm22/ValorantQuiz

**VALORANT** is a tactical, first person shooter game that is available on Windows.

The goal of our website is to provide entertainment to user's by testing their knowledge on VALORANT, and hopefully convince user's who have never played VALORANT before to give it a try.

# Design Process

The website is primarily for user's who have played VALORANT before and enjoy the game. VALORANT is mostly competitive in nature, so having a quiz page with points and a leaderboard supports the idea of competitiveness even outside of VALORANT. This website is good for user's who want to pastime without playing VALORANT as it can be quite time consuming, but our quizzes are short and works the user's brain.

- As a user who has played VALORANT, I want to be able to access the quizzes and leaderboard easily.

- As a user who has not played VALORANT before, I want to find out more about the game and why I should try it out.

Link for wireframe: https://xd.adobe.com/view/15cb41f5-dfc0-4c12-ac78-f22dcc2485aa-4098/

# Features

- User's who visit the page can sign up for an account or log in. After logging in, it displays their username on the webpage.

- Depending on the score the user gets for a quiz, it displays a 'rank', which is an indication of how well they did. Iron is the lowest 'rank' a user can get, while the highest is Radiant.

- From the quiz page, user's can access the variety of quizzes from the same page and press the start button to begin the quiz the user selected.

- In the About page, there is a lottie animation which can be clicked on to bring the user to VALORANT's official page.

- User's can contact the owner's of the website if they have any questions, inqueries.

- The background in quizpage.html is animated, making it look like the VALORANT's background itself.

# Technologies Used

- [Bootstrap] (https://getbootstrap.com/)

  - For responsive columns.

- [Lottie] (https://lottiefiles.com/)

  - For lottie animations in the about page.

- [HTML] (https://html.spec.whatwg.org/)

  - Displays the webpage

- [CSS] (https://www.w3.org/TR/CSS/#css)

  - CSS enhances the visuals of the page and makes it viewable for users'. One such example is in the 'index.html' file, where the font of the words are set to Tungsten using CSS.

- [JavaScript] (http://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

  - JavaScript allows the user to create accounts, login and play the quizzes on the webpage.

- [JQuery] (https://jquery.com/)
  - The webpage uses jQuery to access the restdb.io API to aid the creating of users and logging in of users on the webpage.

# Testing

- 1. Contact page
     i. Go to "Contact Us" page.
     ii. Try to submit an empty form with no name and email
     iii. Try to submit the form with name and email but without selecting the "Type of query"
     iv. Verify that form is able to be submitted when everything in the contact form is filled.

- 2. Quiz page
     i. Go to 'quizpage.html' by pressing the "PLAY" button
     ii. Test each quiz by selecting the quizzes individually and clicking 'Play'
     iii. Make sure final points show up and rank shows up.

- On devices that are smaller than 800px and smaller than 1980px, the columns will shrink themselves so that the user can press on the start button.

# Content/Credits

- https://wallpapercave.com/valorant-4k-wallpapers

- https://playvalorant.com/en-us/news/dev/the-art-of-valorant-map-environments/

# Acknowledgements

- I took information from the VALORANT wiki page: https://valorant.fandom.com/wiki/VALORANT_Wiki
