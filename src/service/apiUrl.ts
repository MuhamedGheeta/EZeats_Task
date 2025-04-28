export type apisTypes = {
  login: string;
  shipmentList: string;
  shipmentStatusList: string;
};

export const APIS: apisTypes = {
  login: 'api/method/login',
  shipmentList: 'api/method/frappe.client.get_list',
  shipmentStatusList: 'api/method/frappe.client.get_list',
};
