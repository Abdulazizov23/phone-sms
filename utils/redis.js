const { createClient } = require("redis")


const client = createClient({
    url: process.env.Redis_URL
})

async function setDataToRedis(key, value, time) {
    await client.connect()
    await client.set(key, value, {
        EX: time
    })

    await client.disconnect()
}

async function getDataFromRedis(key) {
    await client.connect()

    const response = new Promise(async (resolve) => {
        resolve(client.get(key))
    })

    return response.then((data) => {
        return data
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        client.disconnect()
    })
}

// invalidate the cache
const invalidateCache = async (key) => {
    await client.connect()
    const response = new Promise(async (resolve) => {
        resolve(client.del(key))
    })
    return response.then((data) => {
        return data
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        client.disconnect()
    })
};




module.exports = {
    getDataFromRedis,
    setDataToRedis,
    invalidateCache
}