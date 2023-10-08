interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Hostel Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Hostel Manager', 'Travel Advisor', 'End Customer'],
  tenantName: 'Startup',
  applicationName: 'Homstel',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read startup information',
    'Read hostel information',
    'Read experience information',
  ],
  ownerAbilities: [
    'Manage hostel information',
    'Create, edit, and delete trips related to the hostel',
    'Manage experiences offered by the hostel',
    'Manage advisors related to the hostel',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1b4329ba-69e3-4f20-a11d-2e5cb01fb7d1',
};
