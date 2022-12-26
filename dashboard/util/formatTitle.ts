export function formatTitle(name?: string) {
  const appName = "Trakker Analytics";

  if (!name) return appName;
  return `${name} - ${appName}`;
}
