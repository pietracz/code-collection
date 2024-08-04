import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/head";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card";

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const totalRevenue = orders.reduce(
    (acc, order) => (order.status !== "cancelled" ? acc + order.total : acc),
    0
  );
  const formattedRevenue = totalRevenue
    ? new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(totalRevenue)
    : "€0.00";

  useEffect(() => {
    fetch("http://localhost:5000/customers")
      .then((response) => response.json())
      .then((customerData) => setCustomers(customerData));

    fetch("http://localhost:5000/orders")
      .then((response) => response.json())
      .then((orderData) => setOrders(orderData));
  }, []);

  return (
    <>
      <Header site={"Dashboard"} />
      <Nav />
      <main>
        <h2>Dashboard</h2>
        <div className="dashboard-wrapper">
          <Card title="Total Revenue" value={formattedRevenue} />
          <Card title="Total Orders" value={orders.length} />
          <Card title="Total Customer" value={customers.length} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
