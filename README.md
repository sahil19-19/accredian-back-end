#  Back end for Accredian full stack assignment

##  Created using
-  Node.js
-  Express.js
-  MySQL
-  Prisme ORM

###  Note: Since there was no way to host MySQL database hitting POST at `/api/referrals/` returns an error, however you can still use the app on localhost

##  Steps to use app on localhost
-  Clone repository
-  Run

    ```
    npm install
    ```

    to download dependencies

-  Create `.env ` file using `.env.sample` file  
  EMAIL_USER stores the email of the current user to simulate a state in which the user is signed-in. EMAIL_PASS is the 16-digit app password related to the email. Enter your email here, this will be the email Id from which emails will be sent.
  This will be the same email Id from the front-end `.env` file
  More about app passwords -

    ```
    https://support.google.com/mail/answer/185833?hl=en
    ```


-  Run

     ```
     node app.js
     ```
     to start the app at localhost:3000
