Tech task

In terms of this test assignment the candidate is proposed to build the films gallery.
Welcome screen will have three buttons: SIGN UP, SIGN IN, BROWSE for unauthorized users.
Dynamic button: resume signup will appear if signup process is interrupted so that user has filled all
sign up field but has not submitted yet, so on home page sign up button should be resume sign up.
CAROUSEL:
Please create a carousel of 3 views with text from a CONSTANTS FILE and when swiped left or
right change accordingly, place an image of your choice behind the text
- text should be centered and responsive | Text should not be longer than 50 characters
- tapping on Sign in button leads to sign in view
- tapping to Sign up button leads to sign up view
- tapping on browse button leads to home view
LOGIN:
- has two inputs with validation errors on email + password ( 6 characters (one big one number one
special))
- valid login : intvw / aa@AA1
SIGN UP: 
- has three inputs with validation errors on email, name, password ( 6 characters (one big one
number one special))
- login button leads to Home screen
HOME SCREEN:
- no screen title
- if user is browsing => Show link to sign in and sign up
- if user is logged in => Header welcome NAME in right corner
JSON:
Parse the json file and create a list with an initial number of 20 shows, when user scrolls down add
another 20 until all the titles are populated
The cards are in two columns and will take the data from the json object
Please show the following information for each card:
On the image itself please print the title of the movie. (make the text white, don't bother if the
image and text color collide)
Underneath the image: genre | director | year.
Add an information icon which opens a popup with the following data in this order: Plot, Writer,
Actors, IMDB rating. Feel free to add other stuff and design this as you want.
Logic by screens :
Cards logic: If a title has a lower rating than 7 please add a down thumb icon
Browse Logic: If a user is not logged in they can browse to home but cannot see the data
underneath the card
Welcome Logic: if a user does not finish the signup process on app launch user should be shown
resume signup button.
 
------------------------------------------------------------------------------------------------------------------------------------------

Notes:
No title has rating lower than 7, but thumb icon was realised
