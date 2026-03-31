# WorldWise / 旅行足迹记录应用

> A React + Leaflet travel tracking app that helps users mark, save, and review cities they have visited.
> 一个基于 React + Leaflet 的旅行足迹记录应用，帮助用户在地图上标记、保存并回顾去过的城市。

---

## English Version

### 1) Project Overview
WorldWise is a single-page web app for tracking travel history on an interactive map. After login, users can click the map to add visited cities, view a city list, browse countries derived from those cities, inspect city details, and remove entries.

### 2) Project Purpose
The project is designed to demonstrate:
- React component architecture and route-based UI composition.
- Global state management with Context + Reducer.
- Map interaction using `react-leaflet`.
- URL-driven UI state (`lat/lng` query parameters).
- Basic CRUD flows against a mock REST backend (`json-server`).

### 3) Main Features
- Public pages: Homepage, Product, Pricing, Login.
- Protected app area (`/app`) with authentication guard.
- Interactive map with markers for saved cities.
- Add-city form with reverse geocoding (coordinates -> city/country).
- City list and country list views.
- City detail page with date/notes and external wiki link.
- Delete city from list.

### 4) Tech Stack
- React 18
- React Router DOM 6
- React Leaflet + Leaflet
- React Datepicker
- JSON Server (local mock API)
- Vite

### 5) Usage (English)

#### Prerequisites
- Node.js 18+ (recommended)
- npm

#### Install dependencies
```bash
npm install
```

#### Start mock API server
```bash
npm run server
```
This starts `json-server` at `http://localhost:9000` using `data/cities.json`.

#### Start frontend dev server
```bash
npm run dev
```
Then open the local URL shown by Vite (typically `http://localhost:5173`).

#### Build for production
```bash
npm run build
```

#### Preview production build
```bash
npm run preview
```

#### Demo login credentials
- Email: `nana@example.com`
- Password: `1234567890`

---

## 中文版

### 1）项目主要内容
WorldWise 是一个用于记录旅行足迹的单页应用。用户登录后，可以在交互式地图上点击位置并添加去过的城市，查看城市列表、国家列表、城市详情，并可删除记录。

### 2）项目目的
这个项目主要用于演示：
- React 组件化与路由页面组织方式；
- 使用 Context + Reducer 进行全局状态管理；
- 使用 `react-leaflet` 处理地图展示与交互；
- 使用 URL 查询参数（`lat/lng`）驱动页面状态；
- 对接 `json-server` 模拟 REST API，完成基础 CRUD 流程。

### 3）核心功能
- 公共页面：主页、产品页、定价页、登录页；
- 受保护的应用区（`/app`），未登录不可访问；
- 地图展示已保存城市标记；
- 通过点击地图进入表单，逆地理编码自动补全城市/国家；
- 城市列表与国家列表展示；
- 城市详情展示（日期、备注、外链）；
- 城市删除功能。

### 4）技术栈
- React 18
- React Router DOM 6
- React Leaflet + Leaflet
- React Datepicker
- JSON Server（本地模拟后端）
- Vite

### 5）使用方式（中文）

#### 环境准备
- Node.js 18+（推荐）
- npm

#### 安装依赖
```bash
npm install
```

#### 启动模拟后端
```bash
npm run server
```
该命令会在 `http://localhost:9000` 启动 `json-server`，数据文件为 `data/cities.json`。

#### 启动前端开发服务器
```bash
npm run dev
```
启动后按 Vite 控制台提示打开本地地址（通常为 `http://localhost:5173`）。

#### 打包构建
```bash
npm run build
```

#### 预览构建结果
```bash
npm run preview
```

#### 演示登录账号
- 邮箱：`nana@example.com`
- 密码：`1234567890`

---

## Notes / 说明
- Authentication is mock-only (front-end fake auth), intended for demo and learning.
- 当前登录是前端假登录，仅用于演示与学习。
