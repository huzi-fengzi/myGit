<template>
  <div class="theme">
		<img src="@/assets/images/theme_NR.gif" class="theme_NR"/>
		<img src="@/assets/images/theme_LZ.gif" class="theme_LZ"/>
		<img src="@/assets/images/theme_YY.png" class="theme_YY"/>
		<img src="@/assets/images/theme_RW.gif" class="theme_RW"/>
		<img src="@/assets/images/theme_HH.gif" class="theme_HH"/>
		<router-link to="/girlend" class="btn_37" tag="div" >
			<img src="@/assets/images/btn_37.png"/>
		</router-link>
		<router-link  to="/womanend" class="btn_38" tag="div" >
			<img src="@/assets/images/btn_38.png"/>
		</router-link>
		<router-view></router-view>
	</div> 
</template>

<script>
	export default{			
			data(){
				return {
					
				}
			},
			methods:{
				girl(){
					this.$store.commit('girl')
				},
				woman(){
					this.$store.commit('woman')

				}
			}
			
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
