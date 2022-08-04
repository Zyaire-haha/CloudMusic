<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="iconfont" aria-hidden="true">
                <use xlink:href="#icon-tuijian"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg class="iconfont" aria-hidden="true">
                <use xlink:href="#icon-icon_diantai"></use>
            </svg>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <svg class="iconfont" aria-hidden="true">
                <use xlink:href="#icon-gedan"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="iconItem">
            <svg class="iconfont" aria-hidden="true">
                <use xlink:href="#icon-ranking"></use>
            </svg>
            <span>排行榜</span>
        </div>
    </div>
</template>
<script src="../font/iconfont"></script>
<style>
.iconfont {
    width: 1rem;
    height: 1rem;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.iconList {
    width: 100%;
    height: 2rem;
    margin-top: .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.iconItem {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
