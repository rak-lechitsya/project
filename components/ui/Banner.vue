<template>
    <div class = "banner__background">
        <div class = "banner">
            <h2 class = "banner__text">{{text}}<span class = "banner__hashtag"> #этонелечится</span></h2>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['text'],
    }
</script>

<style scoped>
.banner__background {
    padding: 0 60px;
}

.banner {
    padding: 20px 20px;
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
    line-height: 1;
}

@media (min-width : 320px) and (max-width : 599px) {
    .banner {
        padding: 10px 20px;
    }

    .banner__background {
        padding: 0 15px;
    }

    .banner__text {
        font-size: 16px;
        line-height: 18px;
    }

    .banner__hashtag {
        font-size: 22px;
    }
}

@media (min-width : 600px) and (max-width : 799px) {
    .banner {
        padding: 12px 65px;
    }

    .banner__background {
        padding: 0 40px;
    }

    .banner__text {
        font-size: 22px;
        line-height: 36px;
    }

    .banner__hashtag {
        font-size: 32px;
    }
}

@media (min-width : 800px) and (max-width : 1199px) {
    .banner__background {
        padding: 0 50px;
    }

    .banner__text {
        font-size: 24px;
        line-height: 40px;
    }

    .banner__hashtag {
        font-size: 34px;
    }
}

@media (min-width : 1200px) and (max-width : 1300px) {
    .banner__background {
        padding: 0 50px;
    }

    .banner__text {
        font-size: 28px;
        line-height: 46px;
    }

    .banner__hashtag {
        font-size: 38px;
    }
}
</style>