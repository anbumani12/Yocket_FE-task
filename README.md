# Fugitive Capture Simulation

This project simulates a fugitive capture scenario where cops select a city and vehicle to attempt capturing a fugitive. It includes both frontend (React) and backend (Node.js with Express and MongoDB) components.

## Assumptions

- **City Selection**: Assume cities are predefined and stored in the MongoDB database.
- **Vehicle Selection**: Assume vehicle options are predefined and stored in the MongoDB database.
- **Fugitive Simulation**: Assume the fugitive's location is simulated randomly within one of the cities.
- **Capture Criteria**: A capture is successful if a cop selects the correct city where the fugitive is located.

## Frontend

### Screens Developed

1. **Start/Landing Page**: Displays a welcome message and a button to start the capture simulation.
2. **Capture Page**: Allows cops to select a city and vehicle to attempt capturing the fugitive.
3. **Result Page**: Shows the capture status (success or failure) and the city where the fugitive was located.

### Technologies Used

- React for frontend UI components.
- React Router for navigation between pages.
- Axios for API requests to the backend.

### Build Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>


2. Install dependencies for the frontend:
    npm install

3.  Start the frontend development server:
    npm run dev

This will run the frontend on "http://localhost:5173".