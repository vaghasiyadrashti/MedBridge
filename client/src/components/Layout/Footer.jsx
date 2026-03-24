import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">MedBridge</h3>
            <p className="text-gray-400 text-sm">
              Medical Logistics Simplified
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
