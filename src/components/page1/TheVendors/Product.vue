<template>
<div class="header">
    <div>
        <!--products-->
        <div class="order">
            <img class="img" :src="ProductImg" width="82" height="82" >
            <div class="disFlex disFlexCol">
                <p class="orderName">{{ ProductName }}</p>
                <div v-if="stock === 0" class="orderCost">ناموجود</div>
                <div v-else class="orderCost" style="position: relative;">
                    <del class="CrossedPrice">{{ this.$parent.toFarsiNumber(this.PrimaryPrice * this.counter) }}</del>
                    <pre class="NewPrice">{{ this.$parent.toFarsiNumber(this.ProductPrice * this.counter) }}</pre>
                    <p class="orderToman">توما</p>
                    <img src="@/assets/photoes/۲۳ هزار تومان.png" width="6.79px" height="7.27px" class="n">
                </div>
            </div>
        </div>

        <!-- Functions of each product -->
        <div class="icons disFlex">
            <button class="iconbtn iconbtnmin" @click="minus" @mousedown="Speedminus(1000)" @mouseup="doneSpeedminus">
                <img src="@/assets/photoes/minus.png" height="1.5px" width="12px" class="icon iconMinus">
            </button>
            <input type="text" :value="counter" readonly>
            <button class="iconbtn iconbtnadd" @click="plus" @mousedown="SpeedPlus(1000)" @mouseup="doneSpeedPlus">
                <img src="@/assets/photoes/plus.png" class="icon">
            </button>
            <button class="iconbtn iconbtnrub" @click="dltFunc">
                <img src="@/assets/photoes/rubbish basket.png" class="icon">
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

export default {
    props: {
        "ProductName" :{
            type : String,
            required : true
        },
        "ProductPrice" :{
            type :  String,
           required : true
        },
        "PrimaryPrice" :{
            type : String,
            required : true
        },
        "ProductImg" :{
            type : null,
            default: 'https://s16.picofile.com/file/8429278542/image_1.png',
            required :true
        },
        "counter" :{
           type :  Number,
           required : true
        },
        "stock": {
            type : Number,
            required : true,
        },
        "ProductId":{
            type :  Number,
           required : true
        },      
        "VendorId":{
            type :  Number,
           required : true
        },  
        "ProNum":{
            type :  Number,
           required : true
        }
    },
    data(){
        return{
            // variable for speed plus and speed minus
            PlusOutput : 0,
            MinusOutput : 0
        }
    },

    methods: {
        // plus function when user clicks on + to increase counter
        plus() {
            // increse counter of product
            if(this.stock > this.counter){
                this.$store.state.array[this.VendorId].product[this.ProductId].counter += 1
                
                // increse vendor price
                this.$store.state.array[this.VendorId].vendor.vendorPrice += +this.ProductPrice;
            }
        },

        // minus function when user clicks on - to decrease counter
        minus() {
            let counter = this.counter
            if( counter > 1 ){
                // decrease counter of product
                this.$store.state.array[this.VendorId].product[this.ProductId].counter -= 1

                // decrease vendor price
                this.$store.state.array[this.VendorId].vendor.vendorPrice -= +this.ProductPrice;
            }
        },

        // speed plus
        SpeedPlus(duration){
            this.PlusOutput = 
            setTimeout(() => {
                this.plus()
                this.SpeedPlus(duration - 100);
            }, duration);
        },

        doneSpeedPlus(){
            clearTimeout(this.PlusOutput);
        },

        // speed minus
        Speedminus(duration){
            this.MinusOutput =
            setTimeout(() => {
                this.minus()
                this.Speedminus(duration - 100)
            }, duration);
        },

        doneSpeedminus(){
            clearTimeout(this.MinusOutput);
        },
        
        // delete dunction 
        dltFunc(){
            // to change the number of vendors while all products of one vendor are deleted 
            this.$store.dispatch('dlt', this.ProNum) 

            // delete product in parent file "index.js"
            this.$emit('dlt-event')

            // reduce vendor price while deleting a product
            this.$store.state.array[this.VendorId].vendor.vendorPrice -= this.ProductPrice * this.counter;
        },
    }  
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
    margin-right: 130px; 
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