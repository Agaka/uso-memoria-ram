const os = require('os')

setInterval(() => {
    const { arch, platform, freemem, totalmem } = os
    const tRam = totalmem() / 1024 / 1024
    const fRam = freemem() / 1024 / 1024
    const Usage = ((fRam / tRam) * 100).toFixed(2)+'%'
    
    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: `${parseInt(tRam)} MB`,
        FreeRAM: `${parseInt(fRam)} MB`,
        Usage
    }
    console.clear()
    console.table(stats)
    exports.stats = stats
}, 1000)
