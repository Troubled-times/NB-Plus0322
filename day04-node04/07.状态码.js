/* 
    HTTP 响应状态代码（status）指示特定 HTTP 请求的状态。响应分为五类
    - 1XX: 请求已经被服务端接收，继续处理中
        100:请求正常，可以继续请求
        101:需要切换协议
        102:服务端正在处理，但是还没有找到资源

    - 2XX: 请求已经被服务器接收，并且处理完成
        200:请求成功
        201:请求处理成功，并创建了新资源 常见POST请求

    - 3XX: 需要后续操作才能完成请求
        301:永久重定向
        302:临时重定向
        304:读取缓存

    - 4XX: 客户端错误（服务器无法执行）
        400:请求中出现语法错误
        401:需要重新认证
        403:拒绝访问
        404:找不到资源

    - 5XX: 服务端错误
        - 500:服务器执行过程中出现了错误
        - 503:服务器因为各种原因停止运行，无法处理请求


*/