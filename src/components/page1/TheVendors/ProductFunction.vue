<template>
    <div>
        <!--icons-->
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
</template>

<script>
export default {
    data(){
        return{
            counter : 1,
            output : String,
            outputM : String,
            image :{
                plus : require('@/assets/photoes/plus.png'),
                minus : require('@/assets/photoes/minus.png'),
                rubbish : require('@/assets/photoes/rubbish basket.png'),
            },
        }
    },

    methods: {
        plus() {
            this.counter += 1;
            this.$store.state.totalcounter ++ ;
        },
        minus() {
            if( this.counter > 1 ){
                this.counter -= 1 ;
                this.$store.state.totalcounter -- ;
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
            this.$emit('dlt-event')
        },
    }
}
</script>

<style scoped>
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