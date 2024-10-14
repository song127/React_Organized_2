// 재귀 타입을 이용한 라우트 URL 정의
type RouteDefinition = {
  [key: string]: string | RouteDefinition;
};

type RoutesObject<T> = { [K in keyof T]: Routes<T[K]> };

type Routes<T> = T extends string
  ? string
  : T extends RouteDefinition
    ? string & RoutesObject<T>
    : never;

/**
 * Create routes object from route definition
 * @param routes  Route definition
 * @param parentPath  Parent path
 * @returns  Routes object
 */
export const createRoutes = <T extends RouteDefinition>(
  routes: T,
  parentPath: string = "",
): Routes<T> => {
  return Object.entries(routes).reduce((acc, [key, value]) => {
    if (typeof value === "string") {
      (acc as any)[key] = `${parentPath}${value}`;
    } else {
      const baseValue = value.BASE;
      const basePath = typeof baseValue === "string" ? baseValue : "";
      const fullPath = `${parentPath}${basePath}`;

      const subRoutes = createRoutes(value, fullPath);
      (acc as any)[key] = Object.assign(fullPath, subRoutes);
    }
    return acc;
  }, {} as Routes<T>);
};
