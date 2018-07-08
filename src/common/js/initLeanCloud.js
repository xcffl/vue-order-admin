// Leancloud
// APP_ID and APP_KEY should be fill in manually
import AV from 'leancloud-storage';
var APP_ID = '';
var APP_KEY = '';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
    region: 'us'
});

export { AV };