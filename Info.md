# Technical Screening Submission - Abhishek Aryal

## Note:

- Please see TimeTracking.md for time.
- I'd recommend installing SQLite3 Editor Extension on VSCode to visualize the database.

## Initial Estimate

- This is my current estimation for the timeline of the project.
  - Frontend 4 hours.
  - Backend: 4 hours
  - Git, writeup + misc: 1 hour
  - Total: 9 hour.

## Personal Additions / Assumptions

- Personal Addition: Added HawkID field. So each submission can be traced to a unique employee.
- Personal Addition: Disabled the submit button until the 4 fields - HawkID, Date, Receipt, and Amount are filled for an intuitive user experience.
- Assumption: SQL Injection proof query for better security.
- Personal Addition + Assumption: Alongside storing the images as a blob in the database, I also store them in a folder called 'receipts'.
  - I added this feature to mainly ensure that the pdfs and images were properly being transmitted from frontend to backend.
  - The naming convention for receipts is: hawkID + date + amount + uuid.
    - uuid is to guarantee that no two receipts will have the same name.
- Personal Addition: added logging to keep track of backend and gain more insight if anything goes wrong.

## Design

- Generated the general design idea for the web app using Figma. (See Initial Design.png inside concept folder)
- Used University of Iowa [Brand Manual](https://brand.uiowa.edu/color) for font, color, and logo.
- Time taken: 1 hour.

## Frontend

**Tools used:** ReactJS, Bootstrap, CSS, React-Bootstrap

- The current design looks different from what I had initially designed.

  - After doing some research for frontend design I found the react-bootstrap form components.

- Time taken: 3 hours.

## Backend

**Tools used:** Python, Flask, Sqlite3

- Since the requirement only mentions sending the data, I only created a function to add a row to the db.

- 2.5 hours.

## Total

- Time taken: 6.5 hours.
  - Reflection - I was able to finish the backed earilier than I anticipated.
  - For the frontend, I spent some time trying out different UIs until I settled on the one I found appealing.
