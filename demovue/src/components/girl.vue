<template>
	<!--37女生节-->
	<div class="girl" >
		<img src="@/assets/images/37_NR.gif" class="SQ_NR" v-show="fal4"/>
		<img src="@/assets/images/37_RW.gif" class="SQ_RW" v-show="fal4" @click="girlClick"/> 
		<img src="@/assets/images/37_RW2.gif" class="SQ_RW2" v-show="fal2"/>
		<img src="@/assets/images/37_BZ.gif" class="SQ_BZ" v-if="fal3"/> 
		<img src="@/assets/images/girl_TS.png" v-show="fal4" class="SQ_TS"/>
		<router-link to="/" tag="div" class="idx_btn" >
			<img src="@/assets/images/idx_btn.png" @click="girl" v-show="fal4" />
		</router-link>		 	
		<div class="zhao_girl" v-show="fal" @click="zhao_click">				 	
			<img src="@/assets/images/zhao_girl_wz.png" class="zhao_girl_wz"/>
			<img src="@/assets/images/zhao_girl_rw.gif" class="zhao_girl_rw"/>		 			 	
		</div>
		<router-view></router-view>
	</div>
	
	
</template>
<script>
	// import Pageend from '@/components/pageend'
	// import Girlend from '@/components/girlend'
	export default{			
		data(){
			return {
				name:'Girl',
				count:1,
				fal:false,
				fal2:false,
				fal3:false,
				fal4:true,				
			}
		},
		methods:{
			girlClick(){
				console.log(this.$store.state.cname)
				if(this.count>2){
					this.fal2=true
					var _this=this
					setTimeout(function(){
						console.log(_this.$store.state.cname)

						_this.fal2=false
						_this.fal3=true
						_this.fal4=false
						setTimeout(function(){
							_this.count=1
							_this.fal=_this.fal2=_this.fa3=false
							_this.fal4=true
							// _this.$store.state.cname='Pageend'
							_this.$store.commit('pageend')
							console.log(_this.count+":::::"+_this.fa3)
							console.log(_this.$store.state.cname)

						},1200)	
					},1000)
				}else{
					this.fal=true
					this.count++
					console.log(this.count)
				}								
			},
			zhao_click(){
				this.fal=false
			},
			girl(){
				this.count=1
				this.fal=this.fal2=this.fa3=false
				this.fal4=true
				this.$store.commit('girl')
				
			}
		}
		
	}
</script>
<style scoped="scoped">
	
	
</style>
	