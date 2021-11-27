/**
 * 将本地目录上传到服务器
 * 开发环境、测试环境73
 */

const gulp = require("gulp");
const zip = require("gulp-zip");
const gulpSequence = require("gulp-sequence");
const shell = require("gulp-shell");
const del = require("del");
const GulpSSH = require("gulp-ssh");

/**
 * 账户配置
 */
const username = "root";
const password = "Abc@123#130960";

/**
 * 清空临时文件
 */
gulp.task("clean", () => {
  return del(["./public", "./public.zip"]);
});

/**
 * 清空压缩包
 */
gulp.task("cleanPackage", () => {
  return del(["./public.zip"]);
});

/**
 * 执行build打包命令
 */
gulp.task("build", shell.task("npm run build"));

/**
 * 将dist目录里所有文件打成zip压缩包
 */
gulp.task("zip", () => {
  return gulp.src("public/**/*").pipe(zip("public.zip")).pipe(gulp.dest("./"));
});

/**
 * 初始化ssh实例
 */
const gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: {
    host: "42.192.139.254",
    port: 22,
    username,
    password,
  },
});

/**
 * 清空站点文件夹
 */
gulp.task("clearFile", () => {
  return gulpSSH.shell(["cd /home/GaoBlog/", "rm -rf *"]);
});

/**
 * 上传压缩包
 */
gulp.task("upload", ["clearFile"], () => {
  return gulp.src("./public.zip").pipe(gulpSSH.dest("/home/GaoBlog/"));
});

/**
 * 解压、重启nginx
 */
gulp.task("unzip", () => {
  return gulpSSH.shell([
    "cd /home/GaoBlog/",
    "unzip public.zip",
    "service nginx restart",
    "rm public.zip",
  ]);
});

/**
 * 开发环境部署
 * 清空dist目录 -> build -> 压缩 -> 清空站点文件夹 -> 上传 -> 解压 -> 重启nginx
 */
gulp.task("deploy_dev", (done) => {
  gulpSequence(
    "clean",
    "build",
    "zip",
    "upload",
    "unzip",
    "cleanPackage"
  )(done);
});
