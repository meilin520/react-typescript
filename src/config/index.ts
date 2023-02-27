interface Config {
    title: string,
    expire: number,
}

const config: Config = {
    title: '项目名称',
    expire: 7, // 缓存时长
}

export default config;