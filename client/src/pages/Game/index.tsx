import React from "react";
import Layout from "Layout";
import { Link } from "react-router-dom";

export default function Game() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Game</h1>
      <div className="space-y-8">
        <p className="text-lg">
          Choose your game from the dropdown menu in the sidebar!
        </p>
      </div>
    </Layout>
  );
}
