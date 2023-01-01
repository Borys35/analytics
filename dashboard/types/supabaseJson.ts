export const propertyEventTypes = [
  "session_start",
  "page_view",
  "first_visit",
  "error",
  "click",
  "link_click",
] as const;
export type PropertyEventType = typeof propertyEventTypes[number];

export interface PropertyEvent {
  type: PropertyEventType;
  timestamp: string;
}
