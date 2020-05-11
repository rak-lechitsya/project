<template>
    <div class = "banner">
        <h2 class = "banner__text">{{text}}<span class = "banner__hashtag"> #этонелечится</span></h2>
    </div>
</template>

<script>
    export default {
        props: ['text'],
    }
</script>

<style scoped>
.banner {
    padding: 20px 285px;
    margin: 0 auto;
    max-width: 1320px;
    background-color: #613A93;
}

.banner__text {
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 46px;
    text-align: center;
    color: #FFFFFF;
    text-transform: uppercase;
}

.banner__hashtag {
    font-weight: bold;
    font-size: 40px;
}
</style>