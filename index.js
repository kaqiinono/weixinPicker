import { findFiles } from './utils/index.js';

// 1、找到微信存放临时文件的文件夹。通常打开微信图片邮件在文件中打开即可看到。
const mainPath = `/Users/songmeinuo/Library/Containers/com.tencent.xinWeChat/Data/Library/Application\ Support/com.tencent.xinWeChat/2.0b4.0.9/5952bad8ea23131674b23df21ecc235e/Message/MessageTemp/`;

// 2、找到你需要备份信息的联系人或群组。通过步骤一的文件路径可以找到当前联系人的目录名称
const nameReflection = {
    bfff3ece7c31601bd19d46445fbd472f: {
        name: 'D2C_class',
        exclude: ['File']
    },
    '8c06983be7f5722478fdcf66ce928698': {
        name: 'D2C_family',
        exclude: ['File']
    },
    '16120fe194fe4f86f92a537c2ba13787': {
        name: '半岛_family',
        exclude: ['File']
    },
    fbeb8277f4db90b5769766a974d09c31: {
        name: '半岛_class',
        exclude: ['File']
    },
    '00b6e1b90c383ca77c39948a38e09b69': {
        name: 'family',
        exclude: ['File']
    },
    '3adbcab5c1375a0c92c259a5020fb132': {
        name: 'yueyue',
        exclude: ['Image', 'Video']
    },
    b0f5c0557b039193fee10bec4d9f5a3d: {
        name: 'xiaoyu',
        exclude: ['Image', 'Video']
    },
    '51d976cd2fcbe1ad37c727e430451dee': {
        name: 'qinbao',
        exclude: ['Image', 'Video']
    }
};

// 3、定义你需要备份的文件路径
const bakeFolder = '/Users/songmeinuo/Documents/myPrivate/backup/';

findFiles({
    mainPath,
    nameReflection,
    bakeFolder
}).then('作业已完成！');
