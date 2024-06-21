# Dynamic Dashboard

This project is a responsive single-page application (SPA) built with React. It features a dynamic dashboard consisting of a sortable table and an alternative data visualization using a bar chart. Users can add new data entries through a form, which is reflected in both the table and the chart.

## Features

- Sortable Table: Display data in a sortable table format, allowing sorting by any column.
- Data Visualization: Alternative data visualization using a bar chart.
- Data Entry Form: Add new data entries through a form with validation and user feedback.
- Responsive Design: Ensures seamless experience on desktop, tablet, and mobile devices.
- State Management: Managed using React Context for consistency across the application.
- Routing: Client-side routing with React Router.
- Performance Optimization: Fast load times and smooth interactions.
- Accessibility: Adheres to WCAG guidelines for usability.

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/mauriciocentenaro/challenge-dynamic-dashboard.git
   cd dynamic-dashboard

2. Install dependencies:
   ```sh
   npm install

3. Run the application:
   ```sh
   npm start

## Testing

Run the tests using:
   ```sh
   npm test

## Design Choices

   - React: Chosen for its component-based architecture and strong community support.
   - Material-UI: Provides a set of accessible and responsive UI components.
   - Recharts: Simple and flexible library for creating charts.
   - React Context: Manages application state effectively.
   - React Router: Facilitates client-side routing.
   - Axios: Simplifies HTTP requests.

## Assumptions

   - Data fetched from https://jsonplaceholder.typicode.com/posts for initial population.
   - Newly added data is stored in the local state.

## Special Considerations

   - Ensured responsiveness using Material-UI's Grid and Flexbox.
   - Added basic form validation for data entry.

## Future Improvements

   - Integrate a backend to persist data.
   - Enhance form validation with more comprehensive rules.
   - Add more visualizations and data filtering options.
