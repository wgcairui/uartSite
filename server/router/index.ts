/* jshint esversion:8 */
import Router from "koa-router";
import Auth from "./auth";
import Upload from "./upload";
import Docment from "./Docment";
import File, { getFileStatAndDown } from "./file";/* 
import fs from "fs"
// import Send from "koa-send";
import { ParameterizedContext } from "koa"; */

const router = new Router();
// 下载附件
router.get("/down/*", File);
router.get("/upload/*", File);
// 图片
router.get( /(\/_CMS_NEWS_IMG_\/*|a_images\/*)/, File);
// router.get("/a_images/*", File);
//
router.post("/auth/:id", Auth);
router.put("/uploads/:id", Upload);
router.get("/api/:id", Docment);
/* 
async function down(ctx: ParameterizedContext<any, Router.IRouterParamContext<any, {}>>) {
  try {
    const result = await getFileStatAndDown(ctx.path);
    console.log({result});
    
    if (result.stat) {
      // 文件路径需要定位到npm根目录,Send函数会二次处理路径
      const filePath: string = "server/static/" + ctx.path;

      ctx.attachment(result.Path);
      ctx.body = fs.createReadStream(result.Path)
      //await Send(ctx, filePath); 
    } else {
      ctx.throw(400, "no files");
    }
  } catch (error) {
    ctx.throw(400, error);
  }
} */

export default router;
