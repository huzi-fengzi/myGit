<template>
	<div class="womanend">
		<component :is="$store.state.cname2" ></component>
	</div>
</template>

<script>
	import Woman from '@/components/woman'
	import Pageend2 from '@/components/pageend1'
	export default{
		data(){
			return{
							
			}
		},
		components:{Woman,Pageend2},
		methods:{
			
		}
	}
</script>

<style>
</style>
