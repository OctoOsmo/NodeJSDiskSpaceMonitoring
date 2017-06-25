const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

// var favicon = express.favicon();
// var favicon = require('serve-favicon');// отдаем стандартную фавиконку, можем здесь же свою задать
// app.use(favicon); //replaces your app.use(express.logger());
// var logger = require('morgan');// выводим все запросы со статусами в консоль
// app.use(logger); //replaces your app.use(express.logger());
const df = "{\"_run\":{\"name\":\"tmpfs\",\"size\":\"496M\",\"usedSpace\":\"58M\",\"availableSpace\":\"438M\",\"percentOfUse\":\"12%\",\"mountPoint\":\"\/run\"},\"_media_Downloads\":{\"name\":\"\/dev\/sdc\",\"size\":\"230G\",\"usedSpace\":\"180G\",\"availableSpace\":\"38G\",\"percentOfUse\":\"83%\",\"mountPoint\":\"\/media\/Downloads\"},\"_media_Video\":{\"name\":\"\/dev\/sdb\",\"size\":\"294G\",\"usedSpace\":\"227G\",\"availableSpace\":\"53G\",\"percentOfUse\":\"82%\",\"mountPoint\":\"\/media\/Video\"},\"C\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E\":{\"name\":\"\u0424\u0430\u0439\u043B.\u0441\u0438\u0441\u0442\u0435\u043C\u0430\",\"size\":\"\u0420\u0430\u0437\u043C\u0435\u0440\",\"usedSpace\":\"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E\",\"availableSpace\":\"\u0414\u043E\u0441\u0442\",\"percentOfUse\":\"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043E%\",\"mountPoint\":\"C\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E\"},\"_sys_fs_cgroup\":{\"name\":\"tmpfs\",\"size\":\"2,5G\",\"usedSpace\":\"0\",\"availableSpace\":\"2,5G\",\"percentOfUse\":\"0%\",\"mountPoint\":\"\/sys\/fs\/cgroup\"},\"_run_cgmanager_fs\":{\"name\":\"cgmfs\",\"size\":\"100K\",\"usedSpace\":\"0\",\"availableSpace\":\"100K\",\"percentOfUse\":\"0%\",\"mountPoint\":\"\/run\/cgmanager\/fs\"},\"_run_lock\":{\"name\":\"tmpfs\",\"size\":\"5,0M\",\"usedSpace\":\"4,0K\",\"availableSpace\":\"5,0M\",\"percentOfUse\":\"1%\",\"mountPoint\":\"\/run\/lock\"},\"_dev\":{\"name\":\"udev\",\"size\":\"2,4G\",\"usedSpace\":\"0\",\"availableSpace\":\"2,4G\",\"percentOfUse\":\"0%\",\"mountPoint\":\"\/dev\"},\"_run_user_1000\":{\"name\":\"tmpfs\",\"size\":\"496M\",\"usedSpace\":\"0\",\"availableSpace\":\"496M\",\"percentOfUse\":\"0%\",\"mountPoint\":\"\/run\/user\/1000\"},\"_dev_shm\":{\"name\":\"tmpfs\",\"size\":\"2,5G\",\"usedSpace\":\"11M\",\"availableSpace\":\"2,5G\",\"percentOfUse\":\"1%\",\"mountPoint\":\"\/dev\/shm\"},\"_run_user_1001\":{\"name\":\"tmpfs\",\"size\":\"496M\",\"usedSpace\":\"80K\",\"availableSpace\":\"496M\",\"percentOfUse\":\"1%\",\"mountPoint\":\"\/run\/user\/1001\"},\"_\":{\"name\":\"\/dev\/sda1\",\"size\":\"69G\",\"usedSpace\":\"45G\",\"availableSpace\":\"20G\",\"percentOfUse\":\"70%\",\"mountPoint\":\"\/\"}}";

const dfh = {"_run":{"name":"tmpfs","size":"496M","usedSpace":"58M","availableSpace":"438M","percentOfUse":"12%","mountPoint":"/run"},
    "_media_Downloads":{"name":"/dev/sdc","size":"230G","usedSpace":"180G","availableSpace":"38G","percentOfUse":"83%","mountPoint":"/media/Downloads"},
    "_media_Video":{"name":"/dev/sdb","size":"294G","usedSpace":"227G","availableSpace":"53G","percentOfUse":"82%","mountPoint":"/media/Video"},
    "Cмонтировано":{"name":"Файл.система","size":"Размер","usedSpace":"Использовано","availableSpace":"Дост","percentOfUse":"Использовано%","mountPoint":"Cмонтировано"}
    ,"_sys_fs_cgroup":{"name":"tmpfs","size":"2,5G","usedSpace":"0","availableSpace":"2,5G","percentOfUse":"0%","mountPoint":"/sys/fs/cgroup"}
    ,"_run_cgmanager_fs":{"name":"cgmfs","size":"100K","usedSpace":"0","availableSpace":"100K","percentOfUse":"0%","mountPoint":"/run/cgmanager/fs"}
    ,"_run_lock":{"name":"tmpfs","size":"5,0M","usedSpace":"4,0K","availableSpace":"5,0M","percentOfUse":"1%","mountPoint":"/run/lock"}
    ,"_dev":{"name":"udev","size":"2,4G","usedSpace":"0","availableSpace":"2,4G","percentOfUse":"0%","mountPoint":"/dev"}
    ,"_run_user_1000":{"name":"tmpfs","size":"496M","usedSpace":"0","availableSpace":"496M","percentOfUse":"0%","mountPoint":"/run/user/1000"}
    ,"_dev_shm":{"name":"tmpfs","size":"2,5G","usedSpace":"11M","availableSpace":"2,5G","percentOfUse":"1%","mountPoint":"/dev/shm"}
    ,"_run_user_1001":{"name":"tmpfs","size":"496M","usedSpace":"80K","availableSpace":"496M","percentOfUse":"1%","mountPoint":"/run/user/1001"}
    ,"_":{"name":"/dev/sda1","size":"69G","usedSpace":"45G","availableSpace":"20G","percentOfUse":"70%","mountPoint":"/"}
};
const a = {
    "name": "Вася",       // ошибка: ключ name без кавычек!
    "surname": "Петров",// ошибка: одинарные кавычки у значения 'Петров'!
    "age": 35,           // .. а тут всё в порядке.
    "isAdmin": false    // и тут тоже всё ок
};

const port = 8070;
app.listen(port, () => {
    console.log('We are live on ' + port);
});

app.get('/diskInfoRESTAPI/disk_list', function (req, res) {
    res.send(dfh);
    console.log('get /diskInfoRESTAPI/disk_list api call');
});
