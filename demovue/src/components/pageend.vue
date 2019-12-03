<template>
	<!--结束页-->
	<div class="pageend">
		<img src="@/assets/images/end_NR.gif" class="end_NR"/>
		<img src="@/assets/images/theme_LZ.gif" class="theme_LZ"/>
		<img src="@/assets/images/end_YY.png" class="end_YY"/>
		<img src="@/assets/images/end_RW.gif" class="end_RW"/>
		<img src="@/assets/images/theme_HH.gif" class="end_HH"/>
		<img src="@/assets/images/end_ZHD.png" class="end_ZHD" @click="ZHD" />
		<img src="@/assets/images/end_DZ.png" class="end_DZ" @click="DZ"/>
		<router-link to="/" tag="div" class="idx_btn" >
			<img src="@/assets/images/idx_btn.png" @click="girl"/>
		</router-link>
		<p class="end_Pj">蓬景数字专注人群标签私有化数据服务</p>
		<p class="end_Pj2">图画均为原创作品  版权归蓬景数字所有</p>
		<div class="zhao_end" v-show="fal3">
			<img src="@/assets/images/zhao_end_dz.png" class="zhao_end_dz"  v-show="fal1"/>
			<img src="@/assets/images/zhao_end_X.png" class="zhao_end_X" v-show="fal1" @click="X"/>
			<img src="@/assets/images/zhao_end_shzh.gif" class="zhao_end_shzh" v-show="fal2" @click="X"/>
			<img src="@/assets/images/zhao_end_NR.png" class="zhao_end_NR" v-show="fal2"/>
		</div>
		<router-view></router-view>
	</div>		
</template>
<script>
	export default{			
		data(){
			return {
				fal1:false,
				fal2:false,
				fal3:false
			}
		},
		methods:{
			girl(){
				this.$store.commit('girl')
			},
			ZHD(){
				this.fal1=true
				this.fal3=true								
			},
			DZ(){
				this.fal2=true
				this.fal3=true								
			},
			X(){
				this.fal1=this.fal2=this.fal3=false
			}
			
		}
		
	}
</script>
<style scoped="scoped">
	
	
</style>
	