let menuArr=[{
    code: 1,
    data: [
            {
            id: "1",
            name: "组织权限管理",
            level: "1",
            submenus: [
                    {
                        id: "1",
                        level: "2",
                        name: "员工账号管理",
                        type: "employeAdmin"
                    },
                    {
                        id: "2",
                        level: "2",
                        name: "用户管理",
                        type: "userAdmin"
                    },
                    {
                        id: "3",
                        level: "2",
                        name: "菜单管理",
                        type: "menuManage"
                    }
                ],
            type: "gourpAdmin"
            },
            {
                id: "2",
                name: "客户管理",
                level: "1",
                submenus: [
                    {
                        id: "1",
                        level: "2",
                        name: "员工账号管理",
                        type: "employeAdmin"
                    },
                    {
                        id: "2",
                        level: "2",
                        name: "用户管理",
                        type: "userAdmin"
                    }
                ],
                type: "workAdmin"
            },
            {
                id: "3",
                name: "我的",
                level: "1",
                submenus: [
                    {
                        id: "1",
                        level: "2",
                        name: "员工账号管理",
                        type: "employeAdmin"
                    },
                    {
                        id: "2",
                        level: "2",
                        name: "我的",
                        type: "mine"
                    }
                ],
                type: "mineAdmin"
            }
        ]
}]
var bodyParser = require('body-parser')
module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.get('/api/menu', function (req, res, next) {
        res.send(menuArr)
    })
    

}