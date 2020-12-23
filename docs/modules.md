## Modules

This folder contains all your components, includes common components, layouts, pages, and router.

#### Components

Components folder contains shared components.

#### Pages

Pages folder contains all your pages. Non-shared components that is used in certain page can be stored in the parent page's folder.
Separation of view and logic is strongly recommended if the page/component have logic. View is stored in **index.tsx** and logic is stored in **controller.ts**.

##### View

Use arrow function to create a component/page for consistency accross application. Please define the component/page's props above your component declaration.

```
interface Props {
  ....
}

const Page = (props: Props): ReactElement => {
  ....
}

export default Page
```

If the props contain optional prop, please define the default props.

```
Page.defaultProps = {
  ....
}
```

##### Controller

Use controller as [custom hook](https://reactjs.org/docs/hooks-custom.html) even there is no effect/state inside the controller for consistency accross application.
Please define the controller's return value and controller's props above your controller declaration.
Controller contains all logic that has direct connection to view, such as DOM events, etc.

```
interface PageControllerParams {
  ....
}

interface PageState {
  ....
}

const usePageController = (params: PageControllerParams): PageState => {
  ....
}
```

#### Layouts

Layouts folder contains layout components, e.g. dashboard layout that includes sidebar, header.

#### Router

Router folder contains application's routing config. If there is new page/route, you can add route item in **routes.tsx**. The property of route item is using **AppRouteProps**, extends **RouteProps**. You can set property **show** in route item to toggle the route will be shown in application or not.
