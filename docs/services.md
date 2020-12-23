## Services

#### Api

The folder contains all api call/request methods. It is recommended to define api response model for every api call.

#### Auth

Authentication methods are stored in this folder. It contains authenticate, signout, getToken, getUserInfo method.

#### Cookies

Cookies methods are stored in this folder. It contains Cookies types, setCookie, getCookie, removeCookie, clearCookies metthod.

#### Hooks

Shared custom hooks are stored in this folder.

#### Http

Api call/request configurations are defined here. Apllication may have many clients to handle so it's better to separate the clients inside **clients** folder.
Main client is already defined, a wrapper for axios client that has been configured with `interceptors`, `base url`, and `authorization config`.

#### Usecases

Usecase folder stores business logic. The difference between usecases and controller, usecases has no direct connection to view because it contains business logic only.
