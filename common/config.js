var config = {
    blogName: '个人博客',
    headPicture: '/images/bg2.png',
    aPageNum: 7,//分页,一页显示多少文章.
    dbUser: '',//dbUser填写 '' 说明数据库和本博客在同一台机器
    dbPass: '',
    dbAddress: 'localhost',
    dbPort: '27017',
    dbName: 'blog',
    ownerName: 'fantaosong',//个人姓名，显示在博主信息中
    ownerLocation: '深圳 中国',//所在地，显示在博主信息中
    ownerOccupation: 'Java开发工程师',//职业，显示在博主信息中
    ownerSkill: 'Java SpringMVC NLP Machine Learning',//主要从事领域与技能，显示在博主信息中
    motto: '静观世界求一事，诚对苍生不二心',//座右铭，显示在博主信息中
    email: 'fantaosong1988@gmail.com',
    serverPlatform: {
        platform: 'local',
        AccessKey: 'xxx',//platform是local可以不填
        SecrectKey: 'xxx',//platform是local可以不填
        buckect: 'x' //bcs中的buckect名字
    },
    mailConfig: {
        service: 'Gmail',//Gmail QQ QQex Yahoo Hotmail
        auth: {
            user: 'fantaosong1988@gmail.com',
            pass: 'xxxx'
        }
    },
    otherBlog: {//你的其他博客，显示在页脚
        url: 'https://github.com/fantaosong',
        name: 'Github'

    },
    friendlyLinks: [//友情链接，显示在页脚
        { url: 'https://github.com/fantaosong', name : 'GitHub' }
    ],
    ICPNumber: '京ICP备00000000号'//显示在页脚
}
module.exports = config;
