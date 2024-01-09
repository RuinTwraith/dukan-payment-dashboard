import React from "react";
import User from "../NavUser";
import NavButton from "../NavButton";
import AvailableCredits from "../NavAvailableCredits";
/* icons */
import home from "../../assets/home.svg";
import orders from "../../assets/orders.svg";
import products from "../../assets/products.svg";
import delivery from "../../assets/delivery.svg";
import marketing from "../../assets/marketing.svg";
import analytics from "../../assets/analytics.svg";
import payments from "../../assets/payments.svg";
import tools from "../../assets/tools.svg";
import discounts from "../../assets/discounts.svg";
import audience from "../../assets/audience.svg";
import appearance from "../../assets/appearance.svg";
import plugins from "../../assets/plugins.svg";

const navigationItems = [
  {
    icon: home,
    name: "Home",
  },
  {
    icon: orders,
    name: "Orders",
  },
  {
    icon: products,
    name: "Products",
  },
  {
    icon: delivery,
    name: "Delivery",
  },
  {
    icon: marketing,
    name: "Marketing",
  },
  {
    icon: analytics,
    name: "Analytics",
  },
  {
    icon: payments,
    name: "Payments",
  },
  {
    icon: tools,
    name: "Tools",
  },
  {
    icon: discounts,
    name: "Discounts",
  },
  {
    icon: audience,
    name: "Audience",
  },
  {
    icon: appearance,
    name: "Appearance",
  },
  {
    icon: plugins,
    name: "Plugins",
  },
];

const NavBar = () => {
  return (
    <div className="w-56 bg-secondary-navbar min-h-screen py-4 px-2.5 flex flex-col">
      <User />
      <div className="pt-6 flex flex-col gap-1 grow">
        {navigationItems.map(({ icon, name }) => (
          <NavButton
            icon={icon}
            name={name}
            key={icon}
            isSelected={name === "Payments"}
          />
        ))}
      </div>
      <div className="mx-1.5">
        <AvailableCredits />
      </div>
    </div>
  );
};

export default NavBar;
