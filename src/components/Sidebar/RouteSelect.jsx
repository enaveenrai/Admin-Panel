import React from 'react'

import {
  FiHome,
  FiUsers,
  FiUser,
  FiPackage,
  FiShoppingCart,
  FiPaperclip,
  FiLink,
  FiDollarSign,
  FiBell,
  FiSettings,
  FiHelpCircle,
  FiBarChart2,
} from "react-icons/fi";

const RouteSelect = () => {
  return (
    <div className="space-y-1">
      <Route Icon={FiHome} selected={true} title="Dashboard" />
      <Route Icon={FiUsers} selected={false} title="Team" />
      <Route Icon={FiUser} selected={false} title="Customers" />
      <Route Icon={FiPackage} selected={false} title="Products" />
      <Route Icon={FiShoppingCart} selected={false} title="Orders" />
      <Route Icon={FiPaperclip} selected={false} title="Invoices" />
      <Route Icon={FiBarChart2} selected={false} title="Analytics" />
      <Route Icon={FiLink} selected={false} title="Integrations" />
      <Route Icon={FiDollarSign} selected={false} title="Finance" />
      <Route Icon={FiBell} selected={false} title="Notifications" />
      <Route Icon={FiSettings} selected={false} title="Settings" />
      <Route Icon={FiHelpCircle} selected={false} title="Help & Support" />
    </div>
  );
};

const Route = ({ selected, Icon,title }) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 cursor-pointer text-sm transition-[box-shadow, background-color, color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500": ""} />
      <span>{title}</span>
    </button>
  );};

export default RouteSelect