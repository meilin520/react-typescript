/**
 * 设置会话存储值
 * @param key 键名
 * @param value 键值
 */
export const setSession = (key: string, value: any): void => {
    let _value = JSON.stringify(value);
    window.sessionStorage.setItem(key, _value);
}

/**
 * 获取会话存储值
 * @param key 键名
 * @returns 
 */
export const getSession = (key: string): any => {
    let value = window.sessionStorage.getItem(key)||"";
    if(value)
        value = JSON.parse(value);
    return value;
}

/**
 * 删除会话存储键值
 * @param key 键名
 */
export const removeSession = (key: string): void => {
    window.sessionStorage.removeItem(key);
}