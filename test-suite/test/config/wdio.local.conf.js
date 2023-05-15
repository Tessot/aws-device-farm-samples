const baseConfig = require('./wdio.base.conf.js')

// have main config file as default but overwrite environment specific information
baseConfig.config.capabilities.push(
    {
        "deviceName": "My local Android device", 
        "platformName": "Android",
        "automationName": "UiAutomator2",
        // Fill in the following three capabilities based on your local device:
        // "app": "/path/to/my/local/app.apk",
        // "udid": "my-device-udid",
        // "platformVersion": "13"
    }
)

// add an additional reporter
baseConfig.config.reporters.push(
    ['junit', {
        outputDir: `${__dirname}/../../reports`
        }
    ]
)

exports.config = baseConfig.config