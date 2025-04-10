# Technical Screening Submission - Abhishek Aryal

## Note:

- I'd recommend installing SQLite3 Editor Extension on VSCode to visualize the database.

## Initial Estimate

- This is my current estimation for the timeline of the project.
  - Frontend 4 hours.
  - Backend: 4 hours
  - Git, writeup + misc: 1 hour
  - Total: 9 hour.

## Personal Additions / Assumptions

- Personal Addition: Added HawkID field. So each submission can be traced to a unique employee.
- Personal Addition: Disabled the submit button until all 4 fields (HawkID, Date, Receipt, Amount) are filled for an intuitive user experience.
- Assumption: SQL Injection proof querie for better security.
- Personal Addition + Assumption: Alongside storing the images as a blob in the database, I also store it in a folder called 'receipts'.
  - I added this feature to mainly ensure that the pdfs and images were properly being sent over.
  - The naming convention for receipts is: hawkID + date + amount + uuid.
    - uuid is to guarantee that no two receipts will have the same name.

## Design

- Generated the general design idea for the web app using Figma. (See concept/Initial Design.png)
- Used University of Iowa [Brand Manual](https://brand.uiowa.edu/color) for font, color, and logo.
- Time taken: 1 hour.

## Frontend

**Tools used:** ReactJS, Bootstrap, CSS, React-Bootstrap

- The current design looks different from what I had initially designed.
  - After doing some research for frontend design I found the react-bootstrap form components.

## Backend

**Tools used:** Python, Flask, Sqlite3

- Since the requirement only mentions sending the data, I only created a function to add a row to the db.
