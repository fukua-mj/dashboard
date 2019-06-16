import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from "@angular/router";

export class PageReuseStrategy implements RouteReuseStrategy {

    _cacheRouters: { [key: string]: any } = {};

    /** 表示对所有路由允许复用 如果你有路由不想利用可以加一些业务逻辑判断 */
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        if (!route.data.keep) {
            return false;
        } else {
            return true;
        }
    }

    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this._cacheRouters[route.routeConfig.path] = {
            snapshot: route,
            handle: handle
        };
    }

    /** 若 path 在缓存中有，则认为允许还原路由 */
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && !!this._cacheRouters[route.routeConfig.path];
    }

    /** 从缓存中获取快照，若无则返回 null */
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig || route.routeConfig.loadChildren || !this._cacheRouters[route.routeConfig.path])
            return null;

        return this._cacheRouters[route.routeConfig.path].handle;
    }

    /** 进入路由触发，判断是否同一路由 */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }

}