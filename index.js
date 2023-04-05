var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "write details",
            state : "write state",
            assets : {
                large_image : "JeffLogo",
                large_text : "Jeff • System"
            },
        buttons : [
            {
                label : "write label",
                url : "set url"
            },
            {   label : "write label", 
                url : "set url"
            }
           ]
        }
    })
})

client.login({ clientId : "WRITE_CLIENT_ID" }).catch(console.error);