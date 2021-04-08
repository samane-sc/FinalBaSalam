<template>
<div class="header">
    <div v-show="dltProduct">

        <!--products-->
        <div class="order">
            <img class="img" :src="ProductImg" width="82" height="82" >
            <div class="disFlex disFlexCol">
                <p class="orderName">{{ ProductName }}</p>
                <div class="orderCost" style="position: relative;">
                    <del class="CrossedPrice">{{ crossedprice }}</del>
                    <pre class="NewPrice">{{ newprice }}</pre>
                    <p class="orderToman">توما</p>
                    <img :src="image.n" width="6.79px" height="7.27px" class="n">
                </div>
            </div>
        </div>

        <!-- Functions of each product -->
        <div class="icons disFlex">
            <button class="iconbtn iconbtnmin" @click="minus" @mousedown="Speedminus(1000)" @mouseup="doneSpeedminus">
                <img :src="image.minus" height="1.5px" width="12px" class="icon iconMinus">
            </button>
            <input type="text" :value="counter" readonly>
            <button class="iconbtn iconbtnadd" @click="plus" @mousedown="SpeedPlus(1000)" @mouseup="doneSpeedPlus">
                <img :src="image.plus" class="icon">
            </button>
            <button class="iconbtn iconbtnrub" @click="dltFunc">
                <img :src="image.rubbish" class="icon">
            </button>
            <a href="#">
                <div class="save">
                    ذخیره در لیست خرید بعدی
                </div>
            </a>
        </div>
    </div>
</div>
</template>

<script>
// import axios from "axios";

export default {
    props: {
        "ProductName" :{
            type : String,
            required : true
        },
        "NewPrice" :{
            type :  Number,
           required : true
        },
        "CrossedPrice" :{
            type : Number,
            required : true
        },
        "ProductImg" :{
            type : String,
            required :true
        },
    },
    data(){
        return{
            // count number of each product
            counter : 1,

            // hide product => delete
            dltProduct : true,

            // button's image or button's icons
            image :{
                rubbish : require('@/assets/photoes/rubbish basket.png'),
                n : require('@/assets/photoes/۲۳ هزار تومان.png'),
                minus : require('@/assets/photoes/minus.png'),                
                plus : require('@/assets/photoes/plus.png'),
            },
        }
    },
    computed:{
        newprice(){
            return this.NewPrice * this.counter
        },

        crossedprice(){
            return this.CrossedPrice * this.counter
        },
    },

    mounted(){
        this.$store.state.totalsum += this.NewPrice
    },

    methods: {
        plus() {
            this.counter += 1;
            this.$store.state.totalcounter ++ ;
            this.$store.state.totalsum += this.NewPrice ;
        },

        minus() {
            if( this.counter > 1 ){
                this.counter -= 1 ;
                this.$store.state.totalcounter -- ;
                this.$store.state.totalsum -= this.NewPrice
            }
        },

        SpeedPlus(duration){
            this.output = 
            setTimeout(() => {
                this.plus()
                this.SpeedPlus(duration - 100);
            }, duration);
        },

        doneSpeedPlus(){
            clearTimeout(this.output);
        },

        Speedminus(duration){
            this.outputM =
            setTimeout(() => {
                this.minus()
                this.Speedminus(duration - 100)
            }, duration);
        },

        doneSpeedminus(){
            clearTimeout(this.outputM);
        },
        
        dltFunc(){
            // this.dltProduct = !this.dltProduct
            // this.$store.state.totalsum -= this.newprice
            this.$emit('dlt-event')
        },
    }

    // Lifecycle hook
    // mounted() {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => (this.todos = response.data))
    //   .catch((err) => console.error(err));
    // },
      
}
</script>

<style scoped>
.order{
    display: flex; 
    flex-direction: row; 
    margin-right: 16px; 
    margin-top: 15px;
}

.orderName{
    color: #3E3E3E; 
    font-size: 12px; 
    margin-right: 16px; 
    font-family: iransans;
}

.orderCost{
    display: flex; 
    flex-direction: row; 
    color: #535353; 
    font-size: 12px;
    padding-top: 30.67px;
    margin-right: 143px; 
}

.orderToman{
    padding-right: 2px; 
    font-family: iransans;
}

.NewPrice{
    font-family: iransans;
    padding-left: 3px;
}

.CrossedPrice{
    color: #9D9D9D; 
    font-size: 12px; 
    font-family: iransans;
    display: flex;
    align-items: center;
    padding-left: 7px;
}
.icons{
    border-bottom: 1px solid #DFDFDF; 
    padding-bottom: 17.62px;
    margin-top: 16px;
}

.iconbtn{
    display: inline; 
    float: right;
    background-color:#EEEEEE; 
    border: #EEEEEE; 
    border-radius: 100px;
    line-height: 11px;
    width: 24px; 
    height: 24px;
    outline: none;
    cursor: pointer;
}
.iconbtnmin{
    margin-right: 16.4px; 
    margin-left: 4.5px;
}

.iconbtnadd{
    margin-right: 3.73px;
}

.iconbtnrub{
    margin-right: 16px;
}

input {
    display: inline; 
    float: right; 
    white-space: nowrap; 
    border: 1px solid #EEEEEE; 
    font-family: iransans;
    border-radius: 6px; 
    Width: 25px; 
    Height: 23px; 
    line-height: 23px; 
    text-align: center;
    font-size: 14px;
}
.icon{
    color:#535353; 
    text-align: center;
}

.iconMinus{
margin-bottom: 3px;
}

.save{
    height: 16px; 
    margin-top: 5px; 
    border-bottom: 1px dashed #7D7D7D ; 
    margin-right: 94px; 
    font-size: 10px; 
    color: #7D7D7D; 
    font-family: iransans;
    font-weight: 700;
}

.n{
    position: absolute; 
    bottom: 15.73px; 
    left: 3px;
}

a{
    text-decoration: none;
}
</style>