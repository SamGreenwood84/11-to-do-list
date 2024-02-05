# 11-to-do-list
Express.js Challenge: Note Taker

![alt text](public/assets/images/Mockup.png)

**User Story**

AS A busy parent and small business owner

I WANT to be able to write a to-do-list and save detailed notes

SO THAT I can stay organized and productive each day

**Acceptance Criteria**

WHEN I open the Note Taker application

THEN I am presented with a landing page with a link to a notes page

![alt text](public/assets/images/landingpage.png)

WHEN I click ![alt text](image.png)

THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text 
in the right-hand column

![alt text](public/assets/images/example.png)

WHEN I enter a new note title and the note’s text

![
](public/assets/images/newnote.png)

THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page

![alt text](public/assets/images/saveclear.png)

WHEN I click on the ![alt text](public/assets/images/savenote.png)

THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear

![alt text](public/assets/images/successtest.png)

WHEN I click on an existing note in the list in the left-hand column

![alt text](public/assets/images/clicktodisplay.png)

THEN that note appears in the right-hand column and a ![alt text](public/assets/images/newnotebtn.png) button appears in the navigation

WHEN I click on ![alt text](public/assets/images/newnotebtn.png) in the navigation at the top of the page

THEN I am presented with empty fields to enter a new note title and a new note in the right-hand column and that button disappears

WHEN I want to delete a note I click on the ![alt text](public/assets/images/delete.png)

THEN any notes with a unique identifier provided from the UUIDV4 Library will be deleted to make room for new notes!

# References

I used lessons from our class materials as well as referenced my tutor and askBCS along with sources provided by them listed below.

Tutor-Benicio Lopez 

```javascript
//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/", htmlRoutes)
```
and 

UUIDV4 library

 [npm.js.com](www.npmjs.com/package/uuidv4) 

Learning Assistant- ask-300573 (Ntsika Silvano @nsilvano)

[iamwebwiz.medium.com](iamwebwiz.medium.com/how-to-fix-dirname-is-not-defined-in-es-module-scope-34d94a86694d)

*Bonus Reference*

router.delete()
[stackoverflow.com](stackoverflow.com/questions/68613707/how-to-fix-router-delete-which-is-not-working-express)

**My Git Hub Information**

*Profile:* 
https://github.com/SamGreenwood84/11-to-do-list.git

*Repo:*
git@github.com:SamGreenwood84/11-to-do-list.git

*Render Deployment*
```java
const port = process.env.PORT || 3001
```
