import React from 'react';
import BusinessInfo from '../components/BusinessInfo';
import AIInstructions from '../components/AIInstructions';
import FAQSection from '../components/FAQSection';
import FileUpload from '../components/FileUpload';

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <BusinessInfo />
      <AIInstructions />
      <FAQSection />
      <FileUpload />
    </div>
  );
};

export default Dashboard;
