include "common.thrift"
include "auth.thrift"

/**
* 建筑明细
*/
struct BuildDetail {
    1: string id,
    2: string main_id,
    3: string name,
    4: string desc,
    5: string url1,
    6 :string url2,
    7: string url3,
    8: string url4,
    9: string url5,
    10:string url6
}

/**
* 建筑
*/
struct Build {

  1: string id,
    /*
     * 建筑名称
     */
   2: string name,
    /*
     * 建筑分类   1：普通建筑 2：民间建筑
     */
   3: string type,
    /*
     * 建筑类别
     */
   4: string sort,
    /*
     * 区id
     */
   5: i32 district_id,
 /*
     * 区id
     */
   6: string district_name,
   7: string address,
   8: string x,
   9: string y,
   10: string url,
  /*
    * 建筑分类   1：普通建筑描述 存json 2：民间建筑描述 string
    */
   11: string desc,
   12: string state,
   13: string op,
   14: string op_time,
   15: common.Back back,
   16: list<BuildDetail> details
}
/**
* 评论
*/
struct Comment {
    1: string id,
    2: string main_id,
    3: string body,
    4: string level,
    5: string url1,
    6 :string url2,
    7: string url3,
    8: string url4,
    9: string url5,
    10:string url6,
    11:string state,
    /**
    * 1：评价反馈 2：意见反馈
    */
    12:string type,
    /*
     *  type=2 意见反馈 是否采纳
     */
    13:string isused,
    14: common.Back back
}


struct NoticeDetail {
    1: string id,
    2: string main_id,
     /*
     *  1：文本 2：图片
     */
    3: string type,
     /*
     *  1：文本 2：url
     */
    4: string body
}
struct Notice {
    1: string id,
    2: string title,
    /*
     *  1：新闻公告 2：活动公告
     */
    3: string type,
    4: string source,
    5: string public_time,
    6 :string href_name,
    7: string href,
    8: string url,
    9: string start_t,
    10:string end_t,
    11:string address,
    12:string state,
    13: common.Back back,
    14:list<NoticeDetail> details
}



struct Sort {
    1: string name,
    2: string url,
    3: string op,
    4: string op_time
}

struct PicDetail {
    1: string id,
    2: string main_id,
    3: string url,
    4: string desc
}
struct Pic {
    1: string id,
    2: string title,
    3: string url,
    4: string state,
    5: string op,
    6: string op_time,
    7: common.Back back,
    8: list<PicDetail>  details
}



  /**
     *  列表
     */
    struct BuildList {
      1: list<Build> data,
      /**
       * 数据总数
       */
      2: i32 totalSize
    }
    struct CommentList {
      1: list<Comment> data,
      /**
       * 数据总数
       */
      2: i32 totalSize
    }
     struct NoticeList {
          1: list<Notice> data,
          /**
           * 数据总数
           */
          2: i32 totalSize
        }
        struct PicList {
          1: list<Pic> data,
          /**
           * 数据总数
           */
          2: i32 totalSize
        }
        struct SortList {
          1: list<Sort> data,
          /**
           * 数据总数
           */
          2: i32 totalSize
        }




service buildSvc {
 
  /**
   * 注册  (app,web)
   */
  auth.Account  create(
    /**
     * 账户信息
     */
    1: auth.Account account
  )
  /**
   * 登录 (app,web)
   */
  auth.Account  login(
    /**
     * 账户信息
     */
    1: auth.Account account
  )








  /**
      * 后端获取菜单权限MenuList  (web)
      */
     auth.MenuList getMenu(
       /**
        * 用户主键
        */
       1: string seq_no
     )
    /**
      *   后台获取列表(web)
      */
      BuildList findBuilds(
       1: Build build,
       2: common.Page  page
     )
    CommentList findComments(
       1: Comment comment,
       2: common.Page  page
    )
    NoticeList findNotices(
       1: Notice notice,
       2: common.Page  page
    )
      SortList findSorts(
         1: Sort sort,
         2: common.Page  page
      )
      PicList findPics(
         1: Pic pic,
         2: common.Page  page
      )
      auth.AccountList findAccounts(
         1: auth.Account account,
         2: common.Page  page
      )
 /**
      *    获取详情(web app)
      */
Build  findBuild(
1: string id
)
Comment  findComment(
1: string id
)
Notice  findNotice(
1: string id
)
Sort  findSort(
1: string name
)
Pic  findPic(
1: string id
)

//      保存（web）
common.Back  saveBuild(
1: Build  build
)

    //      test
    string  testThrift( )
}