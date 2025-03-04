import { useTranslation } from "react-i18next";
import {
  LuLayoutDashboard,
  LuShoppingCart,
  LuPackage,
  LuUsers,
  LuFileText,
  LuSettings,
} from "react-icons/lu";

export const useRoutes = () => {
  const { t } = useTranslation();

  const routes = [
    {
      id: "1",
      title: t("dash.dashboard"),
      path: "/dashboard",
      exact: true,
      icon: <LuLayoutDashboard />,
    },
    {
      id: "2",
      title: t("dash.order_management"),
      path: "/dashboard/orders",
      icon: <LuShoppingCart />,
    },
    {
      id: "3",
      title: t("dash.product_management"),
      path: "/dashboard/products",
      icon: <LuPackage />,
    },
    {
      id: "4",
      title: t("dash.categories"),
      path: "/dashboard/categories",
      icon: <LuPackage />,
    },
    {
      id: "5",
      title: t("dash.customers"),
      path: "/dashboard/customers",
      icon: <LuUsers />,
    },
    {
      id: "6",
      title: t("dash.reports"),
      path: "/dashboard/reports",
      icon: <LuFileText />,
    },
    {
      id: "7",
      title: t("dash.users"),
      path: "/dashboard/users",
      icon: <LuUsers />,
    },
    {
      id: "8",
      title: t("dash.roles"),
      path: "/dashboard/roles",
      icon: <LuSettings />,
    },
  ];

  return routes;
};
