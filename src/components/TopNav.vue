<template>
    <div class="topNav">
        <div class="topLeft">
            <van-icon name="wap-nav" size="0.5rem"/>
        </div>
        <div class="topContent">
            <span>我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>
        <div class="topRight">
            <van-icon name="search" size="0.5rem"/>
        </div>
    </div>
</template>
<script>
</script>
<style>
.topNav {
    width: 100%;
    height: 1rem;
    padding: .2rem;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
}

.topContent {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    font-size: .36rem;
}

.active {
    font-weight: 900;
}

.van-icon {
    size: .5rem;
}
</style>
