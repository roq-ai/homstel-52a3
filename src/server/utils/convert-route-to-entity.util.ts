const mapping: Record<string, string> = {
  advisors: 'advisor',
  experiences: 'experience',
  hostels: 'hostel',
  startups: 'startup',
  trips: 'trip',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
