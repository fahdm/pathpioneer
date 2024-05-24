# Path Pioneer

## Table of Contents

1. [Launch Path Pioneer](#launch-path-pioneer)
2. [Plan The Perfect Route with Path Pioneer](#plan-the-perfect-route-with-path-pioneer)
3. [Screenshots](#screenshots)
4. [Features](#features)
5. [Technologies Used](#technologies-used)
6. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
7. [Usage](#usage)
8. [Next Steps](#next-steps)

### Launch Path Pioneer

Click [Here](https://path-pioneer-d87bb5db5253.herokuapp.com) to Launch Path Pioneer

## Plan The Perfect Route with Path Pioneer

In our fast-paced world, having a reliable sidekick to simplify planning is essential. Path Pioneer makes planning your own adventure easy and customized to your preferences. Whether you prefer smooth asphalt for road biking, rugged single tracks for mountain biking, or serene trails for hiking, Path Pioneer generates sport-specific, topographic routing tailor-made for your next outdoor experience. Customize each route to include your favorite landmarks and scenic spots, and view detailed surface and way type readings to ensure you're always prepared for what's ahead. Wherever your adventure takes you, Path Pioneer helps you plan the perfect route, making your journeys easier and more enjoyable.

## Screenshots

<img width="1470" alt="Screenshot 2024-05-24 at 3 21 58 AM" src="https://github.com/fahdm/pathpioneer/assets/8414726/7af74089-4d5d-46c9-b457-d036d25ba4b4">

<img width="1470" alt="Screenshot 2024-05-24 at 3 24 50 AM" src="https://github.com/fahdm/pathpioneer/assets/8414726/441a1432-bd00-4753-8faa-6c0ed8a75e26">

![Screenshot 2024-05-23 at 7 35 07 PM](https://github.com/fahdm/pathpioneer/assets/8414726/6df5c416-b7f1-4732-ae17-7e803f039bad)

![Screenshot 2024-05-23 at 7 35 20 PM](https://github.com/fahdm/pathpioneer/assets/8414726/976e6668-c6d7-4286-9fd5-8be39924a2f2)

<img width="1470" alt="Screenshot 2024-05-24 at 3 20 39 AM" src="https://github.com/fahdm/pathpioneer/assets/8414726/1ea19bb9-be3d-48a6-a717-bba1d6f9df63">

![Screenshot 2024-05-23 at 7 36 09 PM](https://github.com/fahdm/pathpioneer/assets/8414726/d5a97c63-2eef-43a1-8120-05a1650bb392)

![Screenshot 2024-05-23 at 7 35 40 PM](https://github.com/fahdm/pathpioneer/assets/8414726/5d8e9128-15c3-4b0c-8d01-44cebc733a6e)

## Features

- **Plan Your Paths**: Find the best paths for your journeys, tailored for different activities such as walking, biking, and driving.
- **Save Your Favorites**: Keep track of your favorite paths and access them anytime, anywhere.
- **Sort Your Paths**: Sort Your Paths by order of date created.

## Technologies Used

- **Frontend**: React, Mapbox GL, Mapbox Directions
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Hosting**: Heroku
- **Deployment**: Continuous Deployment with Heroku

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance
- Mapbox account with an access token

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/path-pioneer.git
    cd path-pioneer
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your configuration variables:

    ```bash
    DATABASE_URL="your-mongodb-connection-string"
    SECRET="your-secret-key"
    REACT_APP_MAP_BOX_TOKEN="your-mapbox-access-token"
    ```

4. Start the development server:

    ```bash
    npm start
    ```

## Usage

1. Sign Up/Login: Create an account or log in to access the app.
2. Plan a Route: Use the map interface to set your origin and destination.
3. Save a Route: Enter a name for your route and save it for future access.
4. View Saved Routes: Access your saved routes, view details.

## Next Steps

1. **Enhanced User Interface and Experience**:
   - **Responsive Design**: Ensure the application is fully responsive and optimized for various devices, including smartphones and tablets.
   - **Offline Mode**: Implement offline capabilities to allow users to access saved routes and maps without an internet connection.

2. **Advanced Route Customization**:
   - **Custom Waypoints**: Allow users to add custom waypoints and stops along their routes.
   - **Elevation Profiles**: Integrate elevation data to provide users with elevation profiles of their routes.
   - **Weather Integration**: Incorporate real-time weather updates and forecasts for planned routes.

3. **Social Features**:
   - **User Sharing and Collaboration**: Enable users to share their routes with friends and family and collaborate on planning trips.
   - **Community Contributions**: Allow users to contribute reviews, photos, and tips for specific routes and waypoints.

4. **Enhanced Data Analytics**:
   - **Route Analytics**: Provide users with detailed analytics on their routes, such as average speed, total ascent/descent, and more.
   - **User Activity Tracking**: Implement features to track user activities over time, including a history of routes taken and performance metrics.

5. **Improved Backend Infrastructure**:
   - **Scalability**: Enhance backend infrastructure to handle a growing user base. This includes hosting the application on a cloud platform (e.g., AWS, Azure, Google Cloud) and implementing a load balancer to distribute traffic evenly across servers, ensuring high availability and performance.
   - **Real-time Updates**: Implement real-time updates and notifications for route changes, alerts, and user interactions.

6. **Integration with Third-Party Services**:
   - **Fitness Apps**: Integrate with popular fitness tracking apps and devices (e.g., Strava, Garmin, Apple Health, Whoop) to import and export route data.
   - **Transportation Services**: Partner with transportation services (e.g., bike rentals, ride-sharing) to offer users seamless transitions between different modes of travel.

7. **AI and Machine Learning**:
   - **Personalized Recommendations**: Use AI to provide personalized route recommendations based on user preferences and past activities.
   - **Predictive Analytics**: Implement machine learning algorithms to predict user behavior and suggest optimal routes based on traffic patterns, weather, and other factors.

8. **Enhanced Security and Privacy**:
   - **Data Encryption**: Ensure all user data is encrypted both in transit and at rest.
   - **Privacy Controls**: Provide users with granular controls over their data privacy and sharing settings.

9. **Localization and Internationalization**:
   - **Multilingual Support**: Add support for multiple languages to cater to a global audience.
   - **Regional Mapping Data**: Integrate regional mapping data and local points of interest to enhance route planning in different parts of the world.
