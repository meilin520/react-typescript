interface Config {
    title: string,
    expire: number,
    timeout: number,
}

const config: Config = {
    title: '项目名称',
    expire: 7, // 缓存时长
    timeout: 50000,
}

export default config;