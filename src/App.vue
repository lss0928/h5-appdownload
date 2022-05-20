<template>
<div id="app">
    <img src="@/assets/app.png" alt="">
    <button class="download-btn" @click="download">立即下载</button>
    <div class="mask" v-show="showMask">
        <div class="box">请点击右上角按钮 使用浏览器打开</div>
    </div>
</div>
</template>

<script>

export default {
    name: 'App',
    components: {
    },
    data() {
        return {
            showMask: false,
            url: '',
            ua: ''
        };
    },
    mounted() {
        this.ua = window.navigator.userAgent;
        this.jugeDevice();
    },
    methods: {
        jugeDevice() {
            if (this.isWeixin()) {
                this.showMask = true;
                return;
            }
            if (this.isIos()) {
                this.url = 'https://apps.apple.com/cn/app/数汁课堂/id1574481389';
                location.href = this.url;
                return;
            }
            this.url = 'https://aiclass.zybank.com.cn/download/shuzhi.apk';
        },
        isWeixin() {
            let ua = this.ua.toLowerCase();
            let arr = ua.match(/MicroMessenger/i);
            if (arr && arr[0] === 'micromessenger') {
                return true;
            }
            return false;
        },
        isAndroid() {
            return this.ua.indexOf('Android') > -1 || this.ua.indexOf('Adr') > -1;
        },
        isIos() {
            return !!this.ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        },
        download() {
            if (!this.url) {
                return;
            }
            location.href = this.url;
        }
    }
};
</script>

<style lang="less">
html,
body {
    background: #fff;
    width: 100%;
}
* {
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    display: flex;
    flex-direction: column;
    img {
        display: block;
        flex: 1;
    }
    .download-btn {
        width: 686px;
        height: 98px;
        font-size: 32px;
        background: #FE8D1B;
        border-radius: 50px;
        color: #fff;
        text-align: center;
        line-height: 98px;
        margin: 18px auto 0;
        border: none;
        display: block;
    }
    .mask {
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        background: rgba(32, 22, 22, 0.7) url('./assets/mask.png') center top no-repeat;
        background-size: auto 708px;
        .box {
            font-size: 28px;
            width: 410px;
            background: #FFFFFF;
            border-radius: 8px;
            color: #333333;
            line-height: 44px;
            text-align: center;
            margin: 544px auto 0;
            padding: 38px 88px;
            box-sizing: border-box;
        }
        
    }
}
</style>
