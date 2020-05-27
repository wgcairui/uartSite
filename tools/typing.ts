/* eslint-disable camelcase */
/* 用户信息 */
export interface UserInfo {
  user: string;
  name: string;
  passwd: string;
  tel?: number;
  mail?: string;
  DateTime: Date;
  stat: boolean;
  Group?: string;
  IP?: string;
}
// apollo server result
export interface ApolloMongoResult {
  msg?: string;
  ok: number;
  n?: number;
  nModified?: number;
  upserted?: any;
}
// apollo ctx
export interface ApolloCtx extends UserInfo {
  loggedIn: boolean;
}
type HtmlString = string;
export type contentType = 'html' | '';
// 公用包装
export interface GMpack {
  PageTitle?: string
  Pagekeywords?: string
  Pagedescription?: string
  MainUrl?: string
  MainTitle?: string; // 分类
  MainParent?: string; // 父类
  date?: Date | string; // 日期
  table?: DbTables
  href?: string
  link?: string
}
// 公用链接格式
export interface GMlink {
  target?: string;
  href?: string;
  link?: string;
  title: string;
}
// 产品目录
export interface product extends GMpack {
  title: string;
  href: string;
  img: string;
  link: string;
}
//
export interface productContentOld {
  type: contentType;
  content: HtmlString;
}
// 产品详情
// 产品详情
export interface productListOld {
  img: string[];
  head?: string;
  body?: string;
}
// 产品包装
export interface productList extends GMpack, productListOld {
  title: string
}
// support asid
export interface supportAsid extends GMpack, GMlink { }
export interface supportProblem extends GMpack, GMlink {
  child?: supportProblem[]
}

// 软件资料目录
export interface support extends GMpack {
  language?: string;
  type: string;
  title: string;
  platform?: string;
  size?: string;
  version?: string;
  updateReason?: string;
  down?: string;
}

// 教程
export interface supportList extends GMpack {
  title: string;
  link: string;
  href: string;
  movie?: string;
  html?: HtmlString;
  parentsUntil?: string;
  parent?: string;
  data?: string;
}

// 经销商
export interface buy extends GMpack {
  alt: string;
  shape: string;
  coords: string;
  href: string;
}
// 经销商详情
export interface buyList extends GMpack {
  parentsUntil: string;
  link: string;
  parent: string;
  title: string;
  content: string;
}

// vr
export interface vr extends GMpack {
  title: string
  img: string;
  name: string;
  time: string;
  text: string;
  link: string;
  href: string;
  linkText: string;
}
// 案例
export interface cases extends vr { }
// 案例详情
export interface caseList extends GMpack {
  title: string/* 
  text?: string[];
  pic?: string[]; */
  content: string
}
// about
export interface about extends GMpack {
  type: string
  webSite: string
  content: string
}
// page
export interface pageLink extends GMpack {
  title: string;
  href: string;
  link: string;
  args?: pageLink[];
}
// router
export interface router {
  title?: string;
  rout: string;
  href: string
}
/* 跨域查询 */
export type DbTables =
  | 'Product'
  | 'Product_list'
  | 'Support'
  | 'Support_list'
  | 'Buy_list'
  | 'Buy'
  | 'VR'
  | 'Case'
  | 'Case_list'
  | 'News'
  | 'News_list'
  | 'About'
  | 'Head'
  | 'Page'
  | 'Router';

export interface CrorQuary {
  i18n?: string;
  SiteName?: string;
  table: DbTables;
  title?: string;
  parent?: string;
  isNews?: boolean;
  [T: string]: any;
}

// uploadResult
export interface uploadResult {
  originalFilename: string;
  name: string;
  path: string;
  link: string;
  size: number;
}
// fileDirList
export interface fileDirList {
  files: string[];
  size: number;
  msg: string;
}
// 上传文件选中文件
export interface selectFiles {
  path: string;
  name: string;
  filetype: string;
}
// 上传产品类型
export interface editProduct {
  selectType: string;
  title: string;
  content_head: string;
  content_body: string;
  indexPic: string;
  carouselPic: string[];
}

// 代理商名称限定
export type AgentName = 'localhost' | '湖北雷迪司' | '贵州代理商' | '陕西代理商';
// 代理
export interface Agents {
  name: AgentName;
  url: string;
}
