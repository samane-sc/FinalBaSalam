<template>
    <!--header-->
    <div class="header headerHead">
        <div class="disFlex">
            <!--logo-->
            <div class="logo">
                <img :src='image.logo'>
            </div>

            <!--basalam-->
            <img class="basalam" :src='image.basalam' width="69.12px" height="20.16px">
            
            <!--icon ba salam-->
            <button class="iconBasalam">
                <img :src='image.basalamIcon'> 
            </button>

            <!--btnsales-->
            <div class="btnsales2">
                <button class="btnsales1">
                    فروش در باسلام 
                </button>
            </div>

            <!--shopping icon-->
            <img :src='image.shopIcon' width="42px" height="30x" class="shoppingIcon">

            <!--3-->
            <div class="icon3">
                <div class="icon-3">{{ SumOfOrders }}</div>
            </div>
        </div>

        <!--search-->
        <form class="searchform">
            <input placeholder="جستجوی در صدها هزار محصول خانگی و محلی ...">
            <button class="searchbtn">
                <img :src='image.searchIcon' width="20px" height="20px">
            </button>
        </form>
    </div>
</template>

<script>

export default({

    data() {
        return{
            image : {
                logo : require('@/assets/photoes/Logo.png'),
                basalam : require('@/assets/photoes/Type.png'),
                basalamIcon : require('@/assets/photoes/Icon1.png'),
                shopIcon : require('@/assets/photoes/Icon.png'),
                searchIcon : require('@/assets/photoes/Vector 3.png'),
            }
        }
    },
    computed:{
        SumOfOrders(){
            return this.$store.getters.sumOfOrders;
        }
    }
})
</script>

<style scoped>
.headerHead{
    height: 101px;
    margin-bottom: 7px;
}

.logo{
    padding-top: 13px; 
    padding-right: 16.21px;
    color: #DF3856;
}
.basalam{
    margin-top: 14.92px; 
    margin-right: 4.59px;
}

.iconBasalam{
    width: 32px; 
    height: 32px; 
    margin-top: 11px; 
    margin-right: 1px; 
    background-color: #FFFFFF; 
    border: #FFFFFF;
}

.btnsales1{
    background-color: #535353; 
    border-radius: 100px; 
    color: #ffffff; 
    border: #535353;
    padding-top: 6.5px; 
    padding-bottom: 6.5px; 
    padding-left: 14px; 
    padding-right: 13px; 
    font-family: iransans; 
    font-size: 12px;
}

.btnsales2{
    height: 32px;
    margin-top: 8px;
    margin-right: 61px; 
    justify-content: center;
}

.icon3{
    width: 18px; 
    height: 18px; 
    border-radius: 100%; 
    background-color: #DF3856;
    position: absolute; 
    top: 8px; 
    left: 8px; 
    bottom: 75px; 
    right: 334px;
}

.icon-3{
    color: #ffffff; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    font-family: iransans; 
    font-size: 12px;
}

.searchform{
    border: #9D9D9D 1px solid; 
    border-radius: 100px; 
    margin-top: 9px; 
    margin-right: 16px; 
    margin-left: 16px; 
    height:40px;
}

input {
    border-radius: 100px; 
    line-height: 37.78px; 
    color: #7D7D7D; 
    font-size: 12px; 
    padding-right: 16px; 
    width:85%; 
    border: none; 
    font-family: iransans;
}

.searchbtn{
    border-radius: 100px; 
    cursor: pointer;
    width: 15%; 
    float: left; 
    outline: none; 
    margin-top: 7.98px; 
    background-color: #ffffff; 
    border: #ffffff;
}

.searchIcon{
    font-size: 20px; 
    color: #535353;
}

.shoppingIcon{
    margin-top:8px;
}

</style>
