# Disaster Management Application (DMA)

Setup steps
- Download the repository as zip and extract the files
- Navigate to 'disaster-management' directory and open in terminal. Run 'npm install'
- Then navigate to '/client' and run 'npm install' again
- Connect to the postgres database
- Run the following command to create all the required schema: psql -U your_username -d your_database -f database.sql or create the tables manually
- Setup the .env file with appropriate values
- Navigate to root directory and run 'npm run dev'. This will start the frontend app and backend server simultaneously.
- Now go the correct url
- The first registered user will be and 'admin'. Further 'admin' roles must be provided through the database
