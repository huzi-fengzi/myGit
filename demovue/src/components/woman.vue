<template>
	<!--38妇女节-->
	<div class="woman">
		<img src="@/assets/images/38_NR.gif" class="WM_NR" v-show="fal4"/>
		<img src="@/assets/images/38_RW.gif" class="WM_RW" v-show="fal4" @click="womanClick"/>
		<img src="@/assets/images/38_RW2.gif" class="WM_RW2" v-show="fal2"/>
		<img src="@/assets/images/38_BZ.gif" class='WM_BZ' v-if="fal3"/>
		<router-link to="/" tag="div" class="idx_btn">
			<img src="@/assets/images/idx_btn.png"  @click="woman"  v-show="fal4"/>
		</router-link>
		<img src="@/assets/images/WM_TS.png" class="WM_TS" v-show="fal4"/>
		<div class="zhao_wm"  v-show="fal" @click="zhao_click">
			<img src="@/assets/images/zhao_girl_wz.png" class="zhao_wm_wz"/>
			<img src="@/assets/images/zhao_girl_rw.gif" class="zhao_wm_rw"/>
		</div>		
		<router-view></router-view>
	</div>
	
	
</template>
<script>
	export default{
		data(){
			return {
				name:'Woman',
				count:1,
				fal:false,
				fal2:false,
				fal3:false,
				fal4:true,
				
			}
		},
		methods:{
			womanClick(){
				// console.log(this.$store.state.cname2)
				if(this.count>2){
					this.fal2=true
					var _this=this
					setTimeout(function(){
						// console.log(_this.$store.state.cname2)				
						_this.fal2=false
						_this.fal3=true
						_this.fal4=false
						setTimeout(function(){
							_this.count=1
							_this.fal=_this.fal2=_this.fa3=false
							_this.fal4=true
							// _this.$store.state.cname='Pageend'
							_this.$store.commit('pageend2')
							
							// console.log(_this.$store.state.cname2)
				
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
			woman(){
				this.count=1
				this.fal=this.fal2=this.fa3=false
				this.fal4=true
				this.$store.commit('woman')
			}
		}
	}
</script>
<style scoped="scoped">
	
	
</style>
	