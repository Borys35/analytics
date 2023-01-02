export const propertyEventTypes = [
  "session_start",
  "page_view",
  "first_visit",
  "click",
  "link_click",
  "error",
] as const;
export type PropertyEventType = typeof propertyEventTypes[number];

export interface PropertyEvent {
  id: string;
  type: PropertyEventType;
  timestamp: string;
}
