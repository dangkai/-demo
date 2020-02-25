/*
* get all http url
*/
angular.module('avicit.platform.mobile.services.sqlinit', [])
.factory('sqlService', ['$cordovaSQLite', 'PlatformConfigs',
function($cordovaSQLite, PlatformConfigs){
    return{
        initSql : function(callback){
			if(PlatformConfigs.develop){
				callback();
				return;
			}
	        var db = $cordovaSQLite.openDB({ name: "contact.db" });
	        var q1 = table;
	        $cordovaSQLite.execute(db, q1).then(function(res) {
	            console.log("res: " + JSON.stringify(res));
	        }, function (err) {
	            console.error(err);
	        });
	        console.log(sql.split(";").length);
        	var sqls = sql.split(";");
        	for(var i = 0; i < sqls.length; i++){
        		if(sqls[i] != ''){
		            $cordovaSQLite.execute(db, sqls[i]).then(function(res) {
		                console.log("res: " + JSON.stringify(res));
		                if(res.insertId == sqls.length - 2){
		                	callback();
		                }
		            }, function (err) {
		                console.error(err);
		            });
        		}
        	}
	    },
	    
		getContact : function(callback){
			if(PlatformConfigs.develop){
				callback();
				return;
			}
	        var db = $cordovaSQLite.openDB({ name: "contact.db" });
	        var q1 = get;
	        $cordovaSQLite.execute(db, q1).then(function(res) {
	            console.log("res: " + JSON.stringify(res));
	            callback(res);
	        }, function (err) {
	            console.error(err);
	        });
	    },
    }
    
}])
;
var get = "select * from person order by LOGIN_NAME";
var table = 'CREATE TABLE IF NOT EXISTS "person" ("NAME" TEXT,"LOGIN_NAME" TEXT,"EMAIL" TEXT,"OFFICE_TEL" TEXT,"MOBILE" TEXT,"SEX" TEXT,"DEPT_NAME" TEXT);';
var sql = "INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王健', 'wangj', 'wangj@avicit.com', '58355702', '13910846454', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李莹莹', 'liyy', 'liyy@avicit.com', '58355160', '15901226662', '2', '党群工作部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘云', 'liuyun', 'liuyun@avicit.com', NULL, '15609200029', '2', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('仲法文', 'zhongfw', 'zhongfw@avicit.com', '8818/*0662', '18609284411', '1', '西安公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李阳', 'liy', 'liy@avicit.com', '58355192', '13681551620', '2', '经营管理部/财务处');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王崇宇', 'wangcy', 'wangcy@avicit.com', '028-87031799', '18602808037', '1', '成都公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张秋颖', 'zhangqy', 'zhangqy@avicit.com', '58355191/5146', '13488663358', '2', '经营管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张志霞', 'zhangzx', 'zhangzx@avicit.com', NULL, '15929940656', '2', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('薛白石', 'xuebs', 'xuebs@avicit.com', '58355107', '13701008008', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('葛磊', 'gel', 'gel@avicit.com', '58355170', '13501000387', '1', '市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王海龙', 'wanghl', 'wanghl@avicit.com', NULL, '15991385694', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李莹莹', 'liyy', 'liyy@avicit.com', '58355160', '15901226662', '2', '党群工作部/党建工作处（企业文化处）');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('石振华', 'shizh', 'shizh@avicit.com', '58355176', '18611092699', '1', '市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('潘文川', 'panwc', 'panwc@avicit.com', '028-87031799-805', '13980951587', '1', '成都公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张立霞', 'zhanglx', 'zhanglx@avicit.com', '58355339', '13683183600', '2', '经营管理部/质量处');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('穆建华', 'mujh', 'mujh@avicit.com', '*0659', '13501070715', '1', '行政管理部/司机组');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张华', 'zhangh', 'zhangh@avicit.com', '*0695', '13801399016', '1', '行政管理部/司机组');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郄永军', 'qieyj', 'qieyj@avicit.com', '58355666', '13910902169', '1', '系统工程应用中心/业务发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('姚磊', 'yaolei', 'yaolei@avicit.com', NULL, '15909290271', '1', '西安公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('葛磊', 'gel', 'gel@avicit.com', '58355170', '13501000387', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张刚', 'zhangg', 'zhangg@avicit.com', '58355342', '13611087217', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张宏强', 'zhanghongq', 'zhanghongq@avicit.com', NULL, '15091339674', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('付剑锋', 'fujf', 'fujf@avicit.com', '*0702', '15110250892', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('霍亮', 'huol', 'huol@avicit.com', NULL, '13892855219', '1', '西安公司/软件技术二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('钟进', 'zhongj', 'zhongj@avicit.com', '8837/*0876/58355106', '13701055380', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('尹利凯', 'yinlk', 'yinlk@avicit.com', '58355113', '13701084575', '1', '市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陶剑', 'taoj', 'taoj@avicit.com', '58355154', '13401008576', '1', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('乔宇', 'qiaoy', 'qiaoy@avicit.com', NULL, '18991144190', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孟英博', 'mengyb', 'mengyb@avicit.com', '58355127', '18600482757', '2', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张秋颖', 'zhangqy', 'zhangqy@avicit.com', '58355191/5146', '13488663358', '2', '经营管理部/财务处');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('林岗山', 'lings', 'lings@avicit.com', '8852 /*0587', '13601016943', '1', '战略规划工作委员会');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('付强', 'fuqiang', 'fuqiang@avicit.com', '*0740', '18611881128', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('朱彬（研发中心）', 'zhub', 'zhub@avicit.com', '0617', '13772153623', '1', '西安公司/研发中心西安分部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵春建', 'zhaocj', 'zhaocj@avicit.com', '部里', '13911411710', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郁建', 'yuj', 'yuj@avicit.com', '58355600', '13601375402', '1', '战略规划工作委员会');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张蕾', 'zhanglei', 'zhanglei@avicit.com', '58355174', '18611218407', '2', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈云龙', 'chenyunl', 'chenyunl@avicit.com', '58355172', '13911546382', '1', '市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('冷毅勋', 'lengyx', NULL, NULL, NULL, '1', '集团总部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('苗云辉', 'miaoyh', NULL, NULL, NULL, '1', '集团总部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张登馨', 'zhangdengxin', NULL, NULL, NULL, '1', '中航工业航空动力控制系统研究所');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('宋科璞', 'songkp', NULL, NULL, NULL, '1', '中航工业西安飞行自动控制研究所');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('梁尤疆', 'liangyj', NULL, NULL, NULL, '1', '中航工业成都飞机设计研究所');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周永', 'zhouyong', NULL, NULL, NULL, '1', '中航工业成都飞机设计研究所');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('姜洪法', 'jianghf', NULL, NULL, NULL, '1', '中航工业发展研究中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘增进', 'liuzj', NULL, NULL, NULL, '1', '集团总部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('邢宏波', 'xinghb', NULL, NULL, NULL, '1', '集团总部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘金云', 'liujy', NULL, NULL, NULL, '1', '中航工业发展研究中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵孟琳', 'zhaoml', NULL, NULL, NULL, '1', '中航工业发展研究中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈明', 'chengm', NULL, NULL, NULL, '1', '中航工业发展研究中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('方义', 'fangy', NULL, NULL, NULL, '1', '集团总部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('邹海', 'zouh', NULL, NULL, NULL, '1', '中航工业成都飞机设计研究所');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('曾强', 'zengq', NULL, NULL, NULL, '1', '中航工业成都飞机工业(集团)有限责任公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('乐清洪', 'leqh', NULL, NULL, NULL, '1', '中航工业西安飞行自动控制研究所');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('熊道德', 'xiongdd', NULL, NULL, NULL, '1', '中航工业发展研究中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈裕兰', 'chenyl', NULL, NULL, NULL, '1', '中航工业成都飞机设计研究所');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('古志强', 'guzq', NULL, NULL, NULL, '1', '中航工业成都飞机设计研究所');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张博', 'zhangbo', NULL, NULL, NULL, '1', '中航工业西安飞行自动控制研究所');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈雪芬', 'chenxf', NULL, NULL, NULL, '1', '中航工业西安飞行自动控制研究所');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孟庆浩', 'mengqh', NULL, NULL, NULL, '1', '中航工业发展研究中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘仕雄', 'liusx', NULL, NULL, NULL, '1', '中航工业成都飞机设计研究所');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('方海川', 'fanghc', NULL, NULL, NULL, '1', '中航工业成都飞机工业(集团)有限责任公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('侯铄', 'hous', NULL, NULL, NULL, '1', '中航工业西安飞行自动控制研究所');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('胡田', 'hut', 'hut@avicit.com', '*0567', '13301060123', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李萍', 'lip', 'lip@avicit.com', '58355177', '13701320178', '2', '行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('姜雪峰', 'jiangxf', 'jiangxf@avicit.com', '58355137', '13718455720', '2', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李东旭', 'lidx', 'lidx@avicit.com', '8100/*0676/58355105', '13911029075', '1', '战略规划工作委员会');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('罗强', 'luoq', 'luoq@avicit.com', NULL, '18621892851', '1', '上海公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('沈言', 'shenyan', 'sheny@avicit.com', '58355688', '13501397679', '1', '经营管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨超', 'yangc', 'yangc@avicit.com', '58355166', '15001307089', '2', '经营管理部/计划处');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘萌萌', 'liumm', 'liumm@avicit.com', '*0783', '18618267017', '2', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('贾权', 'jiaq', 'jiaq@avicit.com', '8102/*0881', '13552163161', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('戴珺', 'daij', 'daij@avicit.com', '*0650', '13810045777', '2', '专项人才池');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孙蓉', 'sunr', 'sunr@avicit.com', '58355325', '13700277676', '2', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('谢维民', 'xiewm', 'xiewm@avicit.com', '58355152', '13501160433', '1', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('程文举', 'chengwj', 'chengwj@avicit.com', '0732', '13466375501', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵越', 'zhaoyue', 'zhaoyue@avicit.com', '*0861', '18601280109', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('平本红', 'pingbh', 'pingbh@avicit.com', '*0798', '18511922857', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('林岗山', 'lings', 'lings@avicit.com', '8852 /*0587', '13601016943', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('申焱波', 'shenyb', 'shenyb@avicit.com', '58355130', '13811992015', '2', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('冯江江', 'fengjj', 'fengjj@avicit.com', NULL, '13991309819', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郑晓伟', 'zhengxw', 'zhengxw@avicit.com', '58355123', '15910614803', '2', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李俊国', 'lijg', 'lijg@avicit.com', '58355156', '13910685537', '1', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('富强', 'fuq', 'fuq@avicit.com', '8221/*0636/58355103', '13911236577', '1', '战略规划工作委员会');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵洪岭', 'zhaohl', 'zhaohl@avicit.com', '8808/*0007/58355101', '13801219018', '1', '第一党小组');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('邢宝辉', 'xingbh', 'xingbh@avicit.com', '58355668', '18610275917', '1', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('熊明俊', 'xiongmj', 'xiongmj@avicit.com', NULL, '13681366051', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('吴春霞', 'wucx', 'wucx@avicit.com', '58355112', '13910902022', '2', '党群工作部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王昶民', 'wangcm', 'wangcm@avicit.com', NULL, '18691893386', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('高智鹏', 'gaozp', 'gaozp@avicit.com', '58355128', '18911883574', '1', '党群工作部/纪检监察审计处');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张弦', 'zhangx', 'zhangx@avicit.com', '58355167', '13810030065', '2', '市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张显贵', 'zhangxg', 'zhangxg@avicit.com', '58355349', '13718502806', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('梁建交', 'liangjj', 'liangjj@avicit.com', '58355139', '13001189749', '1', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王小艇', 'wangxt', 'wangxt@avicit.com', NULL, '13468856724', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('徐保文', 'xubw', 'xubw@avicit.com', '8861 /*0682', '13801023230', '1', '战略规划工作委员会');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王立书', 'wangls', 'wangls@avicit.com', '58355655', '13520883677', '1', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('吕寿杰', 'lvsj', 'lvsj@avicit.com', '*0855', '18611682309', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王健', 'wangj', 'wangj@avicit.com', '58355702', '13910846454', '1', '党群工作部/纪检监察审计处');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('仲法文', 'zhongfw', 'zhongfw@avicit.com', '8818/*0662', '18609284411', '1', '西安公司/行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('文宝', 'wenb', 'wenb@avicit.com', NULL, '13119103153', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郁建', 'yuj', 'yuj@avicit.com', '58355600', '13601375402', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('沈洪才', 'shenhc', 'shenhc@avicit.com', '58355121', '13699101105', '1', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('乔得吉', 'qiaodj', 'qiaodj@avicit.com', '*0791', '13810901305', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王立红', 'wanglh', 'wanglh@avicit.com', NULL, '18201186815', '2', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李群', 'liqun', 'liqun@avicit.com', '028-87031799-806', '13908174696', '2', '成都公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('沈欢欢', 'shenhh', 'shenhh@avicit.com', '58355133', '13601241880', '2', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张伦彦', 'zhangly', 'zhangly@avicit.com', '58355150', '13661157902', '1', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('倪胜玉', 'nisy', 'nisy@avicit.com', '021-51098056*805', '13611655422', '2', '上海公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李丽', 'lil', 'lil@avicit.com', '0582', '13811319681', '2', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈锦', 'chenj', 'chenj@avicit.com', '028-87031799-807', '13980951589', '2', '成都公司/行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('蒋宝国', 'jiangbg', 'jiangbg@avicit.com', '028-87031799-813', '13551299361', '1', '成都公司/行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('何雪亮', 'hexl', 'hexl@avicit.com', NULL, '13840470632', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('卢安国', 'luag', 'luag@avicit.com', '*0577', '13621390376', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杜悦', 'duy', 'duy@avicit.com', '*0739', '13426198026', '2', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('高星海', 'gaoxh', 'gaoxh@avicit.com', '8207/*0812/58355102', '13911318306', '1', '战略规划工作委员会');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('宁振波', 'ningzb', 'ningzb@avicit.com', '58355698', '13811220634', '1', '战略规划工作委员会');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵薇', 'zhaow', 'zhaow@avicit.com', NULL, '18691810661', '2', '西安公司/行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('唐静静', 'tjingjing', 'tjingjing@avicit.com', NULL, '18991265148', '1', '西安公司/系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张国蕊', 'zhanggr', 'zhanggr@avicit.com', '58355317', '18600606591', '2', '咨询业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('路仁义', 'lury', 'lury@avicit.com', '8222/*0691', '13601232612', '1', '安全保密部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王哲敏', 'wangzm', 'wangzm@avicit.com', '8893/*0586', '18500224132', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('肖卫东', 'xiaowd', 'xiaowd@avicit.com', '*0778', '13910761362', '1', '客户服务业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('谢山红', 'xiesh', 'xiesh@avicit.com', '028-87031799-804', '13980951580', '2', '成都公司/行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张帆', 'zhangf', 'zhangf@avicit.com', '024-82976108', '15604006111', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张登晓', 'zhangdx', 'zhangdx@avicit.com', '029-86844989', '15829920380', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王冶', 'wangye', 'wangye@avicit.com', '0899', '13810105230', '1', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周小森', 'zhouxs', 'zhouxs@avicit.com', '*0640', '13699260295', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('谢山红', 'xiesh', 'xiesh@avicit.com', '028-87031799-804', '13980951580', '2', '成都公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('范军', 'fanj', 'fanj@avicit.com', '58355120', '13910154111', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('曹勇', 'caoy', 'caoy@avicit.com', NULL, '13363943046', '1', '西安公司/软件技术二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王永辉', 'wangyh', 'wangyh@avicit.com', NULL, '13772121416', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵建香', 'zhaojx', 'zhaojx@avicit.com', NULL, '15094053457', '2', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('唐晓兰', 'tangxl', 'tangxl@avicit.com', '028-87031799', '13881780940', '2', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('徐晨曦', 'xucx', 'xucx@avicit.com', NULL, '13550357135', '2', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('吴昀蔚', 'wuyw', 'wuyw@avicit.com', '028-87031799', '18980923127', '1', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('向羽', 'xiangy', 'xiangy@avicit.com', NULL, '13808063527', '1', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('罗中祥', 'luozx', 'luozx@avicit.com', NULL, '13980598558', '1', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('贺雯姣', 'hewj', 'hewj@avicit.com', NULL, '15902922505', '2', '西安公司/软件技术二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('苏小亮', 'suxl', 'suxl@avicit.com', NULL, '15801577833', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('任伟恒', 'renwh', 'renwh@avicit.com', NULL, '15991981707', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杜红波', 'duhb', 'duhb@avicit.com', NULL, '13810966551', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('徐达', 'xud', 'xud@avicit.com', '0803', '18600601251', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘英杰（系统集成）', 'liuyj', 'liuyj@avicit.com', '*0863', '13810004096', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵越', 'zhaoyue', 'zhaoyue@avicit.com', '*0861', '18601280109', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('章家强', 'zhangjq', 'zhangjq@avicit.com', NULL, '15140096809', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李欣宁', 'lixn', 'lixn@avicit.com', '*0899', '13520095081', '2', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王东芸', 'wangdy', 'wangdy@avicit.com', NULL, '13709241682', '2', '西安公司/行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张韶琳', 'zhangsl', 'zhangsl@avicit.com', '0686', '13683236640', '2', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('丁浪', 'dingl', 'dingl@avicit.com', '021-51098056*806', '13671875047', '2', '上海公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('汤佳婧', 'tangjj', 'tangjj@avicit.com', '021-51098056*800', '13818192614', '2', '上海公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘庆', 'liuq', 'liuq@avicit.com', NULL, '18610145156', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('程宇', 'chengy', 'chengy@avicit.com', '*0786', '13466327332', '1', '客户服务业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈永启', 'chenyq', 'chenyq@avicit.com', '021-51098056*804', '13818312224', '1', '上海公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('沈恂芝', 'shenxz', 'shenxz@avicit.com', '021-51098056*810', '15800857460', '2', '上海公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨海峰', 'yanghf', 'yanghf@avicit.com', '58355608/5604', '18611108819', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郑超', 'zhengc', 'zhengc@avicit.com', '*0635', '15001089159', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张文博', 'zhangwb', 'zhangwb@avicit.com', NULL, '13898874682', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('谢元东', 'xieyd', 'xieyd@avicit.com', '028-87031799-812', '13608015423', '1', '成都公司/系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('宋广先', 'songgx', 'songgx@avicit.com', NULL, '18702909870', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('乔得吉', 'qiaodj', 'qiaodj@avicit.com', '*0791', '13810901305', '1', '客户服务业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('段连坤', 'duanlk', 'duanlk@avicit.com', NULL, '18691883480', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('邓苏', 'dengs', 'dengs@avicit.com', '*0802', '13439528216', '2', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('姚烁', 'yaos', 'yaos@avicit.com', NULL, '13581714554', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('庞宝勇', 'pangby', 'pangby@avicit.com', NULL, '13910687848', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('邬国文', 'wugw', 'wugw@avicit.com', '024-82976108', '15040083538', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('徐再宇', 'xuzy', 'xuzy@avicit.com', '024-82976108', '13478173427', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵春建', 'zhaocj', 'zhaocj@avicit.com', '部里', '13911411710', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郝冰', 'haob', 'haob@avicit.com', '0852', '15810904940', '2', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('常创业', 'changcy', 'changcy@avicit.com', '58355306/5307', '18600189833', '1', '咨询业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郑双成', 'zhengsc', 'zhengsc@avicit.com', NULL, '15001018618', '1', '客户服务业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘伟（研发中心）', 'liuwei', 'liuwei@avicit.com', NULL, '15901092737', '1', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李聪涛', 'lict', 'lict@avicit.com', NULL, '13520656793', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孙慧峰', 'sunhf', 'sunhf@avicit.com', '58355335', '13911642501', '1', '采购部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘晨曦', 'liucx', 'liucx@avicit.com', NULL, '13552484938', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('叶偲', 'yes', 'yes@avicit.com', '028-87031799', '13982226814', '1', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('牟珂锐', 'moukr', 'moukr@avicit.com', '028-87031799', '13408579348', '1', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郑艳', 'zhengy', 'zhengy@avicit.com', '0623', '13552568197', '2', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('贺欣', 'hex', 'hex@avicit.com', NULL, '13810622928', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('万方伟', 'wanfw', 'wanfw@avicit.com', NULL, '15991801226', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('秦东辉', 'qindh', 'qindh@avicit.com', '58355601/5597', '13671140660', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('许鹏', 'xup', 'xup@avicit.com', NULL, '18640132879', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郭军', 'guojun', 'guojun@avicit.com', NULL, '18629335354', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('付海亮', 'fuhl', 'fuhl@avicit.com', '58355601/5597', '18600882620', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王兆强', 'wangzq', 'wangzq@avicit.com', NULL, '13801320402', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李强（系统集成）', 'liqiang', 'liqiang@avicit.com', NULL, '18610063510', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王涛（运行管理）', 'wangtao', 'wangtao@avicit.com', NULL, '18911531299', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('贾轲', 'jiak', 'jiak@avicit.com', '*0723', '18600440410', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张显贵', 'zhangxg', 'zhangxg@avicit.com', '58355349', '13718502806', '1', '信息化部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张洋（系统集成）', 'zhangyang', 'zhangyang@avicit.com', NULL, '18601136801', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王瑞伟', 'wangrw', 'wangrw@avicit.com', '*0830', '13521374375', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周丙伟', 'zhoubw', 'zhoubw@avicit.com', '*0851', '13426348069', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('蔡亚辉', 'caiyh', 'caiyh@avicit.com', '*0642', '13910674117', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('何海龙', 'hehl', 'hehl@avicit.com', '*0834', '15811162623', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('徐晓虹', 'xuxh', 'xuxh@avicit.com', '58355623/5626', '13621086794', '2', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('韩永亮', 'hanyl', 'hanyl@avicit.com', '58355579/5584', '18610651795', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘奇', 'liuqi1', 'liuqi1@avicit.com', '58355579/5584', '18600764018', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('马罡', 'mag', 'mag@avicit.com', '58355613', '13651376735', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('文博玄', 'wenbx', 'wenbx@avicit.com', '58355613', '13581585958', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('林春农', 'lincn', 'lincn@avicit.com', '58355623/5626', '13910001932', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵兴华', 'zhaoxh', 'zhaoxh@avicit.com', '*0811', '18612186131', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘永', 'liuyong', 'liuyong@avicit.com', NULL, '13908041300', '1', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('薛函', 'xueh', 'xueh@avicit.com', '80480599', '15810391456', '2', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('党国强', 'danggq', 'danggq@avicit.com', NULL, '15009267633', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李伟涛', 'liwt', 'liwt@avicit.com', NULL, '15991697620', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('马俊燕', 'majy', 'majy@avicit.com', '58355619', '18611452526', '2', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王馨', 'wangx', 'wangx@avicit.com', '58355110', '13810808073', '1', '安全保密部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('叶华', 'yeh', 'yeh@avicit.com', '*0773', '13370180288', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('乔永嘉', 'qiaoyj', 'qiaoyj@avicit.com', '58355306/5307', '13699284013', '1', '咨询业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('律师', 'lvs', 'lvs@avicit.com', NULL, '18611682209', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨德丰', 'yangdf', 'yangdf@avicit.com', NULL, '15942307415', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郭林', 'guol', 'guol@avicit.com', NULL, '13842085925', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨威', 'yangw', 'yangw@avicit.com', '82976108', '15002483317', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('魏禹', 'weiy', 'weiy@avicit.com', '*0814', '15940504935', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘波（综合管理）', 'lbo', 'lbo@avicit.com', '58355623/5626', '13910927828', '2', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李斌（综合管理）', 'libin', 'libin@avicit.com', '58355623/5626', '13581784969', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('谷博', 'gub', 'gub@avicit.com', NULL, '18611745621', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孟然', 'mengr', 'mengr@avicit.com', NULL, '15940183965', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('系统管理员', 'sysadmin', NULL, NULL, NULL, '1', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('安全管理员', 'safeadmin', NULL, NULL, NULL, '1', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('安全审计员', 'safeaudi', NULL, NULL, NULL, '1', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('平台管理员', 'admin', NULL, NULL, NULL, '2', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('高桂霞', 'gaogx', 'gaogx@avicit.com', NULL, '13661010706', '2', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张银利', 'zhangyinli', 'zhangyinli@avicit.com', NULL, '13659207610', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周玉杰', 'zhouyj', 'zhouyj@avicit.com', NULL, '13572074309', '1', '西安公司/行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张立霞', 'zhanglx', 'zhanglx@avicit.com', '58355339', '13683183600', '2', '经营管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵亮（综合管理）', 'zhaol', 'zhaol@avicit.com', '58355612', '13811346725', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨如峰', 'yangrf', 'yangrf@avicit.com', '*0877', '13691059833', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王亮（系统集成）', 'wangl', 'wangl@avicit.com', '*0639', '18612272619', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张刚', 'zhangg', 'zhangg@avicit.com', '58355342', '13611087217', '1', '经营管理部/质量处');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('袁锋利', 'yuanfl', 'yuanfl@avicit.com', NULL, '15891766957', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('魏文军', 'weiwj', 'weiwj@avicit.com', '*0692', '13501097975', '1', '行政管理部/司机组');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张蕾', 'zhanglei', 'zhanglei@avicit.com', '58355174', '18611218407', '2', '市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('姚轶峰', 'yaoyf', 'yaoyf@avicit.com', '58355136', '15811557677', '1', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('傅吉红', 'fujh', 'fujh@avicit.com', '58355168', '13911338409', '2', '市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('侯安生', 'houas', 'houas@avicit.com', '58355138', '13901100771', '1', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('徐洋', 'xuy', 'xuy@avicit.com', '58355193', '13691393436', '2', '经营管理部/财务处');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('娄剑锋', 'loujf', 'loujf@avicit.com', NULL, '18681873735', '1', '西安公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孙珞珈', 'sunlj', 'sunlj@avicit.com', '58355161', '18611737328', '2', '党群工作部/党建工作处（企业文化处）');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵永宣', 'zhaoyx', 'zhaoyx@avicit.com', NULL, '13581999064', '1', '经营管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('沈洪才', 'shenhc', 'shenhc@avicit.com', '58355121', '13699101105', '1', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李志强', 'lizq', 'lizq@avicit.com', NULL, '13201823450', '1', '西安公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘庆', 'liuq', 'liuq@avicit.com', NULL, '18610145156', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王立书', 'wangls', 'wangls@avicit.com', '58355655', '13520883677', '1', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('罗勇', 'luoy', 'luoy@avicit.com', '028-87031799-801', '13808035518', '1', '成都公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨自俊', 'yangzj', 'yangzj@avicit.com', NULL, '15349285240', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('沈波', 'shenb', 'shenb@avicit.com', '58355697', '13991345563', '1', '系统工程应用中心/设计与制造工程二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('梁学高', 'liangxg', 'liangxg@avicit.com', NULL, '13152081155', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('薛白石', 'xuebs', 'xuebs@avicit.com', '58355107', '13701008008', '1', '咨询业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵玲诺', 'zhaoln', 'zhaoln@avicit.com', '58355155', '15901550356', '2', '党群工作部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('吴春霞', 'wucx', 'wucx@avicit.com', '58355112', '13910902022', '2', '党群工作部/纪检监察审计处');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('栾建波', 'luanjb', 'luanjb@avicit.com', '*0737', '13693613775', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张宏亮', 'zhanghl', 'zhanghl@avicit.com', NULL, '13572246760', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('姜丽红', 'jianglh', 'jianglh@avicit.com', '84380602', '13683219932', '2', '人力资源部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘伟（南昌公司）', 'liuw', 'liuw@avicit.com', '029-88348455-603', '15202451775', '1', '南昌公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('仲法文', 'zhongfw', 'zhongfw@avicit.com', '8818/*0662', '18609284411', '1', '西安公司/顾问组');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('程燕', 'chengyan', 'chengyan@avicit.com', '58355318', '13693329870', '2', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵永宣', 'zhaoyx', 'zhaoyx@avicit.com', NULL, '13581999064', '1', '经营管理部/计划处');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨欢', 'yangh', 'yangh@avicit.com', '58355126', '13691588756', '2', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('冯海滨', 'fenghb', 'fenghb@avicit.com', '8501/*0565', '18612561321', '1', '第一党小组');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('卜英鹏', 'buyp', 'buyp@avicit.com', NULL, '18092064051', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('罗明彦', 'luomy', 'luomy@avicit.com', NULL, '15929728108', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('沈欢欢', 'shenhh', 'shenhh@avicit.com', '58355133', '13601241880', '2', '技术管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('霍亮', 'huol', 'huol@avicit.com', NULL, '13892855219', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周红彦', 'zhouhy', 'zhouhy@avicit.com', NULL, '13679121953', '1', '西安公司/研发中心西安分部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孙玉洁', 'sunyj', 'sunyj@avicit.com', NULL, '18629011437', '2', '西安公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周蕾', 'zhoul', 'zhoul@avicit.com', '58355199', '13911311196', '2', '行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郑重', 'zhengz', 'zhengz@avicit.com', '*0878', '18901131011', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('卢洁', 'luj', 'luj@avicit.com', '58355337', '13466622303', '2', '采购部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('路永刚', 'luyg', 'luyg@avicit.com', '*0683', '13263221524', '1', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('贾唯斌', 'jiawb', 'jiawb@avicit.com', '0638', '13811965464', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('闫惠生', 'yanhs', 'yanhs@avicit.com', '*0836', '13991210150', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李孟田', 'limt', 'limt@avicit.com', '0703', '13146730308', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王弋', 'wangy', 'wangy@avicit.com', '*0672', '18601295576', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孔正', 'kongz', 'kongz@avicit.com', '*0704', '13675188754', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('黄明军', 'huangmj', 'huangmj@avicit.com', NULL, '18611616389', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张天池', 'zhangtc', 'zhangtc@avicit.com', NULL, '13522674568', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王鹏鹏', 'wangpp', 'wangpp@avicit.com', NULL, '15001368665', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('任斌', 'renb', 'renb@avicit.com', NULL, '18210077533', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('裴东时', 'peids', 'peids@avicit.com', '0631', '15801520823', '2', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杜泽彪', 'duzb', 'duzb@avicit.com', '*0875', '13552858708', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('徐超', 'xuc', 'xuc@avicit.com', '*0779', '13910165571', '1', '客户服务业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵红波', 'zhaohb', 'zhaohb@avicit.com', '58355346', '13910758879', '1', '信息化部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('姚蓁', 'yaoz', 'yaoz@avicit.com', '*0592', '13810223131', '2', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('秦云鹏', 'qinyp', 'qinyp@avicit.com', '58355613', '13691253690', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('于志君', 'yuzj', 'yuzj@avicit.com', '*0845', '18910599678', '2', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈淑平', 'chensp', 'chensp@avicit.com', '0743', '13501256267', '2', '行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('贾伟', 'jiaw', 'jiaw@avicit.com', '*0721', '13811598240', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李强（成都公司）', 'liq', 'liq@avicit.com', NULL, '15002899047', '1', '成都公司/系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵梦洁', 'zhaomj', 'zhaomj@avicit.com', '58355345', '13521806826', '2', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('侯辛涛', 'houxt', 'houxt@avicit.com', '58355332', '13911610659', '1', '采购部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵亮（系统集成）', 'zhaoliang', 'zhaoliang@avicit.com', NULL, '18601359791', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨丽', 'yangl', 'yangl@avicit.com', NULL, '18600097091', '2', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('司旭', 'six', 'six@avicit.com', NULL, '13601274585', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('程卫', 'chengw', 'chengw@avicit.com', NULL, '13509181314', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('隋广田', 'suigt', 'suigt@avicit.com', NULL, '18602441761', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周斌', 'zhoub', 'zhoub@avicit.com', '*0832', '18611508504', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('严锋', 'yanf', 'yanf@avicit.com', NULL, '18681892409', '1', '西安公司/系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张霁', 'zhangw', 'zhangw@avicit.com', '028-87031799', '13980034821', '1', '成都公司/软件技术二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('冯桃', 'fengt', 'fengt@avicit.com', '028-87031799', '13880477188', '1', '成都公司/软件技术二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘魁', 'liuk', 'liuk@avicit.com', '*0575', '18601239169', '1', '客户服务业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨飞龙', 'yangfl', 'yangfl@avicit.com', NULL, '18618461186', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵素芳', 'zhaosf', 'zhaosf@avicit.com', '0749', '13810308107', '2', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张明', 'zhangm', 'zhangm@avicit.com', NULL, '13522138736', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈名志', 'chenmz', 'chenmz@avicit.com', '58355317', '15101685330', '1', '咨询业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李金刚', 'lijingang', 'lijingang@avicit.com', NULL, '15110001522', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孙帆', 'sunf', 'sunf@avicit.com', NULL, '15110109623', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('宋权一', 'songqy', 'songqy@avicit.com', '58355623/5626', '13501168813', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('熊明俊', 'xiongmj', 'xiongmj@avicit.com', NULL, '13681366051', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨春瑞', 'yangcr', 'yangcr@avicit.com', '*0874', '18611729835', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈思铭', 'chengsm', 'chengsm@avicit.com', NULL, '13281140458', '1', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('徐保文', 'xubw', 'xubw@avicit.com', '8861 /*0682', '13801023230', '1', '公司领导');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('程燕', 'chengyan', 'chengyan@avicit.com', '58355318', '13693329870', '2', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('侯安生', 'houas', 'houas@avicit.com', '58355138', '13901100771', '1', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张伦彦', 'zhangly', 'zhangly@avicit.com', '58355150', '13661157902', '1', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李俊国', 'lijg', 'lijg@avicit.com', '58355156', '13910685537', '1', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('林岗山', 'lings', 'lings@avicit.com', '8852 /*0587', '13601016943', '1', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孙典雯', 'sundw', 'sundw@avicit.com', '58355117', '15810532498', '2', '人力资源部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('蒋珂', 'jiangk', 'jiangk@avicit.com', NULL, '18601274438', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('冯海滨', 'fenghb', 'fenghb@avicit.com', '8501/*0565', '18612561321', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张阳（系统集成）', 'zyang', 'zyang@avicit.com', '*0641', '13717660923', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孙旭峰', 'sunxf', 'sunxf@avicit.com', '*0671', '18600218023', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王鹤凌', 'wangheling', 'wangheling@avicit.com', '0670', '13910660295', '2', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘萌萌', 'liumm', 'liumm@avicit.com', '*0783', '18618267017', '2', '客户服务业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李庆斌', 'liqb', 'liqb@avicit.com', NULL, '13683053986', '1', '专项人才池');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('姜雪峰', 'jiangxf', 'jiangxf@avicit.com', '58355137', '13718455720', '2', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('谢维民', 'xiewm', 'xiewm@avicit.com', '58355152', '13501160433', '1', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陶剑', 'taoj', 'taoj@avicit.com', '58355154', '13401008576', '1', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨小娟', 'yangxj', 'yangxj@avicit.com', '58355317', '13911011979', '2', '咨询业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('吕萍', 'lvp', 'lvp@avicit.com', '58355705', '13810061745', '2', '信息化部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周婕', 'zjie', 'zjie@avicit.com', NULL, '18701556603', '2', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王超（咨询业务）', 'wangc', 'wangc@avicit.com', '58355306/5307', '13522254270', '1', '咨询业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王先念', 'wangxn', 'wangxn@avicit.com', '58355321', '15601090808', '1', '咨询业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('尹建彬', 'yinjb', 'yinjb@avicit.com', NULL, '13683394094', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('薛萍', 'xuep', 'xuep@avicit.com', '0897', '13426057802', '2', '客户服务业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('梁建交', 'liangjj', 'liangjj@avicit.com', '58355139', '13001189749', '1', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵亮（综合管理）', 'zhaol', 'zhaol@avicit.com', '58355612', '13811346725', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('董志茜', 'dongzq', 'dongzq@avicit.com', '*0822', '13671128368', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孙友良', 'sunyl', 'sunyl@avicit.com', '58355306/5307', '18610111190', '1', '咨询业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王昊鹏', 'wanghp', 'wanghp@avicit.com', NULL, '13810004537', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王珍明', 'wangzhenm', 'wangzhenm@avicit.com', NULL, '18612113997', '1', '客户服务业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('翟传祥', 'zhaicx', 'zhaicx@avicit.com', '*0703', '18101096581', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('梁勇', 'liangy', 'liangy@avicit.com', '028-87031799-815', '13980951585', '1', '成都公司/系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孙翔', 'sunx', 'sunx@avicit.com', NULL, '15901399655', '1', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王彦', 'wangyan', 'wangyan@avicit.com', '*0644', '13810345957', '1', '研发中心（产品研发）');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('平本红', 'pingbh', 'pingbh@avicit.com', '*0798', '18511922857', '1', '研发中心（产品研发）');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('蒋光春', 'jianggc', 'jianggc@avicit.com', '*0794', '18611761405', '1', '研发中心（产品研发）');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('朱阳阳', 'zhuyy', 'zhuyy@avicit.com', '*0700', '18618387725', '1', '研发中心（产品研发）');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('严红升', 'yanhongsheng', 'yanhongsheng@avicit.com', NULL, '18291925863', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('林洪', 'linh', 'linh@avicit.com', '*0651', '13651353786', '2', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('景波', 'jingb', 'jingb@avicit.com', '024-82976108', '13897964558', '2', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('夏常有', 'xiacy', 'xiacy@avicit.com', NULL, '15901481365', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张晓峰', 'zhangxf', 'zhangxf@avicit.com', '58355608/5604', '18500093377', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘英杰（综合管理）', 'liuyingj', 'liuyingj@avicit.com', '0710', '15321860006', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张加彩', 'zhangjc', 'zhangjc@avicit.com', '58355334', '13146910502', '2', '采购部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('宋炳楠', 'songbn', 'songbn@avicit.com', '0690', '13910679055', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('尉宏超', 'weihc', 'weihc@avicit.com', '58355623/5626', '13522109235', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('汪少明', 'wangsm', 'wangsm@avicit.com', NULL, '18702875390', '1', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵轩', 'zhaox', 'zhaox@avicit.com', '024-82976108', '18640044227', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王东', 'wangd', 'wangd@avicit.com', '58355190', '13671054139', '1', '行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王小贺', 'wangxh', 'wangxh@avicit.com ', NULL, '18601317560', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('于江鹏', 'yujp', 'yujp@avicit.com', NULL, '13464045502', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周蕾', 'zhoul', 'zhoul@avicit.com', '58355199', '13911311196', '2', '人力资源部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郁建', 'yuj', 'yuj@avicit.com', '58355600', '13601375402', '1', '公司领导');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('谢宇鹏', 'xieyp', 'xieyp@avicit.com', NULL, '13998890873', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('田国强', 'tiangq', 'tiangq@avicit.com', NULL, '18679165965', '1', '南昌公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李球', 'liqiu', 'liqiu@avicit.com', NULL, '13870931273', '1', '南昌公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('卫萌', 'weim', 'weim@avicit.com', NULL, '13811300403', '2', '运行管理中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈辉（产品研发）', 'chenhui', 'chenhui@avicit.com', '*0886', '18911415090', '1', '研发中心（产品研发）');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵庆丹', 'zhaoqd', 'zhaoqd@avicit.com', '*0798', '13520812575', '2', '研发中心（产品研发）');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('袁鑫', 'yuanx', 'yuanx@avicit.com', '*0680', '13466367581', '1', '研发中心（产品研发）');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('魏小平', 'weixp', 'weixp@avicit.com', '*0587', '13811001958', '1', '研发中心（产品研发）');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('肖培栋', 'xiaopd', 'xiaopd@avicit.com', '58355336', '13910302826', '1', '采购部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王秀珍', 'wangxz', 'wangxz@avicit.com', '0809', '13810500075', '1', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈乔', 'chenqiao', 'chenqiao@avicit.com', '*0701', '18600317578', '2', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨晓磊', 'yangxl', 'yangxl@avicit.com', NULL, '18612248712', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张春光', 'zhangcg', 'zhangcg@avicit.com', '*0627', '13301128349', '2', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵阳', 'zhaoy', 'zhaoy@avicit.com', '*0846', '13810011683', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘璐', 'liulu', 'liulu@avicit.com', NULL, '13842086925', '2', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('史永丰', 'shiyf', 'shiyf@avicit.com', '*0624', '18601276558', '1', '研发中心（产品研发）');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('马义', 'may', 'may@avicit.com', '*0862', '18510450080', '1', '研发中心（产品研发）');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('闫彬', 'yanb', 'yanb@avicit.com', '*0828', '13661269876', '2', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('车娟', 'chej', 'chej@avicit.com', '58355116', '15210170162', '2', '人力资源部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('马小晶', 'maxj', 'maxj@avicit.com', '58355300', '13691378608', '2', '行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('蔡钟伟', 'caizw', 'caizw@avicit.com', NULL, '18611626692', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李付强', 'lifq', 'lifq@avicit.com', NULL, '15210269607', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨萍（研发中心）', 'yangp', 'yangp@avicit.com', '84380842', '18210170288', '2', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘扬', 'liuyang', 'liuyang@avicit.com', '58355108', '13466661359', '1', '安全保密部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李文', 'liw', 'liw@avicit.com', '58355301', '13810289865', '1', '咨询业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('许广前', 'xugq', 'xugq@avicit.com', '*0853', '15829717679', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('黄笛', 'huangd', 'huangd@avicit.com', '0815', '18618288537', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('武斌', 'wub', 'wub@avicit.com', '58355623/5626', '13581813976', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李文龙', 'liwl', 'liwl@avicit.com', '8878/*0839', '15910924913', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘兴成', 'liuxc', 'liuxc@avicit.com', '028-87031799-802', '13558899295', '1', '成都公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王友山', 'wangys', 'wangys@avicit.com', '8169/8062', '13772549305', '1', '上海公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('贲驰', 'benc', 'benc@avicit.com', '024-82976108', '13889867063', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('袁蕾', 'yuanl', 'yuanl@avicit.com', '58355317', '18600367621', '2', '咨询业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('宁振波', 'ningzb', 'ningzb@avicit.com', '58355698', '13811220634', '1', '公司领导');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张立雷', 'zhangll', 'zhangll@avicit.com', '*0595', '13810084803', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郄永军', 'qieyj', 'qieyj@avicit.com', '58355666', '13910902169', '1', '系统工程应用中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('沈波', 'shenb', 'shenb@avicit.com', '58355697', '13991345563', '1', '系统工程应用中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('邱菲', 'qiuf', 'qiuf@avicit.com', '*0712', '13718189096', '2', '专项人才池');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈亮', 'chenliang', 'chenliang@avicit.com', '021-51098056*803', '13916667240', '1', '上海公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李崇焕', 'lich', 'lich@avicit.com', '8229/*0755', '13671367503', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('高洁', 'gaoj', 'gaoj@avicit.com', NULL, '15840531161', '2', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('高阿曼', 'gaoam', 'gaoam@avicit.com', '84380579', '15801539540', '2', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李迪', 'lid', 'lid@avicit.com', '84380759', '18612560695', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张豫滨', 'zhangyb', 'zhangyb@avicit.com', '*0833', '13810131903', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨洋', 'yangy', 'yangy@avicit.com', '58355636', '13810884906', '1', '系统工程应用中心/业务发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('闻蕴', 'weny', 'weny@avicit.com', '58355681', '15801657015', '2', '系统工程应用中心/业务发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵志', 'zhaoz', 'zhaoz@avicit.com', '58355644', '13501216241', '1', '系统工程应用中心/设计与制造工程三部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('贾大伟', 'jiadw', 'jiadw@avicit.com', '58355653', '18612983752', '1', '系统工程应用中心/设计与制造工程一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王小辉', 'wangxiaohui', 'wangxiaohui@avicit.com', NULL, '18611105603', '1', '系统工程应用中心/设计与制造工程一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王森', 'wangs', 'wangs@avicit.com', NULL, '13718559722', '1', '系统工程应用中心/设计与制造工程二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王玉娟', 'wangyj', 'wangyj@avicit.com', '58355691', '18601247278', '2', '系统工程应用中心/设计与制造工程二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('韦志强', 'weizq', 'weizq@avicit.com', '58355693', '18101097670', '1', '系统工程应用中心/设计与制造工程二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周为', 'zhouw', 'zhouw@avicit.com', NULL, '18618326489', '1', '系统工程应用中心/设计与制造工程二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('惠巍', 'huiw', 'huiw@avicit.com', NULL, '18502954723', '1', '西安公司/软件技术二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周瑜', 'zhouyu', 'zhouyu@avicit.com', NULL, '13982296980', '1', '成都公司/软件技术二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王立法', 'wanglf', 'wanglf@avicit.com', '58355679', '13520894079', '1', '系统工程应用中心/集成研发部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('祁进', 'qij', 'qij@avicit.com', '58355674', '18610015787', '1', '系统工程应用中心/集成研发部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周天寿', 'zhouts', 'zhouts@avicit.com', '029-88348455', '13909277360', '1', '西安公司/软件技术二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵洪岭', 'zhaohl', 'zhaohl@avicit.com', '8808/*0007/58355101', '13801219018', '1', '公司领导');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('高星海', 'gaoxh', 'gaoxh@avicit.com', '8207/*0812/58355102', '13911318306', '1', '公司领导');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('富强', 'fuq', 'fuq@avicit.com', '8221/*0636/58355103', '13911236577', '1', '公司领导');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李东旭', 'lidx', 'lidx@avicit.com', '8100/*0676/58355105', '13911029075', '1', '公司领导');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('钟进', 'zhongj', 'zhongj@avicit.com', '8837/*0876/58355106', '13701055380', '1', '公司领导');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张江辉', 'zhangjh', 'zhangjh@avicit.com', '58355579/5584', '15600140546', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('贾萱', 'jiax', 'jiax@avicit.com', '58355317', '13810102056', '2', '咨询业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刁雪飞', 'diaoxf', 'diaoxf@avicit.com', '58355338', '13911090287', '2', '采购部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('孟丹', 'mengd', 'mengd@avicit.com', '58355623/5626', '15901087748', '2', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈继辉', 'chenjh', 'chenjh@avicit.com', '*0748', '18610887521', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('宁洁', 'ningj', 'ningj@avicit.com', '58355616', '13621020855', '2', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李志刚', 'lizg', 'lizg@avicit.com', NULL, '15829550058', '1', '西安公司/软件技术二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('贾华伟', 'jiahw', 'jiahw@avicit.com', NULL, '18066878685', '1', '西安公司/研发中心西安分部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('邓晓波', 'dengxb', 'dengxb@avicit.com', NULL, '18011415215', '1', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('高凡', 'gaof', 'gaof@avicit.com', '58355115', '13466538584', '2', '人力资源部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李鑫(工信三部）', 'lixin', 'lixin@avicit.com', '02982161063', '18629001483', '1', '西安公司/软件技术二部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王琦', 'wangq', 'wangq@avicit.com', '024-82976108', '13897981786', '1', '沈阳公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('朱彬（研发中心）', 'zhub', 'zhub@avicit.com', '0617', '13772153623', '1', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李斌（系统集成）', 'lib', 'lib@avicit.com', '*0690', '13811700238', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('杨如峰', 'yangrf', 'yangrf@avicit.com', '*0877', '13691059833', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李科宝', 'likb', 'likb@avicit.com', NULL, '13330068588', '1', '南昌公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘欣宜', 'liuxy', 'liuxy@avicit.com', '028-87031799-814', '13438187776', '1', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('胡卓嘉', 'huzj', 'huzj@avicit.com', '028-87031799', '13980057192', '1', '成都公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张炎', 'zhangy', 'zhangy@avicit.com', '58355118', '18600278137', '2', '人力资源部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('仲法文', 'zhongfw', 'zhongfw@avicit.com', '8818/*0662', '18609284411', '1', '总经理助理');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('霍亮', 'huol', 'huol@avicit.com', NULL, '13892855219', '1', '西安公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('牛雪燕', 'niuxy', 'niuxy@avicit.com', '58355667', '18501202928', '2', '系统工程应用中心/需求工程部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('白超阳', 'baicy', 'baicy@avicit.com', '0749', '18611121537', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张金乙', 'zhangjy', 'zhangjy@avicit.com', '58355579/5584', '13651135974', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王国旗', 'wanggq', 'wanggq@avicit.com', '58355608/5604', '18631192265', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郭旻', 'guom', 'guom@avicit.com', '84380819', '15120072597', '2', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('薛强', 'xueq', 'xueq@avicit.com', '*0677', '18600042699', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('朱焕亮', 'zhuhl', 'zhuhl@avicit.com', '0719', '13911589775', '1', '研发中心');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('梅梅', 'meim', 'meim@avicit.com', '58355682', '18911639208', '2', '系统工程应用中心/业务发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('佟嘉', 'tongj', 'tongj@avicit.com', '58355331', '13811514898', '1', '采购部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('罗勇', 'luoy', 'luoy@avicit.com', '028-87031799-801', '13808035518', '1', '公司领导');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('朱懋强', 'zhumq', 'zhumq@avicit.com', '58355347', '18612838463', '1', '信息化部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('吕旭民', 'lvxm', 'lvxm@avicit.com', '0630', '13810915561', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张森', 'zhangs', 'zhangs@avicit.com', '0853', '18600706611', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵超', 'zhaochao', 'zhaochao@avicit.com', NULL, '15229002232', '1', '西安公司/软件技术一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王亮（系统集成）', 'wangl', 'wangl@avicit.com', '*0639', '18612272619', '1', '系统集成部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张志刚', 'zhangzg', 'zhangzg@avicit.com', '*0721', '15110103123', '1', '生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('吕志风', 'lvzf', 'lvzf@avicit.com', '58355678', '18610093074', '1', '行政管理部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('沈言', 'shenyan', 'sheny@avicit.com', '58355688', '13501397679', '1', '总经理助理');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('薛白石', 'xuebs', 'xuebs@avicit.com', '58355107', '13701008008', '1', '总经理助理');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘明亮', 'liuml', 'liuml@avicit.com', '0837', '13381088397', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('何宝魁', 'hebk', 'hebk@avicit.com', '0741', '18600321003', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘佳', 'liujia', 'liujia@avicit.com', '58355701', '18901051980', '2', '党群工作部/纪检监察审计处');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('钟进', 'zhongj', 'zhongj@avicit.com', '8837/*0876/58355106', '13701055380', '1', '战略规划工作委员会');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('宋权一', 'songqy', 'songqy@avicit.com', '58355623/5626', '13501168813', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('韩松柏', 'hansb', 'hansb@avicit.com', NULL, '13759870825', '1', '西安公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('周小森', 'zhouxs', 'zhouxs@avicit.com', '*0640', '13699260295', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郄永军', 'qieyj', 'qieyj@avicit.com', '58355666', '13910902169', '1', '系统工程应用中心/设计与制造工程一部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('徐晓虹', 'xuxh', 'xuxh@avicit.com', '58355623/5626', '13621086794', '2', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵雪鹏', 'zhaoxp', 'zhaoxp@avicit.com', '58355326', '13910222940', '1', '市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张旭刚', 'zhangxugang', 'zhangxugang@avicit.com', NULL, '15829082937', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('刘琪', 'liuqi', 'liuqi@avicit.com', '58355328', '13811081881', '1', '市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('聂良兴', 'nielx', 'nielx@avicit.com', NULL, '13669139890', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('田志鹏', 'tianzp', 'tianzp@avicit.com', '58355169', '13683652597', '1', '市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('赵梦洁', 'zhaomj', 'zhaomj@avicit.com', '58355345', '13521806826', '2', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('蔺文杰', 'linwj', 'linwj@avicit.com', '58355656', '13910160228', '1', '公司副总师/总监');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('陈绥', 'chensh', 'chensh@avicit.com', NULL, '18991348081', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王亮（西安公司）', 'wangliang', 'wangliang@avicit.com', NULL, '13109509048', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('付强', 'fuqiang', 'fuqiang@avicit.com', '*0740', '18611881128', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李斌（系统集成）', 'lib', 'lib@avicit.com', '*0690', '13811700238', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('任刚府', 'rengf', 'rengf@avicit.com', '0702', '15010919537', '1', '西安公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('张小平', 'zhangxp', 'zhangxp@avicit.com', NULL, '13700281355', '1', '西安公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('冯海滨', 'fenghb', 'fenghb@avicit.com', '8501/*0565', '18612561321', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('田凤英', 'tianfy', 'tianfy@avicit.com', '58355135', '13641300169', '2', '技术发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('董安中', 'dongaz', 'dongaz@avicit.com', '*0716', '13661240311', '1', '综合管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王瑞', 'wangr', 'wangr@avicit.com', NULL, '13759888795', '2', '西安公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('王荆鹏', 'wangjp', 'wangjp@avicit.com', '58355173', '15810480888', '1', '市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('郭宾', 'guob', 'guob@avicit.com', NULL, '18182403503', '1', '西安公司/生产管理业务部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('谷博', 'gub', 'gub@avicit.com', NULL, '18611745621', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('肖文俊', 'xiaowj', 'xiaowj@avicit.com', '028-87031799-809', '13980951586', '1', '成都公司/市场发展部');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('李文龙', 'liwl', 'liwl@avicit.com', '8878/*0839', '15910924913', '1', '其他人员');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('仲法文', 'zhongfw', 'zhongfw@avicit.com', '8818/*0662', '18609284411', '1', '西安公司');"+
"INSERT INTO person ('NAME', 'LOGIN_NAME', 'EMAIL', 'OFFICE_TEL', 'MOBILE', 'SEX', 'DEPT_NAME') VALUES ('徐茂军', 'xumj', NULL, NULL, NULL, '1', '第一党小组');";