import React, { lazy, Suspense, Component } from "react"
import { useRoutes, BrowserRouter } from "react-router-dom"
const routers = [
    {
        path: "/",
        component: lazy(() => import("./route/login/index")),
        children: []
    }
]
const changeRouters = (routers: any[]) => {
    return routers.map((item) => {
        item.element = <Suspense fallback={<Lazying/>}>
            <item.component />
        </Suspense>
        return item
    })
}
let Routes = () => useRoutes(changeRouters(routers))
const AppWrapper = () => {
    return (
        <BrowserRouter >
            <Routes />
        </BrowserRouter>
    );
};
export default AppWrapper
class Lazying extends Component {
    render() {
        return (
            <div>
                加载中...
            </div>
        )
    }
}
